import React, { FC, useState, MouseEvent, useRef } from 'react'
import { ArrowIcon } from '../../../Icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import styles from './CheckboxFilter.module.scss'
import classNames from 'classnames'

interface CheckboxFilterProps {
  title: string
  checkboxNames: string[]
}

export const CheckboxFilter: FC<CheckboxFilterProps> = ({
  title,
  checkboxNames,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(true)
  const [activeСheckboxes, setActiveСheckboxes] = useState<string[]>([])

  const filterHandler = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const someHandler = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    const element = target.closest(`.${styles.checkbox_container}`)
    const elementId = element?.id.replace('Checkbox', '') || ''

    if (!activeСheckboxes.includes(elementId)) {
      setActiveСheckboxes((prev) => [...prev, elementId])
      return
    }

    setActiveСheckboxes((prev) =>
      prev.filter((checkbox) => checkbox !== elementId),
    )
  }

  return (
    <div className={styles.filter}>
      <div className={styles.header} onClick={filterHandler}>
        <h3>{title}</h3>

        <span
          className={styles.arrow_icon}
          style={{ transform: `rotate(${isFilterOpen ? 0 : 180}deg)` }}
        >
          <ArrowIcon />
        </span>
      </div>

      {isFilterOpen && (
        <div
          onClick={(event) => someHandler(event)}
          className={styles.checkbox_list}
        >
          {checkboxNames.map((checkboxName) => (
            <div
              className={styles.checkbox_container}
              id={`${checkboxName}Checkbox`}
              key={checkboxName}
            >
              <div
                className={classNames(
                  styles.checkbox_input_container,
                  activeСheckboxes.includes(checkboxName)
                    ? styles.active
                    : null,
                )}
              >
                <input type="checkbox" />
                <label htmlFor="checkbox">
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="xs"
                    color={
                      activeСheckboxes.includes(checkboxName) ? '#fff' : '#000'
                    }
                  />
                </label>
              </div>

              <span>{checkboxName}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
