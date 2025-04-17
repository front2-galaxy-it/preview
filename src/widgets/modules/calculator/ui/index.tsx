"use client"

import classNames from "classnames"
import css from "./styles.module.scss"
import { Input, Button } from "@/shared/ui"
import Image from "next/image"
import { useForm, Controller } from "react-hook-form"
import { useEffect, useRef, useState } from "react"

interface CalculateLbsProps {
  className?: string
  color?: string
}

type FormData = {
  benchPress: string
  squat: string
  deadlift: string
}

const animalIcons = {
  Ant: "/images/animals_icon/animal-ant.svg",
  Ape: "/images/animals_icon/animal-ape.svg",
  Bear: "/images/animals_icon/animal-bear.svg",
  Bird: "/images/animals_icon/animal-bird.svg",
  Bull: "/images/animals_icon/animal-bull.svg",
  Camel: "/images/animals_icon/animal-camel.svg",
  Carnivore: "/images/animals_icon/animal-carnivore.svg",
  Coyote: "/images/animals_icon/animal-cat.svg",
  Cow: "/images/animals_icon/animal-cow.svg",
  Deer: "/images/animals_icon/animal-deer.svg",
  Dog: "/images/animals_icon/animal-dog.svg",
  Dove: "/images/animals_icon/animal-dove.svg",
  Duck: "/images/animals_icon/animal-duck.svg",
  Elephant: "/images/animals_icon/animal-elephant.svg",
  Fish: "/images/animals_icon/animal-fish.svg",
  Fox: "/images/animals_icon/animal-fox.svg",
  Giraffe: "/images/animals_icon/animal-giraffe.svg",
  Goat: "/images/animals_icon/animal-goat.svg",
  Goose: "/images/animals_icon/animal-goose.svg",
  Hippo: "/images/animals_icon/animal-hippo.svg",
  Horse: "/images/animals_icon/animal-horse.svg",
  Lion: "/images/animals_icon/animal-lion.svg",
  Mouse: "/images/animals_icon/animal-mouse.svg",
  Panda: "/images/animals_icon/animal-panda.svg",
  Rabbit: "/images/animals_icon/animal-rabbit.svg",
  Rhino: "/images/animals_icon/animal-rhino.svg",
  Snake: "/images/animals_icon/animal-snake.svg",
  Tartaruga: "/images/animals_icon/animal-tartaruga.svg",
  Tiger: "/images/animals_icon/animal-tiger.svg",
  Turtle: "/images/animals_icon/animal-turtle.svg",
  Walrus: "/images/animals_icon/animal-walrus.svg",
  Zebra: "/images/animals_icon/animal-zebra.svg",
}

export const CalculateLbs: React.FC<CalculateLbsProps> = ({ className, color }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()

  const [totalStrength, setTotalStrength] = useState<number>(0)
  const [displayStrength, setDisplayStrength] = useState(0)
  const animationRef = useRef<number | null>(null)

  const [animal, setAnimal] = useState<string>("")
  const [animalIcon, setAnimalIcon] = useState<string>("")
  const [isAnimationFinished, setIsAnimationFinished] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [showAnimalIcon, setShowAnimalIcon] = useState(false)

  const calculateTotalStrength = (data: FormData): number => {
    const bench = parseFloat(data.benchPress) || 0
    const squat = parseFloat(data.squat) || 0
    const deadlift = parseFloat(data.deadlift) || 0
    return bench + squat + deadlift
  }

  const onSubmit = (data: FormData) => {
    setIsFormSubmitted(true)
    setIsAnimationFinished(false)
    setShowAnimalIcon(false)
    const total = calculateTotalStrength(data)
    setTotalStrength(total)
  }

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  useEffect(() => {
    if (!isFormSubmitted) return
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    const duration = 800
    const start = performance.now()
    const initial = displayStrength
    const difference = totalStrength - initial

    const animate = (timestamp: number) => {
      const progress = easeOutCubic(Math.min((timestamp - start) / duration, 1))
      const currentValue = Math.round(initial + difference * progress)
      setDisplayStrength(currentValue)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        const animalData = getAnimalByLevel(totalStrength)
        setAnimal(animalData.name)
        setAnimalIcon(animalData.icon)
        setIsAnimationFinished(true)
        setShowAnimalIcon(true)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [displayStrength, totalStrength, isFormSubmitted])

  const getAnimalByLevel = (total: number) => {
    if (total < 300) return { name: "Coyote", icon: animalIcons.Coyote }
    if (total < 900) return { name: "Wolf", icon: animalIcons.Bull }
    if (total < 1200) return { name: "Bear", icon: animalIcons.Bear }
    return { name: "Gorilla", icon: animalIcons.Elephant }
  }

  return (
    <div className={classNames(css.board, className, "blured", color && css[`_${color}`])}>
      {!isFormSubmitted ? (
        <div className={css.board_content}>
          <h4 className={css.board_title}>Enter your achievements</h4>
          <p className={css.board_text}>
            And you will know your position on the Leaderboard in real time
          </p>
          <form
            className={css.form_calc}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="benchPress"
              control={control}
              defaultValue=""
              rules={{
                required: "Required field",
                min: { value: 0, message: "Must be positive" },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Bench press, lb"
                  type="number"
                  color={color}
                  error={errors.benchPress}
                />
              )}
            />
            <Controller
              name="squat"
              control={control}
              defaultValue=""
              rules={{
                required: "Required field",
                min: { value: 0, message: "Must be positive" },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Squat"
                  type="number"
                  color={color}
                  error={errors.squat}
                />
              )}
            />
            <Controller
              name="deadlift"
              control={control}
              defaultValue=""
              rules={{
                required: "Required field",
                min: { value: 0, message: "Must be positive" },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Deadlift, lb"
                  type="number"
                  color={color}
                  error={errors.deadlift}
                />
              )}
            />
            <Button
              modifier="primary"
              className={css.calc_btn}
              type="submit"
            >
              Calculate
            </Button>
          </form>
        </div>
      ) : (
        <div className={css.board_loader}>
          <div className={css.loader}>
            <Image
              className={css.outer_loader}
              src="/images/svg/loader.svg"
              alt="loader"
              width={200}
              height={200}
            />
            <div className={css.changed_img}>
              {showAnimalIcon ? (
                <div
                  className={classNames(css.animal_icon, isAnimationFinished && "fade-in-delay")}
                >
                  <Image
                    src={animalIcon}
                    alt={`${animal} icon`}
                    width={100}
                    height={100}
                  />
                </div>
              ) : (
                <div className={css.innner_loader}>
                  <Image
                    src="/images/svg/loader_arrow.svg"
                    alt="arrow icon"
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
          </div>
          <h2 className={css.strength_number}>
            {displayStrength} {isAnimationFinished && <span>lbs</span>}
          </h2>
          <h5 className={css.loader_title}>
            {isAnimationFinished ? (
              <>
                Congrats! <br /> You’re as strong as a <strong>{animal}</strong>!
              </>
            ) : (
              "What are you?"
            )}
          </h5>
        </div>
      )}
    </div>
  )
}
