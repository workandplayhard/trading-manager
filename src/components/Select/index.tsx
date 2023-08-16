import { useMemo, useRef, useState } from 'react'
import classNames from 'classnames'

import { useOnClickOutside } from '@/hooks'
import { ArgumentType } from '@/types'

import { ISelectProps } from './types'

export const Select = <T extends ArgumentType>({
  unit,
  label,
  value,
  options,
  disabled,
  onChange,
  className,
  placeholder,
  renderValue,
  renderOption,
  ...rest
}: ISelectProps<T>) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [opened, setOpened] = useState(false)

  useOnClickOutside(divRef, () => setOpened(false))

  const valueNode = useMemo(() => {
    const selected = options.find(option => option.value === value)
    if (renderValue) {
      return selected ? (
        renderValue(selected)
      ) : (
        <div
          className={classNames('active-item', {
            empty: value === undefined || value === null || value === '',
          })}
          data-unit={unit}
        >
          <p>{placeholder}</p>
        </div>
      )
    }
    return (
      <div
        className={classNames('active-item', {
          empty: value === undefined || value === null || value === '',
        })}
        data-unit={unit}
      >
        <p>{selected?.label || placeholder}</p>
      </div>
    )
  }, [options, placeholder, renderValue, unit, value])

  return (
    <div
      ref={divRef}
      className={classNames(`custom-select`, {
        [className || '']: !!className,
      })}
      onClick={() => setOpened(!opened)}
    >
      {!!label && <span className="name">{label}</span>}
      {valueNode}
      <div
        className={classNames('option-list', {
          disabled,
          open: opened,
        })}
      >
        <ul>
          {options.map((option, index) => (
            <li
              {...rest}
              data-unit={unit}
              key={index.toString()}
              className={classNames({
                selected: value === option.value,
              })}
              onClick={() => {
                onChange?.(option)
                setOpened(false)
              }}
            >
              {renderOption?.(option, index) || option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
