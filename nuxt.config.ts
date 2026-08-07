export default defineNuxtConfig({
  compatibilityDate: '2026-07-30',
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '',
    telegramChatId: process.env.TELEGRAM_CHAT_ID || ''
  }
})