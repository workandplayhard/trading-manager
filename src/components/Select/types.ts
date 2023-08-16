import { InputHTMLAttributes } from 'react'
import { IOption } from '@/types'

export interface ISelectProps<T = string>
  extends Omit<InputHTMLAttributes<HTMLLIElement>, 'onChange' | 'value'> {
  value?: T
  unit?: string
  label?: string
  disabled?: boolean
  className?: string
  placeholder?: string
  options: IOption<T>[]
  onChange?: (_item: IOption<T>) => void
  renderValue?: (_item: IOption<T>) => React.ReactNode
  renderOption?: (_item: IOption<T>, _index?: number) => React.ReactNode
  iconName?: string
}
