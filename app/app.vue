<template>
  <div class="app-layout">
    <div class="animated-bg"></div>
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: '3D.Portfolio — 3D-розробник та магазин 3D-моделей',
  description: 'Портфоліо 3D-художника: перегляньте роботи та придбайте готові 3D-моделі — персонажі, локації, зброю та інше.',
  ogTitle: '3D.Portfolio',
  ogDescription: 'Портфоліо та магазин 3D-моделей',
  ogType: 'website',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  htmlAttrs: { lang: 'uk' }
})
</script>

<style>
body {
  margin: 0;
  background: #0e0e0e;
  color: #fff;
  font-family: system-ui, sans-serif;
}

.app-layout {
  position: relative;
  min-height: 100vh;
}

/* Анімований фон */
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #0e0e0e;
  background-image:
      radial-gradient(circle at 20% 30%, rgba(80, 80, 90, 0.15), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(60, 60, 70, 0.15), transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(100, 100, 110, 0.08), transparent 60%);
  background-size: 200% 200%;
  animation: bgMove 20s ease-in-out infinite;
}

@keyframes bgMove {
  0% {
    background-position: 0% 0%, 100% 100%, 50% 50%;
  }
  50% {
    background-position: 100% 100%, 0% 0%, 30% 70%;
  }
  100% {
    background-position: 0% 0%, 100% 100%, 50% 50%;
  }
}

main {
  min-height: 70vh;
  position: relative;
  z-index: 1;
}
</style>