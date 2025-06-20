import Head from "next/head";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects, projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

// Optional: certification data bisa diletakkan di sini kalau ingin dinamis
const certificationCount = 2; // ubah jika certif kamu bertambah

const IndexPage = () => {
  // Pastikan projects aman sebelum dipakai
  const projectCount = Array.isArray(projects) ? projects.length : 0;

  return (
    <>
      <Head>
        <title>Daffa Burane – Portfolio</title>
        <meta name="description" content="Personal portfolio website of Daffa Burane Nugraha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero projectCount={projectCount} certificationCount={certificationCount} />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default IndexPage;
