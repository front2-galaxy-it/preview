import { unstable_setRequestLocale } from "next-intl/server"
import { IHomePageProps } from "./props"
import { IBreadCrumbsItem } from "@/shared/types/layout.interface"
import { Breadcrumbs } from "@/widgets/breadcrumbs"
import { PolicySection } from "@/widgets/policy-section"

export function PolicyPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const breadcrumbsItems: IBreadCrumbsItem[] = [
    {
      type: "parent",
      slug: "Privacy Policy",
      title: "Privacy Policy",
    },
  ]
  return (
    <>
      <Breadcrumbs arr={breadcrumbsItems} />
      <PolicySection />
    </>
  )
}
