import React from 'react'

export type TLang = 'en' | 'he'

export interface ISignInPayload {
  email: string
  password: string
}

export interface IOption<T = string> {
  label: string
  value: T
  icon?: string
}

export type ArgumentType = string | number | boolean | any

export interface ITab<T> {
  key: T
  label: string
}

export interface IMarket {
  symbol: string
  symbolIcon: string
  ask: {
    value: number
    isIncrease: boolean
  }
}

export interface IAccountOnline {
  id: number
  name: string
  group: string
  email?: string
}

export interface IMarginCall {
  id: number
  level: number
  isIncrease: boolean
}

export interface IAssetList {
  item: Omit<IMarket, 'ask'>
  deals: string
  buyVolume: string
  buyPrice: string
  sellVolume: string
  sellPrice: string
  netVolume: number
  profit: string
  uncovered: string
  isIncrease: boolean
}

export interface IOrdersListItem {
  deal: number
  logIn: number
  time: Date
  type: string
  symbol: string
  volume: number
  price: number
  stopless: number
  reason: string
  gateway: string
  _price: number
  expiration: string
}

export type SortType = 'manager' | 'dataCenter'

export type Type = 'sell' | 'buy'

export interface IInformationField<T = string, U = object> {
  unit?: string
  label: string
  type?: string
  icon?: string
  className?: string
  placeholder?: string
  options?: IOption<T>[]
  name?: keyof U
  Component: React.ElementType
  renderOption?: (value: IOption<T>, index: number) => React.ReactNode
}

export interface IExposure {
  rate: number
  graph: number
  volume: number
  symbol: string
  symbolIcon: string
}

export type SortBySymbol = 'hkg' | 'oq'
export type SortByType = 'Sell' | 'Buy'
export interface IReport {
  deal: string
  logIn: number
  time: string
  type: Type
  symbol: string
  volume: number
  openTime: string
  price: number
  isIncrease: boolean
}

export interface IActionMenuOption<T> {
  label: string
  action: T
  iconLeft?: string
  iconRight?: string
  className?: string
}

export interface IReportInfo {
  time: string
  server: string
  message: string
}

export type TError<T extends string = string> = Record<T, string>
