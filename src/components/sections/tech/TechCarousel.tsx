import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const techStacks = [
  { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Flutter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
  { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { name: 'Supabase', icon: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png' },
  { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png' },
  { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
  { name: 'Canva', icon: 'data:image/jpeg;base64,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' },
];

export function TechCarousel() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {techStacks.map((tech, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <div className="p-4 flex flex-col items-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 object-contain mb-2"
                />
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-20" />
        <CarouselNext className="absolute right-4 z-20" />
      </Carousel>
    </div>
  );
}
