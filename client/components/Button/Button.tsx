import classNames from 'classnames'
import React, { FC } from 'react'
import style from './Button.module.scss'
import { ButtonProps } from './interface'

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type = 'outline',
  className,
  containerClassName,
  mark,
}) => {
  return (
    <div className={classNames(style.button_container, containerClassName)}>
      <button
        className={classNames(style.button, style[`button_${type}`], className)}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>

      {mark ? (
        <div className={classNames(style.mark, mark.className)}>
          {mark.text}
        </div>
      ) : null}
    </div>
  )
}
