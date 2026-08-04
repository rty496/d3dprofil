<template>
  <div ref="container" class="viewer-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLDivElement | null>(null)
let renderer: THREE.WebGLRenderer
let animationId: number

onMounted(() => {
  if (!container.value) return

  const width = container.value.clientWidth
  const height = 400

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 3

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  container.value.appendChild(renderer.domElement)

  // Тимчасовий куб — заміниш на завантаження своєї 3D-моделі (GLTF)
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshStandardMaterial({ color: 0x5599ff })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(2, 2, 2)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0xffffff, 0.4))

  function animate() {
    animationId = requestAnimationFrame(animate)
    cube.rotation.x += 0.005
    cube.rotation.y += 0.008
    renderer.render(scene, camera)
  }
  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  renderer?.dispose()
})
</script>

<style scoped>
.viewer-container {
  width: 100%;
  height: 400px;
}
</style>