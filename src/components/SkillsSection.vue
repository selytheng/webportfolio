<template>
  <section id="skills" class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
        Technical Skills
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(skill, index) in skills"
             :key="index"
             class="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl
                    transition-all duration-300">
          <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            {{ skill.category }}
          </h3>
          <ul class="space-y-3">
            <li v-for="item in skill.items"
                :key="item"
                class="flex items-start">
              <i class="fas fa-check-circle text-primary dark:text-blue-400 mt-1 mr-3"></i>
              <span class="text-gray-700 dark:text-gray-300">{{ item }}</span>
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
            'Ethical Hacking'
          ]
        },
        {
          category: 'System Administration',
          items: [
            'Linux (Debian, Ubuntu, Fedora, Kali, RHEL)',
            'Virtual Machine Management',
            'Docker Containerization',
            'Cloud Services (AWS, Google Cloud)'
          ]
        },
        {
          category: 'Development',
          items: [
            'Python Scripting',
            'Laravel Backend Development',
            'Version Control (Git)',
            'CI/CD (Jenkins)'
          ]
        }
      ] as Skill[]
    }
  }
})
</script>

