import React from "react"
import { ISVGProps } from "../props"
export const ArrowRight: React.FC<ISVGProps> = ({ className, ...props }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.77832 4L10.2222 8L5.77832 12"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
