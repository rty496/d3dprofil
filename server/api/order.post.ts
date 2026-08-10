export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { items, total, customer } = body

    console.log('Отримані дані замовлення:', JSON.stringify(body))

    const config = useRuntimeConfig()
    const botToken = config.telegramBotToken
    const chatId = config.telegramChatId

    const text =
        `🛒 Нове замовлення!\n\n` +
        `Клієнт: ${customer?.name}\n` +
        `Email: ${customer?.email}\n\n` +
        `Товари:\n` +
        (items || []).map((i: any) => `— ${i.name} (${i.price} грн)`).join('\n') +
        `\n\nВсього: ${total} грн`

    console.log('Сформований текст:', text)
    console.log('chatId:', chatId, 'тип:', typeof chatId)

    try {
        const result = await $fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            body: { chat_id: chatId, text }
        })
        console.log('Telegram відповів успішно:', result)
    } catch (e: any) {
        console.error('Telegram помилка:', e?.data || e?.message || e)
    }

    return { success: true }
})