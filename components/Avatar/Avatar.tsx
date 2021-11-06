import React, { FC } from 'react'

import style from './Avatar.module.scss'

interface AvatarProps {
  src: string
  width?: number
  height?: number
}

export const Avatar: FC<AvatarProps> = ({ src, width = 50, height = 50 }) => {
  return (
    <div
      className={style.avatar}
      style={{ width, height, backgroundImage: `url(${src})` }}
    ></div>
  )
}
