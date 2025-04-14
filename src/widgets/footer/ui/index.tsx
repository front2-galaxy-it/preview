import React from "react"
import css from "./styles.module.scss"
import Image from "next/image"
import { Button } from "@/shared/ui"

export const Footer: React.FC = () => {
  return (
    <footer className={css.footer}>
      <img
        className={css.creator_label}
        src="/images/svg/GALAXY_IT.svg"
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
          <a
            href="/"
            className={css.logo_link}
            title="Logo"
            aria-label="Logo"
          >
            Strength<span>Beasts</span>
          </a>
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
                <a
                  href="/"
                  className={css.nav_list_link}
                >
                  About
                </a>
              </li>
              <li className={css.nav_list_item}>
                <a
                  href="/premium"
                  className={css.nav_list_link}
                >
                  <img
                    src="/images/svg/crown.svg"
                    width={24}
                    height={24}
                    className={css.crown_icon}
                    alt="Cronw"
                  />
                  <span>Premium</span>
                </a>
              </li>
              <li className={css.nav_list_item}>
                <a
                  href="#leader"
                  className={css.nav_list_link}
                >
                  Leaderboard
                </a>
              </li>
              <li className={css.nav_list_item}>
                <a
                  href="/policy"
                  className={css.nav_list_link}
                >
                  Privacy Policy
                </a>
              </li>
              <li className={css.nav_list_item}>
                <a
                  href="/terms"
                  className={css.nav_list_link}
                >
                  Terms of use
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
