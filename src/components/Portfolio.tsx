
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Film, Youtube, Code, PlusCircle } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  type: 'code' | 'film';
  links: {
    demo?: string;
    github?: string;
    watch?: string;
    youtube?: string;
  };
}

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description: "An elegant, minimalistic portfolio website with smooth animations and responsive design.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "prof.png",
    type: "code",
    links: {
      demo: "https://meetmangaonkar.vercel.app/",
      github: "https://github.com/How2Invade/Meet-Portfolio",
    }
  },
  {
    title: "Health Vault",
    description: "A secure digital health locker that tracks records, auto-reminds vaccinations, and finds affordable care—all in one place.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "healt.png",
    type: "code",
    links: {
      demo: "https://unplug-health-vault.vercel.app/",
      github: "https://github.com/How2Invade/Unplug---Health-Vault",
    }
  },
  {
    title: "WAKEUP",
    description: "A short film exploring themes of isolation and Breaking of the Loop of Life",
    tags: ["Short Film", "Silent Movie", "3 days"],
    image: "wake.jpg",
    type: "film",
    links: {
      watch: "#",
      youtube: "https://www.youtube.com/watch?v=UjQMxau9nO0",
    }
  },
  {
    title: "USB - Until Silence Breaks",
    description: "A visually immersive short film exploring self-discovery, mentorship, and unspoken emotions, leaving a lasting impact through minimal dialogue and layered storytelling.",
    tags: ["Short Film", "Emotional", "Cinematic"],
    image: "usb.jpg",
    type: "film",
    links: {
      watch: "#",
      youtube: "https://youtu.be/xrlxXv1WIwc?si=XYD48UijeMod6mYM",
    }
  },
  {
    title: "Eco Bloom",
    description: "This project promotes sustainable waste management, reduces litter, and improves recycling in urban communities. It also encourages volunteering in beach cleanup activities, fostering cleaner and healthier environments.",
    tags: ["JavaScript", "API", "Chart.js"],
    image: "ecob.png",
    type: "code",
    links: {
      demo: "https://flit5sssg9t0djpz.vercel.app/ ",
      github: "https://github.com/How2Invade/Eco-Bloom-",
    }
  },
  {
    title: "Shop Nest",
    description: "This project promotes sustainable waste management, reduces litter, and improves recycling in urban communities. It also encourages volunteering in beach cleanup activities, fostering cleaner and healthier environments.",
    tags: ["JavaScript", "API", "Chart.js"],
    image: "nest.png",
    type: "code",
    links: {
      demo: "https://kzmqj0jiwkguqgtv9oi1.lite.vusercontent.net/",
      github: "https://github.com/How2Invade/Shop-Nest",
    }
  },
  {
    title: "Chitti",
    description: "A short film exploring themes of isolation and A visually immersive, dialogue-light narrative that relies on symbolism and deep emotions to drive the story forward.",
    tags: ["Short Film", "Psychological Drama", "2 days"],
    image: "thumbnail chiti.png",
    type: "film",
    links: {
      watch: "#",
      youtube: "https://youtu.be/8PJj6Heegmk ",
    }
  },
  
]
const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (youtubeUrl: string) => {
    setSelectedVideo(youtubeUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">My Portfolio</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            A showcase of my projects and creative works
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass group rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="h-56 bg-muted overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {project.type === 'film' && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={() => project.links.youtube && openVideo(project.links.youtube)}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Film className="text-white" size={32} />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold font-playfair">{project.title}</h3>
                  <div className="flex gap-1">
                    {project.type === 'code' ? (
                      <>
                        {project.links.github && (
                          <a 
                            href={project.links.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                            title="View GitHub Repository"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.links.demo && (
                          <a 
                            href={project.links.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                            title="View Live Demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </>
                    ) : (
                      <>
                        {project.links.youtube && (
                          <button 
                            onClick={() => openVideo(project.links.youtube!)}
                            className="p-1.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                            title="Watch on YouTube"
                          >
                            <Youtube size={18} />
                          </button>
                        )}
                        {project.links.watch && !project.links.youtube && (
                          <a 
                            href={project.links.watch}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                            title="Watch Film"
                          >
                            <Film size={18} />
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.type === 'code' && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-foreground flex items-center gap-1">
                      <Code size={12} />
                      Code Project
                    </span>
                  )}
                  {project.type === 'film' && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-foreground flex items-center gap-1">
                      <Film size={12} />
                      Film
                    </span>
                  )}
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeVideo}
          >
            <div className="relative max-w-5xl w-full aspect-video">
              <iframe 
                src={`${selectedVideo.replace('watch?v=', 'embed/')}?autoplay=1`}
                title="YouTube video player" 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <button 
                className="absolute -top-10 right-0 text-white p-2"
                onClick={closeVideo}
              >
                <PlusCircle className="rotate-45" size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
