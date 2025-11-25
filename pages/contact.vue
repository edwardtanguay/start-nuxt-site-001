<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
      <div class="bg-white p-8 rounded-lg border border-gray-200">
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-gray-50"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-gray-50"
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-gray-50"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact'
})
</script>

