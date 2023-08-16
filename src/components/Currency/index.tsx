import React, { useMemo } from 'react'

import { t } from '@/i18n'

import { ICurrencyProps } from './types'

export const Currency: React.FC<ICurrencyProps> = ({
  value,
  currency = 'USD',
  className,
  showSign = false,
}) => {
  const _value = useMemo(() => {
    const sign = !value ? '' : value > 0 ? '+' : '-'
    if (showSign) {
      return `${t('currencyWithSign', {
        sign,
        value: Math.abs(value),
        currency,
      })}`
    }

    return t('currency', { value, currency })
  }, [currency, showSign, value])
  return <span className={className}>{_value}</span>
}

export default Currency
