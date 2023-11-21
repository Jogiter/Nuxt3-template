<template>
  <div
    class="fixed right-[24px] bottom-[48px] z-50"
  >
    <button @click="handleClick" class="rounded-full" style="filter: drop-shadow(0px 8px 32px rgba(0, 0, 0, 0.2))"><u-icon name="light/contact" filled class="text-[44px]"></u-icon></button>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()
const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
  navigateTo(localePath('/contact', locale.value))
}
</script>
