export interface IDateTimeProps {
  value: string | number | Date | undefined | null
  format: string
  className?: string
  placeholder?: string
  Wrapper?: React.ElementType<any>
}
