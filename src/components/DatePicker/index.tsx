import React, { useMemo } from 'react'
import DatePicker from 'rsuite/DatePicker'
import RangePicker from 'rsuite/DateRangePicker'
import 'rsuite/dist/rsuite.min.css'
import classNames from 'classnames'
import moment from 'moment'

import { IDateTimeRangePickerProps, IDateTimePickerProps } from './types'

export const DateRangePicker: React.FC<IDateTimeRangePickerProps> = ({
  format,
  value,
  disabled,
  className,
  defaultRange,
  onChange,
}) => {
  return (
    <div className="filter-data">
      <RangePicker
        block
        readOnly={!!disabled}
        ranges={[]}
        format={format}
        toggleAs={'div'}
        cleanable={false}
        className={className}
        value={value}
        defaultCalendarValue={defaultRange}
        onChange={value => onChange(value)}
      />
    </div>
  )
}

export const DateTimePicker: React.FC<IDateTimePickerProps> = ({
  format,
  value,
  label,
  disabled,
  className,
  defaultDate,
  onChange,
}) => {
  const _value: Date | undefined = useMemo(() => {
    if (!value) return undefined
    if (typeof value === 'number') {
      if (value.toString().length < 13) return new Date(value * 1000)
      return new Date(value)
    }
    if (typeof value === 'string') return moment(value).toDate()

    return value
  }, [value])

  return (
    <label
      className={classNames(className, {
        disabled,
      })}
    >
      {!!label && <span className="name">{label}</span>}
      <DatePicker
        readOnly={!!disabled}
        ranges={[]}
        placement="bottomEnd"
        toggleAs="div"
        format={format}
        cleanable={false}
        value={_value}
        className="w-100 custom-date-picker"
        calendarDefaultDate={defaultDate}
        onChange={value => onChange(value)}
      />
    </label>
  )
}
