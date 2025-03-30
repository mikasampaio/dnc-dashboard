import { ComponentProps } from 'react'
import { Button as ButtonStyles } from './styles'

interface ProfileProps extends ComponentProps<'button'> {
  label?: string
}

export default function Profile({ label = 'MP', ...props }: ProfileProps) {
  return <ButtonStyles {...props}>{label}</ButtonStyles>
}
