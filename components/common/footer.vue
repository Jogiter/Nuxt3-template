<template>
  <div class="text-center overflow-hidden mt-[80px]">
    <a href="#"><u-icon name="light/logo" filled class="text-[54px] mx-auto"></u-icon></a>
    <div class="mx-auto w-[124px] flex justify-between mt-[20px]" hidden>
      <a :href="LINKS.twitter"><u-icon name="light/twitter" filled class="text-[20px]"></u-icon></a>
      <a :href="LINKS.telegram"><u-icon name="light/telegram" filled class="text-[20px]"></u-icon></a>
      <a :href="LINKS.facebook"><u-icon name="light/facebook" filled class="text-[20px]"></u-icon></a>
    </div>
    <p class="my-[24px] text-[10px] font-semibold tracking-[-0.5px] text-black">{{ copyright }}</p>
  </div>
</template>

<script setup lang="ts">
import { LINKS } from '~/utils/constants';
const copyright = `© VDD ${new Date().getFullYear()}`
</script>