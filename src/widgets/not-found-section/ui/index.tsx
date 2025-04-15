"use client"
import css from "./styles.module.scss"
// import classNames from "classnames"
import Image from "next/image"
import { LinkLikeButton } from "@/shared/ui/buttons"

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
        <Image
          className={css.not_found_img}
          src="/images/svg/404.svg"
          width={505}
          height={181}
          alt="404"
        />
        <p className={css.text}>
          <span>Oops...</span> Page not found!
        </p>
        <LinkLikeButton
          href="/"
          modifier="primary"
          className={css.not_found_btn}
        >
          Back home
        </LinkLikeButton>
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
