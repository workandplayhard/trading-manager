import React from 'react'
import camelcase from 'camelcase'

import { AppSidebar, AppHeader } from '@/components'
import { useLocation } from 'react-router-dom'
import { t } from '@/i18n'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <div className="dashboard-wrap">
      <AppSidebar />
      <div className="data-wrap layout-wrap">
        <AppHeader title={t(camelcase(pathname.replace('/', '')))} />
        <div className="data-content layout-content">{children}</div>
      </div>
    </div>
  )
}

export default AppLayout
