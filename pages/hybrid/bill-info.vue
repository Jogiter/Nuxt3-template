<template>
  <ContentDoc :path="path" />
</template>

<script setup>
const { locale } = useI18n()
const paths = {
  en: '/en/bill-info',
  'zh-hant': '/zh-hant/bill-info',
  'zh-hans': '/zh-hans/bill-info',
  'es': '/es/bill-info',
  'hi': '/hi/bill-info',
  'pt': '/pt/bill-info',
  'vi': '/vi/bill-info',
  zh: '/zh/bill-info',
}
const path = computed(() => paths[locale.value])

definePageMeta({
  layout: 'content',
})
</script>
