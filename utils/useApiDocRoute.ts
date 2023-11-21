const API_DOC_ROUTES = {
  process: '/docs/process/',
  api: '/docs/api/',
}

export type IAPI_DOC_ROUTE = keyof typeof API_DOC_ROUTES

/**
 * 获取 API 文档的链接
 * @param key 链接的 key
 * @param locale 语言，可选 zh 和 en。默认为中文，值为 zh
 * @returns 完整的 API 文档链接
 */
export function useApiDocRoute(
  key: IAPI_DOC_ROUTE,
  locale: 'zh' | 'en' = 'zh',
) {
  const {
    public: { API_DOC },
  } = useRuntimeConfig()
  // https://devdoc.y9y.com/docs/process/
  const prefix = locale === 'en' ? `${API_DOC}/en` : API_DOC
  return `${prefix}/${API_DOC_ROUTES[key]}`
}
