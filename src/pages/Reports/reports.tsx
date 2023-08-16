import React, { useCallback } from 'react'
import classNames from 'classnames'
import moment from 'moment'

import { humanFormatNumber } from '@/utils'
import { ActionMenu } from '@/components'
import { IReport } from '@/types'
import { t } from '@/i18n'

import { menuActions } from './constants'
import { reportsData } from './mock'

interface IReports {
  onSelect?: (report: IReport) => void
}

const Reports: React.FC<IReports> = ({ onSelect }) => {
  const handleAction = useCallback(
    (action: string, report: IReport) => {
      if (action === 'edit') {
        onSelect?.(report)
      }
    },
    [onSelect],
  )

  return (
    <div className="item-box w-67">
      <div className="bg-wrap">
        <div className="content-title">
          <h3>{t('reports')}</h3>
        </div>
        <div className="data-table">
          <div className="scroll-wrap">
            <table>
              <thead>
                <tr>
                  <td>{t('deal')}</td>
                  <td>{t('logIn')}</td>
                  <td>{t('time')}</td>
                  <td>{t('type')}</td>
                  <td>{t('symbol')}</td>
                  <td>{t('volume')}</td>
                  <td>{t('openTime')}</td>
                  <td colSpan={2}>{t('price')}</td>
                </tr>
              </thead>
              <tbody>
                {reportsData.map((report, idx) => {
                  const {
                    deal,
                    logIn,
                    time,
                    type,
                    symbol,
                    volume,
                    openTime,
                    price,
                    isIncrease,
                  } = report
                  return (
                    <tr key={idx}>
                      <td>
                        <b>{deal}</b>
                      </td>
                      <td>
                        <b>{logIn}</b>
                      </td>
                      <td>{moment(time).format('YYYY/MM/DD, HH:mm:ss')}</td>
                      <td>
                        <span
                          className={classNames('with-bg', {
                            long: type === 'buy',
                            short: type === 'sell',
                          })}
                          style={{
                            backgroundColor:
                              type === 'buy'
                                ? 'rgba(3, 166, 109, 0.16)'
                                : 'rgba(237, 110, 114, 0.16)',
                          }}
                        >
                          {t(type)}
                        </span>
                      </td>
                      <td>{symbol}</td>
                      <td>{volume}</td>
                      <td>{moment(openTime).format('YYYY/MM/DD, HH:mm:ss')}</td>
                      <td>
                        <span
                          className={classNames('', {
                            long: isIncrease,
                            short: !isIncrease,
                          })}
                        >
                          {t('currency', {
                            value: humanFormatNumber(price, ',', true),
                          })}
                        </span>
                      </td>
                      <td>
                        <ActionMenu
                          options={menuActions}
                          onClick={action => handleAction(action, report)}
                        />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="info-line">
              <ul>
                <li>
                  <b>{t('profitLabel')}: </b>
                  {humanFormatNumber(3208.49, ',', true)} UST
                </li>
                <li>
                  <b>{t('swap')}: </b>
                  {humanFormatNumber(-1306.24, ',', true)}
                </li>
                <li>
                  <b>{t('commission')}: </b>
                  {humanFormatNumber(-2306.24, ',', true)}
                </li>
                <li>
                  <b>{t('deposit')}: </b>
                  {humanFormatNumber(2280.99, ',', true)}
                </li>
                <li>
                  <b>{t('credit')}: </b>
                  {humanFormatNumber(19994480, ',', true)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
