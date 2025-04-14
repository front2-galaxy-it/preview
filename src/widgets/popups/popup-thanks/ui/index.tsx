"use client"

import { ButtonIcon } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"

export const PopupThanks: React.FC = () => {
  return (
    <div className={classNames(css.popup_thanks, "blured")}>
      <ButtonIcon className={css.close_popup}></ButtonIcon>
      <div className={css.popup_content}>
        <h4 className={classNames(css.popup_title, "orange_secondary_text")}>
          Congratulations on choosing the <span>premium plan</span>
        </h4>
        <p className={css.popup_text}>Thank you for registering.</p>
      </div>
    </div>
  )
}
