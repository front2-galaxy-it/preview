"use client"
import React, { useState, useEffect } from "react"
import { InputProps } from "./props"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Icon } from "../icons"
export const Input: React.FC<InputProps> = ({
  color,
  type,
  placeholder,
  id,
  name,
  label,
  error,
  invalid,
  disabled,
  className,

  ...props
}) => {
  const [isFilled, setIsFilled] = useState<boolean>(false)
  const [isNeedToClean, setIsNeedToClean] = useState<boolean>(false)

  useEffect(() => {
    if (isNeedToClean) {
      setIsFilled(false)
    }
  }, [isNeedToClean])
  return (
    <div
      className={classNames(
        `${css.input_wrap} ${error ? css.error : ""} ${invalid ? css.invalid : ""}`,
        className,
        color && css[`_${color}`],
      )}
    >
      <input
        isNeedToClean={isNeedToClean}
        disabled={disabled}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={css.input}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className={css.label}
        >
          {label}
        </label>
      )}
      <Icon
        name="warning_icon"
        className={css.warning_icon}
      />
    </div>
  )
}
