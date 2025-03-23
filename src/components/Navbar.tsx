
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Trophy, Image, Phone, Download } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavItem {
  icon: React.ElementType;
  text: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, text: 'Home', href: '#home' },
  { icon: User, text: 'About Me', href: '#about' },
  { icon: Briefcase, text: 'Portfolio', href: '#portfolio' },
  { icon: Trophy, text: 'Achievements', href: '#achievements' },
  { icon: Image, text: 'Gallery', href: '#gallery' },
  { icon: Phone, text: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

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
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-auto ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className={`glass rounded-full px-2 md:px-4 py-2 flex items-center transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}>
        <ul className="flex items-center justify-center space-x-1 md:space-x-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className={`group relative flex items-center gap-1 p-2 md:p-2.5 rounded-full transition-all duration-300 ${
                  activeSection === item.href.substring(1) 
                    ? 'bg-secondary'
                    : 'hover:bg-secondary/60'
                }`}
              >
                <item.icon size={isMobile ? 16 : 20} className="shrink-0" />
                <span className={`text-xs md:text-sm absolute top-full left-1/2 -translate-x-1/2 opacity-0 whitespace-nowrap
                       transition-all duration-300 font-medium group-hover:opacity-100 group-hover:top-[calc(100%+5px)]
                       ${activeSection === item.href.substring(1) ? 'md:opacity-100 md:relative md:top-0 md:left-0 md:translate-x-0' : 'hidden md:inline-block'}`}>
                  {item.text}
                </span>
              </a>
            </li>
          ))}
          <li className="ml-1">
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-1 bg-primary text-primary-foreground rounded-full px-2.5 md:px-4 py-2 
                      text-xs md:text-sm font-semibold transition-all duration-300 
                      hover:shadow-md active:scale-95"
            >
              <Download size={isMobile ? 14 : 18} className="shrink-0" />
              <span className="hidden md:inline-block">Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
