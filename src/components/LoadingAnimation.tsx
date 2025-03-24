
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "Ciao", lang: "Italian" },
  { text: "مرحبا", lang: "Arabic" },
  { text: "Olá", lang: "Portuguese" },
  { text: "Hallo", lang: "German" },
  { text: "Привет", lang: "Russian" },
];

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Even faster animation - complete in around 2.5 seconds
    const interval = setInterval(() => {
      if (currentIndex < greetings.length - 1) {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          setIsVisible(true);
        }, 150); // Faster transition between greetings
      } else {
        clearInterval(interval);
        setIsVisible(false);
        setTimeout(() => {
          onComplete();
        }, 200);
      }
    }, 300); // Show each greeting for less time

    return () => clearInterval(interval);
  }, [currentIndex, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }} // Faster animations
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 cinematic-text"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.15 }}
            >
              {greetings[currentIndex].text}
            </motion.h1>
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.15 }}
            >
              {greetings[currentIndex].lang}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingAnimation;
