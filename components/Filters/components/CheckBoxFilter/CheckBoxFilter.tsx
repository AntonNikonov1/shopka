import React, { useState } from 'react'
import { ArrowIcon } from '../../../Icons'

import styles from './CheckBoxFilter.module.scss'

export const CheckBoxFilter = ({ title }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(true)

  const filterHandler = () => {
    setIsFilterOpen(!isFilterOpen)
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
    </div>
  )
}
