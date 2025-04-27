
import * as React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Trophy, 
  Award, 
  Star, 
  Layout, 
  Users, 
  Clock
} from "lucide-react";

interface AchievementProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  category: "hackathon" | "highlight" | "milestone";
}

const achievements: AchievementProps[] = [
  // Hackathons
  {
    title: "Odyssey National Level Hackathon",
    value: "Winner",
    icon: <Trophy className="w-6 h-6" />,
    category: "hackathon",
  },
  {
    title: "24-Hour National Hackathon",
    value: "Runner Up",
    icon: <Star className="w-6 h-6" />,
    category: "hackathon",
  },
  {
    title: "CODEFIESTA 5.0 - 24hour hackthon",
    value: "Consolation Prize",
    icon: <Award className="w-6 h-6" />,
    category: "hackathon",
  },
 
  
  // Highlights
  {
    title: " UiPath Student Developer Championship",
    value: "2025",
    icon: <Layout className="w-6 h-6" />,
    category: "highlight",
  },
  {
    title: "Indie Dev Circle",
    value: "Featured",
    icon: <Users className="w-6 h-6" />,
    category: "highlight",
  },
  
  // Milestones
  {
    title: "Projects",
    value: "10+",
    icon: <Layout className="w-6 h-6" />,
    category: "milestone",
  },
  {
    title: "Freelance Clients",
    value: "2+",
    icon: <Users className="w-6 h-6" />,
    category: "milestone",
  },
  {
    title: "Positive Feedback",
    value: "100%",
    icon: <Star className="w-6 h-6" />,
    category: "milestone",
  },
  {
    title: "Hacthons Wins",
    value: "10+",
    icon: <Clock className="w-6 h-6" />,
    category: "milestone",
  },
];

export function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const hackathons = achievements.filter(a => a.category === "hackathon");
  const highlights = achievements.filter(a => a.category === "highlight");
  const milestones = achievements.filter(a => a.category === "milestone");
  
  return (
    <section id="achievements" className="py-20">
      <div className="container">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Recognition and milestones from my journey in development.
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {/* Hackathon Wins */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-bold mb-6 text-center"
              >
                Hackathon Wins
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {hackathons.map((achievement, index) => (
                  <AchievementCard
                    key={index}
                    achievement={achievement}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
            
            {/* Recent Highlights */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl font-bold mb-6 text-center"
              >
                Recent Highlights
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((achievement, index) => (
                  <AchievementCard
                    key={index}
                    achievement={achievement}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
            
            {/* Milestones */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl font-bold mb-6 text-center"
              >
                Milestones
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {milestones.map((achievement, index) => (
                  <AchievementCard
                    key={index}
                    achievement={achievement}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ 
  achievement, 
  index, 
  isInView 
}: { 
  achievement: AchievementProps; 
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium">{achievement.title}</h4>
        <div className="bg-primary/10 text-primary p-2 rounded-lg">
          {achievement.icon}
        </div>
      </div>
      <div className="text-2xl font-bold">{achievement.value}</div>
    </motion.div>
  );
}
