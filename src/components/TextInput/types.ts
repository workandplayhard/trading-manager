import { InputHTMLAttributes } from 'react'

export interface ITextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: string
  label?: string
  error?: string
  size?: 'full' | 'half'
  onChangeText?: (_val: string) => void
}
