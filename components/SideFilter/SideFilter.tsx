import React, { useState } from 'react'
import { Button } from '../Button/Button'
import { CheckBoxFilter } from '../Filters'
import { FilterIcon } from '../Icons'

import styles from './SideFilter.module.scss'

export const SideFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filterHandler = () => {
    setIsFilterOpen(!isFilterOpen)
  }
  console.log(`rotate(${isFilterOpen ? 0 : 180}deg)`)

  return (
    <div>
      <Button onClick={filterHandler}>
        <span
          className={styles.filter_icon}
          style={{ transform: `rotate(${isFilterOpen ? 0 : 180}deg)` }}
        >
          <FilterIcon />
        </span>
        <span>Departments</span>
      </Button>

      <CheckBoxFilter title="Expanded Filters" />
    </div>
  )
}
