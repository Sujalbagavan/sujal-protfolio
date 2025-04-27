
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface GradientButtonProps extends ButtonProps {
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
}

export function GradientButton({
  className,
  gradientFrom = "from-primary",
  gradientTo = "to-secondary",
  glowColor = "rgba(138, 75, 255, 0.5)",
  ...props
}: GradientButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden bg-transparent transition-all duration-500",
        "before:absolute before:inset-0 before:bg-gradient-to-r",
        `before:${gradientFrom} before:${gradientTo}`,
        "before:transition-all before:duration-500 hover:before:opacity-90",
        "hover:animate-glowing",
        "text-dark dark:text-foreground font-medium",
        "border border-primary/20 dark:border-primary/30",
        "shadow-lg shadow-primary/20 dark:shadow-primary/30",
        className
      )}
      {...props}
    />
  );
}
