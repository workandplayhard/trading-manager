import React from 'react'
import classNames from 'classnames'

import { t } from '@/i18n'

import Icon from '../Icon'

import { IFullScreenLoaderProps } from './types'

export const FullScreenLoader: React.FC<IFullScreenLoaderProps> = ({
  sectionLoader = false,
  loading,
}) => {
  if (!loading) return null
  return (
    <div
      className={classNames('loading-box', {
        'section-loading': !!sectionLoader,
        processing: !!loading,
      })}
    >
      <p>
        <Icon iconName="loader" />
        {t('loading')}
      </p>
    </div>
  )
}

export default FullScreenLoader
