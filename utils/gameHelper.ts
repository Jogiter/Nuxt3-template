import { customAlphabet } from 'nanoid'
import type { IGameList } from '../api/homeApi'

/**
 * 将后端接口获取的 gameName 转换成前端的 map key
 */
export const formatGameName = (name: string) => {
  return name.toUpperCase().replace(/\s/g, '_')
}

export function getGameHref({
  lang,
  gameIdMap,
  name,
  token,
  path,
}: {
  name: string
  lang: string
  path: string
  gameIdMap: Record<string, string>
  token: string
}) {
  const sno64 = customAlphabet(
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
    64,
  )
  const { public: { GAME_DOMAIN } } = useRuntimeConfig()
  const domain = GAME_DOMAIN

  const sessionToken = sno64()
  const formatName = (n: string) => {
    // special name
    if ('ROULETTE_BIG' === n) {
      return 'ROULETTE'.toLowerCase()
    }

    return name.toLowerCase()
  }
  /**
   *
   * EN = "en",
   * ZhCN = "zhCn",
   * SPANISH = "es",
   * VIETNAMESE = "vi",
   * PORTUGUESE = "pt",
   * INDIA = "hi",
   * UNKNOWN = "unknown",
   */
  const formatLang = (l: string) => {
    if (l.indexOf('zh') > -1) {
      return 'zhCn'
    }

    return lang
  }
  const params = new URLSearchParams({
    lang: formatLang(lang),
    currency: 'GOLD',
    deviceType: 'desktop',
    userName: 'DemoUser',
    token,
    ...gameIdMap,
    name: formatName(name),
    isDemo: `1`,
    sessionToken,
  }).toString()

  let url = ''
  if (path) {
    url = new URL(`/${path}`, domain).toString()
  } else {
    url = new URL(`/`, domain).toString()
  }

  return `${url}?${params}`
}

export function formatGameIdMap(list: IGameList.Response['list'], gameConfig: Record<string, any>) {
  return list
    // .filter((item: any) => {
    //   return item.gameId !== 11
    // })
    .filter((item: any) => {
      // filter available games
      const game = gameConfig[formatGameName(item.gameName)]
      if (game) {
        return !game.disabled
      }
      return false
    })
    .reduce((pre: Record<string, string>, next: any) => {
      pre[next.gameName] = (next.demoInstanceId || next.instantId) + ''
      return pre
    }, {})
}
