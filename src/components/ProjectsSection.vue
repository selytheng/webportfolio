<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Projects</h2>

      <!-- Project Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="currentCategory = cat"
          :class="[
            'px-4 py-2 rounded-full transition-colors duration-300',
            currentCategory === cat
              ? 'bg-primary dark:bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600',
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <!-- Project Image -->
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />

          <!-- Project Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ project.description }}
            </p>

            <!-- Frameworks -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="framework in project.frameworks"
                :key="framework"
                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {{ framework }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex gap-4">
              <a
                v-if="project.githubLink"
                :href="project.githubLink"
                target="_blank"
                class="flex items-center gap-2 text-primary dark:text-blue-400 hover:underline"
              >
                <i class="fab fa-github"></i>
                GitHub
              </a>
              <a
                v-if="project.hostLink"
                :href="project.hostLink"
                target="_blank"
                class="flex items-center gap-2 text-primary dark:text-blue-400 hover:underline"
              >
                <i class="fas fa-external-link-alt"></i>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import type { Project } from '@/types/types'

export default defineComponent({
  name: 'ProjectsSection',
  setup() {
    const currentCategory = ref('All')
    const categories = ['All', 'Web', 'Security', 'Infrastructure']

    const projects: Project[] = [
      {
        title: 'Login Authentication App',
        description:
          'Secure login system with JWT authentication, role-based access control, and password hashing.',
        image: './src/assets/img/loginapp.jpg',
        githubLink: 'https://github.com/selytheng/login-app',
        hostLink: 'https://login-app.gic-itc.top',
        frameworks: ['Vue.js', 'Node.js', 'MongoDB'],
        category: 'web',
      },
      {
        title: 'POS System',
        description:
          'Point of Sale system with inventory management, sales tracking, and receipt generation.',
        image: './src/assets/img/pos.jpg',
        githubLink: 'https://github.com/selytheng/pos-itc',
        hostLink: 'https://pos.gic-itc.top',
        frameworks: ['Vue.js', 'Laravel', 'MySQL'],
        category: 'web',
      },
      {
        title: 'Web Vulnerability Scanner',
        description:
          'Automated security testing tool for detecting common web vulnerabilities and generating detailed reports.',
        image: './src/assets/img/webvulscan.jpg',
        githubLink: 'https://github.com/selytheng/ web-vulnerability-scanner',
        frameworks: ['Python', 'SQLite', 'Docker'],
        category: 'security',
      },
      {
        title: 'Google Cloud Hosting Setup',
        description:
          'Deployment architecture and configuration for scalable applications on Google Cloud Platform.',
        image: './src/assets/img/googlecloud.jpg',
        frameworks: ['GCP', 'Terraform', 'Docker'],
        category: 'infrastructure',
      },
      {
        title: 'AWS Infrastructure',
        description:
          'AWS cloud infrastructure setup with auto-scaling, load balancing, and security configurations.',
        image: './src/assets/img/aws.jpg',
        frameworks: ['AWS', 'CloudFormation', 'Docker'],
        category: 'infrastructure',
      },
      {
        title: 'Proxy Server Implementation',
        description:
          'High-performance proxy server with caching, load balancing, and security features.',
        image: './src/assets/img/proxy.webp',
        frameworks: ['Node.js', 'Redis', 'NGINX'],
        category: 'infrastructure',
      },
      {
        title: 'Network Infrastructure Design',
        description:
          'Comprehensive network architecture design with security zones, VLANs, and redundancy.',
        image: './src/assets/img/netinf.jpg',
        frameworks: ['Cisco', 'Wireshark', 'pfSense'],
        category: 'infrastructure',
      },
    ]

    const filteredProjects = computed(() => {
      if (currentCategory.value === 'All') return projects
      return projects.filter(
        (project) => project.category.toLowerCase() === currentCategory.value.toLowerCase(),
      )
    })

    return {
      currentCategory,
      categories,
      filteredProjects,
    }
  },
})
</script>
