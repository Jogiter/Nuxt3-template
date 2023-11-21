<template>
  <div
    class="bg-gradient-to-b transition-all duration-300 bg-no-repeat bg-[length:100%_600px]"
    :class="{
      'from-[#FFB158.11%] to-[#fff_99.89%]': bannerActiveIndex === 0,
      'from-[#587DFF.11%] to-[#fff_99.89%]': bannerActiveIndex === 1,
    }"
  >
    <common-header></common-header>
    <div ref="target">
      <home-swiper :data="banners" @slideChange="onslideChange"></home-swiper>
    </div>
    <div class="px-[12px] grid gap-y-[8px] gap-x-[8px]">
      <home-game-card
        v-for="game of games"
        :key="game.order"
        v-bind="game"
        :class="{ 'col-span-2': game.isFull, 'col-span-1': !game.isFull }"
        @onclick="onclickGame(game)"
      ></home-game-card>
    </div>
  </div>
  <div class="px-[12px] mt-[24px]">
    <home-api v-bind="api"></home-api>
    <h2
      class="text-center text-black font-black text-[18px] tracking-[-0.5px] opacity-90 mt-[24px] mb-[12px]"
    >
      {{ t('home.processTitle') }}
    </h2>
    <home-process v-bind="process"></home-process>
  </div>
  <common-footer></common-footer>
  <home-contact></home-contact>
</template>

<script setup lang="ts">
import imageApi from '@/assets/images/3x/light/en/api.png'
import imageProcess1 from '@/assets/images/3x/light/en/process-1.png'
import imageProcess2 from '@/assets/images/3x/light/en/process-2.png'
import imageProcess3 from '@/assets/images/3x/light/en/process-3.png'
import imageProcess4 from '@/assets/images/3x/light/en/process-4.png'
import { useApiDocRoute } from '@/utils/useApiDocRoute'
import { fetchGameListApi, fetchGuestTokenApi } from '@/request'
import { useIntersectionObserver } from '@vueuse/core'

const { t, locale } = useI18n()

const bannerActiveIndex = ref(0)
const banners = [
  {
    id: 1,
    image: `/images/3x/light/${locale.value}/banner.png`,
    href: '',
    // target: '_blank',
  },
  {
    id: 2,
    image: `/images/3x/light/${locale.value}/banner2.png`,
    href: '',
    // target: '_blank',
  },
]

interface IGame {
  order: number
  title: string
  image: string
  path: string
  disabled: boolean
  tags: string[]
  isFull: boolean
  href: string
  target: string
}

/**
 * export enum GameTypesEnum {
 * DICE = 'dice',
 * PLINKO = 'plinko',
 * GOAL = 'goal',
 * HILO = 'hi-lo',
 * MINES = 'mines',
 * KENO = 'keno',
 * MINI_ROULETTE = 'mini-roulette',
 * HOTLINE = 'hotline',
 * AVIATOR = 'aviator',
 * ROULETTE_BIG = 'roulette',
 * SCRATCH_OFF = 'scrarch-off',
 */
