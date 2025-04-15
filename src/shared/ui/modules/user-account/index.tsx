import React from "react"
import css from "./styles.module.scss"
import classNames from "classnames"
import { Icon } from "../../icons"
import { UserAccountProps } from "./props"
import Image from "next/image"

export const UserAccount: React.FC<UserAccountProps> = ({
  className,
  number,
  isLogin,
  animalName,
  trophyIconType = "top",
  animalIconType = "cat",
  animalIcon = "/images/animals_icon/animal-cat.svg",
}) => {
  const getTrophyImage = () => {
    const trophyImages: { [key: string]: string } = {
      top: "/images/svg/top.svg",
      leader: "/images/svg/leader.svg",
      members: "/images/svg/members.svg",
    }
    return trophyImages[trophyIconType] || trophyImages.top
  }

  const getAnimalNameFromPath = (path: string): string => {
    const parts = path.split("-")
    const animalName = parts[parts.length - 1].split(".")[0]
    return animalName.charAt(0).toUpperCase() + animalName.slice(1)
  }

  const animalAlt = animalName || getAnimalNameFromPath(animalIcon)

  const getAnimalImage = () => {
    return `/images/animals_icon/animal-${animalIconType}.svg`
  }

  return (
    <div className={classNames(css.user_account, className)}>
      <div className={css.user_icon_wrap}>
        {!isLogin && (
          <div className={css.cross_icon}>
            <Icon name="big_cross" />
          </div>
        )}
        {isLogin && (
          <div className={css.animal_icon}>
            <Image
              src={getAnimalImage()}
              width={40}
              height={40}
              alt={animalAlt}
            />
          </div>
        )}
      </div>
      <div className={css.account_info}>
        {isLogin && (
          <Image
            className={css.trohpy_icon}
            src={getTrophyImage()}
            width={24}
            height={24}
            alt="trophy"
          />
        )}
        {<span className={css.account_number}>{number}</span>}
        {isLogin && <span className={css.account_animal}>{animalName || animalAlt}</span>}
      </div>
    </div>
  )
}
