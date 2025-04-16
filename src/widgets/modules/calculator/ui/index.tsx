"use client"

import classNames from "classnames"
import css from "./styles.module.scss"
import { Input, Button } from "@/shared/ui"
import Image from "next/image"
import { useForm, Controller } from "react-hook-form"

interface CalculateLbsProps {
  className?: string
  color?: string
}

type FormData = {
  benchPress: string
  squat: string
  deadlift: string
}

export const CalculateLbs: React.FC<CalculateLbsProps> = ({ className, color }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log("Form submitted with:", data)
  }
  return (
    <div className={classNames(css.board, className, "blured", color && css[`_${color}`])}>
      <div className={css.board_content}>
        <h4 className={css.board_title}>Enter your achievements</h4>
        <p className={css.board_text}>
          And you will know your position on the Leaderboard in real time
        </p>
        <form
          className={css.form_calc}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="benchPress"
            control={control}
            defaultValue=""
            rules={{
              required: "Required field",
              min: { value: 0, message: "Must be positive" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Bench press, lb"
                type="number"
                color={color}
                error={errors.benchPress}
              />
            )}
          />
          <Controller
            name="squat"
            control={control}
            defaultValue=""
            rules={{
              required: "Required field",
              min: { value: 0, message: "Must be positive" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Squat"
                type="number"
                color={color}
                error={errors.squat}
              />
            )}
          />
          <Controller
            name="deadlift"
            control={control}
            defaultValue=""
            rules={{
              required: "Required field",
              min: { value: 0, message: "Must be positive" },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Deadlift, lb"
                type="number"
                color={color}
                error={errors.deadlift}
              />
            )}
          />
          <Button
            modifier="primary"
            className={css.calc_btn}
            type="submit"
          >
            Calculate
          </Button>
        </form>
      </div>
      <div className={css.board_loader}>
        <div className={css.loader}>
          <Image
            className={css.outer_loader}
            src="/images/svg/loader.svg"
            alt="loader"
            width={200}
            height={200}
          />
          <div className={css.changed_img}>
            <div className={css.innner_loader}>
              <Image
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
