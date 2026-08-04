<template>
  <Transition name="fade">
    <div v-if="visible" class="splash">
      <div class="splash-bg"></div>

      <div class="splash-content">
        <h1 class="splash-title">3D.Portfolio</h1>
        <p class="splash-tagline">Створюю 3D-моделі, анімації та інтерактивні сцени</p>

        <button class="splash-cta" @click="enter">
          Переглянути товари та портфоліо
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(false)
const emit = defineEmits(['enter'])

onMounted(() => {
  // показуємо заставку лише один раз за сесію
  const seen = sessionStorage.getItem('splashSeen')
  if (!seen) {
    visible.value = true
  }
})

function enter() {
  visible.value = false
  sessionStorage.setItem('splashSeen', '1')
  emit('enter')
}
</script>

<style scoped>
.splash {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0e0e0e;
  overflow: hidden;
}

.splash-bg {
  position: absolute;
  inset: 0;
  background-image:
      radial-gradient(circle at 25% 25%, rgba(90, 90, 100, 0.25), transparent 45%),
      radial-gradient(circle at 75% 75%, rgba(70, 70, 80, 0.25), transparent 45%),
      radial-gradient(circle at 50% 90%, rgba(110, 110, 120, 0.15), transparent 55%);
  background-size: 250% 250%;
  animation: splashMove 12s ease-in-out infinite;
}

@keyframes splashMove {
  0% { background-position: 0% 0%, 100% 100%, 50% 100%; }
  50% { background-position: 100% 50%, 0% 50%, 50% 0%; }
  100% { background-position: 0% 0%, 100% 100%, 50% 100%; }
}

.splash-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 20px;
  animation: contentIn 0.8s ease-out;
}

@keyframes contentIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.splash-title {
  font-size: 3.5rem;
  margin: 0 0 12px;
  letter-spacing: -1px;
}

.splash-tagline {
  font-size: 1.2rem;
  color: #aaa;
  margin: 0 0 40px;
}

.splash-cta {
  padding: 16px 36px;
  font-size: 1.1rem;
  background: #fff;
  color: #0e0e0e;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
}
.splash-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .splash-title {
    font-size: 2.2rem;
  }
  .splash-tagline {
    font-size: 1rem;
  }
  .splash-cta {
    padding: 14px 28px;
    font-size: 1rem;
  }
}
</style>