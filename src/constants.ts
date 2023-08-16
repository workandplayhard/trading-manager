import { TLang } from '@/types'

export const LANG_KEY = '@lang'

export const DEFAULT_LANG = 'en'

export const APP_LANGUAGES: Record<'EN' | 'HE', TLang> = {
  EN: 'en',
  HE: 'he',
}

export const AUTH_TOKEN_KEY = '@a_token'

const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export const ENDPOINT = IS_DEV
  ? 'your_local_endpoint_without_http[s]'
  : 'your_production_endpoint_without_http[s]'

export const API_ENDPOINT = 'http://164.90.171.244:5050'

export const XMt4Login = 'some token'
export const XMt4Password = 'some password'
export const XMt4Server = 'some link'

export const GRAPHQL_ENDPOINT = `${
  IS_DEV ? 'http' : 'https'
}://${ENDPOINT}/graphql/`

export const WEBSOCKET_ENDPOINT = `${
  IS_DEV ? 'ws' : 'wss'
}://${ENDPOINT}/subscription/`
