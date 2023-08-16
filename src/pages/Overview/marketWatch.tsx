import React from 'react'
import classNames from 'classnames'

import { humanFormatNumber } from '@/utils'
import { IMarket } from '@/types'
import { t } from '@/i18n'

import { marketWatch } from './mock'

interface IMarketWatch {
  onSelect: (market: IMarket) => void
}

const MarketWatch: React.FC<IMarketWatch> = ({ onSelect }) => {
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
                </tr>
              </thead>
              <tbody>
                {marketWatch.map((market, idx) => {
                  const {
                    symbolIcon,
                    symbol,
                    ask: { value, isIncrease },
                  } = market
                  return (
                    <tr key={idx} onClick={() => onSelect(market)}>
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
