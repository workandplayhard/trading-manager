import React from 'react'

import { t } from '@/i18n'
import { IUser } from '@/types'
import { humanFormatNumber } from '@/utils'
import classNames from 'classnames'

interface IAccountStatus {
  user?: IUser
  showFree?: boolean
}

const AccountStatus: React.FC<IAccountStatus> = ({
  user,
  showFree = false,
}) => {
  return (
    <div className="info-line">
      <ul>
        <li>
          <b>{t('balance')}: </b>
          {humanFormatNumber(3208.49)} UST
        </li>
        <li>
          <b>{t('credit')}: </b>
          {humanFormatNumber(10000000.0)}
        </li>
        <li>
          <b>{t('equity')}: </b>
          {humanFormatNumber(10000763.54)}
        </li>
        <li>
          <b>{t('margin')}: </b>
          {humanFormatNumber(2280.99)}
        </li>
        <li>
          <b>{t('free')}: </b>
          {humanFormatNumber(9994489.75) + '/' + humanFormatNumber(4367889.76)}%
          {showFree && (
            <span
              className={classNames('', {
                long: false,
                short: true,
              })}
            >
              {t('currency', { value: humanFormatNumber(-10.08, ',', true) })}
            </span>
          )}
        </li>
      </ul>
    </div>
  )
}

export default AccountStatus
