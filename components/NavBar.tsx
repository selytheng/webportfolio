"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Use useMemo to memoize navItems
  const navItems = useMemo(
    () => ["About", "Skills", "Experience", "Projects", "Contact"],
    []
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  };

  const handleMenuClick = (section: string) => {
    scrollToSection(section);
    closeMenu();
  };

  const checkActiveSection = useCallback(() => {
    const sections = navItems.map((item) => ({
      id: item.toLowerCase(),
      element: document.getElementById(item.toLowerCase()),
    }));

    const currentSection = sections.find((section) => {
      if (section.element) {
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      }
      return false;
    });

    setActiveSection(currentSection ? currentSection.id : "");
  }, [navItems]);

  useEffect(() => {
    const throttledCheck = throttle(checkActiveSection, 100);
    window.addEventListener("scroll", throttledCheck);
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", throttledCheck);
    };
  }, [checkActiveSection]);

  const throttle = (func: (...args: unknown[]) => void, limit: number) => {
    let inThrottle = false;
    return function (this: unknown, ...args: unknown[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => {
          inThrottle = false;
        }, limit);
      }
    };
  };

  return (
    <div className="fixed w-full flex justify-center top-6 z-50">
      <nav className="bg-white/60 dark:bg-gray-950/50 backdrop-blur-md text-gray-700 dark:text-gray-200 rounded-full shadow-lg transition-colors duration-300 mx-4 border border-gray-200/20 dark:border-gray-800/20">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-gray-200/20 dark:border-gray-800/20">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xl font-bold text-gray-800 dark:text-white">
                SE LyTheng
              </div>
            </div>
            <div className="hidden md:flex space-x-2 ml-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-full transition-all duration-300 relative ${
                    activeSection === item.toLowerCase()
                      ? "bg-gray-100 dark:bg-gray-800 text-primary dark:text-blue-400"
                      : "hover:bg-white/80 dark:hover:bg-gray-800/60 hover:text-primary dark:hover:text-blue-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-white/80 dark:hover:bg-gray-800/60"
            >
              <i className="fas fa-bars text-gray-800 dark:text-white"></i>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 right-4 bg-white/60 dark:bg-gray-950/50 backdrop-blur-md rounded-2xl shadow-lg p-2 min-w-[200px] border border-gray-200/20 dark:border-gray-800/20">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleMenuClick(item.toLowerCase())}
              className={`block w-full px-4 py-2 text-left rounded-xl text-gray-700 dark:text-gray-200 transition-all duration-300 ${
                activeSection === item.toLowerCase()
                  ? "bg-gray-100 dark:bg-gray-800 text-primary dark:text-blue-400"
                  : "hover:bg-white/80 dark:hover:bg-gray-800/60 hover:text-primary dark:hover:text-blue-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
