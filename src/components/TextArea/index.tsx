import React from 'react'
import { omit } from 'lodash'
import classNames from 'classnames'

import { FormErrorMessage } from '../FormError'
import { ITextAreaProps } from './types'

export const TextArea: React.FC<ITextAreaProps> = ({
  label,
  error,
  className,
  onChangeText,
  ...rest
}) => {
  return (
    <label
      className={classNames(className, {
        error,
      })}
    >
      {!!label && <span className="name">{label}</span>}
      <span className="field">
        <textarea
          {...omit(rest, ['renderOption', 'onChange'])}
          onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChangeText?.(ev.target.value)
          }
        />
      </span>
      <FormErrorMessage error={error} />
    </label>
  )
}

export default TextArea
