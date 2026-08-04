<template>
  <div class="product-card">
    <img v-if="product.image" :src="product.image" :alt="product.name" class="product-image" />
    <h3>{{ product.name }}</h3>
    <p class="price">{{ product.price }} грн</p>
    <button @click="handleBuy">Придбати</button>
  </div>
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
  border: 1px solid #333;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
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

@media (max-width: 480px) {
  .product-card {
    padding: 12px;
  }
}
</style>