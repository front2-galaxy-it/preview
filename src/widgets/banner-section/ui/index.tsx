"use client"

import { Button } from "@/shared/ui"
import css from "./styles.module.scss"
import Image from "next/image"

export const BannerSection: React.FC = () => {
  return (
    <section className={css.banner_section}>
      <div className="container">
        <div className={css.content}>
          <Image
            className={css.banner_bg}
            src="/images/section_screen-2.png"
            width={1600}
            height={220}
            alt="image not found"
          />
          <h2 className={css.banner_title}>Get a premium plan now</h2>
          <Button
            modifier="primary"
            className={css.banner_btn}
          >
            Register
          </Button>
        </div>
      </div>
    </section>
  )
}
