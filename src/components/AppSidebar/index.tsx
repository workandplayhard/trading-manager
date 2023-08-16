import React, { useCallback, useMemo } from 'react'

import {
  ordersPath,
  journalPath,
  reportsPath,
  accountsPath,
  overviewPath,
  reportsHistoryPath,
} from '@/utils'
import { useAuth } from '@/hooks'
import { t } from '@/i18n'

import avatar from '@/assets/images/avatar.png'
import logo from '@/assets/images/logo-01.png'

import { NavItem, UserItem } from './components'
import { INavItem } from './types'
import { Switch } from '../'

const PATHS: INavItem[] = [
  {
    icon: 'overview',
    label: t('overview'),
    path: `/${overviewPath}`,
  },
  {
    icon: 'accounts',
    label: t('accounts'),
    path: `/${accountsPath}`,
  },
  {
    icon: 'lamp',
    label: t('orders'),
    path: `/${ordersPath}`,
  },
  {
    icon: 'reports',
    label: t('reports'),
    path: `/${reportsPath}`,
  },
  {
    icon: 'history',
    label: t('reportsHistory'),
    path: `/${reportsHistoryPath}`,
  },
  {
    icon: 'journal',
    label: t('journal'),
    path: `/${journalPath}`,
  },
]

export const AppSidebar: React.FC = () => {
  const { onSignOut } = useAuth()

  const SETTINGS: INavItem[] = useMemo(
    () => [
      {
        path: '',
        icon: 'moon',
        type: 'darkMode',
        label: 'darkMode',
        rightContent: <Switch />,
      },
      {
        path: 'settings',
        icon: 'settings',
        label: t('settings'),
      },
      {
        path: '',
        type: 'logOut',
        icon: 'log-out',
        label: t('logOut'),
      },
    ],
    [],
  )

  const handleActions = useCallback(
    (action?: string) => {
      switch (action) {
        case 'logOut':
          onSignOut()
          break
        case 'darkMode':
          break
      }
    },
    [onSignOut],
  )

  return (
    <div className="side-nav">
      <div className="logo">
        <a onClick={() => undefined}>
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navigation">
        <div className="nav-box">
          <ul>
            {PATHS.map((item, idx) => (
              <NavItem {...item} key={idx} />
            ))}
          </ul>
        </div>
      </div>
      <div className="settings">
        <div className="nav-box">
          <ul>
            {SETTINGS.map((setting, idx) => (
              <NavItem
                key={idx}
                {...setting}
                action={() => handleActions(setting.type)}
              />
            ))}
          </ul>
        </div>
        <UserItem
          avatar={avatar}
          name={'Annabelle Stone'}
          email={'annamanager@yandex.com'}
        />
      </div>
    </div>
  )
}
