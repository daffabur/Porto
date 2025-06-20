import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Smartphone, Code, GraduationCap, Award, Target } from "lucide-react";

export const About = () => {
  const interests = [
    {
      icon: Database,
      title: "Data Analytics",
      description: "Extracting insights from complex datasets using SQL, Power BI, and Python",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating intuitive mobile applications with Flutter and modern frameworks",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "Building scalable and efficient full-stack solutions",
      color: "from-green-500 to-emerald-500"
    },
  ];

  const personalInfo = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "Universitas Padjadjaran, Teknik Informatika",
      detail: "GPA: 3.68 / 4.00"
    },
    {
      icon: Target,
      label: "Focus",
      value: "Building user-focused digital solutions",
      detail: "with modern technologies"
    },
    {
      icon: Award,
      label: "Experience",
      value: "Head of Social Department",
      detail: "Himpunan Mahasiswa Informatika UNPAD"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            An enthusiastic <span className="text-blue-400 font-semibold">Informatics Engineering student</span> at
            <span className="text-purple-400 font-semibold"> Universitas Padjadjaran</span> with interests in
            Data Analysis, Frontend Development, and System Integration.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Personal Information Column */}
          <div className="space-y-6 w-full">
            <h3 className="text-2xl font-semibold gradient-text">Personal Information</h3>
            <div className="mb-4">
              <h4 className="text-xl font-bold text-white mb-1">Daffa Burane Nugraha</h4>
              <p className="text-gray-400">Passionate about creating impactful digital solutions</p>
            </div>
            {personalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="w-full bg-white/5 border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg">
                        <Icon className="text-white" size={20} />
                      </div>
                      <span className="text-white">{info.label}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{info.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{info.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Expertise Column */}
          <div className="space-y-6 w-full">
            <h3 className="text-2xl font-semibold gradient-text">Areas of Expertise</h3>
            <div className="mt-10 space-y-6"> {/* spacing adjustment applied here */}
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <Card key={index} className="w-full bg-white/5 border-white/10 group">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${interest.color}`}>
                          <Icon className="text-white" size={20} />
                        </div>
                        <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {interest.title}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">{interest.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Leadership Highlight */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold mb-4 gradient-text">Leadership Experience</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Currently serving as <span className="text-blue-400 font-semibold">Head of Social Department</span> at
              Himpunan Mahasiswa Informatika UNPAD, where I manage strategic planning and implementation
              of two key programs: <span className="text-purple-400">Informatika Berbagi</span> and
              <span className="text-pink-400"> Informatika Peduli</span>, working with a team of 6 dedicated staff members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
