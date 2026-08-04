<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p>&copy; {{ year }} 3D-розробник. Всі права захищено.</p>

      <div class="socials">
        <a href="https://t.me/твій_нік" target="_blank">Telegram</a>
        <a href="mailto:твоя@пошта.com">Email</a>
        <a href="https://instagram.com/твій_нік" target="_blank">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
  border-top: 1px solid #2a2a2a;
  padding: 24px 32px;
  margin-top: 60px;
  text-align: center;
}
.footer-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}
.socials {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 768px) {
  .app-footer {
    padding: 20px 16px;
  }
  .socials {
    gap: 14px;
    font-size: 0.9rem;
  }
}
</style>