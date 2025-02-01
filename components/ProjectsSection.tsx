"use client";

import { useState, useMemo } from "react"; // Add useMemo for optimization
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing icons for better performance
import { Project } from "@/types/types";
import { motion } from "framer-motion"; // Import framer-motion for animations

export default function ProjectsSection() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const categories = ["All", "Web", "Security", "Infrastructure"];

  const projects: Project[] = [
    {
      title: "Login Authentication App",
      description:
        "Secure login system with JWT authentication, role-based access control, and password hashing.",
      image: "/images/loginapp.jpg",
      githubLink: "https://github.com/selytheng/login-app",
      hostLink: "https://login-app.gic-itc.top",
      frameworks: ["Vue.js", "Node.js", "MongoDB"],
      category: "web",
    },
    {
      title: "POS System",
      description:
        "Point of Sale system with inventory management, sales tracking, and receipt generation.",
      image: "/images/pos.jpg",
      githubLink: "https://github.com/selytheng/pos-itc",
      hostLink: "https://pos.gic-itc.top",
      frameworks: ["Vue.js", "Laravel", "MySQL"],
      category: "web",
    },
    {
      title: "Web Vulnerability Scanner",
      description:
        "Automated security testing tool for detecting common web vulnerabilities and generating detailed reports.",
      image: "/images/webvulscan.jpg",
      githubLink: "https://github.com/selytheng/web-vulnerability-scanner",
      frameworks: ["Python", "SQLite", "Docker"],
      category: "security",
    },
    {
      title: "Google Cloud Hosting Setup",
      description:
        "Deployment architecture and configuration for scalable applications on Google Cloud Platform.",
      image: "/images/googlecloud.jpg",
      frameworks: ["GCP", "Terraform", "Docker"],
      category: "infrastructure",
    },
    {
      title: "AWS Infrastructure",
      description:
        "AWS cloud infrastructure setup with auto-scaling, load balancing, and security configurations.",
      image: "/images/aws.jpg",
      frameworks: ["AWS", "CloudFormation", "Docker"],
      category: "infrastructure",
    },
    {
      title: "Proxy Server Implementation",
      description:
        "High-performance proxy server with caching, load balancing, and security features.",
      image: "/images/proxy.webp",
      frameworks: ["Node.js", "Redis", "NGINX"],
      category: "infrastructure",
    },
    {
      title: "Network Infrastructure Design",
      description:
        "Comprehensive network architecture design with security zones, VLANs, and redundancy.",
      image: "/images/netinf.jpg",
      frameworks: ["Cisco", "Wireshark", "pfSense"],
      category: "infrastructure",
    },
  ];

  // Use useMemo to recalculate filteredProjects only when currentCategory changes
  const filteredProjects = useMemo(() => {
    return currentCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category.toLowerCase() === currentCategory.toLowerCase()
        );
  }, [currentCategory, projects]);

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
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Projects
        </h2>

        {/* Project Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setCurrentCategory(cat)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                currentCategory === cat
                  ? "bg-primary dark:bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              aria-label={`Filter projects by ${cat}`}
              variants={cardVariants}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Motion Animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible" // Use animate instead of whileInView
          variants={containerVariants}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={project.title === "Login Authentication App"} // Prioritize key images
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Frameworks */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.frameworks.map((framework) => (
                    <span
                      key={framework}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {framework}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary dark:text-blue-400 hover:underline"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                  {project.hostLink && (
                    <a
                      href={project.hostLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary dark:text-blue-400 hover:underline"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}