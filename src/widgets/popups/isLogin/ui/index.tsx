"use client"

import classNames from "classnames"
import css from "./styles.module.scss"
import React from "react"
import { useAuth } from "@/shared/lib/context/AuthContext"

export const IsLogin: React.FC = () => {
  const { isLoggedIn, logIn, logOut } = useAuth()

  return (
    <div className={classNames(css.isLogin, "blured")}>
      <p>Status: {isLoggedIn ? "✅ Logged In" : "❌ Logged Out"}</p>
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}
