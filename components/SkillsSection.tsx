import { Skill } from "@/types/types";
import { motion } from "framer-motion"; // Import framer-motion for animations

export default function SkillsSection() {
  const skills: Skill[] = [
    {
      category: "Security Tools",
      items: [
        "Manual Penetration Testing (NMAP, DIRB, AMASS)",
        "Automated Testing (Acunetix, Arachni, ZAP, Nessus)",
        "Vulnerability Scanning",
        "Ethical Hacking",
      ],
    },
    {
      category: "System Administration",
      items: [
        "Linux (Debian, Ubuntu, Fedora, Kali, RHEL)",
        "Virtual Machine Management",
        "Docker Containerization",
        "Cloud Services (AWS, Google Cloud)",
      ],
    },
    {
      category: "Development",
      items: [
        "Python Scripting",
        "Website Development (Laravel, REACT, VUE)",
        "Version Control (Git)",
        "CI/CD (Jenkins)",
      ],
    },
  ];

  // Animation variants for framer-motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations for each child
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Technical Skills
        </h2>

        {/* Skills Grid with Motion Animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                {skill.category}
              </h3>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <i className="fas fa-check-circle text-primary dark:text-blue-400 mt-1 mr-3"></i>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}