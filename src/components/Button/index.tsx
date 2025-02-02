import { ComponentProps } from 'react'
import { Button as ButtonStyles } from './styles'

interface ButtonProps extends ComponentProps<'button'> {
  label: string
}

export default function Button({ label, ...props }: ButtonProps) {
  return <ButtonStyles {...props}>{label}</ButtonStyles>
}
