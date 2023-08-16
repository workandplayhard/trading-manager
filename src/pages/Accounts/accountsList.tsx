import React from 'react'

import { IUser } from '@/types'
import { DataTable } from '@/components'
import { t } from '@/i18n'

interface Props {
  loading: boolean
  users: IUser[]
  onEdit: (_user: IUser) => void
}

export const AccountList: React.FC<Props> = ({ loading, users, onEdit }) => {
  return (
    <DataTable<IUser>
      loading={loading}
      headers={[
        t('logIn'),
        t('name'),
        t('group'),
        t('city'),
        t('email'),
        t('balance'),
      ]}
      data={users}
      pageSize={25}
      renderBody={data =>
        data.map((datum, idx) => {
          const { Login, Name, Group, City, Email, Balance } = datum
          return (
            <tr key={idx} onClick={() => onEdit(datum)}>
              <td>{Login}</td>
              <td>{Name}</td>
              <td>{Group}</td>
              <td>{City}</td>
              <td>{Email}</td>
              <td>
                {t('number', {
                  value: Balance,
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
          )
        })
      }
    />
  )
}
export default AccountList
