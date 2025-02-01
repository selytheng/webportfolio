import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-8 flex flex-col-reverse lg:flex-row items-center lg:justify-center min-h-screen">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center lg:text-left mt-8 lg:mt-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            SE LyTheng
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-4xl font-semibold mb-4"
          >
            Cybersecurity & Network Infrastructure Specialist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300"
          >
            A dedicated IT professional with expertise in cybersecurity,
            penetration testing, and system administration. Currently pursuing
            Computer Science at ITC.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="#contact"
              className="bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600 px-8 py-3 rounded-lg text-center transition-colors duration-300"
            >
              Contact Me
            </Link>
            <Link
              href="#experience"
              className="border border-gray-800 dark:border-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-lg text-center transition-colors duration-300"
            >
              View Experience
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0"
        >
          <Image
            src="/images/cover.jpg"
            alt="SE LyTheng - Cybersecurity Specialist"
            width={800}
            height={500}
            priority
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
