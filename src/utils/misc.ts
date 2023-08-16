import { ArgumentType } from '@/types'
import { join, reverse, chunk } from 'lodash'

/**
 * Format number
 * @param numberStr number
 * @param delimiter string to show every 3 digits
 * @param hasSign boolean to add +/-
 * @returns string
 * @example
 *  humanFormatNumber(1234) => 1,234
 *  humanFormatNumber(1234.12) => 1,234.12
 *  humanFormatNumber(1234567890.12) => 1,234,567,890.12
 */
export const humanFormatNumber = (
  numberStr: number,
  delimiter = ',',
  hasSign?: boolean,
): string => {
  const sign = !numberStr ? '' : numberStr > 0 ? '+' : '-'
  if (isNaN(numberStr)) return numberStr + ''
  const [intPart, decimalPart] = `${Math.abs(numberStr)}`.split('.')
  const newIntPart = join(
    reverse(
      chunk(reverse(intPart.split('')), 3).map(s => join(reverse(s), '')),
    ),
    delimiter,
  )

  const newNumberStr = isNaN(+decimalPart)
    ? newIntPart
    : `${newIntPart}.${decimalPart}`

  return (hasSign ? sign : '') + newNumberStr
}

export const getKeyByValue = <TVal extends ArgumentType>(
  obj: Record<string, TVal>,
  value: TVal,
): string | undefined => {
  const indexOfS = Object.values(obj).indexOf(value)

  return Object.keys(obj)[indexOfS]
}
