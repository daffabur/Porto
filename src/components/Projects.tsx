import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Star, Code, Trophy, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const projects = [
  {
    title: "Healthcare Data Warehouse",
    description: "A complete data warehousing project to model healthcare operations using SQL Server and Power BI.",
    image: "/images/healthcare-dashboard.jpg",
    details: [
      "Designed and developed a healthcare data warehouse solution using star schema and ETL with SSIS",
      "Created OLAP queries and Power BI dashboards for operations monitoring",
      "Built data flows with 5 dimensions and 1 fact table",
      "Extracted data from CSV to SQL Server using SSIS",
      "Visualized insights through interactive Power BI dashboards"
    ],
    achievements: [
      "Delivered multi-dimensional insights into patient demographics and billing"
    ],
    github: "https://github.com/daffabur/healthcare-data-warehouse",
    tech: ["SQL Server", "SSIS", "Power BI", "ETL"],
    gradient: "from-blue-600 via-blue-500 to-cyan-500",
    accentColor: "blue",
    category: "Data Analytics"
  },
  {
    title: "EcoTrack Mobile App",
    description: "An IoT-based mobile application to track and visualize water usage in real-time using Flutter and GraphQL.",
    image: "/images/ecotrack-ui.jpg",
    details: [
      "Built mobile app to monitor daily water consumption with real-time updates",
      "Developed UI using Flutter with responsive components and navigation",
      "Integrated GraphQL APIs to fetch live water usage data",
      "Created logic for AI-based predictions and alerts"
    ],
    achievements: [
      "Visualized real-time usage and AI predictions across devices"
    ],
    github: "https://github.com/Foxskyyy/PPL-1",
    tech: ["Flutter", "GraphQL", "IoT", "Mobile Development"],
    gradient: "from-emerald-600 via-green-500 to-teal-500",
    accentColor: "green",
    category: "Mobile Development"
  },
  {
    title: "Internship Project – Investree (via Rakamin)",
    description: "A full-stack loan service simulation built using Laravel and Vue.js during internship with Investree.",
    image: "/images/fullstack-investree.jpg",
    details: [
      "Developed full-stack app with Laravel backend and Vue.js frontend",
      "Implemented user registration, login, and loan submission features",
      "Connected UI to backend using Axios and RESTful APIs",
      "Handled form validations and responsive design",
      "Assisted with frontend design using Figma mockups"
    ],
    achievements: [
      "Delivered complete project on time",
      "Gained hands-on experience in full-stack dev and API integration"
    ],
    github: "https://github.com/daffabur/task-5-fullstack",
    tech: ["Laravel", "Vue.js", "RESTful API", "Full-stack"],
    gradient: "from-orange-600 via-red-500 to-pink-500",
    accentColor: "orange",
    category: "Full-stack Development"
  }
];

const getAccentClasses = (color: string) => {
  const colorMap = {
    blue: {
      border: "border-blue-500/30",
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      hover: "hover:border-blue-400/60",
      shadow: "shadow-blue-500/20",
      glow: "group-hover:shadow-blue-500/30"
    },
    green: {
      border: "border-emerald-500/30",
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      hover: "hover:border-emerald-400/60",
      shadow: "shadow-emerald-500/20",
      glow: "group-hover:shadow-emerald-500/30"
    },
    orange: {
      border: "border-orange-500/30",
      text: "text-orange-400",
      bg: "bg-orange-500/10",
      hover: "hover:border-orange-400/60",
      shadow: "shadow-orange-500/20",
      glow: "group-hover:shadow-orange-500/30"
    }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Featured Work</span>
            <Star className="w-4 h-4 text-yellow-400" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my journey through <span className="text-blue-400 font-semibold">data analytics</span>,
            <span className="text-emerald-400 font-semibold"> mobile development</span>, and
            <span className="text-orange-400 font-semibold"> full-stack solutions</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto items-stretch">
          {projects.map((project, index) => {
            const accent = getAccentClasses(project.accentColor);
            return (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group h-full"
              >
                <Card className={`relative flex flex-col justify-between h-full overflow-hidden border-2 ${accent.border} ${accent.hover} backdrop-blur-xl bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] shadow-2xl ${accent.shadow} hover:shadow-3xl ${accent.glow} hover:brightness-110 hover:ring-1 hover:ring-white/20`}>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                    <div className="text-xs text-white bg-black/70 px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                      👆 Click to view
                    </div>
                  </div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${accent.text} ${accent.bg} border border-current/30 mb-2`}>
                      <Code className="w-3 h-3" />
                      {project.category}
                    </div>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <p className="text-sm text-gray-300">{project.description}</p>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="aspect-video max-h-[200px] overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 border border-white/10 rounded-xl overflow-y-auto max-h-[90vh] w-full max-w-4xl relative shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white hover:text-red-400"
              >
                <X />
              </button>
              <div className="p-6">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                {selectedProject.image && (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-[300px] object-contain rounded-lg mb-6" />
                )}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <Code className="text-blue-400" size={18} />
                    Key Responsibilities
                  </h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-2">
                    {selectedProject.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <Trophy className="text-yellow-400" size={18} />
                    Key Achievements
                  </h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-2">
                    {selectedProject.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={18} /> View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
