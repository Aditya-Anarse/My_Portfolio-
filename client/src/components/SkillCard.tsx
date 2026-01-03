import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
  level: number; // 0-100
  delay: number;
}

export default function SkillCard({ name, icon: Icon, color, level, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        rotateX: 10, 
        rotateY: 10,
        boxShadow: `0 0 20px ${color}40`
      }}
      className="perspective-1000 group"
    >
      <div className="glass-card p-6 rounded-xl border border-white/5 h-full relative overflow-hidden transform-style-3d transition-all duration-300 group-hover:border-white/20">
        {/* Background glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
        />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <div 
            className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
            style={{ color: color }}
          >
            <Icon className="w-8 h-8" />
          </div>
          
          <h3 className="text-xl font-bold font-display tracking-wide">{name}</h3>
          
          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-2">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: delay + 0.2 }}
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
          
          <span className="text-xs font-mono text-muted-foreground">{level}% Proficiency</span>
        </div>
      </div>
    </motion.div>
  );
}
