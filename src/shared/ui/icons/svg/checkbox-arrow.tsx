import React from "react"
import { ISVGProps } from "../props"

export const CheckboxArrow: React.FC<ISVGProps> = ({ className, ...props }) => (
  <svg
    className={className}
    width="11"
    height="8"
    viewBox="0 0 11 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 4.33333L3.76923 7L10 1"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
