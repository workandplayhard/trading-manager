import React from 'react'

import { Modal } from '@/components'
import { IMarket } from '@/types'
import { t } from '@/i18n'

import symbolOverview from '@/assets/images/symbol-overview.png'

interface ISymbolOverview {
  selected?: IMarket
  onClose?: () => void
}

const SymbolOverview: React.FC<ISymbolOverview> = ({ selected, onClose }) => {
  return (
    <Modal
      closeOnBackdrop
      open={!!selected}
      className="w-544"
      onClose={onClose}
      title={t('symbolOverview')}
    >
      <div className="chart-box">
        <img src={symbolOverview} alt="" />
      </div>
    </Modal>
  )
}

export default SymbolOverview
