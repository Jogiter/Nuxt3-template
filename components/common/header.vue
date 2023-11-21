<template>
  <div
    class="flex justify-between items-center bg-transparent h-[44px] pr-[12px] pl-[16px]"
  >
    <button class="inline-flex items-center" @click="goHome">
      <u-icon name="light/logo" filled class="text-[36px]"></u-icon>
    </button>
    <div class="flex items-center">
      <button class="flex items-center ml-[16px]" @click="dialog = true">
        <span class="text-[14px] font-semibold tracking-[-0.5px] opacity-90">{{
          fullLocaleName.toUpperCase()
        }}</span>
        <u-icon name="light/arrow-down" filled class="text-[20px] transition-all" :class="dialog ? 'rotate-180' : 'rotate-0'"></u-icon>
      </button>
      <!-- <button>
        <u-icon name="light/menu" filled class="text-[24px]"></u-icon>
      </button> -->
    </div>
  </div>
  <teleport to="body">
    <v-dialog
      v-model="dialog"
      content-class="!w-auto !max-w-none !mx-[10px] !mt-0 !top-[88px] left-0 right-0"
    >
      <v-card class="!rounded-[16px] !bg-[#fff]">
        <v-card-actions
          class="relative flex justify-center !min-h-[44px] !mt-[8px]"
        >
          <h4
            class="text-[16px] font-bold tracking-[-0.5px] opacity-90 text-[#000]"
          >
            {{ 'Language' }}
          </h4>
          <button class="absolute right-[12px]">
            <v-icon
              @click="dialog = false"
              icon="mdi-close"
              class="text-[24px]"
            ></v-icon>
          </button>
        </v-card-actions>
        <v-list class="!mx-[12px] !py-[4px]">
          <v-list-item
            v-for="item of languages"
            :key="item.value"
            :active="locale === item.value"
            :value="item.title"
            min-height="44"
            class="!px-[12px]"
            active-class="!bg-[#F5F7FC] !rounded-[8px]"
            @click="onsetLocale(item.value)"
          >
            <v-list-item-title v-text="item.title" class="text-[#000] opacity-60"></v-list-item-title>
            <template v-slot:append>
              <v-icon
                v-if="locale === item.value"
                icon="mdi-check"
                class="text-[24px] !text-[#000] !opacity-100"
              ></v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </teleport>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const fullLocaleName = computed(() => {
  if (locale.value.indexOf('zh') > -1) {
    return LanguageList.find((i) => i.value === LocaleEnum.ZH)!.label
  }
  return LanguageList.find((i) => i.value === locale.value)!.label
})

const dialog = ref(false)
const languages = computed(() => {
  return LanguageList.map((i) => ({
    title: i.label,
    value: i.value,
  }))
})

const onsetLocale = (locale: string) => {
  dialog.value = false
  setLocale(locale)
  navigateTo(localePath('', locale))
}

const goHome = () => {
  navigateTo(localePath('/', locale.value))
}
</script>
