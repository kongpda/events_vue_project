// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'locale/en-US.json' },
      { code: 'kh', language: 'kh-KH', file: 'locale/kh-KH.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
  },
})
