"use client"

import classNames from "classnames"
import css from "./styles.module.scss"
import { UserBoard } from "@/shared/ui"

interface LeaderBoardProps {
  className?: string
  color?: string
  boardTitle?: string
}

export const LeaderBoard: React.FC<LeaderBoardProps> = ({ className, color, boardTitle }) => {
  return (
    <div className={classNames(css.leaderboard_block, className, color && css[`${color}`])}>
      <h5 className={css.leaderboard_block_title}>{boardTitle}</h5>
      <div className={css.leaderboard_block_item_wrap}>
        <UserBoard
          animalName="Coyote"
          colorClass={color}
          number="01"
        />
        <UserBoard
          colorClass={color}
          number="02"
          animalName="Bull"
          animalIconType="bull"
        />
        <UserBoard
          colorClass={color}
          number="03"
          animalName="Lion"
          animalIconType="lion"
        />
      </div>
    </div>
  )
}
