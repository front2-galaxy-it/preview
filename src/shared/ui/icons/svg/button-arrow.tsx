import React from "react"
import { ISVGProps } from "../props"

export const ButtonArrow: React.FC<ISVGProps> = ({ className, ...props }) => (
  <svg
    className={className}
    width="36"
    height="36"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 27L25 19M25 19L17 11M25 19H1M4.0311 29C7.26014 33.824 12.7592 37 19 37C28.9412 37 37 28.9412 37 19C37 9.05888 28.9412 1 19 1C12.7592 1 7.26014 4.17606 4.0311 9"
      stroke="currentcolor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
