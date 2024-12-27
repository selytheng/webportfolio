<template>
  <section
    id="about"
    class="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300"
  >
    <div
      class="container mx-auto px-6 py-8 flex flex-col-reverse lg:flex-row items-center lg:justify-center min-h-screen"
    >
      <!-- Text Content -->
      <div class="max-w-3xl text-center lg:text-left mt-8 lg:mt-0">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">SE LyTheng</h1>
        <h1 class="text-3xl md:text-4xl font-semibold mb-4">
          Cybersecurity & Network Infrastructure Specialist
        </h1>
        <p class="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
          A dedicated IT professional with expertise in cybersecurity, penetration testing, and
          system administration. Currently pursuing Computer Science at ITC.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            class="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-center transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="#experience"
            class="border border-gray-800 dark:border-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-lg text-center transition-colors duration-300"
          >
            View Experience
          </a>
        </div>
      </div>
      <!-- Image -->
      <div class="relative w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <img
          src="../assets/img/cover.jpg"
          alt="Cover Image"
          class="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>
  </section>
</template>
