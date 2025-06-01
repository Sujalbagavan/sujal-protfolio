
import * as React from "react";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CoverBeam } from "@/components/ui/cover-beam";

interface ExperienceItemProps {
  year: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

const experienceData: ExperienceItemProps[] = [
  {
    year: "2024",
    company: "NextiQz intern",
    role: " App Developer",
    duration: "Jan 2023 - Present",
    description: " intern at nextiqz as mobile app development for enterprise , focusing on Flutter solutions with a strong emphasis on animation and user experience.",
  },
  {
    year: "2024",
    company: "SoulStrokes Freelanced",
    role: "Web Devloper",
    duration: "Mar 2024 - Apr 2024",
    description: "Developed responsive web applications using React, Next.js, and Tailwind CSS. Implemented complex animations and interactive features for poem website platforms.",
  },
  {
    year: "2025",
    company: "Rivoo Freelaced",
    role: "App devloper ",
    duration: "Jan 2025 - Feb 2025",
    description: "An intelligent and user-friendly application designed to simplify complex decision-making processes. Built with an intuitive interface, the app allows users to input their goals, preferences, and priorities. Using advanced AI algorithms, it analyzes the data and provides clear, personalized recommendations—helping users make faster, smarter, and more confident decisions in both personal and professional life.",
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  
  return (
    <CoverBeam>
      <section id="experience" className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Work Experience
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                My professional journey and roles throughout my career.
              </p>
            </motion.div>
            
            <div ref={containerRef} className="relative">
              {/* Timeline progress bar */}
              <div className="absolute left-16 md:left-1/4 top-0 bottom-0 w-px bg-border/50">
                <motion.div 
                  className="absolute top-0 left-0 w-full bg-primary"
                  style={{ height: progressHeight }}
                />
              </div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {experienceData.map((item, index) => (
                  <ExperienceItem 
                    key={index}
                    item={item}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </CoverBeam>
  );
}

function ExperienceItem({ 
  item, 
  index, 
  isInView 
}: { 
  item: ExperienceItemProps; 
  index: number; 
  isInView: boolean;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isItemInView = useInView(itemRef, { once: false, amount: 0.5 });
  
  return (
    <div ref={itemRef} className="relative pl-20 md:pl-[30%]">
      {/* Year label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isItemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 md:left-[12.5%] transform -translate-x-1/2 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold z-10"
      >
        {item.year}
      </motion.div>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isItemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card rounded-lg border border-border p-6 shadow-sm"
      >
        <h3 className="text-xl font-bold text-primary">{item.company}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="font-medium">{item.role}</div>
          <div className="text-sm text-foreground/60">{item.duration}</div>
        </div>
        <p className="text-foreground/70">{item.description}</p>
      </motion.div>
    </div>
  );
}
