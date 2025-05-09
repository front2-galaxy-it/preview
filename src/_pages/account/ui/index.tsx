import { unstable_setRequestLocale } from "next-intl/server"
import { IHomePageProps } from "./props"
import { Breadcrumbs } from "@/widgets/breadcrumbs"
import { IBreadCrumbsItem } from "@/shared/types/layout.interface"
import { AcountSection } from "@/widgets/account-section"
import { AuthorizationSection } from "@/widgets/authorization-section"

export function AccountPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const breadcrumbsItems: IBreadCrumbsItem[] = [
    {
      type: "parent",
      slug: "/user-account",
      title: "User account",
    },
    {
      type: "parent",
      slug: "/sign-in",
      title: "Sign in",
    },
  ]

  return (
    <>
      <Breadcrumbs arr={breadcrumbsItems} />
      <AuthorizationSection />
      <AcountSection />
    </>
  )
}
