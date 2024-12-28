<template>
  <main>
    <NavBar />
    <HeroSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar,
    HeroSection,
    SkillsSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection,
  },
})
</script>
