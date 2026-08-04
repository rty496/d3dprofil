<template>
  <div class="app-layout">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>
<style>
body {
  margin: 0;
  background: #0e0e0e;
  color: #fff;
  font-family: system-ui, sans-serif;
}
main {
  min-height: 70vh;
}
</style>