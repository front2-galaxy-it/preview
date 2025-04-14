"use client"
import { Button } from "@/shared/ui"
import css from "./styles.module.scss"
// import classNames from "classnames"
import Image from "next/image"

export const NotFoundSection: React.FC = () => {
  return (
    <section className={css.not_found_section}>
      <Image
        className={css.not_found_bg}
        src="/images/section_screen.png"
        width={1920}
        height={1080}
        alt="image not found"
      />
      <h2 className={css.head_title}>
        Strength<span>Beasts</span>
      </h2>
      <div className={css.content}>
        <img
          className={css.not_found_img}
          src="/images/svg/404.svg"
          alt="404"
        />
        <p className={css.text}>
          <span>Oops...</span> Page not found!
        </p>
        <Button
          modifier="primary"
          className={css.not_found_btn}
        >
          Back home
        </Button>
      </div>
      <Image
        className={css.socket}
        src="/images/socket.png"
        width={1920}
        height={223}
        alt="image not found"
      />
    </section>
  )
}
