<template>
  <div
    class="relative rounded-[16px] overflow-hidden bg-cover bg-center bg-no-repeat"
    :class="{
      'aspect-[350/130]': props.isFull,
      'aspect-[170/170]': !props.isFull,
    }"
    :style="{ 'background-image': '' }"
    ref="cardRef"
    @click="onclick"
  >
    <div class="absolute top-[12px] left-[12px]">
      <div
        v-for="tag of props.tags"
        :key="tag"
        class="px-[8px] py-[4px] rounded-[34px] bg-[#00000015] inline-flex items-center justify-center"
      >
        <span class="text-[12px] tracking-[-0.5px] text-white opacity-90">{{
          tag
        }}</span>
      </div>
    </div>
    <div class="absolute bottom-[12px] left-0 right-0 text-center">
      <h2
        class="text-[20px] tracking-[-0.5px] font-black text-white opacity-90"
      >
        {{ props.title }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tags: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  isFull: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
'onclick'
])

const cardRef = ref<HTMLElement | null>(null)
const onclick = () => {
  emit('onclick')
}

onMounted(() => {
  // hack bg-image from ssr
  if (cardRef.value) {
    cardRef.value.style.backgroundImage = `url(${props.image})`
  }
})
</script>
