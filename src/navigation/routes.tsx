import React, { useCallback } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import {
  signInPath,
  ordersPath,
  reportsPath,
  journalPath,
  notFoundPath,
  overviewPath,
  accountsPath,
  settingsPath,
  reportsHistoryPath,
} from '@/utils'
import {
  ComingSoonPage,
  SignInPage,
  ReportsPage,
  NotFoundPage,
  OverviewPage,
  AccountsPage,
  OrdersPage,
} from '@/pages'
import { AuthWrapper } from '@/layout'

const AppRoutes: React.FC = () => {
  const onError = useCallback((e: Error) => {
    console.log({ appError: e })
  }, [])

  return (
    <ErrorBoundary onError={onError} fallback={<div />}>
      <Routes>
        <Route path="/" element={<Navigate to={overviewPath} />} />
        <Route path={signInPath} element={<SignInPage />} />
        <Route path={notFoundPath} element={<NotFoundPage />} />
        <Route element={<AuthWrapper />}>
          <Route index path={overviewPath} element={<OverviewPage />} />
          <Route path={accountsPath} element={<AccountsPage />} />
          <Route path={ordersPath} element={<OrdersPage />} />
          <Route path={reportsPath} element={<ReportsPage />} />
          <Route path={reportsHistoryPath} element={<ReportsPage />} />
          <Route path={journalPath} element={<ComingSoonPage />} />
          <Route path={settingsPath} element={<ComingSoonPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default AppRoutes
