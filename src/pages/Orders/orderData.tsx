import React from 'react'

import { Button, Icon, Select, TextArea, TextInput } from '@/components'
import { t } from '@/i18n'

import { newOrderFields } from './constants'
import moment from 'moment'

const OrderData: React.FC = () => {
  return (
    <div className="order-data">
      <div className="item-wrap">
        <div className="item-title">
          <h4>John Doe</h4>
        </div>
        <div className="form-fields">
          <TextInput label={t('order')} icon="close" value="40055667" />
          <Select
            label={t('expiry')}
            className="w-100"
            options={[
              { label: 'expiry', value: '2023/05/03,16:34' },
              { label: 'expiry', value: '2023/05/03,17:34' },
              { label: 'expiry', value: '2023/05/03,18:34' },
            ]}
            renderOption={item => {
              return (
                <p>
                  <i className="ic-calendar"></i>
                  {moment(item.value).format(' YYYY/MM/DD, ')}
                  <b>{moment(item.value).format('HH:mm')}</b>
                </p>
              )
            }}
          />
          <Select
            label={t('expiry')}
            className="w-100 disabled"
            options={[
              { label: 'expiry', value: '2023/05/03,16:34' },
              { label: 'expiry', value: '2023/05/03,17:34' },
              { label: 'expiry', value: '2023/05/03,18:34' },
            ]}
            renderOption={(item, idx) => (
              <p key={idx}>
                <i className="ic-calendar"></i>
                {moment(item.value).format(' YYYY/MM/DD, ')}
                <b>{moment(item.value).format('HH:mm')}</b>
              </p>
            )}
          />
          {newOrderFields.map((field, idx) => {
            const { Component, label, placeholder, ...rest } = field
            return (
              <Component
                key={idx}
                label={t(label)}
                placeholder={t(placeholder || '')}
                {...rest}
              />
            )
          })}
          <div className="group-fields">
            <Button className="switch-btn">
              <Icon iconName="update" />
            </Button>
            <TextInput className="w-50" label={t('takeProfit')} type="number" />
            <TextInput className="w-50" type="number" />
          </div>
          <TextArea className="w-100" label={t('comment')} />
        </div>
      </div>
      <div className="item-wrap">
        <div className="itme-title">
          <h4>{t('process')}</h4>
        </div>
        <div className="form-fields">
          <div className="group-fields">
            <Select
              className="w-50"
              label={t('volume')}
              options={[
                { label: '50', value: 50 },
                { label: '50', value: 50 },
                { label: '50', value: 50 },
              ]}
            />
            <TextInput className="w-50" type="number" />
          </div>
          <div className="group-title">
            <h4>{t('processClose')}</h4>
          </div>
          <div className="group-fields">
            <Select
              className="w-50 disabled"
              options={[
                { label: '50', value: 50 },
                { label: '50', value: 50 },
                { label: '50', value: 50 },
              ]}
            />
            <div className="fields-btn w-50">
              <Button className="disabled">{t('closeBy')}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderData
