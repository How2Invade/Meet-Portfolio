
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Medal, ChevronRight, ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: React.ElementType;
  details?: string;
  certificate?: string;
}

const achievements: Achievement[] = [
  {
    title: "First Place - National Coding Competition",
    description: "Won first place at the National Code Challenge for developing an innovative solution for urban mobility.",
    year: "2023",
    icon: Trophy,
    details: "This project focused on using AI algorithms to optimize traffic flow in congested urban areas. The solution reduced simulated congestion by 32% and was recognized for its innovative approach to a real-world problem.",
    certificate: "placeholder.svg"
  },
  {
    title: "Best Short Film Award",
    description: "Received recognition for directing and producing a compelling short documentary on environmental conservation.",
    year: "2022",
    icon: Award,
    details: "The documentary, titled 'Our Fading World', was shot over six months across three different ecosystems. It explored the impact of climate change on local communities and wildlife, combining intimate personal stories with breathtaking cinematography.",
    certificate: "placeholder.svg"
  },
  {
    title: "Outstanding Technical Innovation",
    description: "Awarded for creating a novel algorithm that improved processing efficiency by 40% in legacy systems.",
    year: "2021",
    icon: Medal,
    details: "The algorithm I developed rethought how data was processed in financial systems, reducing computation time and resource usage dramatically. This innovation has since been implemented in several enterprise-level applications.",
    certificate: "placeholder.svg"
  },
  {
    title: "Hackathon Champion",
    description: "Led a team to victory in a 48-hour hackathon focused on solving healthcare accessibility challenges.",
    year: "2020",
    icon: Trophy,
    details: "Our team created a mobile platform that connected rural patients with medical professionals through a low-bandwidth video solution. The project was praised for its attention to real-world constraints and elegant implementation.",
    certificate: "placeholder.svg"
  },
];

const Achievements: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [viewCertificate, setViewCertificate] = useState<string | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const openCertificate = (certificate: string) => {
    setViewCertificate(certificate);
  };

  const closeCertificate = () => {
    setViewCertificate(null);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
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
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="glass rounded-xl overflow-hidden transition-all duration-500"
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
                      <h3 className="text-xl font-semibold font-playfair">{achievement.title}</h3>
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
              
              <AnimatePresence>
                {expandedIndex === index && achievement.details && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-border/50 mt-2">
                      <p className="text-muted-foreground italic mb-4">
                        {achievement.details}
                      </p>
                      
                      {achievement.certificate && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => openCertificate(achievement.certificate!)}
                          className="flex items-center gap-2 text-primary font-medium mt-2 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/5 transition-all"
                        >
                          <Trophy size={16} />
                          View Certificate
                          <ExternalLink size={14} />
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {viewCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeCertificate}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative max-w-4xl w-full bg-card p-1 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={viewCertificate} 
                alt="Certificate" 
                className="w-full h-auto"
              />
              <motion.button
                className="absolute top-4 right-4 bg-background rounded-full p-2 shadow-lg"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeCertificate}
              >
                <ChevronRight size={24} className="rotate-45" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
