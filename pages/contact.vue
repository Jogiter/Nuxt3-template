<template>
  <ClientOnly>
    <div
      class="bg-gradient-to-b transition-all duration-300 bg-no-repeat min-h-screen"
      :class="{
        'from-[#587DFF_0.11%] to-[#fff_99.89%]': true,
      }"
    >
      <common-header></common-header>
      <div class="px-[16px]">
        <h2
          class="text-[36px] font-bold tracking-[-0.5px] mt-[32px] flex items-center"
        >
          <span class="text-[#000] opacity-40">{{ t('contact.hello') }}</span>
          <img
            class="w-[36px] aspect-square ml-[6px]"
            src="@/assets/images/3x/light/en/hi.png"
            alt=""
          />
        </h2>
        <h2
          class="text-[24px] font-bold tracking-[-0.5px] text-[#000] opacity-90 mt-[24px]"
        >
          {{ t('contact.title') }}
        </h2>
        <p
          class="text-[14px] font-bold tracking-[-0.5px] text-[#000] opacity-60 mt-[4px]"
        >
          {{ t('contact.desc') }}
        </p>

        <form class="mt-[12px]" @submit.prevent="onsubmit">
          <div
            class="mb-[8px] flex items-center gap-[8px] rounded-[12px] bg-[#fff] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] px-[12px] py-[16px]"
          >
            <label
              for="name"
              class="text-[12px] font-normal tracking-[-0.5px] text-[#000] opacity-90"
              >{{ t('contact.form.label1') }}</label
            >
            <input
              id="name"
              name="name"
              type="text"
              autocomplete="name"
              v-model.trim="form.name"
              required
              class="flex-1 h-[16px] placeholder:font-normal appearance-none rounded-none relative block w-full placeholder-[#000000] placeholder:opacity-40 text-[#000000] opacity-90 font-bold focus:outline-none focus:ring-indigo-500 focus:border-none focus:z-10 sm:text-sm"
              :placeholder="t('contact.form.placeholder1')"
            />
          </div>
          <div
            class="mb-[8px] flex items-center gap-[8px] rounded-[12px] bg-[#fff] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] px-[12px] py-[16px]"
          >
            <label
              for="email"
              class="text-[12px] font-normal tracking-[-0.5px] text-[#000] opacity-90"
              >{{ t('contact.form.label2') }}</label
            >
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              v-model.trim="form.email"
              required
              class="flex-1 h-[16px] placeholder:font-normal appearance-none rounded-none relative block w-full placeholder-[#000000] placeholder:opacity-40 text-[#000000] opacity-90 font-bold focus:outline-none focus:ring-indigo-500 focus:border-none focus:z-10 sm:text-sm"
              :placeholder="t('contact.form.placeholder2')"
            />
          </div>

          <div
            class="mb-[8px] flex flex-col gap-[8px] rounded-[12px] bg-[#fff] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] px-[12px] py-[16px]"
          >
            <label
              for="message"
              class="text-[12px] font-normal tracking-[-0.5px] text-[#000] opacity-90"
              >{{ t('contact.form.label3') }}</label
            >
            <textarea
              id="message"
              name="message"
              autocomplete="message"
              v-model.trim="form.content"
              required
              rows="3"
              class="flex-1 appearance-none placeholder:font-normal rounded-none relative block w-full placeholder-[#000000] placeholder:opacity-40 text-[#000000] opacity-90 font-bold focus:outline-none focus:ring-indigo-500 focus:border-none focus:z-10 sm:text-sm"
              :placeholder="t('contact.form.placeholder3')"
            />

            <div class="text-right">
              <v-btn
                variant="tonal"
                type="submit"
                height="32"
                class="!bg-[#5A7DFB] !rounded-[8px] !text-[12px] !font-bold !tracking-[-0.5px] !px-[10px]"
                color="#fff"
                selected-class="text-red-500"
                :disabled="submitDisabled"
                >{{ t('contact.form.submit')
                }}<u-icon
                  name="light/send"
                  filled
                  class="text-[#fff] text-[10px] opacity-90 ml-[4px]"
                ></u-icon
              ></v-btn>
            </div>
          </div>
        </form>

        <div
          class="w-full rounded-[12px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] mt-[8px] bg-white p-[12px]"
        >
          <h4
            class="text-[14px] font-bold mb-[20px] text-[#000] opacity-90"
          >
            {{ t('contact.other.title') }}
          </h4>
          <div class="py-[2px]">
            <div class="flex justify-between items-center mb-[15px]">
              <p class="flex items-center">
                <u-icon
                  name="light/telegram"
                  filled
                  class="text-[#4296D5] text-[16px]"
                ></u-icon>
                <span
                  class="mx-[6px] text-[#000] opacity-40 text-[12px]"
                  >{{ t('contact.other.telegram') }}</span
                >
              </p>
              <a
                class="flex items-center"
                :href="LINKS.telegram"
                target="_blank"
                ><span
                  class="mx-[6px] font-bold text-[#000] opacity-90 text-[14px]"
                  >{{ t('contact.other.telegramDesc') }}</span
                ><u-icon
                  name="light/link"
                  filled
                  class="text-[#4296D5] text-[16px]"
                ></u-icon
              ></a>
            </div>
            <div class="flex justify-between items-center">
              <p class="flex items-center">
                <u-icon
                  name="light/email"
                  filled
                  class="text-[#4296D5] text-[16px]"
                ></u-icon
                ><span
                  class="mx-[6px] text-[#000] opacity-40 text-[12px]"
                  >{{ t('contact.other.email') }}</span
                >
              </p>
              <a
                class="flex items-center"
                :href="`mailto:${LINKS.email}`"
                target="_blank"
                ><span
                  class="mx-[6px] font-bold text-[#000] opacity-90 text-[14px]"
                  >{{ t('contact.other.emailDesc') }}</span
                ><u-icon
                  name="light/link"
                  filled
                  class="text-[#4296D5] text-[16px]"
                ></u-icon
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-snackbar v-model="toast" :color="toastColor">
      {{ toastMessage }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="toast = false">{{
          t('common.close')
        }}</v-btn>
      </template>
    </v-snackbar>
  </ClientOnly>
</template>

<script setup lang="ts">
import { submitSuggestion } from '@/request'
import { useToast } from '@/composables/useToast'
import { LINKS } from '~/utils/constants'

const { showToast, toastMessage, toast, toastColor } = useToast()
const { t } = useI18n()
const isLoading = ref(false)

const form = ref({
  name: '',
  email: '',
  content: '',
})

const submitDisabled = computed(() => {
  return (
    !form.value.name ||
    !form.value.email ||
    !form.value.content ||
    isLoading.value
  )
})

onMounted(() => {
  setRootVariable('--bg-color', '#587DFF')
})

const onsubmit = () => {
  if (isLoading.value) {
    return
  }
  isLoading.value = true
  submitSuggestion(form.value)
    .then(() => {
      showToast(t('contact.successMessage'), 'success')
    })
    .catch(() => {
      showToast(t('contact.errorMessage'), 'error')
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>
