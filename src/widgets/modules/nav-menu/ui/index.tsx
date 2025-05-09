"use client"

import classNames from "classnames"
import css from "./styles.module.scss"
import { RootLink } from "@/shared/ui"
import Image from "next/image"
import { usePopup } from "@/shared/hooks/PopupHooks"
import { useAuth } from "@/shared/lib/context/AuthContext"
interface MenuProps {
  className?: string
}

export const NavMenu: React.FC<MenuProps> = ({ className }) => {
  const { isLoggedIn } = useAuth()

  const { openPopup } = usePopup()

  const handleOpenLeaderBoard = (e: React.MouseEvent) => {
    if (!isLoggedIn) {
      e.preventDefault()
      openPopup("leaderboard")
    }
  }
  return (
    <nav className={classNames(css.header_nav, className)}>
      <ul className={css.nav_list}>
        <li className={css.nav_list_item}>
          <RootLink
            href="/about"
            className={css.nav_list_link}
          >
            About
          </RootLink>
        </li>
        <li className={css.nav_list_item}>
          <RootLink
            href="/premium"
            className={css.nav_list_link}
          >
            <Image
              src="/images/svg/crown.svg"
              width={24}
              height={24}
              className={css.crown_icon}
              alt="Cronw"
            />
            Premium
          </RootLink>
        </li>
        <li className={css.nav_list_item}>
          <RootLink
            href="/#strength_calculator"
            className={css.nav_list_link}
          >
            Strength Calculator
          </RootLink>
        </li>
        <li className={css.nav_list_item}>
          <RootLink
            href="/#leader"
            className={css.nav_list_link}
            onClick={handleOpenLeaderBoard}
          >
            Leaderboard
          </RootLink>
        </li>
      </ul>
      <button
        type="button"
        className={css.login_button}
      >
        Log In
      </button>
    </nav>
  )
}
