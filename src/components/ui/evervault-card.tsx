
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useMotionValue, HTMLMotionProps } from "framer-motion";

interface EvervaultCardProps extends Omit<HTMLMotionProps<"div">, "animate"> {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  showEncryption?: boolean;
}

export function EvervaultCard({ 
  children, 
  className,
  text = "SUJAL BAGVAN", 
  showEncryption = true,
  ...props 
}: EvervaultCardProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [encryptedText, setEncryptedText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isHovering && showEncryption) {
      interval = setInterval(() => {
        const newText = text
          .split("")
          .map((char) => {
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");
        setEncryptedText(newText);
      }, 50);
    } else {
      setEncryptedText(text);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, text, showEncryption]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    
    setPosition({ x: xPos, y: yPos });
    x.set(xPos * 10);
    y.set(yPos * -10);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    controls.start({
      scale: 1.03,
      transition: { duration: 0.3 },
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    controls.start({
      scale: 1,
      transition: { duration: 0.3 },
    });
    x.set(0);
    y.set(0);
    setPosition({ x: 0, y: 0 });
    
    timeoutRef.current = setTimeout(() => {
      setPosition({ x: 0, y: 0 });
    }, 500);
  };
  
  const lightPosition = {
    x: position.x * 100 + 50,
    y: position.y * 100 + 50,
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-3xl bg-card overflow-hidden ev-card-glow ev-card-border",
        "border border-primary/10 dark:border-primary/20",
        className
      )}
      animate={controls}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Gradient overlay based on mouse position */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isHovering
            ? `radial-gradient(circle at ${lightPosition.x}% ${lightPosition.y}%, rgba(138, 75, 255, 0.15), transparent 25%)`
            : "transparent",
          transition: "background 0.2s",
        }}
      />

      <div className="p-8">
        {/* "Encrypted" text overlay */}
        {showEncryption && (
          <div className="absolute top-5 right-8 font-mono text-xs tracking-widest opacity-70">
            {encryptedText}
          </div>
        )}
        
        {/* Card content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
