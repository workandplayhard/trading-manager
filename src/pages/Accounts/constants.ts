import { Checkbox, Select, TextArea, TextInput } from '@/components'
import { IInformationField, IOption, IUser, SortType } from '@/types'
import { INavItem } from '@/components/AppSidebar/types'

export const options: IOption<SortType>[] = [
  { label: 'manager', value: 'manager' },
  { label: 'dataCenter', value: 'dataCenter' },
]

export const PATHS: Record<'create' | 'edit', Omit<INavItem, 'path'>[]> = {
  edit: [
    {
      icon: 'user',
      label: 'personal',
    },
    {
      label: 'trades',
      icon: 'chat-square',
    },
    {
      label: 'exposure',
      icon: 'link-square',
    },
    {
      label: 'newOrder',
      icon: 'history',
    },
    {
      label: 'security',
      icon: 'shield-check',
    },
  ],
  create: [
    {
      icon: 'user',
      label: 'information',
    },
  ],
}

export const informationFields: IInformationField<string, IUser>[] = [
  {
    label: 'id',
    className: 'w-33',
    Component: TextInput,
    placeholder: 'metaQuotesId',
    name: 'Mqid',
  },
  {
    label: 'name',
    className: 'w-33',
    Component: TextInput,
    placeholder: 'yourName',
    name: 'Name',
  },
  {
    className: 'w-33',
    Component: TextInput,
    label: 'phonePassword',
    placeholder: 'yourPassword',
    name: 'Password',
  },
  {
    label: 'city',
    className: 'w-33',
    placeholder: 'city',
    Component: TextInput,
    name: 'City',
  },
  {
    label: 'state',
    className: 'w-33',
    placeholder: 'state',
    Component: TextInput,
    name: 'State',
  },
  {
    label: 'country',
    className: 'w-33',
    Component: TextInput,
    placeholder: 'country',
    name: 'Country',
  },
  {
    label: 'address',
    className: 'w-33',
    Component: TextInput,
    placeholder: 'address',
    name: 'Address',
  },
  {
    label: 'zip',
    Component: TextInput,
    placeholder: 'zipCode',
    className: 'w-33 offset-33',
    name: 'ZipCode',
  },
  {
    label: 'phone',
    className: 'w-33',
    Component: TextInput,
    placeholder: 'phoneNumber',
    name: 'Phone',
  },
  {
    label: 'email',
    className: 'w-33',
    Component: TextInput,
    placeholder: 'yourEmail',
    name: 'Email',
  },
  {
    label: 'id',
    className: 'w-33',
    Component: TextInput,
    placeholder: 'idNumber',
    name: 'Id',
  },
  {
    label: 'status',
    className: 'w-33',
    Component: Select<string>,
    placeholder: 'selectStatus',
    options: [
      { value: 'Status', label: 'Status' },
      { value: 'Status', label: 'Status' },
      { value: 'Status', label: 'Status' },
    ],
    name: 'Status',
  },
  {
    label: 'color',
    className: 'w-33',
    Component: Select<string>,
    placeholder: 'selectColor',
    options: [
      { value: 'red', label: 'Red' },
      { value: 'green', label: 'Green' },
      { value: 'blue', label: 'Blue' },
    ],
    name: 'UserColor',
  },
  {
    label: 'group',
    className: 'w-33',
    Component: Select<string>,
    placeholder: 'selectGroup',
    options: [
      { value: 'Group', label: 'Group' },
      { value: 'Group', label: 'Group' },
      { value: 'Group', label: 'Group' },
    ],
    name: 'Group',
  },
  {
    label: 'comment',
    Component: TextArea,
    className: 'w-66 offset-33',
    name: 'Comment',
  },
  {
    label: 'leverage',
    className: 'w-33',
    unit: 'forex only',
    Component: Select<string>,
    placeholder: 'leverage',
    options: [
      { value: '1:1', label: '1:1' },
      { value: '1:1', label: '1:1' },
      { value: '1:10', label: '1:10' },
    ],
    name: 'Leverage',
  },
  {
    unit: '%',
    label: 'tax',
    className: 'w-33',
    Component: TextInput,
    placeholder: 'taxRate',
    name: 'Taxes',
  },
  {
    label: 'account',
    className: 'w-33',
    Component: TextInput,
    placeholder: 'agentAccount',
    name: 'AgentAccount',
  },
  {
    label: 'leadSource',
    Component: TextArea,
    className: 'w-66 offset-33',
    name: 'LeadSource',
  },
  {
    className: 'w-50',
    Component: Checkbox,
    label: 'readyOnlyWithoutTrading',
    name: 'EnableReadOnly',
  },
  {
    className: 'w-50',
    Component: Checkbox,
    label: 'sendReports',
    name: 'SendReports',
  },
  {
    className: 'w-50',
    Component: Checkbox,
    label: 'allowToChangePassword',
    name: 'EnableChangePassword',
  },
  {
    label: 'enableOTP',
    Component: Checkbox,
    className: 'w-50',
    name: 'EnableOTP',
  },
  {
    className: 'w-50',
    Component: Checkbox,
    label: 'sponsoredMetaTrade',
    name: 'Enable',
  },
]

export const newOrderFields: IInformationField[] = [
  {
    type: 'number',
    label: 'logIn',
    className: 'w-100',
    Component: TextInput,
  },
  {
    label: 'volume',
    className: 'w-50',
    Component: Select<string>,
    placeholder: 'selectVolume',
    options: [
      { value: 'volume', label: 'Volume' },
      { value: 'volume', label: 'Volume' },
    ],
  },
  {
    className: 'w-50',
    label: 'requestedVolume',
    Component: Select<string>,
    placeholder: 'selectVolume',
    options: [
      { value: 'volume', label: 'Requested volume' },
      { value: 'volume', label: 'Requested volume' },
    ],
  },
  {
    label: 'symbol',
    className: 'w-100',
    Component: Select<string>,
    placeholder: 'selectSymbol',
    options: [
      { value: 'Symbol', label: 'Symbol' },
      { value: 'Symbol', label: 'Symbol' },
    ],
  },
  {
    label: 'comment',
    className: 'w-100',
    Component: TextArea,
  },
  {
    type: 'number',
    label: 'stopLoss',
    className: 'w-50',
    icon: 'arrow-switch',
    Component: TextInput,
  },
  {
    type: 'number',
    className: 'w-50',
    label: 'takeProfit',
    icon: 'arrow-switch',
    Component: TextInput,
  },
  {
    type: 'number',
    className: 'w-100',
    label: 'openPrice',
    icon: 'arrow-switch',
    Component: TextInput,
  },
  {
    label: 'auto',
    className: 'w-50',
    Component: Checkbox,
  },
]
