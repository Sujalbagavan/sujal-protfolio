
import React from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const techStacks = [
  { name: 'React', icon: '/images/tech/react.svg' },
  { name: 'Flutter', icon: '/images/tech/flutter.svg' },
  { name: 'Tailwind CSS', icon: '/images/tech/tailwind.svg' },
  { name: 'Firebase', icon: '/images/tech/firebase.svg' },
  { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
  { name: 'MongoDB', icon: '/images/tech/mongodb.svg' },
  { name: 'Supabase', icon: '/images/tech/supabase.svg' },
  { name: 'Vercel', icon: '/images/tech/vercel.svg' },
  { name: 'GitHub', icon: '/images/tech/github.svg' },
  { name: 'Canva', icon: '/images/tech/canva.svg' },
];

export default function TechStack() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Tech Stack</h1>
          <p className="text-lg text-muted-foreground">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {techStacks.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 rounded-lg bg-card hover:shadow-lg transition-all"
            >
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-medium">{tech.name}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted Technologies</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {techStacks.map((tech, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-4">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
