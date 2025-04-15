import { unstable_setRequestLocale } from "next-intl/server"
import { IHomePageProps } from "./props"
import { TiersSection } from "@/widgets/tiers-section"
import { FeedBackSection } from "@/widgets/feedback-sedction"
import { Breadcrumbs } from "@/widgets/breadcrumbs"
import { IBreadCrumbsItem } from "@/shared/types/layout.interface"

export function PremiumPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)
  const breadcrumbsItems: IBreadCrumbsItem[] = [
    {
      type: "parent",
      slug: "Premium Tiers",
      title: "Premium Tiers",
    },
  ]
  return (
    <>
      <Breadcrumbs arr={breadcrumbsItems} />
      <TiersSection
        text={true}
        className="first_section"
      />
      <FeedBackSection />
    </>
  )
}
