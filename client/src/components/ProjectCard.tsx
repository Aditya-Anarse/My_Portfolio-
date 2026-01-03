import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  delay: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  imageUrl, 
  githubUrl, 
  liveUrl,
  delay 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative h-[400px] w-full perspective-1000"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300 blur-sm opacity-50" />
      
      <div className="relative h-full w-full glass-card rounded-2xl overflow-hidden flex flex-col border border-white/10 group-hover:border-primary/30 transition-colors duration-300">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col relative z-20 bg-background/80 backdrop-blur-sm">
          <h3 className="text-2xl font-bold font-display mb-2 text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm flex-1 line-clamp-3 mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map(tag => (
              <span 
                key={tag} 
                className="px-2 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 mt-auto">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
