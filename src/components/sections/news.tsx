
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
    excerpt: "This is a fantastic opportunity to explore the world of automation, enhance my RPA skills, and connect with like-minded innovators and contributing to the automation community A huge thanks to UiPath for this incredible platform. Let’s automate the future together",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGYdj3syhErjw/feedshare-shrink_800/B56ZXNQ_HdGoAg-/0/1742905537986?e=1748476800&v=beta&t=c6r3NRngHzc3vQ06lihCdVHc8jD3gC4b64Gw5nZvLbY",
    url: "https://www.linkedin.com/posts/sujal-bagavan-186169297_uipath-automation-rpa-activity-7310275676975075330-2IQV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEe_n7YBhaK1jVMjoox9qUe8jDI2IW5YY84",
  },
  {
    date: "  ",
    title: "WON THE GC GENRAL CHAMPIONSHIP ",
    excerpt: "Won PAROUSIA 2K25 -2day National Level Fest organised by JAIN BCA BELGAVI.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGq5KARagv0_A/feedshare-shrink_800/B56ZZEgDcfGcAg-/0/1744905981928?e=1748476800&v=beta&t=EfoBKV6c3smFFjsrE1mc_oMOx1BqLITzWFo5kgsN1dE",
    url: "https://www.linkedin.com/posts/kle-bca-gokak-30747416b_congratulations-students-won-the-gc-genral-activity-7318666147367661569-qDzd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEe_n7YBhaK1jVMjoox9qUe8jDI2IW5YY84",
  },
  {
    date: "",
    title: "WON THE Cash Prize in the 24-hour hackthon ",
    excerpt: "Won Odyessey 2K25 -2day National Level Fest organised by JAIN Enginneering BELGAVI.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHXc55QegiQTg/feedshare-shrink_2048_1536/B56ZYplJ01HoAo-/0/1744454334980?e=1748476800&v=beta&t=m6IRHIQj9UQCTBkLMuDKyKLm3vJfDNBALDnKlR6JO5M",
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
