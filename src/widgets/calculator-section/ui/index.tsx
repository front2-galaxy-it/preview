"use client"

import css from "./styles.module.scss"
import cn from "classnames"
import Image from "next/image"
import { CalculateLbs } from "@/widgets/modules/calculator"

export const CalculatorSection: React.FC = () => {
  return (
    <section
      id="strength_calculator"
      className={css.calculator_section}
    >
      <Image
        className={css.bg_image}
        src={"/images/section_screen.png"}
        width={600}
        height={400}
        alt="hero_screen"
      />
      <div className="container">
        <div className={css.content}>
          <h2 className={cn(css.title, "orange_text")}>
            <span>Strength</span> Calculator
          </h2>
          <CalculateLbs color="white" />
        </div>
      </div>
    </section>
  )
}
