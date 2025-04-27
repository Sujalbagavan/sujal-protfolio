
import * as React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <section 
      ref={ref} 
      className="py-24 relative dot-pattern text-foreground/10"
    >
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <svg 
            className="w-12 h-12 mx-auto mb-6 text-primary/30" 
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          
          <blockquote>
            <p className="text-2xl md:text-4xl font-display font-bold leading-tight text-foreground">
              Design should be easy to understand because{" "}
              <span className="text-primary">simple ideas</span> are quicker to grasp...
            </p>
          </blockquote>
          
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px w-12 bg-primary/50 mr-4"></div>
            <p className="text-lg font-medium text-foreground/80">Sujal Bagvan</p>
            <div className="h-px w-12 bg-primary/50 ml-4"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-background/80 z-0"></div>
    </section>
  );
}
