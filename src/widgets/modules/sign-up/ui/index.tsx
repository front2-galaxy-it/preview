"use client"

import { Button, Input } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"
import { CustomCheckbox } from "@/shared/ui/custom-checkbox"

interface ISignInProps {
  className?: string
  color?: string
  onSignInClick?: () => void
}

export const SignUpModule: React.FC<ISignInProps> = ({ className, color, onSignInClick }) => {
  return (
    <div className={classNames(css.sign_in_content, className, color && css[`_${color}`])}>
      <h4 className={css.title}>Sign up</h4>
      <div className={css.form_wrap}>
        <div className={css.inputs_wrap}>
          <Input
            type="text"
            label="Username or E-mail"
            className={css.input}
            color={color}
          />
          <Input
            type="password"
            label="Password"
            className={css.input}
            color={color}
          />
        </div>
        <div className={css.checkboxes_wrap}>
          <CustomCheckbox
            label="I agree to the privacy policy"
            className={css.checkbox}
            color={color}
          />
          <CustomCheckbox
            label="Keep me signed in"
            className={css.checkbox}
            color={color}
          />
        </div>
        <div className={css.buttons_wrap}>
          <Button
            modifier="primary"
            className={css.sign_in_btn}
            onClick={onSignInClick}
          >
            Sign in
          </Button>
          <Button
            color={color}
            modifier="secondary"
            className={css.sign_in_btn}
          >
            Sign up
          </Button>
        </div>
      </div>
      <a
        href="#"
        className={css.forgot}
      >
        Forgot your password?
      </a>
    </div>
  )
}
