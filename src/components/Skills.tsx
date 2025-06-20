import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Star, Sparkles } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "HTML", "CSS", "Dart (Flutter)", "JavaScript"],
      color: "blue",
    },
    {
      title: "Tools & Technologies",
      skills: ["Power BI", "SSIS", "Git", "VS Code", "Figma"],
      color: "green",
    },
    {
      title: "Languages",
      skills: ["Bahasa Indonesia (Native)", "English (Intermediate)"],
      color: "orange",
    },
    {
      title: "Certifications",
      id: "certifications",
      skills: [
        "Belajar Menjadi Data Analyst Level Basic - ITBOX",
        "Belajar Menjadi Data Analyst Level Intermediate - ITBOX",
      ],
      color: "purple",
    },
    {
      title: "Areas of Interest",
      skills: [
        "Data Analytics",
        "Frontend Web & Mobile Development",
        "Dashboarding",
        "Software Engineering",
      ],
      color: "cyan",
    },
  ];

  const getColor = (color: string) => {
    const map = {
      blue: "from-blue-600 via-blue-500 to-cyan-500",
      green: "from-emerald-600 via-green-500 to-teal-500",
      orange: "from-orange-500 via-red-400 to-pink-400",
      purple: "from-purple-600 via-indigo-500 to-violet-500",
      cyan: "from-cyan-500 via-sky-500 to-blue-500",
    };
    return map[color as keyof typeof map] || map.blue;
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Backgrounds */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-gray-300">Tech Stack & Focus</span>
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </div>

          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A curated list of technologies, certifications, and interests I actively engage with
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} id={category.id ?? undefined}>
              <Card
                className={`
                  group relative overflow-hidden border-2 border-white/10 bg-white/5
                  transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02] shadow-xl hover:shadow-2xl
                `}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getColor(category.color)} opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-yellow-400" />
                      <CardTitle className="text-lg font-bold text-white">{category.title}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <li key={idx} className="px-3 py-2 text-sm rounded-md bg-white/10 text-gray-200 border border-white/10 hover:bg-white/20 transition-colors">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
