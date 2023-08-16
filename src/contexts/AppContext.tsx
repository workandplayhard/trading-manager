import React, { useCallback, useEffect, useState, useMemo } from 'react'
import i18n from 'i18next'

import { getStorageValue, setStorageValue } from '@/utils'
import { TLang } from '@/types'
import { APP_LANGUAGES, DEFAULT_LANG, LANG_KEY } from '@/constants'

interface IAppContext {
  isRTL: boolean
  language: TLang
  onChangeLanguage: (_lng: TLang) => void
}

export const AppContext = React.createContext<IAppContext>({
  isRTL: DEFAULT_LANG === APP_LANGUAGES.EN ? false : true,
  language: DEFAULT_LANG,
  onChangeLanguage: () => null,
})

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<TLang>(DEFAULT_LANG)

  useEffect(() => {
    const lng = getStorageValue<TLang>(LANG_KEY, DEFAULT_LANG)
    i18n.changeLanguage(lng)
    setLang(lng)
    document.documentElement.lang = lng
  }, [])

  const onChangeLanguage = useCallback((lng: TLang) => {
    i18n.changeLanguage(lng)
    setLang(lng)
    setStorageValue<TLang>(LANG_KEY, lng)
    document.documentElement.lang = lng
  }, [])

  const values: IAppContext = useMemo(
    () => ({
      isRTL: lang === APP_LANGUAGES.HE,
      language: lang,
      onChangeLanguage,
    }),
    [lang, onChangeLanguage],
  )

  return (
    <AppContext.Provider key={lang} value={values}>
      {children}
    </AppContext.Provider>
  )
}
