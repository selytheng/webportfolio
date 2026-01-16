<template>
  <section id="skills" class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white animate-fade-in-up">
        Technical Skills
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
            <!-- Icon based on category -->
            <i
              v-if="skill.category === 'Security Tools'"
              class="fas fa-shield-alt text-blue-500"
            ></i>
            <i
              v-else-if="skill.category === 'System Administration'"
              class="fas fa-server text-green-500"
            ></i>
            <i
              v-else-if="skill.category === 'Development'"
              class="fas fa-code text-purple-500"
            ></i>
            {{ skill.category }}
          </h3>
          <ul class="space-y-3">
            <li v-for="item in skill.items" :key="item" class="flex items-start group">
              <i class="fas fa-check-circle text-primary dark:text-blue-400 mt-1 mr-3 transform group-hover:scale-125 transition-transform duration-300"></i>
              <span class="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { Skill } from '@/types/types'

export default defineComponent({
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        {
          category: 'Security Tools',
          items: [
            'Manual Penetration Testing (NMAP, DIRB, AMASS)',
            'Automated Testing (Acunetix, Arachni, ZAP, Nessus)',
            'Vulnerability Scanning',
            'Ethical Hacking',
          ],
        },
        {
          category: 'System Administration',
          items: [
            'Linux (Debian, Ubuntu, Fedora, Kali, RHEL)',
            'Virtual Machine Management',
            'Docker Containerization',
            'Cloud Services (AWS, Google Cloud)',
          ],
        },
        {
          category: 'Development',
          items: [
            'Python Scripting',
            'Website Development (Laravel, REACT, VUE)',
            'Version Control (Git)',
            'CI/CD (Jenkins)',
          ],
        },
      ] as Skill[],
    }
  },
})
</script>
