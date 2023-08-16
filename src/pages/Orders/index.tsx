import React, { useCallback, useEffect, useState } from 'react'

import { IOrdersListItem, ITrade } from '@/types'
import { Button, Modal } from '@/components'
import { useAPI, useSearch } from '@/hooks'
import { t } from '@/i18n'

import OrdersHeader from './ordersHeader'
import OrdersList from './ordersList'
import Detail from './detail'

const OrdersPage: React.FC = () => {
  const [opened, setOpened] = useState(false)
  const [editingUser, setUser] = useState<IOrdersListItem>()
  const [orders, setOrders] = useState<ITrade[] | undefined>()

  const { loading, getData } = useAPI<ITrade[]>()

  const onSearch = useCallback(
    async (v: string) => {
      getData({
        path: `trading/${v}`,
        callback: d => {
          setOrders(d || [])
        },
      })
    },
    [getData],
  )

  const { text, onChangeText } = useSearch(onSearch)

  useEffect(() => {
    if (!orders) {
      onSearch('')
    }
  }, [onSearch, orders])

  const orderAction = useCallback((action: 'create' | 'edit', user?: any) => {
    if (action === 'edit') {
      setUser(user)
      setOpened(true)
    }
    if (action === 'create') {
      setOpened(true)
      setUser(undefined)
    }
  }, [])

  const onClose = useCallback(() => {
    setUser(undefined)
    setOpened(false)
  }, [])

  return (
    <>
      <div className="item-box w-100">
        <OrdersHeader
          searchText={text}
          onSortBySymbol={() => undefined}
          onSortByType={() => undefined}
          onSearch={onChangeText}
        />
        <OrdersList
          orders={orders || []}
          loading={loading}
          onEdit={order => orderAction('edit', order)}
        />
      </div>
      <Modal
        open={opened}
        onClose={() => setOpened(false)}
        closeOnBackdrop
        title={`Order #${editingUser?.deal.toString()}`}
        className="w-1128 personal"
        modalActions={[
          <Button
            key={1}
            type="button"
            iconLeft="close"
            onClick={onClose}
            children={t('cancel')}
            className="main-btn outline"
          />,
          <Button
            key={2}
            type="button"
            children={t('help')}
            iconLeft="help-circle"
            className="main-btn outline"
          />,
        ]}
      >
        <Detail user={editingUser} />
      </Modal>
    </>
  )
}

export default OrdersPage
