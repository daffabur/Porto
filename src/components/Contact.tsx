import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Floating Gradient Backgrounds */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-gray-300">Let&apos;s Connect</span>
            <Sparkles className="w-4 h-4 text-yellow-300" />
          </div>

          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s connect and discuss opportunities in <span className="text-blue-400 font-semibold">mobile development</span>,
            <span className="text-purple-400 font-semibold"> data analysis</span>, or simply talk tech!
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-white/10 bg-white/5 transition-shadow hover:shadow-2xl backdrop-blur-xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            <div className="relative z-10">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <CardTitle className="text-center text-white text-xl sm:text-2xl font-bold">
                    Connect With Me
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 text-center">
                <p className="text-muted-foreground text-gray-300">
                  I&apos;m always open to exciting opportunities, side projects, or just talking about tech and data.
                </p>

                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    asChild
                    className="border-white/20 text-white hover:border-white/40 hover:bg-white/10 transition-all"
                  >
                    <a
                      href="https://linkedin.com/in/daffa-burane-nugraha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="border-white/20 text-white hover:border-white/40 hover:bg-white/10 transition-all"
                  >
                    <a
                      href="https://github.com/daffabur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};