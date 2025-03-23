
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Film, Youtube, Code } from 'lucide-react';

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
    description: "An elegant, Apple-inspired portfolio website with smooth animations and responsive design.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "placeholder.svg",
    type: "code",
    links: {
      demo: "#",
      github: "#",
    }
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with product filtering, cart functionality, and payment processing.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "placeholder.svg",
    type: "code",
    links: {
      demo: "#",
      github: "#",
    }
  },
  {
    title: "Urban Stories",
    description: "A short documentary exploring city life and the hidden stories of urban landscapes.",
    tags: ["Documentary", "4K", "Urban"],
    image: "placeholder.svg",
    type: "film",
    links: {
      watch: "#",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    }
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with forecast visualization and location-based features.",
    tags: ["JavaScript", "API", "Chart.js"],
    image: "placeholder.svg",
    type: "code",
    links: {
      demo: "#",
      github: "#",
    }
  },
  {
    title: "Echoes of Silence",
    description: "A short film exploring themes of isolation and connection in the digital age.",
    tags: ["Short Film", "Drama", "Cinematic"],
    image: "placeholder.svg",
    type: "film",
    links: {
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    }
  },
  {
    title: "Nature's Whisper",
    description: "A visual poem capturing the subtle beauty of natural landscapes and wildlife.",
    tags: ["Documentary", "Nature", "Visual Poetry"],
    image: "placeholder.svg",
    type: "film",
    links: {
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    }
  },
];

const Portfolio: React.FC = () => {
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
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-muted overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {project.type === 'film' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <Film className="text-white" size={32} />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
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
                          <a 
                            href={project.links.youtube}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                            title="Watch on YouTube"
                          >
                            <Youtube size={18} />
                          </a>
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
      </div>
    </section>
  );
};

export default Portfolio;
