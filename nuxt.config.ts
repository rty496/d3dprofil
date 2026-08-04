export default defineNuxtConfig({
  compatibilityDate: '2026-07-30',
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '8937088646:AAH77hCRFjek6EBA1LynOTfXBaVTY8pazSM',
    telegramChatId: process.env.TELEGRAM_CHAT_ID || '2020197126'
  }
})