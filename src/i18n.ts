import i18n, { t as _t, TFuncKey } from 'i18next'

import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { DEFAULT_LANG } from '@/constants'
import enTranslation from './locales/en/common.json'
import heTranslation from './locales/he/common.json'

export const defaultNS = 'common'

export const resources = {
  en: {
    translation: { ...enTranslation },
  },
  he: {
    translation: { ...heTranslation },
  },
} as const

i18n // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANG,
    supportedLngs: ['en', 'he'],
    debug: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  })

export const t = _t<string>

export default i18n
