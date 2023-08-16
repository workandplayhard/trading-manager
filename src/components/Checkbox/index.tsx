import React from 'react'

import { ICheckboxProps } from './types'

export const Checkbox: React.FC<ICheckboxProps> = ({
  checked,
  label,
  onChange,
  disabled,
  className,
}) => {
  return (
    <label className={className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange?.(!checked)}
        disabled={disabled}
      />
      {!!label && <span>{label}</span>}
    </label>
  )
}

export default Checkbox
