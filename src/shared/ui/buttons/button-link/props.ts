import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  renderIcon?: boolean
}
