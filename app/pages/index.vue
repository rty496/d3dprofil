<template>
  <div>
    <header class="hero">
      <h1>Привіт, я 3D-розробник</h1>
      <p>Створюю 3D-моделі, анімації та інтерактивні сцени</p>
    </header>

    <section id="shop" class="shop">
      <h2>3D-моделі на продаж</h2>
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
.hero {
  text-align: center;
  padding: 60px 20px;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 16px;
  }
  .hero h1 {
    font-size: 1.6rem;
  }
  .hero p {
    font-size: 0.95rem;
  }
  .products-grid {
    grid-template-columns: 1fr;
    padding: 0 16px;
  }
}
</style>