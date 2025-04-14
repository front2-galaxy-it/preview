"use client"

import classNames from "classnames"
import css from "./styles.module.scss"
import { TarrifCard } from "@/widgets/modules/tarrif-card"
import cardData from "@/shared/data/card.json"
interface ITierProps {
  text?: boolean
}

export const TiersSection: React.FC<ITierProps> = ({ text }) => {
  return (
    <section className={css.tiers_section}>
      <div className="container">
        <h2 className={classNames(css.title, "orange_text")}>
          Premium <span>Tiers</span>
        </h2>
        {text && <p className={css.text}>Choose a premium plan to get more options</p>}
        <div className={css.content}>
          {cardData.card.map((item, idx) => (
            <TarrifCard
              key={idx}
              data={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
