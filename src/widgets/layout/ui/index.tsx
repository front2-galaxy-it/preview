import React from "react"
import { ServerProviders } from "@/app/providers"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import cn from "classnames"
import css from "./styles.module.scss"
import { ILayoutProps } from "./props"
import { PopupLeaderboard } from "@/widgets/popups/popup-leaderboard"
import { PopupThanks } from "@/widgets/popups/popup-thanks"
import { PopupPlan } from "@/widgets/popups/popup-plan"
import { PopupSignIn } from "@/widgets/popups/popup-signin"
import { PopupPayment } from "@/widgets/popups/popup-payment"

export const Layout: React.FC<ILayoutProps> = ({ children, locale }) => {
  return (
    <ServerProviders locale={locale}>
      <div className={css.wrapper}>
        <Header />
        <main className={cn(css.content, "pt-header-offset")}>{children}</main>
        <Footer />
        <PopupLeaderboard />
        <PopupThanks />
        <PopupPlan />
        <PopupSignIn />
        <PopupPayment />
      </div>
    </ServerProviders>
  )
}
