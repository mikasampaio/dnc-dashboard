import { ComponentProps } from 'react'
import { Input as InputStyles } from './styles'

interface InputProps extends ComponentProps<'input'> {}

export default function Input({ ...props }: InputProps) {
  return <InputStyles {...props} />
}
