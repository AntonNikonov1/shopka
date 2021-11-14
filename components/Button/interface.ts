type ButtonTypeProps = 'outline' | 'filled'

interface MarkProps {
  text: string | number
  className?: string
}

export interface ButtonProps {
  type?: ButtonTypeProps
  onClick?: () => void
  className?: string
  containerClassName?: string
  disabled?: boolean
  mark?: MarkProps
}
