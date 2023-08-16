import { InputHTMLAttributes } from 'react'

export interface ITextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  onChangeText?: (_val: string) => void
}
