"use client"

import { Button, ButtonIcon, Input } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"
import { CustomCheckbox } from "@/shared/ui/custom-checkbox"
import { Icon } from "@/shared/ui/icons"

export const PopupPayment: React.FC = () => {
  return (
    <div className={classNames(css.popup_payment, "blured")}>
      <ButtonIcon className={css.close_popup}></ButtonIcon>
      <div className={css.popup_content}>
        <h4 className={css.popup_title}>$14.99</h4>
        <div className={css.form_wrap}>
          <div className={css.inputs_wrap}>
            <Input
              type="text"
              label="Card Number"
              className={css.popup_input}
            />
            <div className={css.inputs_body}>
              <Input
                type="text"
                label="mm/yy"
              />{" "}
              <Input
                type="text"
                label="CVC"
              />
            </div>
            <Input
              type="text"
              label="Name on card"
              className={css.popup_input}
            />
          </div>
          <div className={css.checkboxes_wrap}>
            <CustomCheckbox
              label="Remember this bank card"
              className={css.popup_checkbox}
            />
            <CustomCheckbox
              label="I agree to the privacy policy"
              className={css.popup_checkbox}
            />
          </div>
          <div className={css.buttons_wrap}>
            <Button
              modifier="primary"
              className={css.popup_btn}
            >
              Pay 14.99$
            </Button>
            <span>or</span>
            <Button
              modifier="secondary"
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
        </div>
      </div>
    </div>
  )
}
