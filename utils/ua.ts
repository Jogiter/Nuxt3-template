import UAParser from 'ua-parser-js'

export function useUA() {
  const parser = new UAParser()
  return parser.getResult()
}

export function isSafari() {
  const ua = useUA()
  if (ua.browser.name) {
    return ua.browser.name.toLowerCase().indexOf('safari') > -1
  }
  return false
}
