
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
    color: "bg-[#333]/10 text-[#333] hover:bg-[#333] hover:text-white"
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

const ContactWidget = ({ icon: Icon, label, value, href, color }) => (
  <a 
    href={href} 
    target={href.startsWith('http') ? "_blank" : undefined}
    rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
    className="group"
  >
    <motion.div 
      whileHover={{ y: -5, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center p-4 rounded-xl ${color} transition-all duration-300 shadow-sm hover:shadow-md`}
    >
      <div className="mr-4">
        <Icon size={24} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium opacity-80">{label}</span>
        <span className="font-semibold">{value}</span>
      </div>
    </motion.div>
  </a>
);

const SocialLink = ({ icon: Icon, url, color }) => (
  <motion.a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${color}`}
  >
    <Icon size={22} />
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
            
            <div>
              <h4 className="text-lg font-medium mb-4">Social Profiles</h4>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <SocialLink 
                    key={index}
                    icon={social.icon}
                    url={social.url}
                    color={social.color}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="apple-button w-full flex justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
