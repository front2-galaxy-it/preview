"use client"

import { Button } from "@/shared/ui"
import css from "./styles.module.scss"
import classNames from "classnames"

export const AboutUsSection: React.FC = () => {
  return (
    <section className={css.about_us_section}>
      <div className="container">
        <div className={css.content}>
          <h2 className={classNames(css.title, "orange_text")}>
            <span>About</span> US
          </h2>
          <p className={css.text}>
            We are an innovative platform that allows users to assess their strength in real time
            and compare their results with others on a global and regional leaderboard. Our goal is
            to provide a seamless and engaging experience for all users who want to improve their
            performance and track their progress.
          </p>
          <p className={css.text}>
            On our website, you can easily create an account, manage your profile, track your
            results, and compete with others. With the global and regional leaderboards, you’ll
            always know where you stand in comparison to others. Every user has the ability to
            customize their profile, save their performance history, and compare progress at various
            levels.
          </p>
          <p className={css.text}>
            Join us and become a part of our community where everyone can showcase their strength
            and reach new heights!
          </p>
          <p className={css.text}>
            With cutting-edge technology, we offer a comprehensive solution to monitor and enhance
            your fitness journey, no matter your level of expertise. Whether you are a beginner
            aiming to get stronger or an advanced athlete striving to break records, our platform is
            designed to support your goals.
          </p>
          <p className={css.text}>
            We understand that each user has unique needs, which is why we offer a variety of
            flexible subscription plans. Choose the plan that best fits your goals and budget, and
            enjoy full access to all features. Our different pricing tiers ensure that everyone,
            from casual fitness enthusiasts to serious competitors, can find the right fit.
          </p>
          <p className={css.text}>
            Choose your plan and register today to start tracking your strength and see how you
            measure up against others. Join our community of like-minded individuals, stay
            motivated, and unlock your full potential.
          </p>
          <Button
            modifier="primary"
            className={css.about_btn}
          >
            Register
          </Button>
        </div>
      </div>
    </section>
  )
}
