import { default as axios } from 'axios'
import {
  API_ENDPOINT,
  AUTH_TOKEN_KEY,
  XMt4Login,
  XMt4Password,
  XMt4Server,
} from '@/constants'
import { getStorageValue } from '@/utils'

interface IRes<T> {
  data: T | null
}

function getFunc(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
): [any, string | null] {
  const authToken = getStorageValue(AUTH_TOKEN_KEY)
  if (method === 'GET') return [axios.get, authToken]
  if (method === 'POST') return [axios.post, authToken]
  if (method === 'PUT') return [axios.put, authToken]
  if (method === 'PATCH') return [axios.patch, authToken]
  if (method === 'DELETE') return [axios.delete, authToken]

  return [axios.get, authToken]
}

async function getAsync<T>(
  path: string,
  params?: Record<string, any>,
): Promise<T | null> {
  try {
    const [callFunc, token] = getFunc('GET')
    const response: IRes<T> = await callFunc(`${API_ENDPOINT}/${path}`, {
      params,
      headers: {
        'x-mt4-login': XMt4Login,
        'x-mt4-password': XMt4Password,
        'x-mt4-server': XMt4Server,
        Authorization: token,
      },
    })
    return response.data || null
  } catch (error) {
    return null
  }
}

function get<T>(
  path: string,
  params?: Record<string, any>,
  headers?: Record<string, any>,
  config?: Record<string, any>,
): Promise<T | null> {
  const [callFunc, token] = getFunc('GET')
  return new Promise((resolve, reject) => {
    callFunc(`${API_ENDPOINT}/${path}`, {
      ...config,
      params,
      headers: {
        Authorization: token,
        'x-mt4-login': XMt4Login,
        'x-mt4-password': XMt4Password,
        'x-mt4-server': XMt4Server,
        ...headers,
      },
    })
      .then((response: IRes<T>) => {
        resolve(response.data || null)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}

async function postAsync<T>(path: string, params?: Record<string, any>) {
  try {
    const [callFunc, token] = getFunc('POST')
    const response: T = await callFunc(
      `${API_ENDPOINT}/${path}`,
      {
        ...(params || {}),
      },
      {
        headers: {
          'x-mt4-login': XMt4Login,
          'x-mt4-password': XMt4Password,
          'x-mt4-server': XMt4Server,
          Authorization: token,
        },
      },
    )
    return response
  } catch (error) {
    return null
  }
}

function post<T>(
  path: string,
  params?: Record<string, any>,
): Promise<T | null> {
  const [callFunc, token] = getFunc('POST')
  return new Promise((resolve, reject) => {
    callFunc(
      `${API_ENDPOINT}/${path}`,
      {
        ...(params || {}),
      },
      {
        headers: {
          'x-mt4-login': XMt4Login,
          'x-mt4-password': XMt4Password,
          'x-mt4-server': XMt4Server,
          Authorization: token,
        },
      },
    )
      .then((response: IRes<T>) => {
        resolve(response.data || null)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}

async function putAsync<T>(path: string, params?: Record<string, any>) {
  try {
    const [callFunc, token] = getFunc('PUT')
    const response: T | null = await callFunc(
      `${API_ENDPOINT}/${path}`,
      {
        ...(params || {}),
      },
      {
        headers: {
          'x-mt4-login': XMt4Login,
          'x-mt4-password': XMt4Password,
          'x-mt4-server': XMt4Server,
          Authorization: token,
        },
      },
    )
    return response
  } catch (error) {
    return null
  }
}

function put<T>(path: string, params?: Record<string, any>): Promise<T | null> {
  const [callFunc, token] = getFunc('PUT')
  return new Promise((resolve, reject) => {
    callFunc(
      `${API_ENDPOINT}/${path}`,
      {
        ...(params || {}),
      },
      {
        headers: {
          'x-mt4-login': XMt4Login,
          'x-mt4-password': XMt4Password,
          'x-mt4-server': XMt4Server,
          Authorization: token,
        },
      },
    )
      .then((response: IRes<T>) => {
        resolve(response.data || null)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}

async function deleteAsync<T>(path: string) {
  try {
    const [callFunc, token] = getFunc('DELETE')
    const response: T = await callFunc(`${API_ENDPOINT}/${path}`, {
      headers: {
        'x-mt4-login': XMt4Login,
        'x-mt4-password': XMt4Password,
        'x-mt4-server': XMt4Server,
        Authorization: token,
      },
    })
    return response
  } catch (error) {
    return null
  }
}

function deleteSync<T>(path: string): Promise<T | null> {
  const [callFunc, token] = getFunc('DELETE')
  return new Promise((resolve, reject) => {
    callFunc(`${API_ENDPOINT}/${path}`, {
      headers: {
        'x-mt4-login': XMt4Login,
        'x-mt4-password': XMt4Password,
        'x-mt4-server': XMt4Server,
        Authorization: token,
      },
    })
      .then((response: IRes<T>) => {
        resolve(response?.data || null)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}

export default {
  get,
  getAsync,
  post,
  postAsync,
  put,
  putAsync,
  deleteSync,
  deleteAsync,
}
