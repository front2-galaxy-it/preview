import React from "react"
import { ISVGProps } from "../props"
export const SmallCross: React.FC<ISVGProps> = ({ className, ...props }) => (
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
      d="M4.29983 4.70017L10.8995 11.2998M4.29983 11.2998L10.8995 4.70017"
      stroke="currentcolor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
