
import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Mockups } from "@/components/sections/mockups";
import { Achievements } from "@/components/sections/achievements";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Quote } from "@/components/sections/quote";
import { News } from "@/components/sections/news";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { observeSections } from "@/lib/utils/scrollAnimation";

const Index = () => {
  // Setup scroll animations
  useEffect(() => {
    const cleanup = observeSections();
    return cleanup;
  }, []);
  
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <main className="min-h-screen bg-background text-foreground overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Mockups />
        <Achievements />
        <Projects />
        <Experience />
        {/* <Testimonials /> */}
        <Quote />
        <News />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Index;
