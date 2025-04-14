"use client"

import classNames from "classnames"
import css from "./styles.module.scss"
import { Input, Button } from "@/shared/ui"

interface CalculateLbsProps {
  className?: string
  color?: string
}

export const CalculateLbs: React.FC<CalculateLbsProps> = ({ className, color }) => {
  return (
    <div className={classNames(css.board, className, "blured", color && css[`_${color}`])}>
      <div className={css.board_content}>
        <h4 className={css.board_title}>Enter your achievements</h4>
        <p className={css.board_text}>
          And you will know your position on the Leaderboard in real time
        </p>
        <form className={css.form_calc}>
          <Input
            label="Bench press, lb"
            type="number"
            color={color}
          ></Input>
          <Input
            label="Squat"
            type="number"
            color={color}
          ></Input>
          <Input
            label="Deadlift, lb"
            type="number"
            color={color}
          ></Input>
        </form>
        <Button
          modifier="primary"
          className={css.calc_btn}
        >
          Calculate
        </Button>
      </div>
      <div className={css.board_loader}>
        <div className={css.loader}>
          <img
            className={css.outer_loader}
            src="/images/svg/loader.svg"
            alt="loader"
            width={200}
            height={200}
          />
          <div className={css.changed_img}>
            <div className={css.innner_loader}>
              <img
                src="/images/svg/loader_arrow.svg"
                alt="loader"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <h2 className={css.sternght_number}>
          0 <span>lbs</span>
        </h2>
        <h5 className={css.loader_title}>What are you?</h5>
      </div>
    </div>
  )
}
