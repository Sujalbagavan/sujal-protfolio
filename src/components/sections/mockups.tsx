
import * as React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MockupCard } from "./mockups/MockupCard";

const mockupData = [
  {
    title: "Mobile Experience",
    description: "Fully responsive apps optimized for iOS & Android",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    type: "mobile" as const
  },
  {
    title: "Laptop View",
    description: "Clean and modern web applications",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    type: "laptop" as const
  },
  {
    title: "Desktop Experience",
    description: "Full-featured applications for large displays",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&auto=format&fit=crop",
    type: "desktop" as const
  }
];

export function Mockups() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="mockups" className="py-20 bg-muted/30">
      <div className="container">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              My Work Across Devices
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-foreground/70 max-w-2xl mx-auto"
            >
              Responsive design across all platforms, ensuring a seamless experience on every device.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mockupData.map((mockup, index) => (
              <MockupCard key={index} {...mockup} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
