import { IActionMenuOption } from '@/types'

export interface IActionMenu<T = string> {
  options: IActionMenuOption<T>[]
  className?: string
  onClick: (action: T) => void
}
