
import * as React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CoverBeam } from "@/components/ui/cover-beam";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineItemProps[] = [
  {
    year: "2023",
    title: "Discovering Code",
    description: "Started my journey in web development, learning HTML, CSS, and JavaScript through online courses and personal projects.",
  },
  {
    year: "2023",
    title: "First Projects",
    description: "Built my first dashbord site and started exploring React. Participated in   hackathons and discovered my passion for building products.",
  },
  {
    year: "2024",
    title: "Freelance Journey",
    description: "Began taking on freelance projects, helping small businesses establish their web presence with custom websites and applications.",
  },
  {
    year: "2024",
    title: "Expanding Skills",
    description: "Deepened my knowledge in full-stack development, mastering React, Node.js,Flutter, and modern frameworks while growing my client base.",
  },
  {
    year: "2025",
    title: "Professional Growth",
    description: "Focusing on larger projects and specializing in creating memorable digital experiences with animation, interaction, and storytelling.",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <CoverBeam>
      <section id="about" className="py-20">
        <div className="container">
          <div ref={ref} className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                About Me
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-foreground/70 max-w-2xl mx-auto"
              >
                My journey from curious beginner to professional developer, shaped by passion and continuous learning.
              </motion.p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px z-0"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timelineData.map((item, index) => (
                  <TimelineItem 
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

function TimelineItem({ 
  item, 
  index, 
  isInView 
}: { 
  item: TimelineItemProps; 
  index: number; 
  isInView: boolean;
}) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full transform -translate-x-1/2 z-10"></div>
      
      {/* Year */}
      <div className={`w-full md:w-1/2 pb-8 md:pb-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <div className="text-xl md:text-2xl font-display font-bold text-primary">
          {item.year}
        </div>
      </div>
      
      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-foreground/70">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
