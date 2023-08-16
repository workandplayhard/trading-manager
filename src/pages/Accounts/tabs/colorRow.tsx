import React from 'react'

import { IOption } from '@/types'
import { t } from '@/i18n'

export const ColorRow: React.FC<IOption<string>> = ({ value, label }) => {
  return (
    <>
      <span style={{ backgroundColor: value }}></span>
      {t(label)}
    </>
  )
}
