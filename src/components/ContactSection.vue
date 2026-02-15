<script setup lang="ts">
const contactMethods = [
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'contact@selytheng.com',
    link: 'mailto:contact@selytheng.com',
  },
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    value: '+855 12 495 062',
    link: 'tel:+85512495062',
  },
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    value: '@selytheng',
    link: 'https://github.com/selytheng',
  },
  {
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    value: '@therealselytheng',
    link: 'https://linkedin.com/in/therealselytheng',
  },
  {
    icon: 'fab fa-telegram',
    label: 'Telegram',
    value: '@lytheng',
    link: 'https://t.me/lytheng',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Location',
    value: 'Phnom Penh, Cambodia',
    link: 'https://maps.app.goo.gl/GYDjt7GW3irirgCs5',
  },
]
</script>

<template>
  <section id="contact" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-1 text-sm font-semibold rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300 mb-4"
        >
          Get In Touch
        </span>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Feel free to reach out through any of these channels
        </p>
      </div>

      <!-- Cards -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="item in contactMethods"
          :key="item.label"
          :href="item.link"
          :target="item.link.startsWith('http') ? '_blank' : undefined"
          :rel="item.link.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="flex items-center gap-4 p-6 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40"
          >
            <i :class="[item.icon, 'text-blue-600 dark:text-blue-400 text-lg']"></i>
          </div>

          <!-- Text -->
          <div class="flex-1">
            <p class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {{ item.label }}
            </p>
            <p class="font-semibold text-gray-900 dark:text-white truncate">
              {{ item.value }}
            </p>
          </div>

          <!-- Arrow -->
          <div class="text-gray-400 group-hover:text-blue-500 transition">→</div>
        </a>
      </div>

      <!-- Footer -->
      <div class="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2026 Se LyTheng. All rights reserved.
      </div>
    </div>
  </section>
</template>
