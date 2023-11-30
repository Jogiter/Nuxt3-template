export const defaults = {
  mode: 'dark',
  locale: 'en',
}

export enum LocaleEnum {
  EN = 'en',
  ZH = 'zh',
}

export const LanguageList = [
  {
    label: 'English',
    value: LocaleEnum.EN,
  },
  {
    label: '简体中文',
    value: LocaleEnum.ZH,
  },
]

export const LINKS = {
  telegram: '',
  email: '',
  twitter: '',
  facebook: '',
}