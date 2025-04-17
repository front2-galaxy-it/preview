import React from "react"
import { ServerProviders } from "@/app/providers"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import cn from "classnames"
import css from "./styles.module.scss"
import { ILayoutProps } from "./props"
import { AuthProvider } from "@/shared/lib/context/AuthContext"
import { PopupProvider } from "@/shared/hooks/PopupHooks"
import { PopupController } from "@/shared/lib"
import { IsLogin } from "@/widgets/popups/isLogin"

export const Layout: React.FC<ILayoutProps> = ({ children, locale }) => {
  return (
    <AuthProvider>
      <ServerProviders locale={locale}>
        <PopupProvider>
          <div className={css.wrapper}>
            <Header />
            <main className={cn(css.content, "pt-header-offset")}>{children}</main>
            <Footer />
            <PopupController />
            <IsLogin />
          </div>
        </PopupProvider>
      </ServerProviders>
    </AuthProvider>
  )
}
