import React, { useState } from 'react'

import { Button, DateRangePicker } from '@/components'
import { IReport } from '@/types'
import { t } from '@/i18n'

import MarketWatch from './marketWatch'
import AssetsList from './assetsList'
import ReportInfo from './reportInfo'
import Reports from './reports'

const ReportsPage: React.FC = () => {
  const [selectedReport, setReport] = useState<IReport | any>()

  return (
    <>
      <div className="data-filters">
        <DateRangePicker format={'MMM, dd, yyyy'} onChange={() => undefined} />
        <Button
          type="button"
          className="main-btn"
          onClick={() => setReport({})}
        >
          {t('newReport')}
        </Button>
      </div>
      <MarketWatch />
      <Reports onSelect={setReport} />
      <AssetsList />
      <ReportInfo
        selected={selectedReport}
        onClose={() => setReport(undefined)}
      />
    </>
  )
}

export default ReportsPage
