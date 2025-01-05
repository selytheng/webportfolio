import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-8 flex flex-col-reverse lg:flex-row items-center lg:justify-center min-h-screen">
        <div className="max-w-3xl text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SE LyTheng</h1>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Cybersecurity & Network Infrastructure Specialist
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
            A dedicated IT professional with expertise in cybersecurity,
            penetration testing, and system administration. Currently pursuing
            Computer Science at ITC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600 px-8 py-3 rounded-lg text-center transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="#experience"
              className="border border-gray-800 dark:border-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-lg text-center transition-colors duration-300"
            >
              View Experience
            </a>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <Image
            src="/images/cover.jpg"
            alt="Cover Image"
            width={800}
            height={500}
            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
