<template>
  <ContentDoc :path="path" />
</template>

<script setup>
const { locale } = useI18n()
const paths = {
  en: '/en/privacy',
  'zh-hant': '/zh-hant/privacy',
  'zh-hans': '/zh-hans/privacy',
  'es': '/es/privacy',
  'hi': '/hi/privacy',
  'pt': '/pt/privacy',
  'vi': '/vi/privacy',
  zh: '/zh/privacy',
}
const path = computed(() => paths[locale.value])

definePageMeta({
  layout: 'content',
})
</script>
