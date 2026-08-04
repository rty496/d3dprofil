<template>
  <div class="cart-drawer">
    <h3>Кошик ({{ cart.count }})</h3>
    <ul v-if="cart.items.length">
      <li v-for="item in cart.items" :key="item.id">
        {{ item.name }} — {{ item.price }} грн
        <button @click="cart.removeItem(item.id)">✕</button>
      </li>
    </ul>
    <p v-else>Кошик порожній</p>
    <p v-if="cart.items.length"><strong>Разом: {{ cart.total }} грн</strong></p>
    <NuxtLink v-if="cart.items.length" to="/checkout">Оформити замовлення</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
const cart = useCartStore()
</script>