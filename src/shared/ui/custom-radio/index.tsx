import React, { ChangeEvent } from "react"
import css from "./styles.module.scss"

interface CustomRadioProps {
  label?: string
  name?: string
  value?: string
  checked?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CustomRadio = React.forwardRef<HTMLInputElement, CustomRadioProps>(
  ({ label, name, value, checked, onChange }, ref) => {
    return (
      <div className={css.customRadio_wrap}>
        <input
          ref={ref}
          id={value}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          aria-checked={checked ? "true" : "false"}
        />
        <label
          className={css.customRadio}
          htmlFor={value}
        >
          {label}
        </label>
      </div>
    )
  },
)
