import { unstable_setRequestLocale } from "next-intl/server"
import { IHomePageProps } from "./props"
import { TiersSection } from "@/widgets/tiers-section"
import { FeedBackSection } from "@/widgets/feedback-sedction"
import { CalculatorSection } from "@/widgets/calculator-section"
import { Breadcrumbs } from "@/widgets/breadcrumbs"
import { IBreadCrumbsItem } from "@/shared/types/layout.interface"
import { AboutUsSection } from "@/widgets/about-us-section"

export function AboutPage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  const breadcrumbsItems: IBreadCrumbsItem[] = [
    {
      type: "parent",
      slug: "about us",
      title: "About Us",
    },
  ]
  return (
    <>
      <Breadcrumbs arr={breadcrumbsItems} />
      <AboutUsSection />
      <CalculatorSection />
      <TiersSection />
      <FeedBackSection />
    </>
  )
}
