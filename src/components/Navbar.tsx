
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
      <div className={`glass rounded-full px-3 sm:px-4 py-2 flex items-center justify-center transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}>
        <ul className="flex items-center justify-center flex-wrap gap-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className={`flex items-center gap-2 px-2 sm:px-3 py-2 rounded-full transition-all duration-300 ${
                  activeSection === item.href.substring(1) 
                    ? 'bg-secondary'
                    : 'hover:bg-secondary/60'
                }`}
              >
                <item.icon size={isMobile ? 18 : 20} />
                <span className={`text-sm absolute left-10 opacity-0 w-0 whitespace-nowrap overflow-hidden
                       transition-all duration-300 font-medium group-hover:opacity-100 group-hover:w-auto
                       group-hover:relative group-hover:left-0 ${
                         activeSection === item.href.substring(1) ? 'sm:opacity-100 sm:w-auto sm:relative sm:left-0' : ''
                       }`}>
                  {item.text}
                </span>
              </a>
            </li>
          ))}
          <li className="ml-1 sm:ml-2">
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-1.5 sm:gap-2 bg-primary text-primary-foreground rounded-full px-3 sm:px-4 py-2 
                      font-semibold text-sm transition-all duration-300 
                      hover:shadow-md active:scale-95"
            >
              <Download size={isMobile ? 16 : 18} />
              <span className={isMobile ? "sr-only sm:not-sr-only" : ""}>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
