
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "नमस्कार", lang: "Marathi" },
  { text: "Bonjour", lang: "French" },
  { text: "こんにちは", lang: "Japanese" },
];

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Faster animation - complete in under 4 seconds
    const interval = setInterval(() => {
      if (currentIndex < greetings.length - 1) {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          setIsVisible(true);
        }, 200); // Faster transition between greetings
      } else {
        clearInterval(interval);
        setIsVisible(false);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 600); // Show each greeting for less time

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
            transition={{ duration: 0.2 }} // Faster animations
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 cinematic-text"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {greetings[currentIndex].text}
            </motion.h1>
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
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
