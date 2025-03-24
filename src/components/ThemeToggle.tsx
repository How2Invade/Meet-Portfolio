
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/providers/ThemeProvider';

type ThemeToggleProps = {
  className?: string;
  inNavbar?: boolean;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, inNavbar = false }) => {
  const { theme, toggleTheme } = useTheme();

  if (inNavbar) {
    return (
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`fixed z-50 top-6 right-6 w-12 h-12 rounded-full 
                glass flex items-center justify-center shadow-md 
                hover:shadow-lg transition-all duration-300 ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
