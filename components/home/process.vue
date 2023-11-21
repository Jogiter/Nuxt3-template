<template>
  <div
    class="mx-auto w-full flex-shrink-0 rounded-[16px] bg-[#F5F7FC] text-center overflow-hidden px-[20px] py-[32px]"
  >
    <div class="grid grid-cols-2 grid-rows-2 gap-y-[32px]">
      <div v-for="(item, index) of props.data" :key="index" class="text-center">
        <img :src="item.icon" alt="" class="mx-auto w-[60px] aspect-square" />
        <p
          class="mt-[16px] mx-auto w-[16px] h-[16px] text-center leading-[16px] rounded-full bg-gradient-to-b from-[#4C4C4E] to-[#7C7D7F] text-[10px] text-white tracking-[-0.5px] font-black"
        >
          {{ index + 1 }}
        </p>
        <p class="mt-[6px] text-[14px] tracking-[-0.5px]">
          {{ item.title }}
        </p>
      </div>
    </div>
    <a
      :href="props.href"
      :target="props.target"
      class="inline-flex items-center mt-[24px] text-[#3F7BEC] text-[14px] font-bold tracking-[-0.5px]"
      >{{ props.button }}<u-icon name="light/arrow-right" filled class="text-[10px] ml-[6px] mt-[.125rem]"></u-icon></a
    >
  </div>
</template>

<script setup lang="ts">
type IProcess = {
  icon: string
  title: string
}

const props = defineProps({
  data: {
    type: Array as PropType<IProcess[]>,
    required: true,
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
</script>
