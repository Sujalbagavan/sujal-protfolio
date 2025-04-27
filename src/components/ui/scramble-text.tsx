
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  className?: string;
  speed?: number;
  hoverToPlay?: boolean;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function ScrambleText({ 
  text, 
  className, 
  speed = 60, 
  hoverToPlay = true 
}: ScrambleTextProps) {
  const [scrambledText, setScrambledText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    const maxIterations = 10;

    clearInterval(intervalRef.current || undefined);

    intervalRef.current = setInterval(() => {
      setScrambledText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }

            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current || undefined);
      }

      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    if (!hoverToPlay) {
      scramble();
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, hoverToPlay]);

  const handleMouseEnter = () => {
    if (hoverToPlay) {
      setIsHovering(true);
      scramble();
    }
  };

  const handleMouseLeave = () => {
    if (hoverToPlay) {
      setIsHovering(false);
    }
  };

  return (
    <motion.span
      className={cn("inline-block", className)}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
    >
      {scrambledText}
    </motion.span>
  );
}
