import React, { useState } from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Icon } from "../icons"

interface CustomCheckboxProps {
  label: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
  color?: string
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked = false,
  onChange,
  className,
  color,
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleChange = () => {
    const newCheckedState = !isChecked
    setIsChecked(newCheckedState)
    if (onChange) {
      onChange(newCheckedState)
    }
  }

  return (
    <label className={classNames(css.checkbox_container, className, color && css[`_${color}`])}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={css.checkbox_input}
      />
      <span className={classNames(css.checkbox_custom, { [css.checked]: isChecked })}>
        <Icon
          name="checkbox_arrow"
          className={css.checkbox_arrow}
        />
      </span>
      <span className={css.checkbox_label}>{label}</span>
    </label>
  )
}
