// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  experimental: {
    inlineSSRStyles: false,
  },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      GAME_DOMAIN: process.env.GAME_DOMAIN,
      API_DOC: process.env.API_DOC,
      BASE_URL_CONTACT: process.env.BASE_URL_CONTACT,
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    './modules/u-icon.ts',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxt/content',
    'vuetify-nuxt-module'
  ],
  colorMode: {
    classSuffix: '',
    // preference: 'dark', // default value of $colorMode.preference
    // fallback: 'dark', // f
  },
  i18n: {
    debug: false,
    strategy: 'prefix_and_default',
    baseUrl: 'http://unn.com',
    locales: [
      {
        code: 'en',
        iso: 'en',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'zh',
        iso: 'zh',
        file: 'zh-Hans.json',
        name: 'Simplified Chinese',
      },
      // {
      //   code: 'zh-Hans',
      //   iso: 'zh',
      //   file: 'zh-Hans.json',
      //   name: 'Simplified Chinese',
      // },
      // {
      //   code: 'zh-Hant',
      //   iso: 'zh-HK',
      //   file: 'zh-Hant.json',
      //   name: 'Traditional Chinese',
      // },
      // {
      //   code: 'zh-Hant',
      //   iso: 'zh-TW',
      //   file: 'zh-Hant.json',
      //   name: 'Traditional Chinese',
      // },
      // {
      //   code: 'zh-Hant',
      //   iso: 'zh-MO',
      //   file: 'zh-Hant.json',
      //   name: 'Traditional Chinese',
      // },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'language',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
  },

  // @nuxt/image
  image: {
    dir: 'assets/images',
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport:
        'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover',
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ]
    },

  },
  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      'acceptHMRUpdate',
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  nitro: {
    prerender: {
      ignore: [],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-px-to-viewport': {
        // options
        unitToConvert: 'px', // 需要转换的单位，默认为"px"
        viewportWidth: 375, // 设计稿的视窗宽度
        unitPrecision: 5, // 单位转换后保留的精度
        // propList: ['*', '!font*'], // 能转化为 vw 的属性列表
        propList: ['*', '!font*', '!md*', '!lg*', '!xl*', '!2xl*', '!swiper*'], // 能转化为 vw 的属性列表
        viewportUnit: 'vw', // 希望使用的视窗单位
        fontViewportUnit: 'vw', // 字体使用的视窗单位
        selectorBlackList: [], // 需要忽略的 CSS 选择器，不会转为视窗单位，使用原有的 px 等单位
        minPixelValue: 1, // 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换
        mediaQuery: false, // 媒体查询里的单位是否需要转换单位
        replace: true, // 是否直接更换属性值，而不添加备用属性
        exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
        // include: /\/src\//, // 如果设置了include，那将只有匹配到的文件才会被转换
        landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件
        landscapeUnit: 'vw', // 横屏时使用的单位
        landscapeWidth: 1125, // 横屏时使用的视窗宽度
      },
    },
  },

  spaLoadingTemplate: false,

  content: {
    markdown: {
      anchorLinks: false,
    },
  },
})
