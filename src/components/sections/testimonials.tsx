
import * as React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Alex Johnson",
    role: "CEO",
    company: "TechVision",
    content: "Working with Sujal was a game-changer for our product. His attention to detail and ability to transform ideas into beautiful, functional interfaces exceeded our expectations. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Sujal has an exceptional talent for creating engaging user experiences. He took our outdated platform and transformed it into a modern, intuitive application that our customers love.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartupGrowth",
    content: "I've worked with many developers, but Sujal stands out with his commitment to quality and creative problem-solving. He doesn't just build what you ask for—he improves upon your vision.",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "BrandFocus",
    content: "The mobile app Sujal developed for our campaign drove engagement beyond our targets. His understanding of both design principles and technical implementation is truly impressive.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "DigitalSolutions",
    content: "Sujal's code is clean, well-documented, and built with scalability in mind. As a technical leader, I appreciate developers who think about the long-term maintenance of their projects.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    name: "Jessica Patel",
    role: "UI/UX Designer",
    company: "CreativeTech",
    content: "Collaborating with Sujal was a fantastic experience. As a designer, I value developers who respect design decisions while providing valuable technical insights. Sujal excels at this balance.",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              What clients and collaborators say about working with me.
            </p>
          </motion.div>
          
          <div className="relative overflow-hidden">
            {/* Gradient fades */}
            <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Marquee wrapper */}
            <div className="flex overflow-hidden">
              {/* First set of testimonials */}
              <div className="flex animate-marquee">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`a-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
              
              {/* Duplicate for seamless loop */}
              <div className="flex animate-marquee">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={`b-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  return (
    <div className="min-w-[320px] md:min-w-[400px] p-4">
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm h-full flex flex-col">
        <div className="flex items-center mb-4">
          <img 
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <div className="font-bold">{testimonial.name}</div>
            <div className="text-sm text-foreground/60">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
        <div className="italic text-foreground/80 mt-2 flex-grow">
          "{testimonial.content}"
        </div>
      </div>
    </div>
  );
}
