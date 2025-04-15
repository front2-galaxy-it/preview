export type ButtonModifier = "large" | "small" | "primary" | "secondary"

export interface ILinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  className?: string
  color?: string
  modifier?: string
  children: React.ReactNode
}
