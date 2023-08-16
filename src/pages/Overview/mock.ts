import { IAccountOnline, IAssetList, IMarginCall, IMarket } from '@/types'

import item1 from '@/assets/images/overview/item-01.png'
import item2 from '@/assets/images/overview/item-02.png'
import item3 from '@/assets/images/overview/item-03.png'
import item4 from '@/assets/images/overview/item-04.png'
import item5 from '@/assets/images/overview/item-05.png'

export const marketWatch: IMarket[] = [
  {
    symbol: 'USDCNH',
    symbolIcon: item2,
    ask: {
      value: 61.8766,
      isIncrease: true,
    },
  },
  {
    symbol: 'USDCZK',
    symbolIcon: item3,
    ask: {
      value: 21.3326,
      isIncrease: true,
    },
  },
  {
    symbol: 'USDILS',
    symbolIcon: item2,
    ask: {
      value: 61.878,
      isIncrease: true,
    },
  },
  {
    symbol: 'USDZAR',
    symbolIcon: item5,
    ask: {
      value: 3.6568,
      isIncrease: true,
    },
  },
  {
    symbol: 'USDZAR',
    symbolIcon: item3,
    ask: {
      value: 18.86594,
      isIncrease: false,
    },
  },
  {
    symbol: 'USDZAR',
    symbolIcon: item1,
    ask: {
      value: 79.717,
      isIncrease: false,
    },
  },
  {
    symbol: 'EURNOK',
    symbolIcon: item5,
    ask: {
      value: 11.7783,
      isIncrease: true,
    },
  },
  {
    symbol: 'USDCNH',
    symbolIcon: item2,
    ask: {
      value: 79.717,
      isIncrease: false,
    },
  },
  {
    symbol: 'USDZAR',
    symbolIcon: item4,
    ask: {
      value: 11.7783,
      isIncrease: true,
    },
  },
  {
    symbol: 'USDZAR',
    symbolIcon: item1,
    ask: {
      value: 79.717,
      isIncrease: false,
    },
  },
  {
    symbol: 'EURNOK',
    symbolIcon: item5,
    ask: {
      value: 11.7783,
      isIncrease: true,
    },
  },
  {
    symbol: 'USDCNH',
    symbolIcon: item2,
    ask: {
      value: 79.717,
      isIncrease: false,
    },
  },
  {
    symbol: 'USDZAR',
    symbolIcon: item4,
    ask: {
      value: 11.7783,
      isIncrease: true,
    },
  },
  {
    symbol: 'USDILS',
    symbolIcon: item2,
    ask: {
      value: 61.878,
      isIncrease: true,
    },
  },
  {
    symbol: 'USDZAR',
    symbolIcon: item5,
    ask: {
      value: 3.6568,
      isIncrease: true,
    },
  },
  {
    symbol: 'USDZAR',
    symbolIcon: item3,
    ask: {
      value: 18.86594,
      isIncrease: false,
    },
  },
  {
    symbol: 'USDZAR',
    symbolIcon: item1,
    ask: {
      value: 79.717,
      isIncrease: false,
    },
  },
  {
    symbol: 'EURNOK',
    symbolIcon: item5,
    ask: {
      value: 11.7783,
      isIncrease: true,
    },
  },
]

export const accountsOnline: IAccountOnline[] = [
  {
    id: 1,
    group: 'manager',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 2,
    group: 'dataCenter',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 3,
    group: 'manager',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 4,
    group: 'manager',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 5,
    group: 'dataCenter',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 6,
    group: 'manager',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 7,
    group: 'dataCenter',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 81,
    group: 'manager',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 19,
    group: 'dataCenter',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 111,
    group: 'manager',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 722,
    group: 'manager',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 11,
    group: 'manager',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 31,
    group: 'dataCenter',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 14,
    group: 'manager',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 13,
    group: 'dataCenter',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
  {
    id: 41,
    group: 'manager',
    name: 'Test name',
    email: 'testemail@gmail.com',
  },
]

export const marginCalls: IMarginCall[] = [
  {
    id: 40377973,
    isIncrease: false,
    level: -32006357.09,
  },
  {
    id: 18377966,
    level: -2379.13,
    isIncrease: false,
  },
  {
    id: 40377956,
    level: -611.61,
    isIncrease: false,
  },
  {
    id: 11355094,
    level: -572.56,
    isIncrease: false,
  },
  {
    id: 11355016,
    level: -504.97,
    isIncrease: false,
  },
  {
    id: 16678809,
    level: -345.25,
    isIncrease: false,
  },
  {
    id: 40377923,
    level: -270.25,
    isIncrease: false,
  },
  {
    id: 13354567,
    level: -177.66,
    isIncrease: false,
  },
  {
    id: 15354568,
    level: -119.24,
    isIncrease: false,
  },
  {
    id: 12354543,
    level: 9.87,
    isIncrease: true,
  },
  {
    id: 56354588,
    level: 13.25,
    isIncrease: true,
  },
  {
    id: 17354565,
    level: 40.99,
    isIncrease: true,
  },
  {
    id: 17354565,
    level: 23.13,
    isIncrease: true,
  },
]

export const assetsList: IAssetList[] = [
  {
    item: {
      symbol: 'ZARJPY',
      symbolIcon: item1,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDCNH',
      symbolIcon: item2,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDCZK',
      symbolIcon: item3,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDILS',
      symbolIcon: item4,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: -26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: false,
  },
  {
    item: {
      symbol: 'USDZAR',
      symbolIcon: item5,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'ZARJPY',
      symbolIcon: item1,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDCNH',
      symbolIcon: item2,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDCZK',
      symbolIcon: item3,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDILS',
      symbolIcon: item4,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: -26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: false,
  },
  {
    item: {
      symbol: 'USDZAR',
      symbolIcon: item5,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'ZARJPY',
      symbolIcon: item1,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDCNH',
      symbolIcon: item2,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDCZK',
      symbolIcon: item3,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDILS',
      symbolIcon: item4,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: -26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: false,
  },
  {
    item: {
      symbol: 'USDZAR',
      symbolIcon: item5,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'ZARJPY',
      symbolIcon: item1,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDCNH',
      symbolIcon: item2,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDCZK',
      symbolIcon: item3,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDILS',
      symbolIcon: item4,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: -26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: false,
  },
  {
    item: {
      symbol: 'USDZAR',
      symbolIcon: item5,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'ZARJPY',
      symbolIcon: item1,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDCNH',
      symbolIcon: item2,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDCZK',
      symbolIcon: item3,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
  {
    item: {
      symbol: 'USDILS',
      symbolIcon: item4,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: -26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: false,
  },
  {
    item: {
      symbol: 'USDZAR',
      symbolIcon: item5,
    },
    deals: '74/0',
    buyVolume: '26.62 / 0.00',
    buyPrice: '4,152/0.00',
    sellVolume: '0,51/0,00',
    sellPrice: '0,51/0,00',
    netVolume: 26.11,
    profit: '0,51/0,00',
    uncovered: '0,51/0,00',
    isIncrease: true,
  },
]