<template>
  <div class="checkout-page">
    <h1>Оформлення замовлення</h1>

    <div v-if="cart.items.length === 0">
      <p>Кошик порожній</p>
      <NuxtLink to="/">Повернутись до магазину</NuxtLink>
    </div>

    <div v-else>
      <ul>
        <li v-for="item in cart.items" :key="item.id">
          {{ item.name }} — {{ item.price }} грн
        </li>
      </ul>
      <p><strong>Всього: {{ cart.total }} грн</strong></p>

      <form @submit.prevent="submitOrder">
        <input v-model="form.name" type="text" placeholder="Ваше ім'я" required />
        <input v-model="form.email" type="email" placeholder="Email" required />
        <button type="submit">Підтвердити замовлення</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
const router = useRouter()

const form = reactive({
  name: '',
  email: ''
})

async function submitOrder() {
  await $fetch('/api/order', {
    method: 'POST',
    body: {
      items: cart.items,
      total: cart.total,
      customer: form
    }
  })
  cart.clear()
  router.push('/thank-you')
}
</script>