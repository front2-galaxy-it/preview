"use client"

import { SignUpModule } from "@/widgets/modules/sign-up"
import { SignInModule } from "@/widgets/modules/sign-in"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Button, ButtonLink, Input } from "@/shared/ui/buttons"
import { CalculateLbs } from "@/widgets/modules/calculator"
import Image from "next/image"
import { UserBoard, CustomRadio } from "@/shared/ui"
import { LeaderBoard } from "@/widgets/modules/leaderboard"
import { Icon } from "@/shared/ui/icons"
import { TarrifCard } from "@/widgets/modules/tarrif-card"
import cardData from "@/shared/data/card_other.json"
import { useState } from "react"

export const AcountSection: React.FC = () => {
  const defaultGender = "Female"
  const [selected, setSelected] = useState(defaultGender)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }

  return (
    <section className={css.account_section}>
      <div className="container">
        <div className={css.content}>
          <h2 className={classNames(css.title, "orange_text")}>
            <span>User</span> account
          </h2>
          <SignInModule
            className={css.authorization_block}
            color="black"
          />
          <SignUpModule
            className={css.authorization_block}
            color="black"
          />
          <div className={css.user_account_interface}>
            <div className={css.user_account_dashboard}>
              <h5 className={css.user_greertings}>
                <span>Welcome, </span>
                <span className={css.username}>John</span>
              </h5>
              <div className={css.service_list}>
                <ButtonLink className={classNames(css.list_btn, css.current)}>
                  Strength Calculator
                </ButtonLink>
                <ButtonLink className={css.list_btn}>Leaderboard</ButtonLink>
                <ButtonLink className={css.list_btn}>Premium Tiers</ButtonLink>
                <ButtonLink className={css.list_btn}>Account settings</ButtonLink>
              </div>
              <ButtonLink
                renderIcon={true}
                className={css.delete_btn}
              >
                Delete Account
              </ButtonLink>
            </div>
            <div className={css.user_account_interface_wrap}>
              {/* Block with Strength Calculator */}
              <div className={css.user_calculator}>
                <Image
                  className={css.calc_bg}
                  src="/images/section_screen.png"
                  width={800}
                  height={800}
                  alt="image not found"
                />
                <CalculateLbs color="white" />
              </div>
              {/* Block with Leaderboard */}
              <div className={css.user_leaderboard}>
                <div className={css.user_achievements}>
                  <h4 className={classNames(css.user_interface_title, "orange_text")}>
                    Your latest <span>achievements</span>
                  </h4>
                  <UserBoard
                    className={css.user_achievements_board}
                    colorClass="green"
                    number="01"
                    animalName="Coyote"
                  />
                  <p className={css.user_achievements_text}>
                    These are your latest achievements. You haven't done a new calculation in a
                    while, so we suggest you do it right now.
                  </p>
                  <p className={css.user_achievements_text}>Be the first in our Leaderboard!</p>
                  <Button modifier="primary">Calculate</Button>
                </div>
                <div className={css.all_leaderboard}>
                  <h4 className={classNames(css.user_interface_title, "orange_text")}>
                    <span>Leader</span>board
                  </h4>
                  <LeaderBoard
                    className={css.user_leaderboard_block}
                    boardTitle="Top 3"
                    color="green"
                  />
                  <LeaderBoard
                    className={css.user_leaderboard_block}
                    boardTitle="Leading members"
                    color="orange-secondary"
                  />
                  <LeaderBoard
                    className={css.user_leaderboard_block}
                    boardTitle="Members"
                    color="orange-primary"
                  />
                </div>
                <div className={css.pagination}>
                  <button className={classNames(css.pagiantion_arrow, css.prev, css.disable)}>
                    <Icon
                      name="arrow_right"
                      className={css.arrow}
                    />
                  </button>
                  <button className={classNames(css.pagination_button, css.current)}>1</button>
                  <button className={css.pagination_button}>2</button>
                  <button className={css.pagination_button}>3</button>
                  <button className={css.pagination_button}>4</button>
                  <button className={classNames(css.pagiantion_arrow, css.next)}>
                    <Icon
                      name="arrow_right"
                      className={css.arrow}
                    />
                  </button>
                </div>
              </div>
              {/* Block with Premium Tiers */}
              <div className={css.user_plan}>
                <h4 className={css.user_interface_title}>Your plan</h4>
                <div className={css.plan_head_wrap}>
                  <div className={css.plan_head}>
                    <div className={css.current_plan}>
                      <img
                        className={css.current_plan_icon}
                        src="/images/svg/check-icon-plan.svg"
                        alt="check icon"
                      />
                      <span className={css.current_plan_title}>Larval Titan</span>
                    </div>
                    <div className={css.current_plan_price}>
                      <span data-currency="$">$</span>
                      <span data-price="4.99">4.99</span>
                      {""} {""}
                      <span>/</span>
                      <br />
                      {""} {""}
                      <span data-rate="month">month</span>
                    </div>
                  </div>
                  <p className={css.head_text}>
                    You have a Larval Titan plan, so you can't take advantage of all the possible
                    offers from StrengthBeasts. If you want to use other features, then upgrade to
                    the premium plan <span className={css.green}>Pupal Forgea</span> or{" "}
                    <span className={css.orange_secondary}>Emergent Colossus</span>.
                  </p>
                </div>
                <div className={css.plan_content}>
                  <h4 className={classNames(css.user_interface_title, "orange_text")}>
                    <span>Сonfigure</span> your premium plan
                  </h4>
                  <div className={css.content_list}>
                    <div className={classNames(css.content_item, css.available_service)}>
                      <span className={css.label}>Remove ads</span>
                      <div className={css.item_text_wrap}>
                        <p className={css.text}>
                          According to the terms of your plan, you can remove ads if you wish. You
                          can always choose a different premium plan to have more features and
                          functions to manage your account.
                        </p>
                        <ButtonLink
                          renderIcon={true}
                          className={css.item_btn}
                        >
                          Remove ads
                        </ButtonLink>
                      </div>
                    </div>
                    <div className={classNames(css.content_item, css.unavailable_service)}>
                      <span className={css.label}>Highlights name</span>
                      <div className={css.item_text_wrap}>
                        <div className={css.filled}></div>
                        <div className={css.filled}></div>
                        <div className={css.filled}></div>
                        <p className={css.text}>
                          According to the terms of your plan, you can remove ads if you wish. You
                          can always choose a different premium plan to have more features and
                          functions to manage your account.
                        </p>
                        <ButtonLink
                          renderIcon={true}
                          className={css.item_btn}
                        >
                          Remove ads
                        </ButtonLink>
                      </div>
                    </div>
                    <div className={classNames(css.content_item, css.unavailable_service)}>
                      <span className={css.label}>Submitting strength</span>
                      <div className={css.item_text_wrap}>
                        <div className={css.filled}></div>
                        <div className={css.filled}></div>
                        <div className={css.filled}></div>
                        <p className={css.text}>
                          According to the terms of your plan, you can remove ads if you wish. You
                          can always choose a different premium plan to have more features and
                          functions to manage your account.
                        </p>
                        <ButtonLink
                          renderIcon={true}
                          className={css.item_btn}
                        >
                          Remove ads
                        </ButtonLink>
                      </div>
                    </div>
                    <div className={classNames(css.content_item, css.unavailable_service)}>
                      <span className={css.label}>Add animal</span>
                      <div className={css.item_text_wrap}>
                        <div className={css.filled}></div>
                        <div className={css.filled}></div>
                        <div className={css.filled}></div>
                        <p className={css.text}>
                          According to the terms of your plan, you can remove ads if you wish. You
                          can always choose a different premium plan to have more features and
                          functions to manage your account.
                        </p>
                        <ButtonLink
                          renderIcon={true}
                          className={css.item_btn}
                        >
                          Remove ads
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={css.other_plans}>
                  <h4 className={classNames(css.user_interface_title, "orange_text  ")}>
                    <span>Premium</span> Tiers
                  </h4>
                  <p className={classNames(css.text, css.other_plans_text)}>
                    We offer a variety of pricing plans to suit your needs. You can choose the most
                    suitable option and enjoy all the benefits it provides.
                  </p>
                  <div className={css.other_plans_wrap}>
                    {cardData.card.map((item, idx) => (
                      <TarrifCard
                        className={css.other_plan}
                        key={idx}
                        data={item}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Block with Account settings */}
              <div className={css.user_settings}>
                <div className={css.user_info}>
                  <div className={css.info_row}>
                    <b>Email:</b>
                    <span>emailemail@gmail.com</span>
                  </div>
                  <div className={css.info_row}>
                    <b>Phone Number:</b>
                    <span>+44 7561582296</span>
                  </div>
                  <div className={css.info_row}>
                    <b>Name:</b>
                    <span>John Base</span>
                  </div>
                  <div className={css.info_row}>
                    <b>Date of birth:</b>
                    <span>11/08/1991</span>
                  </div>
                  <div className={css.info_row}>
                    <b>Gender:</b>
                    <span>Female</span>
                  </div>
                </div>
                <h4 className={classNames(css.user_interface_title, "orange_text")}>
                  <span>Edit</span> my details
                </h4>
                <div className={css.form_wrap}>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}></span>
                    <span className={classNames(css.tip, css.right_side)}>
                      Please note that the input fields are marked with * required.
                    </span>
                  </div>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}>Email*</span>
                    <Input
                      type="email"
                      className={css.right_side}
                      label="Email"
                      color="black"
                    />
                  </div>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}></span>
                    <span className={classNames(css.tip, css.right_side)}>
                      Remember, if you change your email, you need to confirm it again. Make sure
                      you click on the link in the confirmation email we sent you.
                    </span>
                  </div>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}>First Name*</span>
                    <Input
                      className={css.right_side}
                      label="First Name"
                      color="black"
                    />
                  </div>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}>Last Name*</span>
                    <Input
                      className={css.right_side}
                      label="Last Name"
                      color="black"
                    />
                  </div>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}>
                      Date of Birth*
                    </span>
                    <Input
                      type="date"
                      className={css.right_side}
                      label="Date of Birth"
                      color="black"
                    />
                  </div>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}>Gender*</span>
                    <div className={css.custom_radio}>
                      <CustomRadio
                        label="Female"
                        name="customOption"
                        value="Female"
                        checked={selected === "Female"}
                        onChange={handleChange}
                      />

                      <CustomRadio
                        label="Male"
                        name="customOption"
                        value="Male"
                        checked={selected === "Male"}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}>Phone Number</span>
                    <Input
                      type="tel"
                      className={css.right_side}
                      label="Phone Number"
                      color="black"
                    />
                  </div>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}></span>
                    <span className={classNames(css.tip, css.right_side)}>
                      StrengthBeasts will process your data in accordance with{" "}
                      <a href="#">Privacy Policy</a>
                    </span>
                  </div>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}>Password*</span>
                    <Input
                      type="password"
                      className={css.right_side}
                      label="Password"
                      color="black"
                    />
                  </div>
                  <div className={css.info_wrap}>
                    <span className={classNames(css.input_label, css.left_side)}></span>
                    <span className={classNames(css.tip, css.right_side)}>
                      Only mandatory if email address is changed
                    </span>
                  </div>
                  <div className={classNames(css.info_wrap, css.info_btn_wrap)}>
                    <span className={classNames(css.input_label, css.left_side)}></span>
                    <div className={classNames(css.info_btn_body, css.right_side)}>
                      <Button
                        className={css.info_btn}
                        modifier="primary"
                      >
                        Save
                      </Button>
                      <Button
                        className={css.info_btn}
                        modifier="secondary"
                        color="black"
                      >
                        Canсel
                      </Button>
                    </div>
                  </div>
                  <div
                    className={classNames(css.info_wrap, css.info_btn_wrap, css.sign_out_btn_wrap)}
                  >
                    <span className={classNames(css.input_label, css.left_side)}></span>
                    <button className={css.sign_out_btn}>
                      <Icon
                        name="out_icon"
                        className={css.out_icon}
                      />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
