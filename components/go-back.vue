<template>
  <div class="flex items-center px-[16px] py-[12px] h-[44px]">
    <button @click="goback" v-if="showBtn">
      <u-icon class="text-[20px] text-[#F5F5F7]" name="ds-fanhui"></u-icon>
    </button>
  </div>
</template>

<script setup>
defineProps({
  showBtn: Boolean
})

const goback = () => {
  window.history.back()
}
</script>