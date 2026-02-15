<template>
  <section
    id="about"
    class="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 overflow-hidden"
  >
    <!-- Animated background -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"
      ></div>
      <div
        class="absolute top-0 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-10 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
      ></div>
    </div>

    <div
      class="container mx-auto px-6 py-8 flex flex-col-reverse lg:flex-row items-center lg:justify-center min-h-screen relative z-10"
    >
      <!-- Text Content -->
      <div class="max-w-3xl text-center lg:text-left mt-8 lg:mt-0 animate-slide-in-left">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">SE LyTheng</h1>

        <h2 class="text-3xl md:text-4xl font-semibold mb-4 animate-fade-in animation-delay-200">
          Cybersecurity & Network Infrastructure Specialist
        </h2>

        <p
          class="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300 animate-fade-in animation-delay-400"
        >
          A dedicated IT professional with expertise in cybersecurity, penetration testing, and
          system administration. Currently pursuing Computer Science at ITC.
        </p>

        <!-- Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600"
        >
          <button
            @click="scrollToSection('contact')"
            class="bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Contact Me
          </button>

          <button
            @click="scrollToSection('experience')"
            class="border border-gray-800 dark:border-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            View Experience
          </button>
        </div>
      </div>

      <!-- Image -->
      <div
        class="relative w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0 animate-slide-in-right"
      >
        <div class="relative group">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
          ></div>
          <img
            src="../assets/img/cover.jpg"
            alt="Cover Image"
            class="relative w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>
