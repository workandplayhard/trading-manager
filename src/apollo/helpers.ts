import { ErrorResponse } from '@apollo/client/link/error'
import { ServerError } from '@apollo/client/link/utils'
import { ServerParseError } from '@apollo/client/link/http'

import { AUTH_TOKEN_KEY } from '@/constants'
import { signInPath, removeStorageValue } from '@/utils'

export function isServerError(
  obj: Error | ServerError | ServerParseError | undefined | null,
): obj is ServerError {
  return obj?.message !== undefined
}

export function isServerParseError(
  obj: Error | ServerError | ServerParseError | undefined | null,
): obj is ServerParseError {
  return obj?.message !== undefined
}

export const onErrorCallback = (capturedError: ErrorResponse) => {
  const { graphQLErrors, operation, forward, networkError } = capturedError
  if (graphQLErrors) {
    return forward(operation)
  }
  if (networkError) {
    if (isServerError(networkError) || isServerParseError(networkError)) {
      // logout the users if the server return an authentication error
      if (networkError.statusCode === 401) {
        logout('redirected to logoin screen-onErrorCallback-client-helper')
      }
    }

    return forward(operation)
  }
  return undefined
}

export const logout = (msg?: string) => {
  removeStorageValue(AUTH_TOKEN_KEY)
  window.location.replace(signInPath)
}
