import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
  error?: string
  disabled?: boolean
  invalid?: boolean
  color?: string
  isNeedToClean?: boolean
}
