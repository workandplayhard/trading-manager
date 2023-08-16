import React from 'react'
import classNames from 'classnames'
import { omit } from 'lodash'

import Icon from '../Icon'
import { FormErrorMessage } from '../FormError'

import { ITextInputProps } from './types'

export const TextInput: React.FC<ITextInputProps> = ({
  icon,
  label,
  error,
  className,
  size = 'full',
  onChangeText,
  ...rest
}) => {
  return (
    <label
      className={classNames(
        `${size === 'full' ? 'w-100' : 'w-50'} ${className}`,
        {
          error,
        },
      )}
    >
      {!!label && <span className="name">{label}</span>}
      <span className="field">
        {!!icon && <Icon iconName={icon} />}
        <input
          {...omit(rest, ['renderOption', 'onChange'])}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeText?.(e.target.value)
          }
        />
      </span>
      <FormErrorMessage error={error} />
    </label>
  )
}

export default TextInput
