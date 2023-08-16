import React from 'react'

import { Icon } from '@/components'
import { LanguageSelector } from '../'

interface IAppHeader {
  title: string
}

export const AppHeader: React.FC<IAppHeader> = ({ title }) => {
  return (
    <div className="data-toolbar">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="toolbar-nav">
        <div className="nav-box">
          <ul>
            <li>
              <a onClick={() => undefined}>
                <Icon iconName="bell" />
              </a>
            </li>
          </ul>
        </div>
        <LanguageSelector />
      </div>
    </div>
  )
}
