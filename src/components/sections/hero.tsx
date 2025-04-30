import * as React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrambleText } from "@/components/ui/scramble-text";
import { CoverBeam } from "@/components/ui/cover-beam";
import { GradientButton } from "@/components/ui/gradient-button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <CoverBeam>
      <div id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        <div className="container relative z-20">
          <div 
            ref={ref} 
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl mb-6 text-primary font-medium"
            >
              Welcome to my portfolio
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ opacity, y }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm Sujal Bagvan.{" "}
              <br className="hidden md:block" />
              I build <ScrambleText text="apps" className="text-primary" /> & 
              <ScrambleText text=" websites" className="text-primary" /> that people 
              <ScrambleText text=" love" className="text-accent" />.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
            >
              App and Web Developer specializing in crafting exceptional digital experiences
              with a focus on intuitive user interfaces and robust functionality.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GradientButton onClick={() => scrollToSection('projects')}>
                View My Work
              </GradientButton>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Floating shapes */}
        <ShapesBackground />
      </div>
    </CoverBeam>
  );
}

function ShapesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Animated shapes */}
      <motion.div 
        className="absolute top-[15%] left-[15%] w-32 h-32 rounded-full bg-primary/20 blur-xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -30, 0], 
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute bottom-[20%] right-[10%] w-40 h-40 rounded-full bg-secondary/20 blur-xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0], 
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute top-[40%] right-[20%] w-24 h-24 rounded-full bg-accent/20 blur-xl"
        animate={{ 
          x: [0, 40, 0],
          y: [0, 20, 0], 
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div 
        className="absolute bottom-[30%] left-[25%] w-36 h-36 rounded-full bg-primary/20 blur-xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -30, 0], 
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Code-like pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjAzIj48cGF0aCBkPSJNMzYgMzRoLTZsLTQgNGg2eiIvPjxwYXRoIGQ9Ik0zMCAyOGg2bC00IDRoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
    </div>
  );
}
