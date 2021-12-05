import React, { ChangeEvent, FC, useState } from 'react'
import Image from 'next/image'

import style from './Input.module.scss'
import { Button } from '../Button/Button'
import classNames from 'classnames'

type InputPlaceholderProps = 'search'

interface ButtonProps {
  width?: number
  height?: number
}

interface InputProps {
  type: InputPlaceholderProps
  placeholder?: string
  searchIcon?: ButtonProps
  closeButton?: ButtonProps
  className?: string
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  searchIcon = {
    width: 17,
    height: 17,
  },
  closeButton = {
    width: 14,
    height: 14,
  },
  className,
}) => {
  const [value, setValue] = useState<string>('')

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value

    setValue(inputValue)
  }

  const clearInput = () => {
    setValue('')
  }

  switch (type) {
    case 'search':
      return (
        <div className={style.search_wrapper}>
          <div className={style.search_icon}>
            <Image
              src="/svg/search-icon.svg"
              width={searchIcon.width}
              height={searchIcon.height}
              alt="search icon"
            />
          </div>

          <input
            type="text"
            value={value}
            onChange={(event) => onChangeHandler(event)}
            placeholder={placeholder || 'Search'}
            className={classNames(style.search_input, className)}
          />

          {value ? (
            <button className={style.close_icon} onClick={clearInput}>
              <Image
                src="/svg/close-button.svg"
                width={closeButton.width}
                height={closeButton.height}
                alt="search icon"
              />
            </button>
          ) : null}
        </div>
      )

    default:
      return <div>sds</div>
  }
}
