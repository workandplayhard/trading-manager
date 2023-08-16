import { useCallback, useEffect, useState } from 'react'

import { IUser, TError } from '@/types'
import { t } from '@/i18n'
import { useAPI } from './useApi'
import { omit } from 'lodash'

interface IUseAccountForm {
  open: boolean
  initial?: IUser
}

export const useAccountForm = ({ open, initial }: IUseAccountForm) => {
  const [user, setUser] = useState<Partial<IUser> | undefined>()
  const [error, setError] = useState<Partial<TError<keyof IUser>>>()
  const { loading, sendData } = useAPI()

  useEffect(() => {
    if (!open) {
      setUser(undefined)
      return
    }
    if (user) return
    if (initial) {
      setUser(initial)
    } else {
      setUser({
        Regdate: new Date().getTime(),
      })
    }
  }, [initial, open, user])

  useEffect(() => {
    if (!user?._id) {
      setError(e => (user?.Password ? { ...e, Password: '' } : e))
    }
  }, [user?.Password, user?._id])

  useEffect(() => {
    setError(e => (user?.Name ? { ...e, Name: '' } : e))
  }, [user?.Name])

  const onChangeForm = useCallback((f: keyof IUser, v: any) => {
    // @ts-ignore
    setUser(prev => ({ ...(prev || {}), [f]: v }))
  }, [])

  const validate = useCallback(() => {
    const _error: Partial<TError<keyof IUser>> = {}
    const requiredFields = user?._id ? ['Name'] : ['Name', 'Password']

    for (const f of requiredFields) {
      const key = f as keyof IUser
      if (
        user?.[key] === undefined ||
        user?.[key] === '' ||
        user?.[key] === null
      ) {
        _error[key] = t('fieldRequired', { fieldName: f })
      }
    }

    setError(prev => ({ ...prev, ..._error }))
    return !Object.values(_error).some(e => !!e)
  }, [user])

  const onSubmit = useCallback(() => {
    const isEditing = !!user?._id
    if (validate()) {
      const omitFields = isEditing ? ['_id', 'Password'] : ['_id']
      const data = omit({ ...(user || {}) }, omitFields)

      sendData({
        path: isEditing ? `/users/${user._id}` : '/users',
        method: isEditing ? 'PUT' : 'POST',
        data,
      })
    }
  }, [sendData, user, validate])

  return {
    data: user || {},
    loading,
    error,
    onChangeForm,
    onSubmit,
  }
}
