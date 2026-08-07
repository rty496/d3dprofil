<template>

  <div v-if="product" class="product-page">
    <div class="product-main">
      <img :src="product.image" :alt="product.name" class="product-image" />

      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ product.price }} грн</p>
        <p class="description">{{ product.description }}</p>

        <ul class="specs" v-if="product.polyCount || product.format">
          <li v-if="product.polyCount">Полігони: {{ product.polyCount }}</li>
          <li v-if="product.format">Формати: {{ product.format.join(', ') }}</li>
        </ul>

        <p v-if="product.attribution" class="attribution">
          <a :href="product.attribution.url" target="_blank" rel="noopener">
            {{ product.attribution.text }}
          </a>
        </p>

        <button class="buy-button" @click="handleBuy">Придбати за {{ product.price }} грн</button>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <p>Товар не знайдено</p>
    <NuxtLink to="/">На головну</NuxtLink>

  </div>

</template>
<script setup lang="ts">
import { products } from '~/data/products'
import { useCartStore } from '~/stores/cart'

const route = useRoute()
const router = useRouter()
const cart = useCartStore()

const product = computed(() =>
    products.find(p => p.id === route.params.id)
)

function handleBuy() {
  if (!product.value) return
  cart.addItem(product.value)
  router.push('/checkout')
}

useSeoMeta({
  title: () => product.value ? `${product.value.name} — 3D.Portfolio` : 'Товар не знайдено',
  description: () => product.value?.description || '',
  ogTitle: () => product.value?.name || '',
  ogDescription: () => product.value?.description || '',
  ogImage: () => product.value?.image || '',
  ogType: 'website'
})
</script>

<style scoped>
.attribution {
  font-size: 0.85rem;
  color: #777;
  margin: 8px 0 20px;
}
.attribution a {
  color: #999;
  text-decoration: underline;
}
.attribution a:hover {
  color: #ccc;
}
.product-image {
  width: 100%;
  border-radius: 12px;
}
.product-page {
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
}
.product-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.price {
  font-size: 1.6rem;
  font-weight: bold;
  margin: 12px 0;
}
.description {
  line-height: 1.6;
  color: #ccc;
}
.specs {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  color: #999;
}
.specs li {
  padding: 4px 0;
}
.buy-button {
  width: 100%;
  padding: 14px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 12px;
}
.not-found {
  text-align: center;
  padding: 80px 20px;
}

@media (max-width: 768px) {
  .product-main {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>