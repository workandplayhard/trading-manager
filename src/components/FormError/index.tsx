import React from 'react'

import { IFormErrorProps, IFormErrorMessageProps } from './types'

export const FormError: React.FC<IFormErrorProps> = ({ text }) => {
  return (
    <div className="error-notice">
      <p>{text}</p>
    </div>
  )
}

export const FormErrorMessage: React.FC<IFormErrorMessageProps> = ({
  error,
}) => {
  if (!error) return null
  return (
    <div className="error-message">
      <p>{error}</p>
    </div>
  )
}
