"use client"

import { ButtonIcon } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"
import { SignInModule } from "@/widgets/modules/sign-in"
import { usePopup } from "@/shared/hooks/PopupHooks"
import React, { useEffect } from "react"
import { PopupProps } from "@/shared/types/popupProps"

export const PopupSignIn: React.FC<PopupProps> = ({ onClose }) => {
  const { currentPopup } = usePopup()
  const isOpen = currentPopup === "signin"

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <div className={classNames(css.popup_signin, "blured")}>
      <ButtonIcon
        className={css.close_popup}
        onClick={onClose}
      ></ButtonIcon>
      <SignInModule color="white" />
    </div>
  )
}
