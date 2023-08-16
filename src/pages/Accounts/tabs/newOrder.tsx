import React from 'react'
import moment from 'moment'

import { Button, Icon, Select, TextInput } from '@/components'
import { t } from '@/i18n'

import symbolOverview from '@/assets/images/symbol-overview.png'

import { newOrderFields } from '../constants'

export const NewOrderTab: React.FC = () => {
  return (
    <div className="new-order">
      <div className="chart-box">
        <img src={symbolOverview} alt="" />
      </div>
      <div className="order-data">
        <div className="item-wrap">
          <div className="item-title">
            <h4>{t('loremIpsum')}</h4>
          </div>
          <div className="form-fields">
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
            <div className="update-btn w-50">
              <Button type="button" className="main-btn outline">
                <Icon iconName="update" />
                {t('update')}
              </Button>
            </div>
          </div>
          <div className="action-btn">
            <Button type="button" className="main-btn red">
              {t('sellAt', { at: 1.10544 })}
            </Button>
            <Button type="button" className="main-btn green">
              {t('buyAt', { at: 1.10544 })}
            </Button>
          </div>
        </div>
        <div className="item-wrap">
          <div className="item-title">
            <h4>{t('pendingOrder')}</h4>
          </div>
          <div className="form-fields">
            <Select
              className="w-50"
              label={t('type')}
              placeholder={t('buyLimit')}
              options={[
                { label: 'Type', value: 'type' },
                { label: 'Type', value: 'type' },
                { label: 'Type', value: 'type' },
              ]}
            />
            <TextInput
              type="number"
              className="w-50"
              icon="arrow-switch"
              label={t('atPrice')}
            />
            <Select
              label={t('expiry')}
              className="w-100"
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
          </div>
          <div className="action-btn">
            <Button type="button" className="main-btn">
              {t('place')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
