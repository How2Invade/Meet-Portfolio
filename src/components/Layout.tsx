
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import LoadingAnimation from './LoadingAnimation';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    // Detect user inactivity to auto-scroll sections
    let timer: number;
    const resetTimer = () => {
      clearTimeout(timer);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    
    // Set a shorter loading time for the animation (2.5 seconds max)
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      clearTimeout(timer);
      clearTimeout(loadingTimer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Cinematic grain effect overlay
  const CinematicGrain = () => (
    <div className="fixed inset-0 z-10 pointer-events-none opacity-20 mix-blend-overlay">
      <div className="absolute inset-0 bg-noise"></div>
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingAnimation onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <CinematicGrain />
          
          <Navbar />
          
          <main className="relative z-20">
            {children}
          </main>
          
          <footer className="py-6 px-6 bg-background text-center relative z-20">
            <div className="container mx-auto">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-sm"
              >
                © {new Date().getFullYear()} Meet Mangaonkar. All rights reserved.
              </motion.p>
            </div>
          </footer>
          
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 z-40"
              >
                <ArrowUp size={20} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};

export default Layout;
