<template>
  <div class="viewer-wrapper">
    <div ref="container" class="viewer-container"></div>
    <p class="viewer-hint">🖱 Обертайте модель мишкою</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const props = defineProps<{
  modelUrl?: string   // шлях до .glb файлу, якщо є реальна модель
  color?: string       // колір заглушки, якщо моделі ще немає
}>()

const container = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let animationId: number

onMounted(() => {
  if (!container.value) return

  const width = container.value.clientWidth
  const height = 400

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
  camera.position.set(0, 0, 4)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.value.appendChild(renderer.domElement)

  // Освітлення
  const light = new THREE.DirectionalLight(0xffffff, 1.2)
  light.position.set(3, 3, 3)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0xffffff, 0.5))

  // OrbitControls — обертання мишкою
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.autoRotate = true
  controls.autoRotateSpeed = 1.5
  controls.enableZoom = true
  controls.enablePan = false

  if (props.modelUrl) {
    // Завантаження реальної 3D-моделі (.glb)
    const loader = new GLTFLoader()
    loader.load(
        props.modelUrl,
        (gltf) => {
          scene.add(gltf.scene)
        },
        undefined,
        (error) => {
          console.error('Помилка завантаження моделі:', error)
        }
    )
  } else {
    // Заглушка — обертовий куб, поки немає реальної моделі
    const geometry = new THREE.BoxGeometry(1.4, 1.4, 1.4)
    const material = new THREE.MeshStandardMaterial({
      color: props.color || 0x5599ff
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
  }

  function animate() {
    animationId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  // адаптивність під зміну розміру вікна
  const handleResize = () => {
    if (!container.value) return
    const w = container.value.clientWidth
    camera.aspect = w / height
    camera.updateProjectionMatrix()
    renderer.setSize(w, height)
  }
  window.addEventListener('resize', handleResize)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  renderer?.dispose()
  controls?.dispose()
})
</script>

<style scoped>
.viewer-wrapper {
  position: relative;
}
.viewer-container {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  background: #151515;
}
.viewer-hint {
  text-align: center;
  color: #888;
  font-size: 0.85rem;
  margin-top: 8px;
}

@media (max-width: 768px) {
  .viewer-container {
    height: 280px;
  }
}
</style>