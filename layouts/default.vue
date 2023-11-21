<template>
  <v-app>
    <slot />
  </v-app>
</template>

<script setup>
import { useUrlSearchParams } from '@vueuse/core'
const colorMode = useColorMode()
const params = useUrlSearchParams('history')

if (['light', 'dark'].includes(params.mode)) {
  colorMode.preference = params.mode
}

useHead({
  htmlAttrs: {
    class: 'scroll-smooth',
  },
  bodyAttrs: {
    class: {
      'leading-[normal]': true,
    },
  },
})
</script>
