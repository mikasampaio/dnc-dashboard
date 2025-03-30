import { ComponentProps } from 'react'
import { Button as ButtonStyles } from './styles'

interface ButtonProps extends ComponentProps<'button'> {
  label: string
  severity?: 'danger' | 'warning' | 'info' | 'primary'
}

export default function Button({
  label,
  severity = 'primary',
  ...props
}: ButtonProps) {
  return (
    <ButtonStyles severity={severity} {...props}>
      {label}
    </ButtonStyles>
  )
}
