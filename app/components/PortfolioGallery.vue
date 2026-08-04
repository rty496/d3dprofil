<template>
  <section class="portfolio-gallery">
    <h2>Мої роботи</h2>
    <div class="gallery-grid">
      <div v-for="work in works" :key="work.id" class="gallery-item">
        <img :src="work.image" :alt="work.title" />
        <p>{{ work.title }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Тимчасові дані — заміниш на свої роботи
const works = [
  { id: 1, title: 'Робота 1', image: '/portfolio/model1.jpg' },
  { id: 2, title: 'Робота 2', image: '/portfolio/work2.jpg' },
  { id: 3, title: 'Робота 3', image: '/portfolio/work3.jpg' }
]
</script>

<style scoped>
.portfolio-gallery {
  padding: 0 20px;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
.gallery-item img {
  width: 100%;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .portfolio-gallery {
    padding: 0 16px;
  }
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>