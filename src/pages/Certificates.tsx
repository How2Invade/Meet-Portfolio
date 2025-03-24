
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { X, ChevronLeft, ChevronRight, Award } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  category: "technical" | "creative" | "academic";
}

// Sample certificates data
const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Advanced Web Development",
    issuer: "Tech Academy",
    date: "June 2023",
    description: "Completed intensive training in modern web development frameworks and techniques.",
    image: "placeholder.svg",
    category: "technical"
  },
  {
    id: "cert-2",
    title: "Film Direction Masterclass",
    issuer: "Film Institute",
    date: "March 2022",
    description: "Intensive course covering advanced film direction and storytelling techniques.",
    image: "placeholder.svg",
    category: "creative"
  },
  {
    id: "cert-3",
    title: "Machine Learning Certification",
    issuer: "AI Academy",
    date: "November 2022",
    description: "Comprehensive training in machine learning algorithms and practical applications.",
    image: "placeholder.svg",
    category: "technical"
  },
  {
    id: "cert-4",
    title: "Digital Photography Excellence",
    issuer: "Visual Arts School",
    date: "August 2021",
    description: "Mastery of digital photography techniques and visual storytelling.",
    image: "placeholder.svg",
    category: "creative"
  },
  {
    id: "cert-5",
    title: "Cloud Computing Architecture",
    issuer: "Cloud Professionals",
    date: "January 2023",
    description: "Advanced cloud architecture design and implementation strategies.",
    image: "placeholder.svg",
    category: "technical"
  },
  {
    id: "cert-6",
    title: "Project Management Professional",
    issuer: "Management Institute",
    date: "May 2022",
    description: "Professional certification in project management methodologies and best practices.",
    image: "placeholder.svg",
    category: "academic"
  },
];

const Certificates: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  
  const filteredCertificates = filter === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  const openCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  const navigateCertificate = (direction: 'prev' | 'next') => {
    if (!selectedCertificate) return;
    
    const currentIndex = filteredCertificates.findIndex(cert => cert.id === selectedCertificate.id);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredCertificates.length
      : (currentIndex - 1 + filteredCertificates.length) % filteredCertificates.length;
      
    setSelectedCertificate(filteredCertificates[newIndex]);
  };

  return (
    <Layout>
      <section className="section bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="section-heading">My Certificates</h1>
            <p className="section-subheading max-w-3xl mx-auto">
              Professional certifications and achievements from my career journey
            </p>
          </motion.div>
          
          {/* Filters */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 p-1 rounded-full bg-secondary">
              <button 
                onClick={() => setFilter('all')} 
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary-foreground/10'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('technical')} 
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === 'technical' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary-foreground/10'
                }`}
              >
                Technical
              </button>
              <button 
                onClick={() => setFilter('creative')} 
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === 'creative' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary-foreground/10'
                }`}
              >
                Creative
              </button>
              <button 
                onClick={() => setFilter('academic')} 
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === 'academic' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary-foreground/10'
                }`}
              >
                Academic
              </button>
            </div>
          </div>
          
          {/* Certificate grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 } 
                }}
                className="glass rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openCertificate(certificate)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${certificate.category === 'technical' ? 'bg-blue-500/90 text-white' : 
                        certificate.category === 'creative' ? 'bg-purple-500/90 text-white' : 
                        'bg-amber-500/90 text-white'}
                    `}>
                      {certificate.category.charAt(0).toUpperCase() + certificate.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-playfair">{certificate.title}</h3>
                  <div className="flex items-center mb-3">
                    <Award size={16} className="mr-2 text-primary" />
                    <span className="text-sm font-medium">{certificate.issuer}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{certificate.description}</p>
                  <div className="text-xs text-muted-foreground">{certificate.date}</div>
                </div>
                
                <div className="px-6 pb-6 pt-0">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium flex items-center justify-center"
                  >
                    View Certificate
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Certificate Lightbox */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
              onClick={closeCertificate}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, rotateY: 10 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.9, opacity: 0, rotateY: -10 }}
                transition={{ type: "spring", damping: 15 }}
                className="relative max-w-4xl w-full glass p-1 rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title} 
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
                
                <div className="p-6 bg-card/90 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-2 font-playfair">{selectedCertificate.title}</h3>
                  <div className="flex items-center mb-3">
                    <Award size={18} className="mr-2 text-primary" />
                    <span className="font-medium">{selectedCertificate.issuer} • {selectedCertificate.date}</span>
                  </div>
                  <p className="text-muted-foreground">{selectedCertificate.description}</p>
                </div>
                
                {/* Navigation buttons */}
                <motion.button 
                  className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
                  whileHover={{ scale: 1.1, x: -3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateCertificate('prev');
                  }}
                >
                  <ChevronLeft size={24} />
                </motion.button>
                
                <motion.button 
                  className="absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
                  whileHover={{ scale: 1.1, x: 3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateCertificate('next');
                  }}
                >
                  <ChevronRight size={24} />
                </motion.button>
                
                <motion.button 
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeCertificate}
                >
                  <X size={24} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default Certificates;
