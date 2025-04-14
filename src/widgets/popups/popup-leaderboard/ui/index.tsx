"use client"

import { Button, ButtonIcon } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"

export const PopupLeaderboard: React.FC = () => {
  return (
    <div className={classNames(css.popup_leaderboard, "blured")}>
      <ButtonIcon className={css.close_popup}></ButtonIcon>
      <div className={css.popup_content}>
        <h4 className={css.popup_title}>Unfortunately, you cannot view the Leaderboard</h4>
        <p className={css.popup_text}>
          Register and choose one of the premium plans to get more features.
        </p>
        <Button
          modifier="primary"
          className={css.popup_btn}
        >
          Register
        </Button>
      </div>
    </div>
  )
}
