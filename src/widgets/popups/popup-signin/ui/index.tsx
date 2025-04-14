"use client"

import { ButtonIcon } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"
import { SignInModule } from "@/widgets/modules/sign-in"

export const PopupSignIn: React.FC = () => {
  return (
    <div className={classNames(css.popup_signin, "blured")}>
      <ButtonIcon className={css.close_popup}></ButtonIcon>
      <SignInModule />
    </div>
  )
}
