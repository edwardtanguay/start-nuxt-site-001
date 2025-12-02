<template>
  <nav class="bg-gray-100 border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-xl font-semibold text-gray-800">
            Site
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:space-x-8">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-md transition-colors"
            :class="{ 'bg-gray-200 text-gray-900': isActive(item.path) }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIcon(item.iconName)" />
            </svg>
            <span>{{ item.label }}</span>
          </NuxtLink>
        </div>

        <!-- Hamburger Button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Hamburger Icon -->
            <svg
              v-if="!isMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Close Icon -->
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-100 border-t border-gray-200">
        <NuxtLink
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"
          @click="closeMenu"
          class="flex items-center space-x-3 px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-md transition-colors"
          :class="{ 'bg-gray-200 text-gray-900': isActive(item.path) }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIcon(item.iconName)" />
          </svg>
          <span>{{ item.label }}</span>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { useRoute } from 'vue-router'

interface NavigationItem {
  path: string
  label: string
  iconName: string
}

const navigationItems: NavigationItem[] = [
  { path: '/', label: 'Home', iconName: 'home' },
  { path: '/about', label: 'About', iconName: 'about' },
  { path: '/services', label: 'Services', iconName: 'services' },
  { path: '/contact', label: 'Contact', iconName: 'contact' }
]

const route = useRoute()
const isMenuOpen = ref(false)
const hideContent = inject<() => void>('hideContent')

const isActive = (path: string): boolean => {
  return route.path === path
}

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = (): void => {
  // Hide content immediately before route change
  if (hideContent) {
    hideContent()
  }
  isMenuOpen.value = false
}

const getIcon = (iconName: string) => {
  const icons: Record<string, string> = {
    home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    about: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    services: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    contact: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  }
  return icons[iconName] || ''
}
</script>

