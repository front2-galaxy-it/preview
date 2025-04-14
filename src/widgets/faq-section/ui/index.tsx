"use client"

import css from "./styles.module.scss"
import classNames from "classnames"

export const FAQSection: React.FC = () => {
  return (
    <section className={css.faq_section}>
      <div className="container">
        <h2 className={classNames(css.title, "orange_text")}>
          <span>Questions</span> & Answers
        </h2>
        <div className={css.content}>
          <details className={css.accordion}>
            <summary className={css.accordion_title}>
              <span>Question?</span>
              <div className={css.open_status}></div>
            </summary>
            <div className={css.accorion_content}>
              <p>
                This platform is a true find for anyone looking to constantly improve their skills.
                The ability to compare my results with others on both the global and regional
                leaderboards adds an extra level of motivation.
              </p>
            </div>
          </details>
          <details className={css.accordion}>
            <summary className={css.accordion_title}>
              <span>Question?</span>
              <div className={css.open_status}></div>
            </summary>
            <div className={css.accorion_content}>
              <p>
                This platform is a true find for anyone looking to constantly improve their skills.
                The ability to compare my results with others on both the global and regional
                leaderboards adds an extra level of motivation.
              </p>
            </div>
          </details>
          <details className={css.accordion}>
            <summary className={css.accordion_title}>
              <span>Question?</span>
              <div className={css.open_status}></div>
            </summary>
            <div className={css.accorion_content}>
              <p>
                This platform is a true find for anyone looking to constantly improve their skills.
                The ability to compare my results with others on both the global and regional
                leaderboards adds an extra level of motivation.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
