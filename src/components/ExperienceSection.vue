<template>
  <section id="experience" class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
        Experience
      </h2>
      <div class="max-w-3xl mx-auto space-y-12">
        <div v-for="(exp, index) in experiences"
             :key="index"
             class="relative pl-8 border-l-4 border-primary dark:border-blue-400">
          <div class="absolute -left-3 top-0 w-6 h-6 bg-primary dark:bg-blue-400 rounded-full"></div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
              {{ exp.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ exp.company }} | {{ exp.period }}
            </p>
            <ul class="space-y-2">
              <li v-for="detail in exp.description"
                  :key="detail"
                  class="flex items-start text-gray-700 dark:text-gray-300">
                <i class="fas fa-angle-right text-primary dark:text-blue-400 mt-1 mr-2"></i>
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Experience } from '@/types/types'

export default defineComponent({
  name: 'ExperienceSection',
  data() {
    return {
      experiences: [
        {
          title: 'Website Vulnerability Scanning and Ethical Hacking',
          company: 'Institute of Technology of Cambodia',
          period: '2024 Internship',
          description: [
            'Research web system vulnerabilities',
            'Perform penetration testing on ITC web portal applications',
            'Analyze weaknesses and provide security recommendations',
            'Document discovered vulnerabilities',
            'Develop web application integrated with penetration testing tools API'
          ]
        }
      ] as Experience[]
    }
  }
})
</script>
