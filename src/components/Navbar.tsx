
import React, { useEffect, useState } from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  Trophy, 
  Image, 
  Phone, 
  Moon, 
  Sun,
  GraduationCap,
  LightbulbIcon,
  FolderGit2
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/providers/ThemeProvider';
import { Dock, DockIcon, DockItem, DockLabel } from './animation/DockAnimation';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { icon: Home, text: 'Home', href: '#home' },
    { icon: User, text: 'About Me', href: '#about' },
    { icon: Briefcase, text: 'Portfolio', href: '#portfolio' },
    { icon: Trophy, text: 'Achievements', href: '#achievements' },
    { icon: Image, text: 'Gallery', href: '#gallery' },
    { icon: Phone, text: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100) && window.scrollY < (sectionTop + sectionHeight - 100)) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-auto"
    >
      <Dock className={`items-end pb-3 rounded-full ${scrolled ? 'shadow-md' : ''}`}>
        {navItems.map((item, idx) => (
          <a key={idx} href={item.href}>
            <DockItem
              className={cn(
                "aspect-square rounded-full bg-secondary hover:bg-secondary/80 transition-all",
                activeSection === item.href.substring(1) && "bg-primary/10 border border-primary"
              )}
            >
              <DockLabel>{item.text}</DockLabel>
              <DockIcon
                className={cn(
                  activeSection === item.href.substring(1) ? "text-primary" : "text-foreground"
                )}
              >
                <item.icon className="h-full w-full" />
              </DockIcon>
            </DockItem>
          </a>
        ))}
        <DockItem className="aspect-square rounded-full bg-secondary hover:bg-secondary/80 transition-all">
          <DockLabel>Toggle Theme</DockLabel>
          <DockIcon>
            {theme === 'light' ? (
              <Moon className="h-full w-full" onClick={toggleTheme} />
            ) : (
              <Sun className="h-full w-full" onClick={toggleTheme} />
            )}
          </DockIcon>
        </DockItem>
      </Dock>
    </motion.nav>
  );
};

export default Navbar;
