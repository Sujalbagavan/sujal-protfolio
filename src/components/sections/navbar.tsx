
import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 dark:bg-background/80 backdrop-blur-lg py-4 border-b border-border shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-display font-bold text-gradient"
        >
          SB.
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors relative group overflow-hidden"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2"
          >
            <motion.div
              animate={{ rotate: theme === "dark" ? 0 : 180 }}
              transition={{ duration: 0.5 }}
            >
              {theme === "dark" ? (
                <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 4V2M12.5 22V20M4 12.5H2M22 12.5H20M19.78 19.78L18.36 18.36M19.78 5.22L18.36 6.64M5.22 19.78L6.64 18.36M5.22 5.22L6.64 6.64M16.5 12.5C16.5 14.71 14.71 16.5 12.5 16.5C10.29 16.5 8.5 14.71 8.5 12.5C8.5 10.29 10.29 8.5 12.5 8.5C14.71 8.5 16.5 10.29 16.5 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5 12.5C18.5 7.5 14.5 3.5 9.5 3.5C8.23 3.5 7.04 3.74 5.95 4.17C10.3 5.27 13.5 9.17 13.5 14C13.5 14.46 13.46 14.91 13.39 15.35C16.36 14.69 18.5 12.851 18.5 12.5ZM9.5 20.5H10.52C10.516 20.331 10.512 20.165 10.51 20M9.5 20.5C9.5 20.5 3.5 19.5 3.5 13.5C3.5 11.02 4.67 8.85 6.5 7.5M9.5 20.5C5.91 20.5 3 17.59 3 14C3 11.73 4.04 9.73 5.67 8.5M10.51 20C10.451 20.821 10.73 21.73 11.51 22.5C12.73 23.72 14.5 23.04 14.5 23.04C14.5 23.04 15.75 22.5 16.5 21C17.25 19.5 15.5 18.5 15.5 18.5C15.5 18.5 12.97 17.62 10.51 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </motion.div>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
          >
            {theme === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 4V2M12.5 22V20M4 12.5H2M22 12.5H20M19.78 19.78L18.36 18.36M19.78 5.22L18.36 6.64M5.22 19.78L6.64 18.36M5.22 5.22L6.64 6.64M16.5 12.5C16.5 14.71 14.71 16.5 12.5 16.5C10.29 16.5 8.5 14.71 8.5 12.5C8.5 10.29 10.29 8.5 12.5 8.5C14.71 8.5 16.5 10.29 16.5 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 12.5C18.5 7.5 14.5 3.5 9.5 3.5C8.23 3.5 7.04 3.74 5.95 4.17C10.3 5.27 13.5 9.17 13.5 14C13.5 14.46 13.46 14.91 13.39 15.35C16.36 14.69 18.5 12.851 18.5 12.5ZM9.5 20.5H10.52C10.516 20.331 10.512 20.165 10.51 20M9.5 20.5C9.5 20.5 3.5 19.5 3.5 13.5C3.5 11.02 4.67 8.85 6.5 7.5M9.5 20.5C5.91 20.5 3 17.59 3 14C3 11.73 4.04 9.73 5.67 8.5M10.51 20C10.451 20.821 10.73 21.73 11.51 22.5C12.73 23.72 14.5 23.04 14.5 23.04C14.5 23.04 15.75 22.5 16.5 21C17.25 19.5 15.5 18.5 15.5 18.5C15.5 18.5 12.97 17.62 10.51 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background dark:bg-background border-t border-border"
          >
            <div className="container py-4 flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
