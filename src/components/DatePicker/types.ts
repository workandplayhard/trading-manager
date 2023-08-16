export interface IDateTimeRangePickerProps {
  format: string
  className?: string
  defaultRange?: [Date, Date]
  disabled?: boolean
  value?: [Date, Date]
  onChange: (_value: [Date, Date] | null) => void
}

export interface IDateTimePickerProps {
  format: string
  label?: string
  className?: string
  defaultDate?: Date
  disabled?: boolean
  value?: Date | number | string
  onChange: (_value: Date | null) => void
}
