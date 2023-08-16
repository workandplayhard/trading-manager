import React from 'react'
import { useLocation, Navigate, Location, Outlet } from 'react-router-dom'

import { overviewPath, signInPath } from '@/utils/index'
import { useAuth } from '@/hooks'

import { AppLayout } from '../'

const AuthWrapper: React.FC = () => {
  const { authenticated } = useAuth()
  const location: Location = useLocation()

  if (!authenticated) {
    return (
      <Navigate
        to={signInPath}
        state={{ from: location || overviewPath }}
        replace
      />
    )
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}

export default AuthWrapper
