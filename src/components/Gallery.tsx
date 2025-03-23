
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Placeholder images - replace with your actual gallery images
const galleryImages = [
  { src: "placeholder.svg", alt: "Gallery Image 1", category: "coding" },
  { src: "placeholder.svg", alt: "Gallery Image 2", category: "filmmaking" },
  { src: "placeholder.svg", alt: "Gallery Image 3", category: "events" },
  { src: "placeholder.svg", alt: "Gallery Image 4", category: "coding" },
  { src: "placeholder.svg", alt: "Gallery Image 5", category: "filmmaking" },
  { src: "placeholder.svg", alt: "Gallery Image 6", category: "events" },
  { src: "placeholder.svg", alt: "Gallery Image 7", category: "coding" },
  { src: "placeholder.svg", alt: "Gallery Image 8", category: "filmmaking" },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Gallery</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Visual highlights from my projects and events
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
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
              onClick={() => setFilter('coding')} 
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === 'coding' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary-foreground/10'
              }`}
            >
              Coding
            </button>
            <button 
              onClick={() => setFilter('filmmaking')} 
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === 'filmmaking' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary-foreground/10'
              }`}
            >
              Filmmaking
            </button>
            <button 
              onClick={() => setFilter('events')} 
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === 'events' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary-foreground/10'
              }`}
            >
              Events
            </button>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.03 }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 15 }}
                className="relative max-w-4xl max-h-[90vh] w-full rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={galleryImages[selectedImage].src} 
                  alt={galleryImages[selectedImage].alt} 
                  className="w-full h-full object-contain bg-black/50"
                />
                <button 
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={20} className="text-white" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
