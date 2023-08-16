import React from 'react'

import Icon from '../Icon'

import { IButtonProps } from './types'

export const Button: React.FC<IButtonProps> = ({
  disabled,
  loading,
  iconLeft,
  iconRight,
  children,
  className,
  ...rest
}) => {
  return (
    <button {...rest} className={className} disabled={disabled || loading}>
      {!!iconLeft && <Icon iconName={iconLeft} />}
      {children}
      {!!iconRight && <Icon iconName={iconRight} />}
    </button>
  )
}

export default Button
