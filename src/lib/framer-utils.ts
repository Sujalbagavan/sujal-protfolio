
import { useEffect, useState } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

// Custom hook for counting up animation
export function useCountUp(end: number, duration: number = 2) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, end, { duration });
    
    const unsubscribe = rounded.onChange(setDisplayValue);
    
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, end, duration, rounded]);

  return displayValue;
}

// Helper for staggered animations (children with delay)
export const staggeredAnimation = (staggerDelay = 0.1) => {
  return (index: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * staggerDelay,
        duration: 0.5,
      },
    },
  });
};

// Helper for scroll-driven animations
export const scrollAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
