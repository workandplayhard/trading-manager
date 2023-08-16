import React from 'react'
import classNames from 'classnames'

import { ArgumentType } from '@/types'
import { t } from '@/i18n'

import { ITabsProps } from './types'

export const Tabs = <T extends ArgumentType>({
  tabs,
  onChange,
  activeTab,
}: ITabsProps<T>) => {
  return (
    <div className="tabs-header">
      <ul>
        {tabs.map(({ key, label }, idx) => (
          <li
            key={idx.toString()}
            onClick={() => onChange(key)}
            className={classNames('', {
              active: activeTab === key,
            })}
          >
            <a onClick={() => undefined}>{t(label)}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
