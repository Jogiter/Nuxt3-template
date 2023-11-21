<template>
  <div class="bg-white dark:bg-[#15151C] min-h-screen">
    <div class="w-[90%] mx-auto pb-[60px]">
      <div
        class="prose max-w-none prose-a:no-underline overflow-auto prose-p:p-0 prose-p:m-0 prose-p:text-[14px] prose-p:font-[normal] prose-p:leading-[24px] prose-h4:text-[16px] prose-h4:mt-[16px] prose-h4:mb-[2px] prose-h4:font-bold prose-h1:text-[22px] prose-h1:mt-[32px] prose-h1:mb-[24px] prose-p:text-[#1D1F29]/[.8] prose-headings:text-[#1D1F29] dark:prose-p:text-[#F5F5F7]/[.8] dark:prose-headings:text-[#F5F5F7]"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUrlSearchParams } from '@vueuse/core'

const colorMode = useColorMode()
const params = useUrlSearchParams('history')
if (['light', 'dark'].includes(params.mode)) {
  colorMode.preference = params.mode
}
</script>
