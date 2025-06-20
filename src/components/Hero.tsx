import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Mail, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {
  projectCount: number;
  certificationCount: number;
}

export const Hero = ({ projectCount, certificationCount }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);

  const texts = ["Mobile Developer", "Data Analyst", "Frontend Developer"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 relative overflow-hidden"
    >
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 opacity-10 animate-bounce">
          <Code size={40} className="text-blue-400" />
        </div>
        <div
          className="absolute top-1/3 right-1/4 opacity-10 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <Mail size={35} className="text-purple-400" />
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 opacity-10 animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          <Smartphone size={30} className="text-pink-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Foto + Nama */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60">
              <img
                src="/images/pp.jpg"
                alt="Daffa Burane"
                loading="eager"
                className="w-full h-full object-cover object-[center_20%] rounded-full border-[4px] border-purple-500 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full border-[5px] border-purple-500 animate-ping opacity-20 pointer-events-none"></div>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-left sm:text-start">
                <span className="block bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                  Daffa Burane
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-gray-300">
                  Nugraha
                </span>
              </h1>
            </div>
          </div>

          {/* Animated Role */}
          <div className="h-16 mb-8 flex items-center justify-center">
            <p
              className={`text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 transition-opacity duration-300 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {texts[currentText]}
            </p>
          </div>

          {/* Deskripsi */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Enthusiastic <span className="text-blue-400 font-semibold">Informatics Engineering</span> student with a strong focus on
            <span className="text-purple-400 font-semibold"> Data Analysis</span>,
            <span className="text-pink-400 font-semibold"> Frontend Development</span>, and
            <span className="text-cyan-400 font-semibold"> Mobile Development</span>. Crafting intuitive, impactful, and modern digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="btn-glow bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                <Code size={20} />
                View My Work
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail size={20} />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 card-hover">
              <div className="text-2xl font-bold text-blue-400">3.68</div>
              <div className="text-sm text-gray-300">GPA / 4.00</div>
            </div>
            <a
              href="#projects"
              className="block bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 card-hover cursor-pointer hover:border-white/40 transition-all"
            >
              <div className="text-2xl font-bold text-purple-400">{projectCount}</div>
              <div className="text-sm text-gray-300">Projects</div>
            </a>
            <a
              href="#certifications"
              className="block bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 card-hover cursor-pointer hover:border-white/40 transition-all"
            >
              <div className="text-2xl font-bold text-pink-400">{certificationCount}</div>
              <div className="text-sm text-gray-300">Certifications</div>
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce mt-16">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400">Scroll to explore</span>
              <ArrowDown className="text-gray-400 animate-pulse" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};