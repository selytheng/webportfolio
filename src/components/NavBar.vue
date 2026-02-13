<template>
  <div class="fixed w-full flex flex-col items-center top-6 z-50 px-4 gap-4">
    <nav
      class="bg-white/60 dark:bg-gray-950/50 backdrop-blur-xl text-gray-700 dark:text-gray-200 rounded-full shadow-2xl transition-colors duration-300 border border-gray-200/20 dark:border-gray-800/20 max-w-5xl w-full"
    >
      <div class="px-6 py-3.5">
        <div class="flex items-center justify-between">
          <!-- Logo + Name -->
          <div class="flex items-center gap-3">
            <div
              class="w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 backdrop-blur-xl border-2 border-white/40 dark:border-white/20 shadow-lg transform transition-transform duration-300 hover:scale-110"
            >
              <img
                src="../assets/img/profile.jpeg"
                alt="Profile"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </div>

            <div
              class="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
            >
              SE LyTheng
            </div>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-1 ml-6">
            <a
              v-for="item in navItems"
              :key="item"
              :href="'#' + item.toLowerCase()"
              @click.prevent="scrollToSection(item.toLowerCase())"
              :class="[
                'px-5 py-2.5 rounded-full transition-all duration-300 relative font-medium text-sm',
                activeSection === item.toLowerCase()
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg'
                  : 'hover:bg-white/80 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white',
              ]"
            >
              {{ item }}
            </a>
          </div>

          <!-- Mobile Button -->
          <button
            @click="toggleMenu"
            class="md:hidden p-2.5 rounded-full hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            <svg
              class="w-5 h-5 text-gray-800 dark:text-white transition-transform duration-300"
              :class="{ 'rotate-90': isMenuOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Dropdown -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2"
    >
      <div
        v-show="isMenuOpen"
        class="md:hidden absolute top-20 right-4 bg-white/60 dark:bg-gray-950/50 backdrop-blur-xl rounded-2xl shadow-2xl p-2 min-w-[220px] border border-gray-200/20 dark:border-gray-800/20"
      >
        <a
          v-for="item in navItems"
          :key="item"
          :href="'#' + item.toLowerCase()"
          @click.prevent="handleMenuClick(item.toLowerCase())"
          :class="[
            'block px-5 py-3 rounded-xl text-gray-700 dark:text-gray-200 transition-all duration-300 font-medium text-sm mb-1 last:mb-0',
            activeSection === item.toLowerCase()
              ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg'
              : 'hover:bg-white/80 dark:hover:bg-gray-800/60 hover:text-gray-900 dark:hover:text-white hover:scale-105',
          ]"
        >
          {{ item }}
        </a>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const isMenuOpen = ref(false)
    const activeSection = ref('')
    const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }

    const closeMenu = () => {
      isMenuOpen.value = false
    }

    const scrollToSection = (section: string) => {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        activeSection.value = section
      }
    }

    const handleMenuClick = (section: string) => {
      scrollToSection(section)
      closeMenu()
    }

    const handleImageError = (event: Event) => {
      const target = event.target as HTMLImageElement
      target.onerror = null
      target.src =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E"
    }

    const checkActiveSection = () => {
      const sections = navItems.map((item) => ({
        id: item.toLowerCase(),
        element: document.getElementById(item.toLowerCase()),
      }))

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      activeSection.value = currentSection ? currentSection.id : ''
    }

    const throttle = <T extends (...args: unknown[]) => void>(func: T, limit: number): T => {
      let inThrottle = false
      return function (this: unknown, ...args: Parameters<T>) {
        if (!inThrottle) {
          func.apply(this, args)
          inThrottle = true
          setTimeout(() => (inThrottle = false), limit)
        }
      } as T
    }

    const throttledScroll = throttle(checkActiveSection, 100)

    onMounted(() => {
      window.addEventListener('scroll', throttledScroll)
      checkActiveSection()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', throttledScroll)
    })

    return {
      isMenuOpen,
      activeSection,
      navItems,
      toggleMenu,
      closeMenu,
      scrollToSection,
      handleMenuClick,
      handleImageError,
    }
  },
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

nav {
  animation: slideDown 0.6s ease-out;
}
</style>
