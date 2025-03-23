
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: React.ElementType;
}

const achievements: Achievement[] = [
  {
    title: "First Place - National Coding Competition",
    description: "Won first place at the National Code Challenge for developing an innovative solution for urban mobility.",
    year: "2023",
    icon: Trophy
  },
  {
    title: "Best Short Film Award",
    description: "Received recognition for directing and producing a compelling short documentary on environmental conservation.",
    year: "2022",
    icon: Award
  },
  {
    title: "Outstanding Technical Innovation",
    description: "Awarded for creating a novel algorithm that improved processing efficiency by 40% in legacy systems.",
    year: "2021",
    icon: Medal
  },
  {
    title: "Hackathon Champion",
    description: "Led a team to victory in a 48-hour hackathon focused on solving healthcare accessibility challenges.",
    year: "2020",
    icon: Trophy
  },
];

const Achievements: React.FC = () => {
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
        
        <div className="space-y-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm">
                <achievement.icon className="text-primary" size={24} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <div className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary-foreground w-fit">
                    {achievement.year}
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
