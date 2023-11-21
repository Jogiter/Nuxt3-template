export const defaults = {
  mode: 'dark',
  locale: 'en',
}

export enum LocaleEnum {
  EN = 'en',
  ZH = 'zh',
  SPANISH = 'es',
  VIETNAMESE = 'vi',
  PORTUGUESE = 'pt',
  INDIA = 'hi',
}

export const LanguageList = [
  {
    label: 'English',
    value: LocaleEnum.EN,
  },
  {
    label: 'español',
    value: LocaleEnum.SPANISH,
  },
  {
    label: 'Tiếng Việt',
    value: LocaleEnum.VIETNAMESE,
  },
  {
    label: '简体中文',
    value: LocaleEnum.ZH,
  },
  {
    label: 'Português',
    value: LocaleEnum.PORTUGUESE,
  },
  {
    label: 'हिंदी',
    value: LocaleEnum.INDIA,
  },
]

export const LINKS = {
  telegram: 'https://t.me/CS_9194',
  email: 'vddcs9194@gmail.com',
  twitter: 'https://twitter.com/',
  facebook: 'https://www.facebook.com/',
}