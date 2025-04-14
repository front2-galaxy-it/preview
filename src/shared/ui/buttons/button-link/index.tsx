"use client"

import React from "react"
import { IButtonProps } from "./props"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"

export const ButtonLink: React.FC<IButtonProps> = ({
  type,
  children,
  className,
  renderIcon,
  ...props
}) => {
  return (
    <button
      className={classNames(css.button_link, className)}
      type={type ?? "button"}
      {...props}
    >
      {children}
      {renderIcon && (
        <Icon
          name="small_cross"
          className={css.small_cross}
        />
      )}
    </button>
  )
}
