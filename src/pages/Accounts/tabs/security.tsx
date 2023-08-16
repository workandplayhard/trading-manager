import React, { useCallback, useState } from 'react'

import { Button, Checkbox, TextInput } from '@/components'
import { t } from '@/i18n'
import { IUser } from '@/types'
import { useAPI } from '@/hooks'

export interface ISecurityTab {
  user?: IUser
}

export const SecurityTab: React.FC<ISecurityTab> = ({ user }) => {
  const { loading, sendData } = useAPI()
  const [isMasterPwdVerified, setIsMasterPwdVerified] = useState<boolean>(false)
  const [password, setPassword] = useState<string>()
  const [unbind, setUnbind] = useState<boolean>(false)
  const [readOnly, setReadOnly] = useState<boolean>(false)

  const handleVerifyMasterPwd = useCallback(() => {
    setIsMasterPwdVerified(true)
  }, [])

  const handleChangePassword = useCallback(() => {
    const data = {
      newPassword: password,
      unBindAccount: unbind,
      changeReadOnyPwd: readOnly,
    }

    sendData({
      path: `users/${user?.Id}/change-password`,
      method: 'PUT',
      data,
    })
  }, [password, readOnly, sendData, unbind, user?.Id])

  return (
    <div className="security-settings">
      <div className="item-wrap">
        <div className="item-title">
          <h3>{t('changePassword')}</h3>
          <p>{t('checkingPasswordAllow')}</p>
        </div>
        <div className="form-fields">
          <TextInput
            type="password"
            className="w-50"
            label={t('password')}
            placeholder={t('password')}
          />
        </div>
        <div className="submit-btn">
          <Button
            type="button"
            className="main-btn"
            onClick={handleVerifyMasterPwd}
          >
            {t('check')}
          </Button>
        </div>
      </div>

      <div className="item-wrap">
        <div className="item-title">
          <h3>{t('changePassword')}</h3>
          <p>{t('passwordDesc.1')}</p>
          <p>{t('passwordDesc.2')}</p>
        </div>
        <div className="form-fields">
          <Checkbox
            label={t('unbindOTP')}
            className="w-100"
            disabled={!isMasterPwdVerified}
            onChange={setUnbind}
          />
          <Checkbox
            className="w-100"
            label={t('changeReadOnlyInvestorPassword')}
            disabled={!isMasterPwdVerified}
            onChange={setReadOnly}
          />
          <TextInput
            type="password"
            className="w-50"
            label={t('newPassword')}
            placeholder={t('enterNewPassword')}
            disabled={!isMasterPwdVerified}
            onChangeText={setPassword}
            value={password}
          />
        </div>
        <div className="submit-btn">
          <Button
            type="button"
            className="main-btn"
            disabled={!isMasterPwdVerified}
            onClick={handleChangePassword}
          >
            {t('change')}
          </Button>
        </div>
      </div>
    </div>
  )
}
