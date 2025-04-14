import { unstable_setRequestLocale } from "next-intl/server"
import { IHomePageProps } from "./props"
import { IBreadCrumbsItem } from "@/shared/types/layout.interface"
import { TermsSection } from "@/widgets/terms-section"
import { Breadcrumbs } from "@/widgets/breadcrumbs"

export function TermsPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const breadcrumbsItems: IBreadCrumbsItem[] = [
    {
      type: "parent",
      slug: "Terms of use",
      title: "Terms of use",
    },
  ]
  return (
    <>
      <Breadcrumbs arr={breadcrumbsItems} />
      <TermsSection />
    </>
  )
}
