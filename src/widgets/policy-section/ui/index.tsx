"use client"

import classNames from "classnames"
import css from "./styles.module.scss"

export const PolicySection: React.FC = () => {
  return (
    <section className={css.terms_section}>
      <div className="container">
        <h2 className={classNames(css.title, "orange_text")}>
          <span>Privacy</span> Policy
        </h2>
        <div className={css.date_wrap}>
          <span>Last Updated:</span>
          <time dateTime="2025-03-29">[29/3/2025]</time>
        </div>
        <div className={css.content}>
          <p>
            This Privacy Policy explains how <a href="#">StrengthBeasts</a> ("we," "our," or "us")
            collects, uses, and protects your personal information.
          </p>
          <h5>Information We Collect</h5>
          <b>We may collect:</b>
          <ul>
            <li>
              <b>Personal Data:</b> Name, email, phone number (if provided).
            </li>
            <li>
              <b>Usage Data:</b> IP address, browser type, pages visited.
            </li>
            <li>
              <b>Cookies & Tracking Data:</b> To improve website functionality and user experience.
            </li>
          </ul>
          <h5>How We Use Your Information</h5>
          <b>We use collected data to:</b>
          <ul>
            <li>Provide and maintain our services.</li>
            <li>Improve user experience and website functionality.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <h5>How We Share Your Information</h5>
          <b>However, we may share it with:</b>
          <ul>
            <li> Service providers assisting with analytics and website operations.</li>
            <li>Legal authorities if required by law.</li>
          </ul>
          <h5>Cookies & Tracking Technologies</h5>
          <p>
            We use cookies to enhance your browsing experience. You can manage or disable cookies
            through your browser settings.
          </p>
          <h5>Security Measures</h5>
          <p>
            We implement industry-standard security measures to protect your data. However, no
            online service is 100% secure.
          </p>
          <h5>Your Rights & Choices</h5>
          <b>Depending on your location, you may have rights to:</b>
          <ul>
            <li>Request access to or deletion of your personal data.</li>
            <li>Opt-out of certain data processing activities.</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:strengthbeasts@gmail.com">[strengthbeasts@gmail.com]</a>.
          </p>
          <h5>Changes to This Policy</h5>
          <p>
            We may update this Privacy Policy from time to time. Your continued use of our website
            constitutes acceptance of the changes.
          </p>
          <p>
            For any questions, contact us at{" "}
            <a href="mailto:strengthbeasts@gmail.com">[strengthbeasts@gmail.com]</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
