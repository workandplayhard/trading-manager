import React from 'react'
import classNames from 'classnames'

import { ITrade, TradeReason } from '@/types'
import { DataTable, Currency, DateTime } from '@/components'
import { t } from '@/i18n'

import { getKeyByValue } from '@/utils'

interface Props {
  loading: boolean
  orders: ITrade[]
  onEdit: (_order: ITrade) => void
}

export const OrdersList: React.FC<Props> = ({ loading, orders, onEdit }) => {
  return (
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
        t('stopLoss'),
        t('reason'),
        t('gateway'),
        t('price'),
        t('expiration'),
      ]}
      data={orders}
      pageSize={25}
      renderBody={data =>
        data.map((datum, idx) => {
          const {
            Order,
            Login,
            Timestamp,
            Symbol,
            Volume,
            OpenPrice,
            Sl,
            Reason,
            ClosePrice,
            Expiration,
          } = datum
          return (
            <tr key={idx} onClick={() => onEdit(datum)}>
              <td>
                <b>{Order}</b>
              </td>
              <td>
                <b>{Login}</b>
              </td>
              <td>
                <DateTime
                  value={(Timestamp || 0) * 1000}
                  format="YYYY/MM/DD, HH:mm:ss"
                  placeholder="-"
                />
              </td>
              <td>
                <span
                  className={classNames('with-bg', {
                    // 'red-bg short': type === 'Sell',
                    // 'green-bg long': type === 'Buy',
                  })}
                >
                  -
                </span>
              </td>
              <td>{Symbol}</td>
              <td>{Volume}</td>
              <td>
                <Currency className="long" value={OpenPrice} />
              </td>
              <td>{Sl}</td>
              <td>{getKeyByValue(TradeReason, Reason)}</td>
              <td>-</td>
              <td>
                <Currency className="short" value={ClosePrice} />
              </td>
              <td>
                <DateTime
                  value={(Expiration || 0) * 1000}
                  format="YYYY/MM/DD, HH:mm:ss"
                  placeholder="-"
                />
              </td>
            </tr>
          )
        })
      }
    />
  )
}

export default OrdersList
