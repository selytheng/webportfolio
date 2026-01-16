<script setup lang="ts">
  const contactMethods = [
    { icon: 'fas fa-envelope', label: 'Email', value: 'contact@selytheng.com', link: 'mailto:contact@selytheng.com', delay: '100ms' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+855 12 495 062', link: 'tel:+85512495062', delay: '200ms' },
    { icon: 'fab fa-github', label: 'GitHub', value: 'selytheng', link: 'https://github.com/selytheng', delay: '300ms' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'Se LyTheng', link: 'https://linkedin.com/in/therealselytheng', delay: '400ms' },
    { icon: 'fab fa-telegram', label: 'Telegram', value: '@lytheng', link: 'https://t.me/lytheng', delay: '500ms' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Phnom Penh, Cambodia', link: null, delay: '600ms' },
  ];
</script>

<template>
  <section id="contact" class="py-24 bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden transition-colors duration-300">

    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white animate-fade-in-up">
          Contact
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div v-for="item in contactMethods" :key="item.label"
              class="group p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-primary transition-all duration-300 animate-slide-in-up"
              :style="{ animationDelay: item.delay }">

          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 shrink-0 bg-primary dark:bg-blue-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <i :class="[item.icon, 'text-lg']"></i>
            </div>

            <div class="overflow-hidden">
              <p class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-0.5">{{ item.label }}</p>
              <component :is="item.link ? 'a' : 'span'"
                          :href="item.link"
                          class="text-lg font-medium truncate block transition-colors"
                          :class="item.link ? 'hover:text-primary dark:hover:text-blue-400' : 'text-white'">
                {{ item.value }}
              </component>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
        Copyright © 2026 <span class="text-gray-400">Se LyTheng</span>. All rights reserved.
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Keyframes kept from your original request */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
.animate-slide-in-up { animation: slideInUp 0.6s ease-out forwards; opacity: 0; }
.animate-blob { animation: blob 7s infinite; }
.animation-delay-2000 { animation-delay: 2s; }
</style>
