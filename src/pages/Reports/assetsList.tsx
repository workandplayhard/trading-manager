import React, { useCallback, useState } from 'react'
import moment from 'moment'

import { Tabs } from '@/components'
import { t } from '@/i18n'

import { TabsList } from './constants'
import { reportsInfo } from './mock'

const AssetsList: React.FC = () => {
  const [activeTab, setTab] = useState(TabsList[TabsList.length - 1].key)

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
                <td>{t('time')}</td>
                <td>{t('server')}</td>
                <td>{t('message')}</td>
              </tr>
            </thead>
            <tbody>
              {reportsInfo.map((info, idx) => (
                <tr key={idx}>
                  <td>{moment(info.time).format('YYYY/MM/DD, HH:mm:ss')}</td>
                  <td>{info.server}</td>
                  <td>{info.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AssetsList
