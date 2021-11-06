import React, { FC } from 'react'
import { IconProps } from '../Interface'

export const FilterIcon: FC<IconProps> = ({
  width = 18,
  height = 12,
  color = '#2264D1',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 7H15V5H3V7ZM0 0V2H18V0H0ZM7 12H11V10H7V12Z" fill={color} />
  </svg>
)
