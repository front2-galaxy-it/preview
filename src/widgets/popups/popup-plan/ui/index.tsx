"use client"

import { ButtonIcon } from "@/shared/ui/buttons"
import classNames from "classnames"
import css from "./styles.module.scss"
import cardData from "@/shared/data/card.json"
import { TarrifCard } from "@/widgets/modules/tarrif-card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { usePopup } from "@/shared/hooks/PopupHooks"
import React, { useEffect } from "react"
import { PopupProps } from "@/shared/types/popupProps"

export const PopupPlan: React.FC<PopupProps> = ({ onClose }) => {
  const { currentPopup } = usePopup()
  const isOpen = currentPopup === "plan"

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])
  return (
    <div
      className={classNames(css.popup_plan, "blured", {
        [css.visible]: isOpen,
        [css.hidden]: !isOpen,
      })}
    >
      <ButtonIcon
        className={css.close_popup}
        onClick={onClose}
      ></ButtonIcon>
      <div className={css.popup_content}>
        <h4 className={css.popup_title}>Choose a premium plan</h4>
        <div className={css.card_wrap}>
          <Swiper
            slidesPerView={3}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1.22,
                spaceBetween: 16,
              },
              560: {
                slidesPerView: 1.6,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 2.6,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1440: {
                spaceBetween: 40,
              },
            }}
          >
            {cardData.card.map((item, idx) => (
              <SwiperSlide key={idx}>
                <TarrifCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
