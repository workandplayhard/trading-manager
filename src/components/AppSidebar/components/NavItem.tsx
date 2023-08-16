import React from 'react'
import { NavLink } from 'react-router-dom'

import { t } from '@/i18n'

import { INavItem } from '../types'
import { Icon } from '../../'

export const NavItem: React.FC<INavItem> = ({
  icon,
  path,
  label,
  action,
  disabled,
  rightContent,
}) => {
  return (
    <li>
      <NavLink
        onClick={e => {
          if (disabled) {
            e.preventDefault()
          }
          if (!path) {
            e.preventDefault()
            action?.()
          }
        }}
        to={path}
      >
        <Icon iconName={icon} />
        {t(label)}
      </NavLink>
      {rightContent}
    </li>
  )
}
