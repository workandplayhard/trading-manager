import React from 'react'

import { APP_LANGUAGES } from '@/constants'
import { Select } from '@/components'
import { useApp } from '@/hooks'
import { IOption, TLang } from '@/types'
import { t } from '@/i18n'

import EnImg from '@/assets/images/icons/flag-en.svg'
import HeImg from '@/assets/images/icons/flag-he.svg'

const LangIcons = {
  [APP_LANGUAGES.EN]: EnImg,
  [APP_LANGUAGES.HE]: HeImg,
}

export const LanguageSelector: React.FC = () => {
  const { onChangeLanguage, language } = useApp()

  const languages: IOption<TLang>[] = Object.values(APP_LANGUAGES).map(
    lang => ({
      label: t(`lang_${lang}`),
      value: lang,
      icon: LangIcons[lang],
    }),
  )

  return (
    <div className="lang-box">
      <Select<TLang>
        value={language}
        options={languages}
        renderValue={item => (
          <p className="current-lang">
            <img src={item.icon} alt={item.label} />
            {item.label}
          </p>
        )}
        renderOption={(item, idx) => (
          <div key={idx}>
            <img src={item.icon} alt={item.label} />
            <span>{item.label}</span>
          </div>
        )}
        onChange={option => onChangeLanguage(option.value)}
      />
    </div>
  )
}
