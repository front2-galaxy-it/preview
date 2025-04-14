"use client"

import React, { useEffect, useRef, useState } from "react"
import css from "./styles.module.scss"
import { DocumentWorker } from "@/shared/lib"
import throttle from "lodash.throttle"
import { Icon } from "@/shared/ui/icons"
import { Button } from "@/shared/ui/buttons"
import classNames from "classnames"
import { NavMenu } from "@/widgets/modules/nav-menu"
import { UserAccount } from "@/shared/ui"

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const headerRef = useRef<HTMLDivElement>(null)

  useEffect((): (() => void) => {
    DocumentWorker.setCSSVar("header-height", `${headerRef.current?.offsetHeight}px`)
    const handleResize = throttle((): void => {
      DocumentWorker.setCSSVar("header-height", `${headerRef.current?.offsetHeight}px`)
    }, 100)

    window.addEventListener("resize", handleResize)

    return (): void => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={css.header}
    >
      <div className="container">
        <div className={css.header_content}>
          <a
            href="/"
            className={css.logo_link}
            title="Logo"
            aria-label="Logo"
          >
            Strength<span>Beasts</span>
          </a>
          <Button className={classNames(css.register_button, "black_bg_btn")}>Register</Button>
          <Button className={classNames(css.premium_button)}>
            <img
              src="/images/svg/crown.svg"
              width={24}
              height={24}
              className={css.crown_icon}
              alt="Crown"
            />
            Emergent Colossus
          </Button>
          <UserAccount
            isLogin={true}
            className={classNames(css.header_user_account, "_green")}
            number="01"
            animalName="Coyote"
            trophyIconType="top"
            animalIconType="cat"
          />
          <NavMenu className={`${isOpen ? css.show : ""}`} />
          <div className={css.action_buttons}>
            <a
              href="/account"
              className={css.user_button}
            >
              <Icon
                name="user_icon"
                className={css.user_icon}
                width={40}
                height={40}
              />
            </a>
            <button
              className={`${css.header_burger} ${isOpen ? css.open : ""}`}
              onClick={toggleMenu}
              aria-label="burger menu"
            >
              <div className={css.burger_dots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={css.burger_lines}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
