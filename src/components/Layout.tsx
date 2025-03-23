
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingAnimation onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>{children}</main>
          
          <footer className="py-6 px-6 bg-background text-center">
            <div className="container mx-auto">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Meet Mangaonkar. All rights reserved.
              </p>
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
        </>
      )}
    </>
  );
};

export default Layout;
