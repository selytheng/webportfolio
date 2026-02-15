<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      :class="['scroll-to-top', { 'dark-mode': isDarkBackground }]"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'ScrollToTop',
  setup() {
    const isVisible = ref(false)
    const isDarkBackground = ref(false)

    const getBrightness = (element: Element | null): number => {
      if (!element) return 255

      const style = window.getComputedStyle(element)
      const bgColor = style.backgroundColor

      // If transparent, check parent
      if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        return getBrightness(element.parentElement)
      }

      // Parse RGB values
      const match = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
      if (match) {
        const r = parseInt(match[1])
        const g = parseInt(match[2])
        const b = parseInt(match[3])

        // Calculate perceived brightness using luminance formula
        return r * 0.299 + g * 0.587 + b * 0.114
      }

      return 255
    }

    const checkBackgroundColor = () => {
      // Get the position where the button would be
      const buttonX = window.innerWidth - 48 // 2rem from right + half button width
      const buttonY = window.innerHeight - 48 // 2rem from bottom + half button width

      // Get element at that position
      const element = document.elementFromPoint(buttonX, buttonY)
      const brightness = getBrightness(element)

      // If background is light (brightness > 128), use dark button
      // If background is dark (brightness <= 128), use light button
      isDarkBackground.value = brightness > 128
    }

    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > 300

      if (shouldBeVisible !== isVisible.value) {
        isVisible.value = shouldBeVisible
      }

      if (isVisible.value) {
        checkBackgroundColor()
      }
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      // Initial check
      setTimeout(checkBackgroundColor, 100)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isVisible,
      isDarkBackground,
      scrollToTop,
    }
  },
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;

  /* Light glass morphism (for dark backgrounds) */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow:
    0 8px 32px 0 rgba(0, 0, 0, 0.1),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.2);

  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  pointer-events: auto;
}

/* Dark mode (for light backgrounds) */
.scroll-to-top.dark-mode {
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.8);
  box-shadow:
    0 8px 32px 0 rgba(0, 0, 0, 0.08),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.3);
}

.scroll-to-top:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  box-shadow:
    0 12px 40px 0 rgba(0, 0, 0, 0.15),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.3);
}

.scroll-to-top.dark-mode:hover {
  background: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.3);
  box-shadow:
    0 12px 40px 0 rgba(0, 0, 0, 0.12),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
}

.scroll-to-top:active {
  transform: translateY(-1px);
}

.scroll-to-top svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
}

.scroll-to-top.dark-mode svg {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
