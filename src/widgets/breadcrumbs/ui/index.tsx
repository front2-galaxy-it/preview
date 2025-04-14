import React from "react"
import classNames from "classnames"
import css from "./styles.module.scss"
import { RootLink } from "@/shared/ui"
import { ClientRoutes } from "@/shared/routes"
import { BreadcrumbsProps } from "./props"

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ arr, className, color, ...props }) => {
  return (
    <ul
      className={classNames(css.breadcrumbs, className, { [css[`_${color}`]]: !!color })}
      {...props}
    >
      <li className={css.breadcrumb_item}>
        <RootLink
          href={ClientRoutes.home}
          className={css.breadcrumb_link}
        >
          {"Home"}
        </RootLink>
        <img
          className={css.separator}
          src="/images/svg/arrow_right.svg"
          alt="arrow"
        />
      </li>

      {arr.map(({ slug, title }, index) => {
        const isLast = index === arr.length - 1

        return (
          <li
            key={index + 1}
            className={css.breadcrumb_item}
          >
            {isLast ? (
              <span className={classNames(css.breadcrumb_link, css.current)}>{title}</span>
            ) : (
              <>
                <RootLink
                  href={slug}
                  className={css.breadcrumb_link}
                >
                  {title}
                </RootLink>
                <img
                  className={css.separator}
                  src="/images/svg/arrow_right.svg"
                  alt="arrow"
                />
              </>
            )}
          </li>
        )
      })}
    </ul>
  )
}
