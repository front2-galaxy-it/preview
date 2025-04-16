"use client"

import { usePopup } from "@/shared/hooks/PopupHooks"
import { PopupLeaderboard } from "@/widgets/popups/popup-leaderboard"
// import { PopupThanks } from "@/widgets/popups/popup-thanks"
// import { PopupPlan } from "@/widgets/popups/popup-plan"
// import { PopupSignIn } from "@/widgets/popups/popup-signin"
// import { PopupPayment } from "@/widgets/popups/popup-payment"

export const PopupController = () => {
  const { currentPopup, closePopup } = usePopup()

  return (
    <>
      {currentPopup === "leaderboard" && <PopupLeaderboard onClose={closePopup} />}
      {/* {currentPopup === "signin" && <PopupSignIn onClose={closePopup} />}
      {currentPopup === "plan" && <PopupPlan onClose={closePopup} />}
      {currentPopup === "thanks" && <PopupThanks onClose={closePopup} />}
      {currentPopup === "payment" && <PopupPayment onClose={closePopup} />} */}
    </>
  )
}
