import { isSafari } from './ua'

export function openLink(href: string, target = '_self') {
  const a = document.createElement('a')
  // Safari on mobile default stop open new tab
  a.target = isSafari() ? '_self' : target
  a.href = href
  a.click()
}
