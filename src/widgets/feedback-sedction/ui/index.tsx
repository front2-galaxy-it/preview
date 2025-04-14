"use client"

import css from "./styles.module.scss"
import classNames from "classnames"
import { Swiper, SwiperSlide } from "swiper/react"
import { useMemo } from "react"
import { Pagination } from "swiper/modules"

export const FeedBackSection: React.FC = () => {
  const breakpoints = useMemo(
    () => ({
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2.6,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      480: {
        slidesPerView: 1.3,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 1.1,
        spaceBetween: 16,
      },
    }),
    [],
  )

  const imagePaths = {
    facebook: "/images/svg/facebook.svg",
    google: "/images/svg/google.svg",
  }

  return (
    <section className={css.feedback_section}>
      <div className="container">
        <h2 className={classNames(css.title, "orange_text")}>
          Client <span>Feedback</span>
        </h2>
      </div>
      <div className={css.content}>
        <Swiper
          className={css.feedback_swiper}
          breakpoints={breakpoints}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className={css.slide}>
              <div className={css.slide_head}>
                <div className={css.reviewer_info}>
                  <span className={css.name}>Anne Joe</span>
                  <span className={css.nickname}>@AnneMouse</span>
                </div>
                <img
                  className={css.review_icon}
                  src={imagePaths.facebook}
                  alt="facebook"
                />
              </div>
              <p className={css.reviews_text}>
                This platform is a true find for anyone looking to constantly improve their skills.
                The ability to compare my results with others on both the global and regional
                leaderboards adds an extra level of motivation.
              </p>
              <time
                className={css.date}
                dateTime="2025-03-12"
              >
                12.03.2025
              </time>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.slide}>
              <div className={css.slide_head}>
                <div className={css.reviewer_info}>
                  <span className={css.name}>John Base</span>
                  <span className={css.nickname}>@JohnB</span>
                </div>
                <img
                  className={css.review_icon}
                  src={imagePaths.google}
                  alt="google"
                />
              </div>
              <p className={css.reviews_text}>
                The user-friendly interface and real-time performance tracking create an excellent
                experience. Seeing how I stack up against others helps me identify areas I need to
                focus on more!
              </p>
              <time
                className={css.date}
                dateTime="2025-03-12"
              >
                12.03.2025
              </time>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.slide}>
              <div className={css.slide_head}>
                <div className={css.reviewer_info}>
                  <span className={css.name}>Adam Kraig</span>
                  <span className={css.nickname}>@AdamOfficial</span>
                </div>
                <img
                  className={css.review_icon}
                  src={imagePaths.google}
                  alt="google"
                />
              </div>
              <p className={css.reviews_text}>
                If you're looking for a way to stay on top of your game and boost your performance,
                this platform is exactly what you need! I really love the ability to compare my
                achievements with other users—it helps me realistically assess where I stand.
              </p>
              <time
                className={css.date}
                dateTime="2025-03-12"
              >
                12.03.2025
              </time>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.slide}>
              <div className={css.slide_head}>
                <div className={css.reviewer_info}>
                  <span className={css.name}>Anne Joe</span>
                  <span className={css.nickname}>@AnneMouse</span>
                </div>
                <img
                  className={css.review_icon}
                  src={imagePaths.facebook}
                  alt="facebook"
                />
              </div>
              <p className={css.reviews_text}>
                This platform is a true find for anyone looking to constantly improve their skills.
                The ability to compare my results with others on both the global and regional
                leaderboards adds an extra level of motivation.
              </p>
              <time
                className={css.date}
                dateTime="2025-03-12"
              >
                12.03.2025
              </time>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.slide}>
              <div className={css.slide_head}>
                <div className={css.reviewer_info}>
                  <span className={css.name}>John Base</span>
                  <span className={css.nickname}>@JohnB</span>
                </div>
                <img
                  className={css.review_icon}
                  src={imagePaths.google}
                  alt="google"
                />
              </div>
              <p className={css.reviews_text}>
                The user-friendly interface and real-time performance tracking create an excellent
                experience. Seeing how I stack up against others helps me identify areas I need to
                focus on more!
              </p>
              <time
                className={css.date}
                dateTime="2025-03-12"
              >
                12.03.2025
              </time>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.slide}>
              <div className={css.slide_head}>
                <div className={css.reviewer_info}>
                  <span className={css.name}>Adam Kraig</span>
                  <span className={css.nickname}>@AdamOfficial</span>
                </div>
                <img
                  className={css.review_icon}
                  src={imagePaths.google}
                  alt="google"
                />
              </div>
              <p className={css.reviews_text}>
                If you're looking for a way to stay on top of your game and boost your performance,
                this platform is exactly what you need! I really love the ability to compare my
                achievements with other users—it helps me realistically assess where I stand.
              </p>
              <time
                className={css.date}
                dateTime="12-3-2025"
              >
                12.03.2025
              </time>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
