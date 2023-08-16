import React from 'react'

import { t } from '@/i18n'
import { useAuth, useApp } from '@/hooks'
import { Button } from '@/components'
import { APP_LANGUAGES } from '@/constants'

import logoImg from '@/assets/images/logo-01.png'
import avatarImg from '@/assets/images/avatar.png'

const HomePage: React.FC = () => {
  const { onSignOut } = useAuth()
  const { language, onChangeLanguage } = useApp()

  console.error('here')
  // TODO
  return (
    <div className="dashboard-wrap">
      <div className="side-nav">
        <div className="logo">
          <a onClick={() => undefined}>
            <img src={logoImg} alt="" />
          </a>
        </div>
        <div className="navigation">
          <div className="nav-box">
            <ul>
              <li className="active">
                <a onClick={() => undefined}>
                  <span className="ic-overview"></span>Overview
                </a>
              </li>
              <li>
                <a onClick={() => undefined}>
                  <span className="ic-accounts"></span>Accounts
                </a>
              </li>
              <li>
                <a onClick={() => undefined}>
                  <span className="ic-lamp"></span>Orders
                </a>
              </li>
              <li>
                <a onClick={() => undefined}>
                  <span className="ic-reports"></span>Reports
                </a>
              </li>
              <li>
                <a onClick={() => undefined}>
                  <span className="ic-history"></span>Reports History
                </a>
              </li>
              <li>
                <a onClick={() => undefined}>
                  <span className="ic-journal"></span>Journal
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="settings">
          <div className="nav-box">
            <ul>
              <li>
                <a onClick={() => undefined}>
                  <span className="ic-moon"></span>Dark mode
                </a>
                <label className="switcher">
                  <input type="checkbox" />
                  <span></span>
                </label>
              </li>
              <li>
                <a onClick={() => undefined}>
                  <span className="ic-settings"></span>Settings
                </a>
              </li>
              <li>
                <a onClick={() => undefined}>
                  <span className="ic-log-out"></span>Log out
                </a>
              </li>
            </ul>
          </div>
          <div className="user-data">
            <div className="avatar">
              <img src={avatarImg} alt="" />
            </div>
            <div className="info">
              <h4>Annabelle Stone</h4>
              <p>annamanager@yandex.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
