<template>
  <span
    class="nuxt-icon"
    :class="{
      'nuxt-icon--fill': !props.filled,
      'nuxt-icon--stroke': hasStroke && !props.filled,
    }"
    v-html="icon"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: '',
  },
  filled: {
    type: Boolean,
    default: false,
  },
})

const icon = ref<string | Record<string, any>>('')
const hasStroke = ref(false)

async function getIcon() {
  try {
    const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
      as: 'raw',
      eager: false,
    })
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()
    if (rawIcon.includes('stroke')) {
      hasStroke.value = true
    }
    icon.value = rawIcon
  } catch {
    console.error(
      `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`,
    )
  }
}

await getIcon()

watchEffect(getIcon)
</script>

<style>
.nuxt-icon {
  display: inline-block;
}
.nuxt-icon svg {
  width: 1em;
  height: 1em;
  /* margin-bottom: 0.125em; */
  vertical-align: middle;
}
.nuxt-icon.nuxt-icon--fill,
.nuxt-icon.nuxt-icon--fill * {
  fill: currentColor !important;
}

.nuxt-icon.nuxt-icon--stroke,
.nuxt-icon.nuxt-icon--stroke * {
  stroke: currentColor !important;
}
</style>
