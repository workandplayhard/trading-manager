import { setContext } from '@apollo/client/link/context'
import { onError, ErrorResponse } from '@apollo/link-error'

import { getStorageValue, removeStorageValue } from '@/utils'
import { AUTH_TOKEN_KEY } from '@/constants'

interface ResponseError extends ErrorResponse {
  networkError?: Error & {
    statusCode?: number
    bodyText?: string
  }
}

export const invalidateTokenLink = onError((error: ResponseError) => {
  if (error.networkError && error.networkError.statusCode === 401) {
    removeStorageValue(AUTH_TOKEN_KEY)
  }
})

export const tokenLink = setContext((_, context) => {
  const authToken = getStorageValue(AUTH_TOKEN_KEY)

  return {
    ...context,
    headers: {
      ...context.headers,
      Authorization: authToken,
    },
  }
})

const link = invalidateTokenLink.concat(tokenLink)

export default link
