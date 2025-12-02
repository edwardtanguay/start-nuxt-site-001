// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
    typeCheck: 'build'
  },
  app: {
    pageTransition: false,
    layoutTransition: false
  },
  router: {
    options: {
      scrollBehaviorType: 'auto'
    }
  }
})

