
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Instagram, 
  MessageSquare
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "#",
    color: "bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "#",
    color: "bg-[#333]/10 text-[#333] hover:bg-[#333] hover:text-white dark:bg-[#333]/20 dark:text-gray-200 dark:hover:bg-[#333]"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "#",
    color: "bg-[#E1306C]/10 text-[#E1306C] hover:bg-[#E1306C] hover:text-white"
  },
  {
    name: "WhatsApp",
    icon: MessageSquare,
    url: "https://wa.me/919876543210",
    color: "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white"
  }
];

const ContactWidget = ({ icon: Icon, label, value, href, color }) => {
  const displayValue = label === "Email" && value.length > 20 && window.innerWidth < 640
    ? `${value.slice(0, 18)}...`
    : value;

  return (
    <motion.a 
      href={href} 
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      whileHover={{ y: -5, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="group w-full"
    >
      <Card className={`border-none overflow-hidden ${color} transition-all duration-300 shadow-md hover:shadow-xl`}>
        <CardContent className="p-6 flex items-center">
          <div className="mr-4 p-3 rounded-full bg-background/50 backdrop-blur-sm">
            <Icon size={28} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium opacity-80">{label}</span>
            <span className="font-semibold text-lg truncate">{displayValue}</span>
          </div>
        </CardContent>
      </Card>
    </motion.a>
  );
};

const SocialLink = ({ icon: Icon, name, url, color }) => (
  <motion.a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className={`flex flex-col items-center justify-center p-6 rounded-xl ${color} transition-all duration-300 shadow-md hover:shadow-xl`}
  >
    <Icon size={32} className="mb-2" />
    <span className="font-medium">{name}</span>
  </motion.a>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Let's connect and explore opportunities to work together
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center font-playfair">Connect With Me</h3>
            
            <div className="mb-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {socialLinks.map((social, index) => (
                  <SocialLink 
                    key={index}
                    icon={social.icon}
                    name={social.name}
                    url={social.url}
                    color={social.color}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactWidget 
                icon={Mail} 
                label="Email"
                value="meet.mangaonkar@example.com"
                href="mailto:meet.mangaonkar@example.com"
                color="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
              />
              
              <ContactWidget 
                icon={Phone} 
                label="Phone"
                value="+91 98765 43210"
                href="tel:+919876543210"
                color="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground italic">
                "The best way to predict the future is to create it."
              </p>
              <p className="text-sm mt-2 font-medium">— Let's build something amazing together</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
