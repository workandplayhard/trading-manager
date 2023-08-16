import React, { useState } from 'react'

import { IMarket } from '@/types'
import SymbolOverview from './symbolOverview'
import AccountsOnline from './accountsOnline'
import MarketWatch from './marketWatch'
import MarginCalls from './marginCalls'
import AssetsList from './assetsList'

const OverviewPage: React.FC = () => {
  const [selectedMarket, setMarket] = useState<IMarket>()
  return (
    <>
      <MarketWatch onSelect={setMarket} />
      <SymbolOverview
        selected={selectedMarket}
        onClose={() => setMarket(undefined)}
      />
      <AccountsOnline />
      <MarginCalls />
      <AssetsList />
    </>
  )
}

export default OverviewPage
