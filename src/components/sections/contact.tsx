import * as React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ExternalLink, Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const contactInfo = {
    name: "Sujal Bagavan",
    email: "sujalbagavan@gmail.com",
    phone: "+91 9019844538",
    linkedin: "https://www.linkedin.com/in/sujal-bagavan-186169297/",
    github: "https://github.com/Sujalbagavan",
    instagram: "https://www.instagram.com/sameer_sujal__bagwan?igsh=dXBheXVqbjNiNGRj"
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div ref={ref} className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 bg-card">
              <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-semibold">{contactInfo.name}</span>
                </div>

                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </a>

                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </a>

                <div className="flex items-center justify-center gap-6 pt-4">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
