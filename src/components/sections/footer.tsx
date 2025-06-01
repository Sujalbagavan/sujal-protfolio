
import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-display font-bold text-gradient">
                Sujal Bagvan
              </div>
              <p className="text-foreground/60 mt-2">
                App & Web Developer
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <nav className="flex gap-6">
                <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </a>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </a>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </nav>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={scrollToTop}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-foreground/60">
              &copy; {new Date().getFullYear()} Sujal Bagvan. All rights reserved.
            </div>
            
            <div className="text-sm text-foreground/60">
              Designed & Developed with sujal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
