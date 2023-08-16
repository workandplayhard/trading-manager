import React from 'react'

import { type ISwitchProps } from './types'

export const Switch: React.FC<ISwitchProps> = ({
  checked,
  disabled,
  onChange,
  className
}) => {
  return (
    <label className="switcher">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(!checked)}
      />
      <span />
    </label>
  )
}

export default Switch
