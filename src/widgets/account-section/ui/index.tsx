"use client"

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
import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { useAuth } from "@/shared/lib/context/AuthContext"

type AccountFormData = {
  email: string
  firstName: string
  lastName: string
  dateOfBirth: string
  genderSelect: string
  phone: string
  password: string
}

export const AcountSection: React.FC = () => {
  const { logOut, isLoggedIn } = useAuth()
  const [userData, setUserData] = useState<AccountFormData>({
    email: "emailemail@gmail.com",
    firstName: "John",
    lastName: "Base",
    dateOfBirth: "",
    genderSelect: "Female",
    phone: "+44 7561582296",
    password: "",
  })
  const defaultGender = "Female"
  const [selected, setSelected] = useState(defaultGender)

  const [activeTab, setActiveTab] = useState("calculator")
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<AccountFormData>()

  useEffect(() => {
    reset(userData)
  }, [userData, reset])

  const onSubmit = (data: AccountFormData) => {
    console.log("EditAccountSettings submitted with:", data)
    setUserData(data)
  }
  if (isLoggedIn) {
    return (
      <section className={css.account_section}>
        <div className="container">
          <div className={css.content}>
            <h2 className={classNames(css.title, "orange_text")}>
              <span>User</span> account
            </h2>
            <div className={css.user_account_interface}>
              <div className={css.user_account_dashboard}>
                <h5 className={css.user_greertings}>
                  <span>Welcome, </span>
                  <span className={css.username}>John</span>
                </h5>
                <div className={css.service_list}>
                  <ButtonLink
                    className={classNames(css.list_btn, {
                      [css.current]: activeTab === "calculator",
                    })}
                    onClick={() => handleTabChange("calculator")}
                  >
                    Strength Calculator
                  </ButtonLink>
                  <ButtonLink
                    className={classNames(css.list_btn, {
                      [css.current]: activeTab === "leaderboard",
                    })}
                    onClick={() => handleTabChange("leaderboard")}
                  >
                    Leaderboard
                  </ButtonLink>
                  <ButtonLink
                    className={classNames(css.list_btn, { [css.current]: activeTab === "plans" })}
                    onClick={() => handleTabChange("plans")}
                  >
                    Premium Tiers
                  </ButtonLink>
                  <ButtonLink
                    className={classNames(css.list_btn, {
                      [css.current]: activeTab === "settings",
                    })}
                    onClick={() => handleTabChange("settings")}
                  >
                    Account settings
                  </ButtonLink>
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
                <div
                  className={classNames(css.user_calculator, css.tab, {
                    [css.active]: activeTab === "calculator",
                  })}
                >
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
                <div
                  className={classNames(css.user_leaderboard, css.tab, {
                    [css.active]: activeTab === "leaderboard",
                  })}
                >
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
                <div
                  className={classNames(css.user_plan, css.tab, {
                    [css.active]: activeTab === "plans",
                  })}
                >
                  <h4 className={css.user_interface_title}>Your plan</h4>
                  <div className={css.plan_head_wrap}>
                    <div className={css.plan_head}>
                      <div className={css.current_plan}>
                        <Image
                          className={css.current_plan_icon}
                          src="/images/svg/check-icon-plan.svg"
                          width={24}
                          height={24}
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
                      <div className={classNames(css.content_item, css.available_service)}>
                        <span className={css.label}>Highlights name</span>
                        <div className={css.item_text_wrap}>
                          <p className={css.text}>
                            According to your premium plan, if you wish, you can allow submitting
                            strength to the leaderboard.
                          </p>
                          <UserBoard
                            colorClass="green"
                            number="01"
                          />
                          <ButtonLink
                            renderIcon={true}
                            className={classNames(css.item_btn, css.add_btn)}
                          >
                            Submitting strength
                          </ButtonLink>
                        </div>
                      </div>
                      <div className={classNames(css.content_item, css.unavailable_service)}>
                        <span className={css.label}>Submitting strength</span>
                        <div className={css.item_text_wrap}>
                          <div className={css.filled}></div>
                          <div className={css.filled}></div>
                          <div className={css.filled}></div>
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
                      We offer a variety of pricing plans to suit your needs. You can choose the
                      most suitable option and enjoy all the benefits it provides.
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
                <div
                  className={classNames(css.user_settings, css.tab, {
                    [css.active]: activeTab === "settings",
                  })}
                >
                  <div className={css.user_info}>
                    <div className={css.info_row}>
                      <b>Email:</b>
                      <span>{userData.email}</span>
                    </div>
                    <div className={css.info_row}>
                      <b>Phone Number:</b>
                      <span>{userData.phone}</span>
                    </div>
                    <div className={css.info_row}>
                      <b>Name:</b>
                      <span>
                        {userData.firstName} {userData.lastName}
                      </span>
                    </div>
                    <div className={css.info_row}>
                      <b>Date of birth:</b>
                      <span>{userData.dateOfBirth}</span>
                    </div>
                    <div className={css.info_row}>
                      <b>Gender:</b>
                      <span>{userData.genderSelect}</span>
                    </div>
                  </div>

                  <h4 className={classNames(css.user_interface_title, "orange_text")}>
                    <span>Edit</span> my details
                  </h4>
                  <form
                    className={css.form_wrap}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className={css.info_wrap}>
                      <span className={classNames(css.input_label, css.left_side)}></span>
                      <span className={classNames(css.tip, css.right_side)}>
                        Please note that the input fields are marked with * required.
                      </span>
                    </div>
                    <div className={css.info_wrap}>
                      <span className={classNames(css.input_label, css.left_side)}>Email*</span>
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Required field",
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="email"
                            className={css.right_side}
                            label="Email"
                            color="black"
                            error={errors.email}
                          />
                        )}
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
                      <span className={classNames(css.input_label, css.left_side)}>
                        First Name*
                      </span>
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Required field",
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="text"
                            className={css.right_side}
                            error={errors.firstName}
                            label="First Name"
                            color="black"
                          />
                        )}
                      />
                    </div>
                    <div className={css.info_wrap}>
                      <span className={classNames(css.input_label, css.left_side)}>Last Name*</span>
                      <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Required field",
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="text"
                            className={css.right_side}
                            error={errors.firstName}
                            label="Last Name"
                            color="black"
                          />
                        )}
                      />
                    </div>
                    <div className={css.info_wrap}>
                      <span className={classNames(css.input_label, css.left_side)}>
                        Date of Birth*
                      </span>
                      <Controller
                        name="dateOfBirth"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Date of birth is required",
                          validate: (value) => {
                            if (new Date(value) > new Date()) {
                              return "Date cannot be in the future"
                            }
                            return true
                          },
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="date"
                            className={css.right_side}
                            label="Date of Birth"
                            color="black"
                            error={errors.dateOfBirth}
                          />
                        )}
                      />
                    </div>
                    <div className={css.info_wrap}>
                      <span className={classNames(css.input_label, css.left_side)}>Gender*</span>
                      <div className={css.custom_radio}>
                        <Controller
                          name="genderSelect"
                          control={control}
                          rules={{ required: "Please select an option" }}
                          render={({ field }) => (
                            <>
                              <CustomRadio
                                {...field}
                                label="Female"
                                value="Female"
                                checked={selected === "Female"}
                                onChange={(e) => {
                                  field.onChange(e)
                                  setSelected(e.target.value)
                                }}
                              />
                              <CustomRadio
                                {...field}
                                label="Male"
                                value="Male"
                                checked={selected === "Male"}
                                onChange={(e) => {
                                  field.onChange(e)
                                  setSelected(e.target.value)
                                }}
                              />
                            </>
                          )}
                        />
                      </div>
                    </div>
                    <div className={css.info_wrap}>
                      <span className={classNames(css.input_label, css.left_side)}>
                        Phone Number
                      </span>
                      <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Phone number is required",
                          // pattern: {
                          //   value: /^[0-9]{10}$/,
                          //   message: "Phone number must be 10 digits",
                          // },
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="tel"
                            className={css.right_side}
                            label="Phone Number"
                            color="black"
                            error={errors.phone}
                          />
                        )}
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
                      <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Required field",
                          minLength: { value: 3, message: "At least 3 characters" },
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="password"
                            className={css.right_side}
                            label="Password"
                            color="black"
                            error={errors.password}
                          />
                        )}
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
                          type="submit"
                        >
                          Save
                        </Button>
                        <Button
                          className={css.info_btn}
                          modifier="secondary"
                          color="black"
                          onClick={() => reset()}
                        >
                          Canсel
                        </Button>
                      </div>
                    </div>
                    <div
                      className={classNames(
                        css.info_wrap,
                        css.info_btn_wrap,
                        css.sign_out_btn_wrap,
                      )}
                    >
                      <span className={classNames(css.input_label, css.left_side)}></span>
                      <button
                        className={css.sign_out_btn}
                        onClick={logOut}
                      >
                        <Icon
                          name="out_icon"
                          className={css.out_icon}
                        />
                        Sign Out
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
