import * as React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsItemProps {
  date: string;
  title: string;
  excerpt: string;
  image: string;
  url: string;
}

const newsItems: NewsItemProps[] = [
  {
    date: " ",
    title: "UiPath Student Developer Championship!",
    excerpt: "I’m thrilled to share that I have been selected for the UiPath Student Developer Championship! 🎖️✨This is a fantastic opportunity to explore the world of automation, enhance my RPA skills, and connect with like-minded innovators. Im looking forward to learning, building, and contributing to the automation community!A huge thanks to UiPath for this incredible platform. Lets automate the future together! 🤖💡",
    image: "/images/ui-path.jpg",
    url: "https://www.linkedin.com/posts/sujal-bagavan-186169297_uipath-automation-rpa-activity-7310275676975075330-2IQV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEe_n7YBhaK1jVMjoox9qUe8jDI2IW5YY84",
  },
  {
    date: "  ",
    title: "WON THE GC GENRAL CHAMPIONSHIP ",
    excerpt: "Won the General Championship in Web Development at PAROUSIA 2K25, a national-level fest by JAIN BCA, Belagavi.The competition had three rounds: web design, product advertisement (video), and full-stack development.In the first round, we built a responsive website with strong UI/UX.The second round involved creating a creative product ad video.In the final round, we developed a complete web application, securing the top spot..",
    image: "/images/parousia.jpg",
    url: "https://www.linkedin.com/posts/kle-bca-gokak-30747416b_congratulations-students-won-the-gc-genral-activity-7318666147367661569-qDzd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEe_n7YBhaK1jVMjoox9qUe8jDI2IW5YY84",
  },
  {
    date: "",
    title: "WON THE Cash Prize in the 24-hour hackthon ",
    excerpt: "Won  1st Prize in the Hackathon at Odyssey – National Level Event organized by Jain Engineering College, Belagavi on 11th & 12th April 2025.The event challenged participants to solve real-world problems through innovative tech solutions.Our team showcased strong problem-solving, collaboration, and development skills.Their project stood out for creativity, execution, and impact.#KLEBCAGokak #HackathonWinners #Odyssey2025.",
    image: "/images/jain-engg.jpg",
    url: "https://www.linkedin.com/posts/sujal-bagavan-186169297_klebcagokak-activity-7317209205155721217-hsMG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEe_n7YBhaK1jVMjoox9qUe8jDI2IW5YY84",
  },
 
];

export function News() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Stay updated with my recent activities, articles, and announcements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsCard
                key={index}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Add this new LinkedIn button section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://www.linkedin.com/in/sujal-bagavan-186169297/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#005885] transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              From More 
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NewsCard({ 
  item, 
  index, 
  isInView 
}: { 
  item: NewsItemProps; 
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    >
      <a 
        href={item.url}
        className="block group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border h-full"
      >
        {/* Image */}
        <div className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center text-sm text-foreground/60 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            {item.date}
          </div>
          
          <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          
          <p className="text-foreground/70 mb-4">{item.excerpt}</p>
          
          <div className="flex items-center text-primary font-medium">
            Read More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}
