export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { items, total, customer } = body

    const config = useRuntimeConfig()
    const botToken = config.telegramBotToken
    const chatId = config.telegramChatId

    const text =
        `🛒 Нове замовлення!\n\n` +
        `Клієнт: ${customer.name}\n` +
        `Email: ${customer.email}\n\n` +
        `Товари:\n` +
        items.map((i: any) => `— ${i.name} (${i.price} грн)`).join('\n') +
        `\n\nВсього: ${total} грн`

    try {
        await $fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            body: { chat_id: chatId, text }
        })
    } catch (e) {
        console.error('Telegram помилка:', e)
    }

    return { success: true }
})