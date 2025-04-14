"use client"
import { Button, UserBoard } from "@/shared/ui"
import css from "./styles.module.scss"
import classNames from "classnames"
import Image from "next/image"
import { CalculateLbs } from "@/widgets/modules/calculator"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { LeaderBoard } from "@/widgets/modules/leaderboard"

export const LeaderBoardSection: React.FC = () => {
  return (
    <section
      id="leader"
      className={css.leaderboard}
    >
      <Image
        className={css.bg_image}
        src={"/images/section_screen.png"}
        width={600}
        height={400}
        alt="hero_screen"
      />
      <div className="container">
        <h2 className={classNames(css.title, "orange_text")}>
          <span>Leader</span>board
        </h2>
        <div className={classNames(css.content, css.not_login)}>
          <div className={css.text_wrap}>
            <h4 className={css.not_login_title}>Leaderboard only visible to logged-in users.</h4>
            <p className={css.not_login_text}>
              Register now and see who you are in the Leaderboard in real time.
            </p>
            <Button
              modifier="primary"
              className={css.not_login_btn}
            >
              Register
            </Button>
          </div>
          <div className={classNames(css.not_login_board, css.board, "blured")}>
            <div className={css.items_wrap}>
              <UserBoard
                colorClass="green"
                isLogin={false}
                number="01"
              />
              <UserBoard
                colorClass="orange-secondary"
                isLogin={false}
                number="02"
              />
              <UserBoard
                colorClass="orange-primary"
                isLogin={false}
                number="03"
              />
            </div>
          </div>
        </div>
        <div className={classNames(css.content, css.login_board)}>
          <div className={css.login_board_left}>
            <div className={classNames(css.achievements_board, "blured")}>
              <h5 className={classNames(css.achievements_board_title, "orange_text")}>
                Your latest <span>achievements</span>
              </h5>
              <div className={css.board_item}>
                <UserBoard
                  animalName="Coyote"
                  colorClass="green"
                  number="01"
                  modifier="small"
                />
              </div>
              <p className={css.achievements_board_text}>
                These are your latest achievements. You haven't done a new calculation in a while,
                so we suggest you do it right now.
              </p>
              <p className={css.achievements_board_text}>Be the first in our Leaderboard!</p>
              <Button
                modifier="secondary"
                className={classNames(css.achievements_board_btn, "black_bg_btn")}
              >
                View more
              </Button>
            </div>
            <CalculateLbs
              className={css.leaderboard_calc}
              color="white"
            />
          </div>
          <div className={classNames(css.leaderboard_list, "blured")}>
            <Swiper
              className={css.leaderboard_swiper}
              slidesPerView={1}
              spaceBetween={5}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className={css.leaderboard_slide}>
                  <LeaderBoard
                    boardTitle="Top 3"
                    color="green"
                  />
                  <LeaderBoard
                    boardTitle="Leading members"
                    color="orange-secondary"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={css.leaderboard_slide}>
                  <LeaderBoard
                    boardTitle="Top 3"
                    color="green"
                  />
                  <LeaderBoard
                    boardTitle="Leading members"
                    color="orange-secondary"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <Button
              modifier="secondary"
              className={classNames(css.leaderboard_list_btn, "black_bg_btn")}
            >
              View more
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
