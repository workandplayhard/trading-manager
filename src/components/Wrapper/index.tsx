import React from 'react'

import { IConditionalWrapperProps } from './types'

export const ConditionalWrapper: React.FC<IConditionalWrapperProps> = ({
  children,
  className,
  Wrapper,
}) => {
  const Wrap = Wrapper ? Wrapper : React.Fragment
  const props = Wrapper ? { className } : {}
  return <Wrap {...props}>{children}</Wrap>
}
