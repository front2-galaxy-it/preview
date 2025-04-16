"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

type PopupName = "leaderboard" | "signin" | "plan" | "thanks" | "payment" | null

type PopupContextType = {
  openPopup: (name: Exclude<PopupName, null>) => void
  closePopup: () => void
  currentPopup: PopupName
}

const PopupContext = createContext<PopupContextType | null>(null)

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [currentPopup, setCurrentPopup] = useState<PopupName>(null)

  const openPopup = (name: Exclude<PopupName, null>) => setCurrentPopup(name)
  const closePopup = () => setCurrentPopup(null)

  return (
    <PopupContext.Provider value={{ openPopup, closePopup, currentPopup }}>
      {children}
    </PopupContext.Provider>
  )
}

export const usePopup = () => {
  const context = useContext(PopupContext)
  if (!context) throw new Error("usePopup must be used within PopupProvider")
  return context
}
