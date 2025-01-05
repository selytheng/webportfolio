import { Experience } from "@/types/types";

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Website Vulnerability Scanning and Ethical Hacking",
      company: "Institute of Technology of Cambodia",
      period: "2024 Internship",
      description: [
        "Research web system vulnerabilities",
        "Perform penetration testing on ITC web portal applications",
        "Analyze weaknesses and provide security recommendations",
        "Document discovered vulnerabilities",
        "Develop web application integrated with penetration testing tools API",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-4 border-primary dark:border-blue-400"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary dark:bg-blue-400 rounded-full"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.company} | {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <i className="fas fa-angle-right text-primary dark:text-blue-400 mt-1 mr-2"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
