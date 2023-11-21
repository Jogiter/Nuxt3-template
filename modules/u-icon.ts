import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

export interface ModuleOptions {
  // dir: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-icons',
    configKey: 'nuxtIcons',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addComponent({
      name: 'u-icon',
      global: true,
      filePath: resolve('../components/U-Icon.vue'),
    })
  },
})
