"use client"

import classNames from "classnames"
import css from "./styles.module.scss"
import { Button } from "@/shared/ui"

interface ITarrifCard {
  isPremium?: boolean
  icon_href: string
  card_title: string
  card_currency: string
  card_price: string
  card_rate: string
  services_list: {
    label: string
    available: boolean
  }[]
  card_btn: string
}

interface CardProps {
  className?: string
  data: ITarrifCard
}

export const TarrifCard: React.FC<CardProps> = ({ className, data }) => {
  return (
    <div className={classNames(css.tarrif_card, className, data.isPremium && css.premium_card)}>
      <div className={css.icon}>
        <img
          src={data.icon_href}
          alt="check icon"
        />
      </div>
      <h5 className={css.card_title}>{data.card_title}</h5>
      <h3 className={css.price}>
        <span data-currency={data.card_currency}>{data.card_currency}</span>
        <span data-price={data.card_price}>{data.card_price}</span>
        <span>/</span>
        <span data-rate={data.card_rate}>{data.card_rate}</span>
      </h3>
      <ul className={css.services_list}>
        {data.services_list.map((service, index) => (
          <li
            key={index}
            className={classNames(
              css.list_item,
              service.available ? css.available_service : css.unavailable_service,
            )}
          >
            {service.label}
          </li>
        ))}
      </ul>
      <Button
        modifier="primary"
        className={css.card_btn}
      >
        {data.card_btn}
      </Button>
    </div>
  )
}
