import React from 'react'

import { Button, DateTimePicker, Switch } from '@/components'
import { IUser, IOption, TError } from '@/types'
import { t } from '@/i18n'
import { useAccountForm } from '@/hooks'

import { informationFields } from '../constants'
import { ColorRow } from './colorRow'

interface IProfileTab {
  open: boolean
  user?: IUser
}

export const ProfileTab: React.FC<IProfileTab> = ({ open, user }) => {
  const { data, loading, error, onChangeForm, onSubmit } = useAccountForm({
    open,
    initial: user,
  })

  return (
    <>
      <div className="content-toolbar">
        <div className="filter-switcher">
          <h3>{t('enable')}</h3>
          <Switch
            checked={!!data['Enable']}
            disabled={loading}
            onChange={(value: boolean) => onChangeForm('Enable', value)}
          />
        </div>
        <DateTimePicker
          value={data['Regdate'] ? new Date(data['Regdate']) : undefined}
          disabled={loading}
          onChange={value =>
            onChangeForm('Regdate', value ? value.getTime() : null)
          }
          format={'MMM dd, yyyy,HH:mm'}
        />
      </div>
      <div className="form-fields">
        {informationFields.map((field, idx) => {
          const { Component, label, placeholder, name, ...rest } = field
          return (
            <Component
              key={idx}
              label={t(label)}
              renderOption={(item: IOption<string>, index: number) =>
                label === 'color' && <ColorRow {...item} key={index} />
              }
              placeholder={t(placeholder || '')}
              name={name}
              // @ts-ignore
              value={data[name || ''] || ''}
              onChangeText={(value: string) =>
                onChangeForm(name as keyof IUser, value)
              }
              onChange={(value: boolean) =>
                onChangeForm(name as keyof IUser, value)
              }
              error={error?.[name as keyof Partial<TError<keyof IUser>>]}
              disabled={loading}
              {...rest}
            />
          )
        })}
      </div>
      <div className="action-btn">
        {user && (
          <>
            <Button className="main-btn outline disabled" type="button">
              {t('notification')}
            </Button>
            <Button className="main-btn outline" type="button">
              {t('journal')}
            </Button>
          </>
        )}
        <Button
          className="main-btn"
          type="button"
          onClick={onSubmit}
          disabled={loading}
        >
          {t('create')}
        </Button>
      </div>
    </>
  )
}
