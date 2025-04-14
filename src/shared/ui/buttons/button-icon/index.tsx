"use client"

import React from "react"
import { IButtonProps } from "./props"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"

export const ButtonIcon: React.FC<IButtonProps> = ({ type, className, ...props }) => {
  return (
    <button
      className={classNames(css.button_icon, className)}
      type={type ?? "button"}
      {...props}
    >
      <Icon
        name="big_cross"
        className={css.big_cross}
      />
    </button>
  )
}
