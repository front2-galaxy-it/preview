"use client"

import { Button, Input } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"
import { CustomCheckbox } from "@/shared/ui/custom-checkbox"
import { useForm, Controller } from "react-hook-form"

interface ISignInProps {
  className?: string
  color?: string
  onSignInClick?: () => void
}

type FormData = {
  login: string
  password: string
  privacyPolicy: boolean
  signedIn?: boolean
}

export const SignUpModule: React.FC<ISignInProps> = ({ className, color, onSignInClick }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      privacyPolicy: false,
      signedIn: false,
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("SignUp submitted with:", data)
  }

  return (
    <div className={classNames(css.sign_in_content, className, color && css[`_${color}`])}>
      <h4 className={css.title}>Sign up</h4>
      <form
        className={css.form_wrap}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={css.inputs_wrap}>
          <Controller
            name="login"
            control={control}
            defaultValue=""
            rules={{
              required: "Required field",
              validate: (value: string) => {
                const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                const isUsername = /^[a-zA-Z0-9_]{3,}$/.test(value)

                if (isEmail || isUsername) return true

                return "Enter a valid username or email"
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                label="Username or E-mail"
                className={css.input}
                color={color}
                error={errors.login}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Required field",
              minLength: { value: 3, message: "At least 3 characters" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                label="Password"
                className={css.input}
                color={color}
                error={errors.password}
              />
            )}
          />
        </div>
        <div className={css.checkboxes_wrap}>
          <Controller
            name="privacyPolicy"
            control={control}
            render={({ field }) => (
              <CustomCheckbox
                {...field}
                label="I agree to the privacy policy"
                className={css.checkbox}
                color={color}
              />
            )}
          />
          <Controller
            name="signedIn"
            control={control}
            render={({ field }) => (
              <CustomCheckbox
                {...field}
                label="Keep me signed in"
                className={css.checkbox}
                color={color}
              />
            )}
          />
        </div>
        <div className={css.buttons_wrap}>
          <Button
            color={color}
            modifier="secondary"
            className={css.sign_in_btn}
            onClick={onSignInClick}
          >
            Sign in
          </Button>
          <Button
            modifier="primary"
            className={css.sign_in_btn}
            type="submit"
          >
            Sign up
          </Button>
        </div>
      </form>
      <a
        href="#"
        className={css.forgot}
      >
        Forgot your password?
      </a>
    </div>
  )
}
