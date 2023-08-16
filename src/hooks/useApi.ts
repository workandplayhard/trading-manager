import { useCallback, useState } from 'react'
import { AxiosError } from 'axios'

import api from '@/utils/api'

interface ISendData<T> {
  path: string
  method?: 'POST' | 'PUT' | 'DELETE'
  data: T
  callback?: (_res?: T | null) => void
}

interface IGetData<T> {
  path: string
  callback?: (_res?: T | null) => void
}

interface IApiOpts {
  showNotify?: boolean
}

export const useAPI = <T>() => {
  const [loading, setLoading] = useState<boolean>(false)

  const getData = useCallback(
    ({ path, callback }: IGetData<T>, opts?: IApiOpts) => {
      setLoading(true)

      const apiFn = api.get
      apiFn<T>(path)
        .then((res: T | null) => {
          callback?.(res)
        })
        .catch((e: AxiosError) => {
          if (e.message) {
            // TODO: notify method
          }
          // @ts-ignore
          Object.entries(e.response?.data || {}).forEach(
            ([field, messages]) => {
              // TODO: notify method
            },
          )
          console.log({ e })
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [],
  )

  const sendData = useCallback(
    ({ path, method, data, callback }: ISendData<any>, opts?: IApiOpts) => {
      setLoading(true)
      const apiFn =
        method === 'POST'
          ? api.post
          : method === 'PUT'
          ? api.put
          : api.deleteSync

      apiFn<T>(path, data)
        .then((res: T | null) => {
          if (opts?.showNotify) {
            // TODO: notify method
          }
          callback?.(res)
        })
        .catch((e: AxiosError) => {
          if (e.message) {
            // TODO: notify method
          }
          // @ts-ignore
          Object.entries(e.response?.data || {}).forEach(
            ([field, messages]) => {
              // TODO: notify method
            },
          )
          console.log({ e })
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [],
  )

  return { loading, getData, sendData }
}
