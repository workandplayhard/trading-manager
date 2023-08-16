import React, { useRef, useState } from 'react'
import classNames from 'classnames'

import { useOnClickOutside } from '@/hooks'
import { t } from '@/i18n'

import { IActionMenu } from './types'
import { Button } from '../'

export const ActionMenu: React.FC<IActionMenu> = ({
  onClick,
  options,
  className,
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [opened, setOpened] = useState(false)

  useOnClickOutside(divRef, () => setOpened(false))

  return (
    <div
      ref={divRef}
      className={classNames('line-options', {
        active: opened,
        [className || '']: !!className,
      })}
    >
      <Button type="button" onClick={() => setOpened(!opened)}>
        <i className="ic-dots-horizontal"></i>
      </Button>
      <ul>
        {options.map((option, idx) => (
          <li key={idx}>
            <Button
              type="button"
              onClick={() => {
                setOpened(false)
                onClick?.(option.action)
              }}
              iconLeft={option.iconLeft}
              className={option.className}
              iconRight={option.iconRight}
            >
              {t(option.label)}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
