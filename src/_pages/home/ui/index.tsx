import { unstable_setRequestLocale } from "next-intl/server"
import { IHomePageProps } from "./props"
import { Hero } from "@/widgets/hero/ui"
import { Disclaimer } from "@/widgets/disclaimer/ui"
import { CalculatorSection } from "@/widgets/calculator-section"
import { TiersSection } from "@/widgets/tiers-section"
import { BannerSection } from "@/widgets/banner-section"
import { FAQSection } from "@/widgets/faq-section"
import { FeedBackSection } from "@/widgets/feedback-sedction"
import { LeaderBoardSection } from "@/widgets/leaderboard-section"

export function HomePage({ params: { locale } }: IHomePageProps) {
  unstable_setRequestLocale(locale)

  return (
    <>
      <Hero />
      <Disclaimer />
      <CalculatorSection />
      <TiersSection />
      <LeaderBoardSection />
      <FeedBackSection />
      <BannerSection />
      <FAQSection />
    </>
  )
}
