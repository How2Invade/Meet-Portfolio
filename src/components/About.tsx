
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Film, Phone, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading max-w-3xl mx-auto">
          A coder by precision, a filmmaker by passion, an editor by obsession
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative w-48 h-48 mx-auto md:ml-auto md:mr-0">
              <div className="absolute inset-0 rounded-full bg-gray-400/30 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/10">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/10">
  <img 
    src="profile-pic.png" // Replace this with the actual image path
    alt="Meet Mangaonkar" 
    className="w-full h-full object-cover" 
  />
</div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-2 shadow-md">
                <Phone size={20} className="text-primary" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-playfair">Meet Mangaonkar</h3>
            <p className="text-muted-foreground mb-6">
            I excel in academics while actively exploring tech, filmmaking, and creative pursuits. With a strong problem-solving mindset, I blend logic and creativity to craft impactful experiences. Whether in code, storytelling, or editing, I strive for perfection in every detail.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Code size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Coding</h4>
                  <p className="text-sm text-muted-foreground">Bringing ideas to life through elegant code solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Film size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Filmmaking</h4>
                  <p className="text-sm text-muted-foreground">Crafting visual narratives that leave an impact</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>9969282858</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>mangaonkarmeet@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
