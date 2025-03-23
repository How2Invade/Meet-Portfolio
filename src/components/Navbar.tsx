
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Trophy, Image, Phone, Download } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine active section - fixed TypeScript errors by checking if elements exist
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
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className={`glass rounded-full px-4 py-2 flex items-center transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}>
        <ul className="flex items-center space-x-1 sm:space-x-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href}
                className={`nav-item ${activeSection === item.href.substring(1) ? 'bg-secondary' : ''}`}
              >
                <item.icon size={20} />
                <span className="nav-text">{item.text}</span>
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a 
              href="/resume.pdf" 
              download 
              className="apple-button flex items-center gap-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
