import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'

import { useOnClickOutside } from '@/hooks'

import Icon from '../Icon'

import { IModalProps } from './types'

export const Modal: React.FC<IModalProps> = ({
  className,
  open,
  onClose,
  children,
  title,
  modalActions,
  closeOnBackdrop,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      document.body.classList.add('scroll-lock')
    } else {
      document.body.classList.remove('scroll-lock')
    }
  }, [open])

  useEffect(() => () => document.body.classList.remove('scroll-lock'), [])

  if (closeOnBackdrop) useOnClickOutside(modalRef, () => onClose?.())

  return (
    <div
      className={classNames('modal-wrap', {
        [className || '']: !!className,
        open: Boolean(open),
      })}
    >
      <div className="overlay" />
      <div className="modal-content" ref={modalRef}>
        {!!title && (
          <div className="modal-title">
            <h4>{title}</h4>
            {onClose && (
              <div className="close-btn">
                <button type="button" onClick={onClose}>
                  <Icon iconName="close" />
                </button>
              </div>
            )}
          </div>
        )}
        <div className="data-wrap full">{children}</div>
        {!!modalActions?.length && (
          <div className="modal-btn">{modalActions}</div>
        )}
      </div>
    </div>
  )
}
