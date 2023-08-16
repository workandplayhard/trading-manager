import React, { useCallback, useEffect, useState } from 'react'

import { Button, Checkbox, FormError, TextInput } from '@/components'
import { useAuth } from '@/hooks'
import { t } from '@/i18n'

import logoImg from '@/assets/images/logo-01.png'

const SignInPage: React.FC = () => {
  const { onSignIn } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<Record<'email' | 'password', string>>({
    email: '',
    password: '',
  })
  const [shouldRemember, setShouldRemember] = useState<boolean>(false)

  useEffect(() => {
    setError(e => (email ? { ...e, email: '' } : e))
  }, [email])

  useEffect(() => {
    setError(e => (password ? { ...e, password: '' } : e))
  }, [password])

  const validate = useCallback(() => {
    const _error: Record<'email' | 'password', string> = {
      email: '',
      password: '',
    }

    if (!password) {
      _error.password = t('validation.fieldRequired', {
        fieldName: 'password',
      })
    }
    if (!email) {
      _error.email = t('validation.fieldRequired', {
        fieldName: 'email',
      })
    }

    if (email) {
      const emailTest = /\S+@\S+\.\S+/.test(email)

      if (!emailTest) _error.email = t('validation.invalidEmail')
    }

    if (password && password.length < 6) {
      _error.password = t('validation.passwordLength')
    }

    setError(prev => ({ ...prev, ..._error }))
    return !Object.values(_error).some(e => !!e)
  }, [email, password])

  const onHandleSignIn = useCallback(() => {
    if (validate()) {
      onSignIn({
        email: 'test@email.com',
        password: 'testpassword',
      })
    }
  }, [onSignIn, validate])

  return (
    <>
      {/* Show FullScreenLoader when token login loading */}

      <div className="login-form">
        <div className="inner-wrap">
          <div className="content-box">
            <div className="logo">
              <a onClick={() => undefined}>
                <img src={logoImg} alt="" />
              </a>
            </div>
            <div className="title">
              <h1>{t('logInAccount')}</h1>
              <p>{t('welcomeBack')}</p>
            </div>
            {/* Show error for invalid credentials */}
            <FormError text={t('incorrectLoginDetails')} />
            <div className="form-data">
              <div className="form-fields">
                <TextInput
                  error={error.email}
                  label={t('email')}
                  placeholder={t('enterEmail')}
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  error={error.password}
                  type="password"
                  label={t('password')}
                  value={password}
                  onChangeText={setPassword}
                />
                <Checkbox
                  label={t('rememberDetails')}
                  checked={shouldRemember}
                  onChange={setShouldRemember}
                />
              </div>
            </div>
            <div className="form-submit">
              <Button
                onClick={onHandleSignIn}
                className="main-btn"
                disabled={!(email && password)}
              >
                {t('signIn')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignInPage
