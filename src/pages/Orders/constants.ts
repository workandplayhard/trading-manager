import { Select, TextInput } from '@/components'
import { IInformationField, SortBySymbol, SortByType } from '@/types'

export const optionsBySymbol: { label: string; value: SortBySymbol }[] = [
  { label: 'hkg', value: 'hkg' },
  { label: 'oq', value: 'oq' },
]

export const optionsByType: { label: string; value: SortByType }[] = [
  { label: 'Sell', value: 'Sell' },
  { label: 'Buy', value: 'Buy' },
]

export const newOrderFields: IInformationField[] = [
  {
    type: 'number',
    label: 'commission',
    className: 'w-50',
    Component: TextInput,
  },
  {
    type: 'number',
    label: 'taxes',
    className: 'w-50',
    Component: TextInput,
  },
  {
    type: 'number',
    label: 'openPrice',
    className: 'w-50',
    Component: TextInput,
  },
  {
    type: 'number',
    label: 'swaps',
    className: 'w-50',
    Component: TextInput,
  },
  {
    type: 'number',
    label: 'stopLoss',
    className: 'w-50',
    Component: TextInput,
  },
  {
    type: 'number',
    label: 'floating',
    className: 'w-50',
    Component: TextInput,
  },
]
