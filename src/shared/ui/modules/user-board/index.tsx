import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { UserAccount } from "../user-account"
import { UserBoardProps } from "./props"

export const UserBoard: React.FC<UserBoardProps> = ({
  modifier,
  className,
  number,
  colorClass,
  isLogin = true,
  animalName,
  trophyIconType = "top",
  animalIconType = "cat",
  animalIcon = "/images/animals_icon/animal-cat.svg",
}) => {
  return (
    <div
      className={classNames(
        css.board_item,
        className,
        colorClass,
        modifier && css[`board_item_${modifier}`],
      )}
    >
      <UserAccount
        isLogin={isLogin}
        className={classNames(css.not_login_user_account, colorClass)}
        number={number}
        trophyIconType={trophyIconType}
        animalName={animalName}
        animalIconType={animalIconType}
        animalIcon={animalIcon}
      />
      {isLogin && (
        <div className={css.item_info}>
          <div className={css.exercises_wrap}>
            <div className={css.exercise}>
              <span className={css.exercise_name}>Bench press</span>
              <div className={css.exercise_weight}>
                <span className={css.weight_number}>50</span>
                <span className={css.weight_value}>lb</span>
              </div>
            </div>
            <div className={css.exercise}>
              <span className={css.exercise_name}>Squat</span>
              <div className={css.exercise_weight}>
                <span className={css.weight_number}>50</span>
                <span className={css.weight_value}>lb</span>
              </div>
            </div>
            <div className={css.exercise}>
              <span className={css.exercise_name}>Deadlift</span>
              <div className={css.exercise_weight}>
                <span className={css.weight_number}>50</span>
                <span className={css.weight_value}>lb</span>
              </div>
            </div>
          </div>
          <div className={css.total_weigth_wrap}>
            <div className={css.total_weigth}>
              <span className={css.total_weigth_number}>150</span>
              <span className={css.total_weigth_value}>lb</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
