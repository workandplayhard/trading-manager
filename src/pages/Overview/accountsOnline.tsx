import React from 'react'

import { t } from '@/i18n'

import { accountsOnline } from './mock'

const AccountsOnline: React.FC = () => {
  return (
    <div className="item-box w-40">
      <div className="bg-wrap">
        <div className="content-title">
          <h3>{t('accountsOnline')}</h3>
        </div>
        <div className="data-table">
          <div className="scroll-wrap">
            <table>
              <thead>
                <tr>
                  <td>{t('id')}</td>
                  <td>{t('name')}</td>
                  <td>{t('group')}</td>
                  <td>{t('email')}</td>
                </tr>
              </thead>
              <tbody>
                {accountsOnline.map(account => {
                  const { id, name, email, group } = account
                  return (
                    <tr key={id}>
                      <td>
                        <b>{id}</b>
                      </td>
                      <td>{name}</td>
                      <td>{t(group)}</td>
                      <td>{email || '-'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountsOnline
