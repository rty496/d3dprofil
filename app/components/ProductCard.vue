<template>
  <NuxtLink :to="`/shop/${product.id}`" class="product-card">
    <img v-if="product.image" :src="product.image" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p class="price">{{ product.price }} грн</p>
    <p v-if="product.attribution" class="card-attribution">{{ product.attribution.text }}</p>

  </NuxtLink>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const props = defineProps<{
  product: {
    id: string
    name: string
    price: number
    image?: string
  }
}>()

const cart = useCartStore()
const router = useRouter()

function handleBuy() {
  cart.addItem(props.product)
  router.push('/checkout')
}
</script>

<style scoped>
.product-card {
  display: block;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s;
}
.product-card:hover {
  border-color: #5599ff;
}
.product-image {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 8px;
}
.price {
  font-weight: bold;
  font-size: 1.2rem;
}
button {
  padding: 8px 16px;
  cursor: pointer;
  width: 100%;
}
</style>