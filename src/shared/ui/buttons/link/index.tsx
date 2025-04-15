"use client"

import React from "react"
import { ILinkButtonProps } from "./props"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import classNames from "classnames"
import Link from "next/link"

export const LinkLikeButton: React.FC<ILinkButtonProps> = ({
  children,
  href,
  className,
  color,
  modifier,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={classNames(
        css.button,
        className,
        modifier && css[`button_${modifier}`],
        color && css[`_${color}`],
      )}
      aria-label={`${children} link`}
      {...props}
    >
      {children}
      <Icon
        name="button_arrow"
        className={css.button_arrow}
      />
    </Link>
  )
}
