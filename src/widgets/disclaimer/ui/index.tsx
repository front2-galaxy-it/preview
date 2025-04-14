"use client"
import { Button } from "@/shared/ui"
import css from "./styles.module.scss"
import classNames from "classnames"

export const Disclaimer: React.FC = () => {
  return (
    <section className={css.disclaimer}>
      <div className="container">
        <div className={css.disclaimer_content}>
          <h2 className={classNames(css.disclaimer_title, "orange_text")}>
            <span>Disclaimer!</span>
          </h2>
          <p className={css.disclaimer_text}>StrengthBeasts is for entertainment purposes only. </p>
          <br />
          <p className={css.disclaimer_text}>
            The strength calculations are estimates and should not be taken as real-world measures
            of strength. Do not attempt to engage with wild animals based on these numbers. Use
            common sense and train responsibly.{" "}
          </p>
          <Button
            modifier="secondary"
            className={classNames(css.disclaimer_btn, "white_bg_btn")}
          >
            About us
          </Button>
        </div>
      </div>
    </section>
  )
}
