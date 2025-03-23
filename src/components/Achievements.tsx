
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal, ChevronRight } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: React.ElementType;
  details?: string;
}

const achievements: Achievement[] = [
  {
    title: "First Place - National Coding Competition",
    description: "Won first place at the National Code Challenge for developing an innovative solution for urban mobility.",
    year: "2023",
    icon: Trophy,
    details: "This project focused on using AI algorithms to optimize traffic flow in congested urban areas. The solution reduced simulated congestion by 32% and was recognized for its innovative approach to a real-world problem."
  },
  {
    title: "Best Short Film Award",
    description: "Received recognition for directing and producing a compelling short documentary on environmental conservation.",
    year: "2022",
    icon: Award,
    details: "The documentary, titled 'Our Fading World', was shot over six months across three different ecosystems. It explored the impact of climate change on local communities and wildlife, combining intimate personal stories with breathtaking cinematography."
  },
  {
    title: "Outstanding Technical Innovation",
    description: "Awarded for creating a novel algorithm that improved processing efficiency by 40% in legacy systems.",
    year: "2021",
    icon: Medal,
    details: "The algorithm I developed rethought how data was processed in financial systems, reducing computation time and resource usage dramatically. This innovation has since been implemented in several enterprise-level applications."
  },
  {
    title: "Hackathon Champion",
    description: "Led a team to victory in a 48-hour hackathon focused on solving healthcare accessibility challenges.",
    year: "2020",
    icon: Trophy,
    details: "Our team created a mobile platform that connected rural patients with medical professionals through a low-bandwidth video solution. The project was praised for its attention to real-world constraints and elegant implementation."
  },
];

const Achievements: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="achievements" className="section bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Achievements</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Recognitions and milestones from my professional journey
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`glass rounded-xl overflow-hidden transition-all duration-500 ${
                expandedIndex === index ? 'shadow-2xl scale-[1.02]' : 'shadow-md hover:shadow-lg'
              }`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm">
                    <achievement.icon className="text-primary" size={28} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3">
                      <h3 className="text-xl font-semibold">{achievement.title}</h3>
                      <div className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary-foreground w-fit">
                        {achievement.year}
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center mt-3 text-primary font-medium">
                      <span>{expandedIndex === index ? 'Read less' : 'Read more'}</span>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight size={18} className="ml-1" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              
              {achievement.details && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-border/50 mt-2">
                    <p className="text-muted-foreground italic">
                      {achievement.details}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
