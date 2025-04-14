"use client"

import css from "./styles.module.scss"
import cn from "classnames"
import Image from "next/image"

export const Hero: React.FC = () => {
  return (
    <section className={css.hero}>
      <Image
        className={css.hero_image}
        src={"/images/hero_screen.png"}
        width={600}
        height={400}
        alt="hero_screen"
      />
      <div className={cn(css.hero_content, "orange_text")}>
        <h1 className={css.hero_title}>
          Strength<span>Beasts</span>
        </h1>
      </div>
    </section>
  )
}
