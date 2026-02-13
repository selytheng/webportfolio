<template>
  <div class="fixed w-full flex justify-center top-24 z-40 px-4">
    <div
      class="animate-blink flex items-center gap-3 px-8 py-3 bg-red-600/10 border-2 border-red-500/30 backdrop-blur-xl rounded-2xl shadow-xl"
    >
      <span class="relative flex h-3 w-3">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"
        ></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
      </span>

      <span
        class="text-sm md:text-base font-black uppercase tracking-[0.2em] text-red-600 dark:text-red-400 drop-shadow-sm"
      >
        Under Maintaining
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UnderMaintaining',
})
</script>

<style scoped>
@keyframes blink {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
}

.animate-blink {
  animation: blink 1.5s ease-in-out infinite;
}
</style>
