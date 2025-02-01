"use client";

import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
      >
        <NavBar />
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </motion.main>
    </AnimatePresence>
  );
}
