"use client"

import { Button, ButtonIcon, Input } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"
import { CustomCheckbox } from "@/shared/ui/custom-checkbox"
import { Icon } from "@/shared/ui/icons"
import { useForm, Controller } from "react-hook-form"

type PopupPaymentData = {
  cardNumber: number
  expiryDate: string
  cvc: number
  nameOnCard: string
  rememberCard?: boolean
  agreePrivacy?: boolean
}

export const PopupPayment: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PopupPaymentData>()

  const onSubmit = (data: PopupPaymentData) => {
    console.log(data) // Send form data to server
  }
  return (
    <div className={classNames(css.popup_payment, "blured")}>
      <ButtonIcon className={css.close_popup}></ButtonIcon>
      <div className={css.popup_content}>
        <h4 className={css.popup_title}>$14.99</h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={css.form_wrap}
        >
          <div className={css.inputs_wrap}>
            <Controller
              name="cardNumber"
              control={control}
              rules={{
                required: "Card number is required",
                pattern: {
                  value: /^[0-9]{16}$/, // Без пробелов, 16 цифр
                  message: "Card number must be 16 digits",
                },
              }}
              render={({ field }) => {
                const formatCardNumber = (value: string) => {
                  const cleaned = value.replace(/\D/g, "").slice(0, 16)
                  const formatted = cleaned.replace(/(.{4})/g, "$1 ").trim()
                  return { cleaned, formatted }
                }

                const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                  const { cleaned } = formatCardNumber(e.target.value)
                  field.onChange(cleaned)
                }

                const valueWithSpaces = field.value
                  ? String(field.value)
                      .replace(/(.{4})/g, "$1 ")
                      .trim()
                  : ""

                return (
                  <Input
                    {...field}
                    value={valueWithSpaces}
                    onChange={handleChange}
                    type="text"
                    label="Card Number"
                    className={css.popup_input}
                    error={errors.cardNumber}
                    maxLength={19}
                    inputMode="numeric"
                    color="white"
                  />
                )
              }}
            />

            <div className={css.inputs_body}>
              <Controller
                name="expiryDate"
                control={control}
                rules={{
                  required: "Expiration date is required",
                  validate: (value) => {
                    if (!/^\d{2}\/\d{2}$/.test(value)) return "Format must be MM/YY"
                    const [month] = value.split("/").map(Number)
                    if (month < 1 || month > 12) return "Invalid month"
                    return true
                  },
                }}
                render={({ field }) => {
                  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    let value = e.target.value.replace(/\D/g, "").slice(0, 4)

                    // Ограничение на месяц (первая пара цифр)
                    if (value.length >= 1) {
                      const firstDigit = value[0]
                      if (firstDigit && +firstDigit > 1) {
                        value = "0" + firstDigit + value.slice(1)
                      }
                    }

                    if (value.length >= 3) {
                      const month = Number(value.slice(0, 2))
                      if (month > 12) {
                        value = "12" + value.slice(2)
                      }
                      value = `${value.slice(0, 2)}/${value.slice(2)}`
                    }

                    field.onChange(value)
                  }

                  return (
                    <Input
                      {...field}
                      value={field.value}
                      onChange={handleChange}
                      label="mm/yy"
                      maxLength={5}
                      inputMode="numeric"
                      error={errors.expiryDate}
                      color="white"
                    />
                  )
                }}
              />

              <Controller
                name="cvc"
                control={control}
                rules={{
                  required: "CVC is required",
                  pattern: {
                    value: /^\d{3}$/,
                    message: "CVC must be 3 or 4 digits",
                  },
                }}
                render={({ field }) => {
                  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 3)
                    field.onChange(value)
                  }

                  return (
                    <Input
                      {...field}
                      value={field.value}
                      onChange={handleChange}
                      label="CVC"
                      maxLength={4}
                      inputMode="numeric"
                      error={errors.cvc}
                      color="white"
                    />
                  )
                }}
              />
            </div>
            <Controller
              name="nameOnCard"
              control={control}
              rules={{
                required: "Name on card is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters and spaces allowed",
                },
              }}
              render={({ field }) => {
                const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value.replace(/[^A-Za-z\s]/g, "")
                  field.onChange(value)
                }

                return (
                  <Input
                    {...field}
                    value={field.value}
                    onChange={handleChange}
                    type="text"
                    label="Name on card"
                    className={css.popup_input}
                    error={errors.nameOnCard}
                    color="white"
                  />
                )
              }}
            />
          </div>
          <div className={css.checkboxes_wrap}>
            <Controller
              name="rememberCard"
              control={control}
              render={({ field }) => (
                <CustomCheckbox
                  {...field}
                  label="Remember this bank card"
                  className={css.popup_checkbox}
                  color="white"
                />
              )}
            />

            <Controller
              name="agreePrivacy"
              control={control}
              rules={{ required: "You must agree to the privacy policy" }}
              render={({ field }) => (
                <CustomCheckbox
                  {...field}
                  label="I agree to the privacy policy"
                  className={css.popup_checkbox}
                  color="white"
                />
              )}
            />
          </div>
          <div className={css.buttons_wrap}>
            <Button
              modifier="primary"
              className={css.popup_btn}
              type="submit"
            >
              Pay 14.99$
            </Button>
            <span>or</span>
            <Button
              modifier="secondary"
              color="white"
              className={classNames(css.popup_btn, "black_bg_btn")}
            >
              <div className={css.btn_with_icon}>
                <Icon
                  name="paypal_icon"
                  className={css.paypal_icon}
                />
                Pay Pal
              </div>
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
