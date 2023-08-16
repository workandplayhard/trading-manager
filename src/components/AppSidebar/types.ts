export interface INavItem {
  path: string
  icon: string
  label: string
  type?: string
  disabled?: boolean
  action?: () => void
  rightContent?: React.ReactNode
}
