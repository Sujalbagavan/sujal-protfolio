import * as React from "react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradientButton } from "@/components/ui/gradient-button";
import { TechCarousel } from "./tech/TechCarousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

// Add this near the top of the file, with other constants
const GITHUB_URL = "https://github.com/Sujalbagavan"; // Replace with your GitHub URL

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  type: "web" | "app" | "all";
  link?: string;
}

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "NextIqz",
    description: "Mobile app for discovering startup opportunities and ideas",
    tags: ["Flutter", "UX/UI"],
    image: "https://www.nextiqz.in/img/nextiqz/WebApplication-2048x1240.png",
    type: "app",
    link: "https://www.nextiqz.in"
  },
 
  {
    id: 4,
    title: "Voting System",
    description: "Built a full stack web app for voting and election management in 24-hours hackathon",
    tags: ["React.js", "Node.js", "MongoDB"],
    image: "/images/election.png",
    type: "web",
    link: "https://voting-system-app.vercel.app/"
  },
  {
    id: 5,
    title: "Smart Watts",
    description: "SmartWatts helps you estimate your electricity consumption, analyze your bill, and get personalized tips to reduce your energy costs.",
    tags: ["React", "Node.js", "Socket.io"],
    image: "./images/smartwatts.png",
    type: "web",
    link: "https://electronic-bill-estimator.vercel.app/"
  },
  {
    id: 6,
    title: "Rivoo",
    description: "Mobile app that helps in making decisions with smart AI chatbot",
    tags: ["Flutter", "LocalStorage", "Payment Gateway", "UX/UI"],
    image: "/images/rivoo2.png",
    type: "app",
    link: "https://www.rivooapp.com/"
  },
  {
    id: 7,
    title: "community-hub",
    description: "Voice based AI assistant that helps in making healthy decisions",
    tags: ["React.js", "Node.js", "Supabase"],
    image: "/images/comunity-hub.png",
    type: "web",
    link: "https://community-hub-theta.vercel.app/"
  },
    {
    id: 8,
    title: "Flappy Bird-Game",
    description: "Flappy Bird – A simple yet addictive browser game developed using HTML, CSS, and JavaScript, where players navigate a bird through pipes by tapping to keep it airborne",
    tags: ["Html", "Css", "Js", "UX/UI"],
    image: "/images/flapy-bird.png",
    type: "web",
    link: "https://flapy-bird-psi.vercel.app/"
  },
   {
    id: 8,
    title: "Ai-reume and job matching",
    description: "our ai helps to find the best and relevet jobs from the internet and also create the resume for you with 9/10 ATS score",
    tags: ["rect js ", "node js ", "mogo db ", "generative ai"],
    image: "/images/ai-resume.png",
    type: "web",
    link: "https://ai-resume-gen-eta.vercel.app/"
  },
   {
    id: 2,
    title: "Coinbost",
    description: "Mobile game play and earn by reading news and completing tasks",
    tags: ["Flutter", "Firebase", "UX/UI"],
    image: "/images/coinbost.png",
    type: "app",
    link: "https://drive.google.com/file/d/1hMmI6BrJYFclbMNkZvewPCfD5TOps5Mv/view"
  },
  {
    id: 3,
    title: "Weather APP",
    description: "Designed for tracking weather conditions and forecasts",
    tags: ["Flutter", "Firebase", "UX/UI"],
    image: "data:image/jpeg;base64,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",
    type: "app",
    link: "https://drive.google.com/file/d/1jiQXQBlNbIXj1-smjoRB4G32KvVGoqwQ/view?usp=sharing"
  },
];

// ProjectCard component that opens the link directly
function ProjectCard(props: ProjectProps) {
  const handleCardClick = () => {
    if (props.link) {
      window.open(props.link, '_blank');
    }
  };
  
  return (
    <motion.div 
      className={cn(
        "bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group",
        props.link && "cursor-pointer"
      )}
      whileHover={{ y: -5 }}
      onClick={handleCardClick}
    >
      <div className="aspect-video bg-muted overflow-hidden">
        {props.image ? (
          <img 
            src={props.image} 
            alt={props.title} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
            <span className="text-xl font-semibold text-primary/70">{props.title[0]}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{props.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {props.tags.slice(0, 3).map((tag, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {props.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{props.tags.length - 3}
            </Badge>
          )}
        </div>
        {props.link && (
          <div className="flex justify-end items-center pt-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs flex items-center gap-1 hover:bg-background"
            >
              Visit Project
              <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | "web" | "app">("all");
  const [currentPage, setCurrentPage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isMobile = useIsMobile();
  
  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.type === filter
  );

  const itemsPerPage = isMobile ? 1 : 6;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  const visibleProjects = isMobile 
    ? (filteredProjects.length > 0 
       ? [filteredProjects[currentPage % filteredProjects.length]]
       : [])
    : filteredProjects;

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };
  
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore a selection of my most recent and noteworthy work.
            </p>
          </motion.div>
          
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger value="all" onClick={() => {
                  setFilter("all");
                  setCurrentPage(0);
                }}>
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="web" onClick={() => {
                  setFilter("web");
                  setCurrentPage(0);
                }}>
                  Web
                </TabsTrigger>
                <TabsTrigger value="app" onClick={() => {
                  setFilter("app");
                  setCurrentPage(0);
                }}>
                  Mobile Apps
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="relative">
                <div className={cn(
                  "grid gap-6",
                  isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                )}>
                  {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
                
                {isMobile && filteredProjects.length > 1 && (
                  <div className="flex justify-center mt-6 gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handlePrevPage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="flex items-center text-sm">
                      {currentPage + 1} / {filteredProjects.length}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleNextPage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="web" className="mt-0">
              <div className="relative">
                <div className={cn(
                  "grid gap-6",
                  isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                )}>
                  {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
                
                {isMobile && filteredProjects.length > 1 && (
                  <div className="flex justify-center mt-6 gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handlePrevPage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="flex items-center text-sm">
                      {currentPage + 1} / {filteredProjects.length}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleNextPage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="app" className="mt-0">
              <div className="relative">
                <div className={cn(
                  "grid gap-6",
                  isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                )}>
                  {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
                
                {isMobile && filteredProjects.length > 1 && (
                  <div className="flex justify-center mt-6 gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handlePrevPage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="flex items-center text-sm">
                      {currentPage + 1} / {filteredProjects.length}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleNextPage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center"
          >
            <EvervaultCard className="max-w-md w-full p-6">
              <div className="text-center p-6">
                <h3 className="text-xl font-bold mb-2">Want to see more?</h3>
                <p className="text-foreground/70 mb-6">
                  Check out my GitHub for additional projects and open-source contributions.
                </p>
                <GradientButton 
                  onClick={() => window.open(GITHUB_URL, '_blank')}
                  className="inline-flex items-center gap-2"
                >
                  View GitHub Repository
                  <svg 
                    viewBox="0 0 24 24" 
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </GradientButton>
              </div>
            </EvervaultCard>
          </motion.div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Technologies I Use</h2>
            <TechCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}