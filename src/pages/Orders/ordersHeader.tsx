/* eslint-disable no-unused-vars */
import React from 'react'

import { Button, TextInput } from '@/components'
import { SortBySymbol, SortByType } from '@/types'
import { t } from '@/i18n'

import { optionsBySymbol, optionsByType } from './constants'

interface IOrdersHeader {
  searchText: string | undefined | null
  onSearch: (_val: string) => void
  onSortBySymbol: (key: SortBySymbol) => void
  onSortByType: (key: SortByType) => void
}

export const OrdersHeader: React.FC<IOrdersHeader> = ({
  searchText,
  onSortBySymbol,
  onSortByType,
  onSearch,
}) => {
  return (
    <div className="item-options">
      <div className="options-box">
        <div className="search-box">
          <Button iconLeft="search"></Button>
          <TextInput
            placeholder={t('search')}
            value={searchText || ''}
            onChangeText={onSearch}
          />
        </div>
        <div className="form-fields">
          <label className="w-100">
            <span className="select">
              <select>
                <option selected>{t('sortBySymbol')}</option>
                {optionsBySymbol.map(({ label, value }, idx: number) => (
                  <option key={idx} onSelect={() => onSortBySymbol(value)}>
                    {t(label)}
                  </option>
                ))}
              </select>
            </span>
          </label>
        </div>
        <div className="form-fields">
          <label className="w-100">
            <span className="select">
              <select>
                <option selected>{t('sortByType')}</option>
                {optionsByType.map(({ label, value }, idx: number) => (
                  <option key={idx} onSelect={() => onSortByType(value)}>
                    {t(label)}
                  </option>
                ))}
              </select>
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}
export default OrdersHeader
