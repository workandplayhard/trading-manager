import { IActionMenuOption, ITab } from '@/types'

export const menuActions: IActionMenuOption<string>[] = [
  {
    label: 'edit',
    action: 'edit',
    iconLeft: 'edit',
  },
  {
    label: 'delete',
    action: 'delete',
    iconLeft: 'delete',
  },
]

export const TabsList: ITab<string>[] = [
  {
    key: 'summary',
    label: 'summary',
  },
  {
    key: 'exposure',
    label: 'exposure',
  },
  {
    key: 'coverage',
    label: 'coverage',
  },
  {
    key: 'dealing',
    label: 'dealing',
  },
  {
    key: 'alerts',
    label: 'alerts',
  },
  {
    key: 'mailbox',
    label: 'mailbox',
  },
  {
    key: 'news',
    label: 'news',
  },
  {
    key: 'support',
    label: 'support',
  },
  {
    key: 'journal',
    label: 'journal',
  },
]
