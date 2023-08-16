import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { IUser } from '@/types'
import { useAPI, useSearch } from '@/hooks'

import AccountHeader from './accountHeader'
import AccountModal from './accountModal'
import AccountList from './accountsList'
import { accountsList } from './mock'

const AccountsPage: React.FC = () => {
  const [opened, setOpened] = useState(false)
  const [editingUser, setUser] = useState<IUser>()
  const [users, setUsers] = useState<IUser[]>([])
  const [searchKey, setSearchKey] = useState<string>('')

  const onSearch = useCallback(async (v: string) => {
    setSearchKey(v.toLowerCase())
  }, [])

  const { loading, getData } = useAPI<IUser[]>()
  const { text, searching, onChangeText } = useSearch(onSearch)

  const accountAction = useCallback((action: 'create' | 'edit', user?: any) => {
    if (action === 'edit') {
      setUser(user)
      setOpened(true)
    }
    if (action === 'create') {
      setUser(undefined)
      setOpened(true)
    }
  }, [])

  const onClose = useCallback(() => {
    setOpened(false)
    setUser(undefined)
  }, [])

  const filteredUsers = useMemo(() => {
    return users.filter(item => item.Name?.toLowerCase().includes(searchKey))
  }, [searchKey, users])

  useEffect(() => {
    getData({
      path: 'users',
      callback: d => {
        setUsers(d || accountsList)
      },
    })
  }, [getData])

  return (
    <div className="item-box w-100">
      <AccountHeader
        searchText={text}
        onSort={() => undefined}
        onSearch={onChangeText}
        onCreateAccount={() => accountAction('create')}
      />
      <AccountList
        loading={loading}
        users={filteredUsers}
        onEdit={user => accountAction('edit', user)}
      />
      <AccountModal onClose={onClose} open={opened} user={editingUser} />
    </div>
  )
}

export default AccountsPage
