import { ITab } from '@/types'

export interface ITabsProps<T> {
  activeTab: T
  tabs: ITab<T>[]
  onChange: (tabKey: T) => void
}
