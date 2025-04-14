import React from "react"
import { ISVGProps } from "../props"
export const BigCross: React.FC<ISVGProps> = ({ className, ...props }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.7506 11.7504L28.2497 28.2496M11.7506 28.2496L28.2497 11.7504"
      stroke="currentcolor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
