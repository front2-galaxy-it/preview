"use client"

import { Accordions } from "@/shared/components"
import css from "./styles.module.scss"
import classNames from "classnames"
import { IFaqAccordions } from "@/shared/types/faq-accordion"
import faq_accodrions from "@/shared/data/faq_accodrions.json"

export const FAQSection: React.FC = () => {
  const faqData: IFaqAccordions[] = faq_accodrions

  return (
    <section className={css.faq_section}>
      <div className="container">
        <h2 className={classNames(css.title, "orange_text")}>
          <span>Questions</span> & Answers
        </h2>
        <div className={css.content}>
          <Accordions accordeons={faqData} />
        </div>
      </div>
    </section>
  )
}
