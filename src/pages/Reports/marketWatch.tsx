import React from 'react'
import classNames from 'classnames'
import moment from 'moment'

import { humanFormatNumber } from '@/utils'
import { t } from '@/i18n'

import { marketWatch } from './mock'

const MarketWatch: React.FC = () => {
  return (
    <div className="item-box w-30">
      <div className="bg-wrap">
        <div className="content-title">
          <h3>{t('marketWatch')}</h3>
        </div>
        <div className="data-table">
          <div className="scroll-wrap">
            <table>
              <thead>
                <tr>
                  <td>{t('symbol')}</td>
                  <td>{t('bid')}</td>
                  <td>{t('ask')}</td>
                  <td>{t('time')}</td>
                </tr>
              </thead>
              <tbody>
                {marketWatch.map((market, idx) => {
                  const {
                    time,
                    symbolIcon,
                    symbol,
                    ask: { value, isIncrease },
                  } = market
                  return (
                    <tr key={idx}>
                      <td>
                        <h4>
                          <img src={symbolIcon} alt="" />
                          {symbol}
                        </h4>
                      </td>
                      <td>
                        <span
                          className={classNames('', {
                            long: isIncrease,
                            short: !isIncrease,
                          })}
                        >
                          {humanFormatNumber(7.425)}
                        </span>
                      </td>
                      <td>
                        <span
                          className={classNames('', {
                            long: isIncrease,
                            short: !isIncrease,
                          })}
                        >
                          {humanFormatNumber(value)}
                        </span>
                      </td>
                      <td>{moment(time).format('DD/MM/YYYY')}</td>
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

export default MarketWatch
