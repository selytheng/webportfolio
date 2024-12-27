<template>
  <div class="fixed w-full flex justify-center top-6 z-50">
    <nav
      class="bg-white/60 dark:bg-gray-950/50 backdrop-blur-md text-gray-700 dark:text-gray-200 rounded-full shadow-lg transition-colors duration-300 mx-4 border border-gray-200/20 dark:border-gray-800/20"
    >
      <div class="px-6 py-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-gray-200/20 dark:border-gray-800/20"
            >
              <img
                src="../assets/img/profile.jpg"
                alt="Profile"
                class="w-full h-full object-cover"
                onError="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\'/%3E%3Ccircle cx=\'12\' cy=\'7\' r=\'4\'/%3E%3C/svg%3E'"
              />
            </div>
            <div class="text-xl font-bold text-gray-800 dark:text-white">SE LyTheng</div>
          </div>
          <div class="hidden md:flex space-x-2 ml-6">
            <a
              v-for="item in navItems"
              :key="item"
              :href="'#' + item.toLowerCase()"
              @click.prevent="scrollToSection(item.toLowerCase())"
              :class="[
                'px-4 py-2 rounded-full transition-all duration-300 relative',
                activeSection === item.toLowerCase()
                  ? 'bg-gray-100 dark:bg-gray-800 text-primary dark:text-blue-400'
                  : 'hover:bg-white/80 dark:hover:bg-gray-800/60 hover:text-primary dark:hover:text-blue-400',
              ]"
            >
              {{ item }}
            </a>
          </div>
          <button
            @click="toggleMenu"
            class="md:hidden p-2 rounded-full hover:bg-white/80 dark:hover:bg-gray-800/60"
          >
            <i class="fas fa-bars text-gray-800 dark:text-white"></i>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden absolute top-20 right-4 bg-white/60 dark:bg-gray-950/50 backdrop-blur-md rounded-2xl shadow-lg p-2 min-w-[200px] border border-gray-200/20 dark:border-gray-800/20"
    >
      <a
        v-for="item in navItems"
        :key="item"
        :href="'#' + item.toLowerCase()"
        @click.prevent="handleMenuClick(item.toLowerCase())"
        :class="[
          'block px-4 py-2 rounded-xl text-gray-700 dark:text-gray-200 transition-all duration-300',
          activeSection === item.toLowerCase()
            ? 'bg-gray-100 dark:bg-gray-800 text-primary dark:text-blue-400'
            : 'hover:bg-white/80 dark:hover:bg-gray-800/60 hover:text-primary dark:hover:text-blue-400',
        ]"
      >
        {{ item }}
      </a>
    </div>
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

    const throttle = (func: Function, limit: number) => {
      let inThrottle: boolean
      return function (this: any, ...args: any[]) {
        if (!inThrottle) {
          func.apply(this, args)
          inThrottle = true
          setTimeout(() => (inThrottle = false), limit)
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', throttle(checkActiveSection, 100))
      checkActiveSection()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', throttle(checkActiveSection, 100))
    })

    return {
      isMenuOpen,
      activeSection,
      navItems,
      toggleMenu,
      closeMenu,
      scrollToSection,
      handleMenuClick,
    }
  },
})
</script>
