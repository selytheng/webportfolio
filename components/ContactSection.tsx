import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
        <div className="max-w-md mx-auto">
          <div className="space-y-8">
            <div className="flex items-center group">
              <div className="w-12 h-12 bg-primary dark:bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <FaEnvelope className="text-lg" />
              </div>
              <a
                href="mailto:kh.lytheng@gmail.com"
                className="hover:text-primary dark:hover:text-blue-400 transition-colors duration-300"
              >
                kh.lytheng@gmail.com
              </a>
            </div>

            <div className="flex items-center group">
              <div className="w-12 h-12 bg-primary dark:bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <FaPhone className="text-lg" />
              </div>
              <a
                href="tel:+85510495062"
                className="hover:text-primary dark:hover:text-blue-400 transition-colors duration-300"
              >
                +855 10 495 062
              </a>
            </div>

            <div className="flex items-center group">
              <div className="w-12 h-12 bg-primary dark:bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <span>Phnom Penh, Cambodia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
