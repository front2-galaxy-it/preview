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

export const Layout: React.FC<ILayoutProps> = ({ children, locale }) => {
  return (
    <ServerProviders locale={locale}>
      <AuthProvider>
        <PopupProvider>
          <div className={css.wrapper}>
            <Header />
            <main className={cn(css.content, "pt-header-offset")}>{children}</main>
            <Footer />
            <PopupController />
          </div>
        </PopupProvider>
      </AuthProvider>
    </ServerProviders>
  )
}
