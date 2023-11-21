<template>
  <swiper
    :modules="[Autoplay]"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    class="h-[208px]"
    @slideChange="onslideChange"
    loop
  >
    <swiper-slide v-for="(item, index) in data" :key="index">
      <a
        :href="item.href ? item.href : 'javascript:void 0;'"
        :target="item.target"
        class="relative w-full h-full bg-cover bg-center bg-no-repeat"
        ref="linkRef"
      ></a>
    </swiper-slide>
  </swiper>
  <div
    class="relative transition-all duration-300 text-center flex justify-center items-center mt-[8px] mb-[12px]"
  >
    <div
      v-for="(_, index) of data.length"
      :key="index"
      class="h-[4px] rounded-full inline-block mx-[2px]"
      :class="
        index === active
          ? 'bg-[#000000] opacity-90 w-[8px]'
          : 'bg-[#000000] opacity-30 w-[4px]'
      "
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
// import required modules
import { Autoplay } from 'swiper/modules'

interface IBanner {
  id: number
  image: string
  href?: string
  target?: string
}

const props = defineProps({
  data: {
    type: Array as PropType<IBanner[]>,
    default: () => [],
  },
})

// emit slideChange event so that parent component can listen to it
const emit = defineEmits(['slideChange'])

const active = ref(0)
const linkRef = ref<HTMLElement[]>([])
const onslideChange = (swiper: any) => {
  active.value = swiper.realIndex
  emit('slideChange', swiper.realIndex)
}
onMounted(() => {
  // hack bg-image from ssr
  for (let i = 0, length = linkRef.value.length; i < length; i++) {
    linkRef.value[i].style.backgroundImage = `url(${props.data[i].image})`
  }
})
</script>

<style>
.swiper {
  width: 100%;
}

.swiper-slide {
  text-align: center;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination-bullet-active {
  width: 20px !important;
  border-radius: 6px;
}
</style>
