import React, { useCallback, useState } from 'react'
import classNames from 'classnames'

import { humanFormatNumber } from '@/utils'
import { Tabs, Currency } from '@/components'
import { t } from '@/i18n'

import { TabsList } from './constants'
import { assetsList } from './mock'

const AssetsList: React.FC = () => {
  const [activeTab, setTab] = useState(TabsList[0].key)

  const onTabChange = useCallback((tabKey: string) => {
    // TODO
    setTab(tabKey)
  }, [])

  return (
    <div className="item-box w-100">
      <div className="bg-wrap">
        <Tabs<string>
          tabs={TabsList}
          activeTab={activeTab}
          onChange={onTabChange}
        />
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <td>{t('item')}</td>
                <td>{t('deals')}</td>
                <td>{t('buyVolume')}</td>
                <td>{t('buyPrice')}</td>
                <td>{t('sellVolume')}</td>
                <td>{t('sellPrice')}</td>
                <td>{t('netVolume')}</td>
                <td>{t('profit', { currency: 'USD' })}</td>
                <td>{t('uncovered')}</td>
              </tr>
            </thead>
            <tbody>
              {assetsList.map((assetList, idx) => {
                const {
                  item: { symbol, symbolIcon },
                  deals,
                  buyVolume,
                  buyPrice,
                  sellVolume,
                  sellPrice,
                  netVolume,
                  profit,
                  uncovered,
                  isIncrease,
                } = assetList
                return (
                  <tr key={idx}>
                    <td>
                      <h4>
                        <img src={symbolIcon} alt="" />
                        {symbol}
                      </h4>
                    </td>
                    <td>{deals}</td>
                    <td>{buyVolume}</td>
                    <td>{buyPrice}</td>
                    <td>{sellVolume}</td>
                    <td>{sellPrice}</td>
                    <td>
                      <Currency
                        className={classNames('', {
                          long: isIncrease,
                          short: !isIncrease,
                        })}
                        value={netVolume}
                      />
                    </td>
                    <td>{profit}</td>
                    <td>{uncovered}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AssetsList
