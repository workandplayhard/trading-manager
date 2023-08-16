import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import { Button, Currency, DataTable } from '@/components'
import { useAPI } from '@/hooks'
import { t } from '@/i18n'
import { ITrade, IUser } from '@/types'

import { tradesData } from '../mock'
import AccountStatus from '../accountStatus'

interface ITradesTab {
  user?: IUser
}

export const TradesTab: React.FC<ITradesTab> = ({ user }) => {
  const { loading, getData } = useAPI<ITrade[]>()
  const [trades, setTrades] = useState<ITrade[]>([])

  useEffect(() => {
    getData({
      path: `trading/${user?.Login}`,
      callback: d => {
        setTrades(d || tradesData)
      },
    })
  }, [getData, user?.Login])

  return (
    <>
      <DataTable<ITrade>
        loading={loading}
        headers={[
          t('deal'),
          t('logIn'),
          t('time'),
          t('type'),
          t('symbol'),
          t('volume'),
          t('price'),
          t('sL'),
          t('tP'),
          t('price'),
          t('commission'),
        ]}
        data={trades}
        renderBody={data =>
          data.map((datum, idx) => {
            const {
              Order,
              Login,
              Timestamp,
              Symbol,
              Volume,
              Sl,
              Tp,
              Commission,
              OpenPrice,
              Type,
            } = datum
            return (
              <tr key={idx}>
                <td>{Order}</td>
                <td>{Login}</td>
                <td>{Timestamp}</td>
                <td>
                  <span
                    className="long with-bg"
                    style={{
                      backgroundColor: 'rgba(3, 166, 109, 0.16)',
                    }}
                  >
                    {t(Type)}
                  </span>
                </td>
                <td>{Symbol}</td>
                <td>
                  {t('number', {
                    value: Volume,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td>
                  <Currency
                    className={classNames('', {
                      long: idx % 3 === 0,
                      short: idx % 3 !== 0,
                    })}
                    value={OpenPrice}
                    showSign
                  />
                </td>
                <td>
                  {t('number', {
                    value: Sl,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td>
                  {t('number', {
                    value: Tp,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </td>
                <td>{OpenPrice.toFixed(2)}</td>
                <td>
                  <Currency className="short" value={Commission} showSign />
                </td>
              </tr>
            )
          })
        }
      >
        <AccountStatus showFree />
      </DataTable>
      <div className="btn-group">
        <div className="group-wrap">
          <Button type="button" className="main-btn outline">
            {t('deposit/Withdrawal')}
          </Button>
          <Button type="button" className="main-btn outline">
            {t('creditFacility')}
          </Button>
          <Button type="button" className="main-btn outline disabled">
            {t('closeAll')}
          </Button>
        </div>
        <div className="group-wrap">
          <Button type="button" className="main-btn outline">
            {t('history')}
          </Button>
          <Button type="button" className="main-btn">
            {t('saveAs')}
          </Button>
        </div>
      </div>
    </>
  )
}
