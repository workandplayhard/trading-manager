import React, { useMemo } from 'react'
import moment from 'moment'

import { ConditionalWrapper } from '../'
import { IDateTimeProps } from './types'

export const DateTime: React.FC<IDateTimeProps> = ({
  value,
  format,
  Wrapper,
  className,
  placeholder,
}) => {
  const _value = useMemo(() => {
    if (!value) return placeholder ?? ''
    if (typeof value === 'number') {
      if (value.toString().length < 13) {
        return moment(value * 1000).format(format)
      }
    }
    return moment(value).format(format)
  }, [format, placeholder, value])

  return (
    <ConditionalWrapper Wrapper={Wrapper} className={className}>
      {_value}
    </ConditionalWrapper>
  )
}
