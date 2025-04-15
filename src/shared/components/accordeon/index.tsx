import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react"
import css from "./styles.module.scss"
import { Icon } from "@/shared/ui/icons"
import { IFaqAccordions } from "@/shared/types/faq-accordion"
import classNames from "classnames"

interface IAccordionsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  accordeons: IFaqAccordions[]
}

export const Accordions: React.FC<IAccordionsProps> = ({ accordeons }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index))
  }
  return (
    <div className={css.accordion_wrap}>
      {accordeons &&
        accordeons.map((accordeon: IFaqAccordions, index: number) => (
          <div
            className={classNames(css.accordion, {
              [css.open]: activeIndex === index,
            })}
            key={index}
          >
            <button
              className={css.accordion_trigger}
              onClick={() => toggleAccordion(index)}
            >
              <span className={css.accordion_name}>{accordeon.name}</span>
              <Icon
                className={css.accordion_icon}
                name="plus_icon"
              />
            </button>
            <div className={css.accordion_content}>
              <div className={css.accordion_content_inner}>
                <p>{accordeon.text}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
