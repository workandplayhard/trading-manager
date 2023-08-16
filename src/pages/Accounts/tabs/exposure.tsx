import React from 'react'

import { humanFormatNumber } from '@/utils'
import { t } from '@/i18n'

import longPosition from '@/assets/images/long-positions.png'

import { IExposure } from '@/types'
import { exposureData } from '../mock'
import AccountStatus from '../accountStatus'

export const ExposureTab: React.FC = () => {
  return (
    <div className="data-table">
      <div className="wrap-box">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <td>{t('asset')}</td>
                <td>{t('volume')}</td>
                <td>{t('rate')}</td>
                <td>{t('graph')}</td>
              </tr>
            </thead>
            <tbody>
              {exposureData.map((item: IExposure, idx: number) => {
                const { symbol, symbolIcon, rate, volume, graph } = item
                return (
                  <tr key={idx}>
                    <td>
                      <h4>
                        <img src={symbolIcon} alt="" />
                        {symbol}
                      </h4>
                    </td>
                    <td>{humanFormatNumber(volume)}</td>
                    <td>
                      {t('number', {
                        value: rate,
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td>
                      <span style={{ color: '#ED6E72' }}>
                        <i style={{ backgroundColor: '#ED6E72' }}></i>
                        {graph}%
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <AccountStatus />
        </div>
        <div className="table-chat">
          <h4>{t('longPositions')}</h4>
          <img src={longPosition} alt="" />
        </div>
      </div>
    </div>
  )
}
