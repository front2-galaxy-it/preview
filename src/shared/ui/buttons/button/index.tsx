"use client"

import React from "react"
import { IButtonProps } from "./props"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"

export const Button: React.FC<IButtonProps> = ({
  children,
  type,
  className,
  color,
  modifier,
  ...props
}) => {
  return (
    <button
      className={classNames(
        css.button,
        className,
        modifier && css[`button_${modifier}`],
        color && css[`_${color}`],
      )}
      type={type ?? "button"}
      aria-label={`${children} button`}
      {...props}
    >
      {children}
      <Icon
        name="button_arrow"
        className={css.button_arrow}
      />
    </button>
  )
}
