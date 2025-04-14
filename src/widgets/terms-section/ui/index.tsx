"use client"

import classNames from "classnames"
import css from "./styles.module.scss"

export const TermsSection: React.FC = () => {
  return (
    <section className={css.terms_section}>
      <div className="container">
        <h2 className={classNames(css.title, "orange_text")}>
          <span>Terms</span> of use
        </h2>
        <div className={css.date_wrap}>
          <span>Last Updated:</span>
          <time dateTime="2025-03-29">[29/3/2025]</time>
        </div>
        <div className={css.content}>
          <p>
            Welcome to <a href="#">StrengthBeasts</a> ("we," "our," or "us"). By accessing or using
            our website <a href="http://strengthbeasts.com">[http://strengthbeasts.com]</a>, you
            agree to be bound by these Terms of Use. If you do not agree, please do not use our
            services.
          </p>
          <h5>Acceptance of Terms</h5>
          <p>
            By accessing or using our website, you agree to comply with these Terms of Use and any
            applicable laws and regulations.
          </p>
          <h5>User Eligibility</h5>
          <p>
            You must be at least 18 years old to use our services. By using our website, you confirm
            that you meet this age requirement.
          </p>
          <h5>Account Registration</h5>
          <ul>
            <li>You may need to create an account to access certain features.</li>
            <li>
              You are responsible for maintaining the confidentiality of your account credentials.
            </li>
            <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
          </ul>
          <h5>User Conduct</h5>
          <b>You agree not to:</b>
          <ul>
            <li>Post illegal, defamatory, or harmful content.</li>
            <li>Attempt to hack, disrupt, or interfere with our services.</li>
            <li>Use the website for fraudulent purposes.</li>
          </ul>
          <h5>Intellectual Property</h5>
          <p>
            All content on this website (text, graphics, logos, etc.) is owned by or licensed to us.
            Unauthorized use is prohibited.
          </p>
          <h5>Termination</h5>
          <p>
            We reserve the right to suspend or delete any account at our discretion if it violates
            our Terms.
          </p>
          <h5>Disclaimers & Limitation of Liability</h5>
          <ul>
            <li>Our website is provided "as is" without warranties of any kind.</li>
            <li>We are not responsible for any damages resulting from your use of the website.</li>
          </ul>
          <h5>Governing Law</h5>
          <p>
            These Terms shall be governed by and interpreted under the laws of{" "}
            <a href="#">[Israel]</a>.
          </p>
          <h5>Changes to Terms</h5>
          <p>
            We may update these Terms at any time. Continued use of the website after updates
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
