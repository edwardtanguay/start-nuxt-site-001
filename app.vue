<template>
  <div class="min-h-screen bg-gray-50">
    <AppNavigation />
    <main :style="{ opacity: contentVisible ? 1 : 0 }">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, provide } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const contentVisible = ref(true)

// Provide function to hide content immediately
const hideContent = () => {
  contentVisible.value = false
}
provide('hideContent', hideContent)

// Show content after DOM updates and scroll
watch(() => route.path, async () => {
  await nextTick()
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0)
  }
  contentVisible.value = true
}, { immediate: false })
</script>
