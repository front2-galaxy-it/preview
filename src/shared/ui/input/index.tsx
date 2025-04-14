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
  const [value, setValue] = useState("")
  const [isNeedToClean, setIsNeedToClean] = useState(false)

  useEffect(() => {
    if (isNeedToClean) {
      setValue("")
      setIsNeedToClean(false)
    }
  }, [isNeedToClean])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (props.onChange) props.onChange(e)
  }

  return (
    <div
      className={classNames(
        css.input_wrap,
        {
          [css.error]: error,
          [css.invalid]: invalid,
          [css.filled]: value.length > 0,
        },
        className,
        color && css[`_${color}`],
      )}
    >
      <input
        value={value}
        onChange={handleChange}
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
