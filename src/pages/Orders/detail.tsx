import React from 'react'

import { IOrdersListItem } from '@/types'

import OrderData from './orderData'

import orderChatOverview from '@/assets/images/order-chart.png'

interface IOrdersListDetails {
  user?: IOrdersListItem
}

const Detail: React.FC<IOrdersListDetails> = ({ user }) => (
  <div className="data-content w-100">
    <div className="scroll-wrap">
      <div className="new-order">
        <div className="chart-box">
          <img src={orderChatOverview} alt="" />
        </div>
        <OrderData />
      </div>
    </div>
  </div>
)

export default Detail
