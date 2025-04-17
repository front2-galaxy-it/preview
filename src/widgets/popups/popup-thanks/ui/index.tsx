"use client"

import { ButtonIcon } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"
import { usePopup } from "@/shared/hooks/PopupHooks"
import React, { useEffect } from "react"
import { PopupProps } from "@/shared/types/popupProps"

export const PopupThanks: React.FC<PopupProps> = ({ onClose }) => {
  const { currentPopup } = usePopup()
  const isOpen = currentPopup === "thanks"

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
    <div
      className={classNames(css.popup_thanks, "blured", {
        [css.visible]: isOpen,
        [css.hidden]: !isOpen,
      })}
    >
      <ButtonIcon
        className={css.close_popup}
        onClick={onClose}
      ></ButtonIcon>
      <div className={css.popup_content}>
        <h4 className={classNames(css.popup_title, "orange_secondary_text")}>
          Congratulations on choosing the <span>premium plan</span>
        </h4>
        <p className={css.popup_text}>Thank you for registering.</p>
      </div>
    </div>
  )
}
