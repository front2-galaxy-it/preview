import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Button, RootLink } from "@/shared/ui"

export const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <Image
        className={css.creator_label}
        src="/images/svg/GALAXY_IT.svg"
        width={325}
        height={96}
        alt="GALAXY IT"
      />
      <Image
        className={css.footer_bg}
        src="/images/section_screen-2.png"
        width={1920}
        height={303}
        alt="futuristic balls"
      />

      <div className="container">
        <div className={css.footer_head}>
          <RootLink
            href={"/"}
            className={css.logo_link}
          >
            Strength<span>Beasts</span>
          </RootLink>
          <Button
            modifier="secondary"
            className={css.footer_btn}
          >
            Register
          </Button>
        </div>
        <div className={css.footer_bottom}>
          <p className={css.copyright}>Copyright © 2025 StrengthBeasts</p>
          <nav className={css.footer_nav}>
            <ul className={css.nav_list}>
              <li className={css.nav_list_item}>
                <RootLink
                  href="/"
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
                  href="#leader"
                  className={css.nav_list_link}
                >
                  Leaderboard
                </RootLink>
              </li>
              <li className={css.nav_list_item}>
                <RootLink
                  href="/policy"
                  className={css.nav_list_link}
                >
                  Privacy Policy
                </RootLink>
              </li>
              <li className={css.nav_list_item}>
                <RootLink
                  href="/terms"
                  className={css.nav_list_link}
                >
                  Terms of use
                </RootLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
