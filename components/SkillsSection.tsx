import { Skill } from "@/types/types";

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

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
