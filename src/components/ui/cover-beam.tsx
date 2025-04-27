
import * as React from "react";
import { cn } from "@/lib/utils";

interface CoverBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CoverBeam({ children, className, ...props }: CoverBeamProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative z-10">
        <div className={cn("relative", className)} {...props}>
          {children}
        </div>
      </div>
      <div className="bg-beam absolute inset-0 -z-10" aria-hidden="true" />
    </div>
  );
}
