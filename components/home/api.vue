<template>
  <div
    class="mx-auto w-full flex-shrink-0 rounded-[16px] bg-gradient-to-b from-[#BCF9AB_0%] to-[#F5F7FC_35.89%] text-center overflow-hidden px-[20px] py-[40px]"
  >
    <img class="mx-auto w-[156px] aspect-[156/87]" :src="image" alt="" />
    <h4
      class="text-[#000] text-[18px] font-black tracking-[-0.5px] opacity-90 mt-[40px]"
    >
      {{ props.title }}
    </h4>
    <p class="text-[#000] text-[14px] tracking-[-0.5px] opacity-60 mt-[8px]">
      {{ props.description }}
    </p>
    <button
      class="min-w-[120px] px-[16px] py-[12px] rounded-[56px] bg-gradient-to-r from-[#3E79EB] to-[#57B8FF] text-white text-[12px] font-bold tracking-[-0.5px] opacity-90 mt-[24px]"
      @click="onclick"
    >
      {{ props.button }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  button: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: '_self',
  },
})

const onclick = () => {
  if (props.href) {
    const a = document.createElement('a')
    a.target = props.target
    a.href = props.href
    a.click()
  }
}
</script>
