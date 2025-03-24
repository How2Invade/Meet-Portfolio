
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, ExternalLink } from 'lucide-react';

// Define category collections
interface GalleryImage {
  src: string;
  alt: string;
  category: "coding" | "filmmaking" | "events";
}

interface GalleryCategory {
  name: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

// Create gallery categories
const galleryCategories: GalleryCategory[] = [
  {
    name: "coding",
    title: "Coding Projects",
    description: "Moments from hackathons, coding workshops and tech conferences",
    images: [
      { src: "placeholder.svg", alt: "Hackathon Winner", category: "coding" },
      { src: "placeholder.svg", alt: "Code Workshop", category: "coding" },
      { src: "placeholder.svg", alt: "Tech Conference", category: "coding" },
      { src: "placeholder.svg", alt: "Pair Programming", category: "coding" },
      { src: "placeholder.svg", alt: "Coding Competition", category: "coding" },
      { src: "placeholder.svg", alt: "Team Collaboration", category: "coding" },
    ]
  },
  {
    name: "filmmaking",
    title: "Filmmaking Journey",
    description: "Behind the scenes of my short films and documentary work",
    images: [
      { src: "placeholder.svg", alt: "Film Set", category: "filmmaking" },
      { src: "placeholder.svg", alt: "Camera Setup", category: "filmmaking" },
      { src: "placeholder.svg", alt: "Directing", category: "filmmaking" },
      { src: "placeholder.svg", alt: "Post-Production", category: "filmmaking" },
      { src: "placeholder.svg", alt: "Location Scouting", category: "filmmaking" },
      { src: "placeholder.svg", alt: "Script Reading", category: "filmmaking" },
    ]
  },
  {
    name: "events",
    title: "Special Events",
    description: "Memorable moments from conferences, award ceremonies and gatherings",
    images: [
      { src: "placeholder.svg", alt: "Award Ceremony", category: "events" },
      { src: "placeholder.svg", alt: "Conference Talk", category: "events" },
      { src: "placeholder.svg", alt: "Networking Event", category: "events" },
      { src: "placeholder.svg", alt: "Panel Discussion", category: "events" },
      { src: "placeholder.svg", alt: "Industry Meetup", category: "events" },
      { src: "placeholder.svg", alt: "Award Reception", category: "events" },
    ]
  }
];

// Flatten all images for the main gallery view
const allGalleryImages: GalleryImage[] = galleryCategories.flatMap(cat => cat.images);

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredImages = filter === 'all' 
    ? allGalleryImages 
    : allGalleryImages.filter(img => img.category === filter);

  const openCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const closeCategory = () => {
    setSelectedCategory(null);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const images = selectedCategory 
      ? galleryCategories.find(c => c.name === selectedCategory)?.images || []
      : filteredImages;
      
    const newIndex = direction === 'next'
      ? (selectedImage + 1) % images.length
      : (selectedImage - 1 + images.length) % images.length;
      
    setSelectedImage(newIndex);
  };

  // Animation variants
  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    }),
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

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

        {/* Category filters */}
        {!selectedCategory && (
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
        )}
        
        {/* Main gallery view or selected category */}
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div 
              key="main-gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {galleryCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  variants={categoryVariants}
                  viewport={{ once: true, margin: "-100px" }}
                  className="glass overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => openCategory(category.name)}
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img 
                      src={category.images[0]?.src || "placeholder.svg"} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  </div>
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 font-playfair">{category.title}</h3>
                    <p className="text-white/80 text-sm">{category.description}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-semibold">
                      View gallery <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="category-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <button 
                onClick={closeCategory}
                className="absolute -top-14 left-0 flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft size={16} />
                <span>Back to all galleries</span>
              </button>
              
              {/* Category header */}
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold mb-3 font-playfair">{galleryCategories.find(c => c.name === selectedCategory)?.title}</h3>
                <p className="text-muted-foreground">{galleryCategories.find(c => c.name === selectedCategory)?.description}</p>
              </div>
              
              {/* Category images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {galleryCategories.find(c => c.name === selectedCategory)?.images.map((image, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover="hover"
                    variants={imageVariants}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer relative group"
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="text-white" size={32} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 15 }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedCategory 
                    ? galleryCategories.find(c => c.name === selectedCategory)?.images[selectedImage]?.src
                    : filteredImages[selectedImage]?.src} 
                  alt={selectedCategory
                    ? galleryCategories.find(c => c.name === selectedCategory)?.images[selectedImage]?.alt
                    : filteredImages[selectedImage]?.alt}
                  className="w-full h-full object-contain"
                />
                
                {/* Navigation controls */}
                <motion.button 
                  className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                >
                  <ChevronLeft size={24} />
                </motion.button>
                
                <motion.button 
                  className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                >
                  <ChevronRight size={24} />
                </motion.button>
                
                {/* Fix for the close button - ensuring it works properly */}
                <motion.button 
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                >
                  <X size={24} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
