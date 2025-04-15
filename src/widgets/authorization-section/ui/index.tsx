"use client"

import { SignUpModule } from "@/widgets/modules/sign-up"
import { SignInModule } from "@/widgets/modules/sign-in"
import css from "./styles.module.scss"
import classNames from "classnames"
import { useState } from "react"

export const AuthorizationSection: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  const handleGoToSignUp = () => {
    if (isSignIn) setIsSignIn(false)
  }

  const handleGoToSignIn = () => {
    if (!isSignIn) setIsSignIn(true)
  }

  return (
    <section className={css.account_section}>
      <div className="container">
        <h2 className={classNames(css.title, "orange_text")}>
          <span>User</span> account
        </h2>
        <div className={css.content}>
          <div className={css.flip_container}>
            <div className={classNames(css.cube, { [css.flipped]: !isSignIn })}>
              <div className={css.front}>
                <SignInModule
                  className={css.authorization_block}
                  color="black"
                  onSignUpClick={handleGoToSignUp}
                />
              </div>
              <div className={css.back}>
                <SignUpModule
                  className={css.authorization_block}
                  color="black"
                  onSignInClick={handleGoToSignIn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
