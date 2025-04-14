import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

export type ButtonModifier = "large" | "small" | "primary" | "secondary"

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  modifier?: ButtonModifier
  color?: string
}
