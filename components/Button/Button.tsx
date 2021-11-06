import classNames from 'classnames'
import React, { FC } from 'react'
import style from './Button.module.scss'

type ButtonTypeProps = 'outline' | 'filled'

interface MarkProps {
  text: string | number
  className?: string
}

interface ButtonProps {
  onClick?: () => void
  disabled?: boolean
  type?: ButtonTypeProps
  className?: string
  containerClassName?: string
  mark?: MarkProps
}

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
