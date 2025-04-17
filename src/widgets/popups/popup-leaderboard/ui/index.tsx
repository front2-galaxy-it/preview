"use client"

import { Button, ButtonIcon } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"
import { usePopup } from "@/shared/hooks/PopupHooks"
import React, { useEffect, useState } from "react"
import { PopupProps } from "@/shared/types/popupProps"

export const PopupLeaderboard: React.FC<PopupProps> = ({ onClose }) => {
  const { currentPopup } = usePopup()
  const isOpen = currentPopup === "leaderboard"
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      document.body.style.overflow = "hidden"
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 300)
      document.body.style.overflow = ""
      return () => clearTimeout(timeout)
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!shouldRender) return null

  return (
    <div
      className={classNames(css.popup_leaderboard, "blured", {
        [css.visible]: isOpen,
        [css.hidden]: !isOpen,
      })}
    >
      <ButtonIcon
        className={css.close_popup}
        onClick={onClose}
      />
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
