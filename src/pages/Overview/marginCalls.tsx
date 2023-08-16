import React from 'react'
import classNames from 'classnames'

import { humanFormatNumber } from '@/utils'
import { Icon } from '@/components'
import { t } from '@/i18n'

import { marginCalls } from './mock'

const MarginCalls: React.FC = () => {
  return (
    <div className="item-box w-30">
      <div className="bg-wrap">
        <div className="content-title">
          <h3>{t('marginCalls')}</h3>
        </div>
        <div className="data-table">
          <div className="scroll-wrap">
            <table>
              <thead>
                <tr>
                  <td>{t('accountId')}</td>
                  <td>{t('level')}</td>
                </tr>
              </thead>
              <tbody>
                {marginCalls.map((marginCall, idx) => {
                  const { id, isIncrease, level } = marginCall
                  return (
                    <tr key={idx}>
                      <td>
                        <h4>{id}</h4>
                      </td>
                      <td>
                        <span
                          className={classNames('', {
                            long: isIncrease,
                            short: !isIncrease,
                          })}
                        >
                          <Icon
                            iconName={`trend-${isIncrease ? 'up' : 'down'}`}
                          />
                          {humanFormatNumber(level, ',', true) + '%'}
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

export default MarginCalls