const gameConfig: Record<string, IGame> = {
  DICE: {
    order: 5,
    title: t('game.dice'),
    image: '/images/3x/light/en/dice.png',
    path: 'dice',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: false,
    href: '',
    target: '_blank',
  },
  PLINKO: {
    order: 7,
    title: t('game.plinko'),
    image: '/images/3x/light/en/plinko.png',
    path: 'plinko',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: false,
    href: '',
    target: '_blank',
  },
  GOAL: {
    order: 1,
    title: t('game.goal'),
    image: '/images/3x/light/en/goal.png',
    path: 'goal',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: false,
    href: '',
    target: '_blank',
  },
  HILO: {
    order: 8,
    title: t('game.hilo'),
    image: '/images/3x/light/en/hi-lo.png',
    path: 'hi-lo',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: false,
    href: '',
    target: '_blank',
  },
  MINES: {
    order: 6,
    title: t('game.mines'),
    image: '/images/3x/light/en/mines.png',
    path: 'mines',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: false,
    href: '',
    target: '_blank',
  },
  KENO: {
    order: 4,
    title: t('game.keno'),
    image: '/images/3x/light/en/keno.png',
    path: 'keno',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: false,
    href: '',
    target: '_blank',
  },
  MINI_ROULETTE: {
    order: 3,
    title: t('game.miniRoulette'),
    image: '/images/3x/light/en/roulette-mini.png',
    path: 'mini-roulette',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: false,
    href: '',
    target: '_blank',
  },
  HOTLINE: {
    order: 2,
    title: t('game.hotline'),
    image: '/images/3x/light/en/hotline.png',
    path: 'hotline',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: false,
    href: '',
    target: '_blank',
  },
  AVIATOR: {
    order: 0,
    title: t('game.aviator'),
    image: '/images/3x/light/en/aviator.png',
    path: 'aviator',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: true,
    href: '',
    target: '_blank',
  },
  ROULETTE_BIG: {
    order: 10,
    title: t('game.roulette'),
    image: '/images/3x/light/en/roulette-big.png',
    path: 'roulette',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: false,
    href: '',
    target: '_blank',
  },
  SCRATCH_OFF: {
    order: 9,
    title: t('game.scratch'),
    image: '/images/3x/light/en/scratch-off.png',
    path: 'scratch',
    disabled: false,
    tags: [t('home.gameTag')],
    isFull: false,
    href: '',
    target: '_blank',
  },
}

const orderGameLists = Object.keys(gameConfig)
  .map((name) => gameConfig[name])
  .sort((a, b) => a.order - b.order)
const games = ref(orderGameLists)

let gameIdMap = {}
const onclickGame = async (game: IGame) => {
  fetchGuestTokenApi({ providerId: 1 }).then((tokenInfo) => {
    if (tokenInfo) {
      const token = tokenInfo.data.gToken
      const href = getGameHref({
        lang: locale.value,
        gameIdMap,
        token,
        name: game.title,
        path: game.path,
      })
      openLink(href, '_blank')
    }
  })
}

const target = ref(null)
const targetIsVisible = ref(false)
// color value should be the same as container`s bg-color
const colors = ['#FFB158', '#587DFF']
const onslideChange = (index: number) => {
  bannerActiveIndex.value = index

  // only when target is visible then update bg-color
  if (targetIsVisible.value) {
    setRootVariable('--bg-color', colors[index])
  }
}

const api = {
  image: imageApi,
  title: t('home.apiTitle'),
  description: t('home.apiDesc'),
  button: t('home.apiButton'),
  href: useApiDocRoute('api'),
  target: '_blank',
}

const process = {
  data: [
    {
      icon: imageProcess1,
      title: t('home.processStep1'),
    },
    {
      icon: imageProcess2,
      title: t('home.processStep2'),
    },
    {
      icon: imageProcess3,
      title: t('home.processStep3'),
    },
    {
      icon: imageProcess4,
      title: t('home.processStep4'),
    },
  ],
  button: t('home.processButton'),
  href: useApiDocRoute('process'),
  target: '_blank',
}

fetchGameListApi({ providerId: 1, pageNo: 1, pageSize: 50 }).then(
  (gameList) => {
    if (gameList) {
      gameIdMap = formatGameIdMap(gameList.data.list, gameConfig)
    }
  },
)

let observer: any
// when target swiper scroll out of the viewport, set bg-color to #fff, otherwise set the color same as container`s bg-color
onMounted(() => {
  observer = useIntersectionObserver(target, ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting

    if (isIntersecting) {
      setRootVariable('--bg-color', colors[bannerActiveIndex.value])
    } else {
      setRootVariable('--bg-color', '#fff')
    }
  })
})

onUnmounted(() => {
  observer.stop()
})
</script>
