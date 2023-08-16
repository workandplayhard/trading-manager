import React from 'react'

import { Button, TextInput } from '@/components'
import { SortType } from '@/types'
import { t } from '@/i18n'

import { options } from './constants'

interface IAccountHeader {
  searchText: string | undefined | null
  onSearch: (_val: string) => void
  onCreateAccount: () => void
  onSort: (_key: SortType) => void
}

export const AccountHeader: React.FC<IAccountHeader> = ({
  searchText,
  onSort,
  onSearch,
  onCreateAccount,
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
              <select defaultValue="default">
                <option disabled value="default">
                  {t('sortByGroup')}
                </option>
                {options.map(({ label, value }, idx) => (
                  <option key={idx} onSelect={() => onSort(value)}>
                    {t(label)}
                  </option>
                ))}
              </select>
            </span>
          </label>
        </div>
      </div>
      <div className="action-btn">
        <Button className="main-btn" iconRight="plus" onClick={onCreateAccount}>
          {t('newAccount')}
        </Button>
      </div>
    </div>
  )
}
export default AccountHeader
