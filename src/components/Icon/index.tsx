import React from 'react'

import { IIconProps } from './types'

export const Icon: React.FC<IIconProps> = ({ iconName }) => {
  return <span className={`ic-${iconName}`} />
}

export default Icon
