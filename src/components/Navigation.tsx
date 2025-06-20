"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems: { href: string; label: string }[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  // Scroll event handling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          return top <= 100 && top + el.offsetHeight >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            <span className="gradient-text">Daffa</span>
            <span className="text-white ml-1">Burane</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 animated-underline ${
                    isActive
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile nav toggle */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-all duration-300 ${
              isOpen ? "bg-white/10" : "hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </Button>
        </div>

        {/* Mobile nav items */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="space-y-2 pt-4">
            {navItems.map((item, index) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-400 bg-blue-400/10 border-l-4 border-blue-400"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isOpen ? "slideInLeft 0.3s ease-out forwards" : "none",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};
