<template>
  <div>
    <AboutSection />

    <section id="shop" class="shop">
      <h2>3D-моделі на продаж</h2>
      <p class="demo-note">Демонстраційні товари — замініть на власні роботи</p>
      <div class="products-grid">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
</script>

<style scoped>
.demo-note {
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  margin-top: -10px;
  margin-bottom: 30px;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 0 20px;
}
.shop {
  scroll-margin-top: 80px;
}
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
}
</style>