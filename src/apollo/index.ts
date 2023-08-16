import { ApolloClient, InMemoryCache, split } from '@apollo/client'
import { ApolloLink } from '@apollo/client/core'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import { createUploadLink } from 'apollo-upload-client'

import { getStorageValue } from '@/utils'
import {
  GRAPHQL_ENDPOINT,
  WEBSOCKET_ENDPOINT,
  AUTH_TOKEN_KEY,
} from '@/constants'

import authLink from './authLink'
import typePolicies from './typePolicies'
import { onErrorCallback } from './helpers'

const authToken = getStorageValue(AUTH_TOKEN_KEY)

const uploadLink = createUploadLink({
  // credentials: "include",
  uri: GRAPHQL_ENDPOINT,
})

const wsLink = new WebSocketLink(
  new SubscriptionClient(WEBSOCKET_ENDPOINT, {
    reconnect: Boolean(authToken),
    connectionParams: {
      Authorization: `JWT ${authToken}`,
    },
  }),
)

// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  uploadLink,
)

const errorLink = onError(onErrorCallback)

const retryLink = new RetryLink()

const link = ApolloLink.from([
  authLink,
  uploadLink,
  retryLink,
  errorLink,
  splitLink,
])

export default new ApolloClient({
  cache: new InMemoryCache({ typePolicies }),
  link,
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
})
