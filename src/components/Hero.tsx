
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, PlayCircle } from 'lucide-react';
import FramerWrapper from './animation/FramerWrapper';

const Hero: React.FC = () => {
  return (
    <section id="home" className="section relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="vignette"></div>
      
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,184,184,0.2),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(184,184,184,0.2),transparent_40%)]"></div>
      </div>
      
      <div className="container mx-auto flex flex-col items-center justify-center h-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-3xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1] // Cinematic easing
            }}
            className="section-heading cinematic-text"
          >
            Hello, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 dramatic-reveal">Meet Mangaonkar</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="section-subheading"
          >
            Coder. Student.
            Filmmaker. Editor.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              ease: "easeOut" 
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.a 
              href="/downloads/resume.pdf" 
              className="apple-button flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
            <motion.a 
              href="src/components/Contact.tsx" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Work Teaser */}
        <FramerWrapper 
          delay={1.2} 
          className="mt-12 max-w-4xl w-full"
        >
          <div className="relative rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10">
            <motion.div 
              className="p-6 flex flex-col sm:flex-row items-center gap-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-lg w-full sm:w-1/2 aspect-video">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10"
                  animate={{ 
                    background: [
                      "linear-gradient(to right, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.1))",
                      "linear-gradient(to left, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.1))",
                      "linear-gradient(to right, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.1))"
                    ]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.img
                  src="/placeholder.svg" 
                  alt="Project Preview" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                </motion.div>
              </div>
              <div className="text-left w-full sm:w-1/2">
                <h3 className="text-xl font-semibold mb-2">Featured Project</h3>
                <p className="text-muted-foreground mb-4">Check out my latest work showcasing cinematic storytelling and digital creativity.</p>
                <motion.a 
                  href="https://youtu.be/8PJj6Heegmk" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Portfolio
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </FramerWrapper>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-10"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
