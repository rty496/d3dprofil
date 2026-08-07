<template>
  <header class="app-header">
    <NuxtLink to="/" class="logo">3D.Portfolio</NuxtLink>

    <nav class="nav" :class="{ open: menuOpen }">
      <a href="#about" @click="menuOpen = false">Про мене</a>
      <a href="#shop" @click="menuOpen = false">Магазин</a>
      <NuxtLink to="/#contact" @click="menuOpen = false">Контакти</NuxtLink>
    </nav>

    <div class="header-actions">
      <button class="cart-button" @click="cartOpen = !cartOpen">
        🛒 <span v-if="cart.count">{{ cart.count }}</span>
      </button>

      <button class="burger" @click="menuOpen = !menuOpen" aria-label="Меню">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <CartDrawer v-if="cartOpen" @close="cartOpen = false" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
const cartOpen = ref(false)
const menuOpen = ref(false)
</script>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  border-bottom: 1px solid #2a2a2a;
  position: sticky;
  top: 0;
  background: #0e0e0e;
  z-index: 20;
}
.logo {
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  z-index: 21;
}
.nav {
  display: flex;
  gap: 24px;
}
.nav a {
  color: #ccc;
  text-decoration: none;
}
.nav a:hover {
  color: #fff;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.cart-button {
  position: relative;
  background: none;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 6px 12px;
  color: #fff;
  cursor: pointer;
}

/* Бургер — прихований на десктопі */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 21;
}
.burger span {
  display: block;
  height: 2px;
  background: #fff;
  border-radius: 2px;
}

/* Мобільна адаптація */
@media (max-width: 768px) {
  .app-header {
    padding: 14px 16px;
  }
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: #111;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 24px;
    gap: 20px;
    transition: right 0.3s ease;
  }
  .nav.open {
    right: 0;
  }
  .burger {
    display: flex;
  }
}
</style>