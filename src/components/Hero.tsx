
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

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
            I create beautiful digital experiences through code and tell compelling stories through film.
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
              href="#about" 
              className="apple-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
        
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
