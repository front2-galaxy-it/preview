"use client"
import React from "react"
import { InputProps } from "./props"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Icon } from "../icons"

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
      value = "",
      onChange,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={classNames(
          css.input_wrap,
          {
            [css.error]: error,
            [css.invalid]: invalid,
            [css.filled]: value?.toString().length > 0,
          },
          className,
          color && css[`_${color}`],
        )}
      >
        <input
          ref={ref}
          value={value}
          onChange={onChange}
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
  },
)

Input.displayName = "Input"
