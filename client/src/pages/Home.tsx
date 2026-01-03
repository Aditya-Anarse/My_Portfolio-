import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { 
  Terminal, 
  Code2, 
  Database, 
  Layout, 
  Cpu, 
  Layers, 
  Mail,
  Linkedin,
  Github,
  Phone,
  ArrowDown
} from "lucide-react";

export default function Home() {
  const skills = [
    { name: "HTML5", icon: Layout, color: "#E34F26", level: 95 },
    { name: "CSS3 / Tailwind", icon: Layers, color: "#38B2AC", level: 90 },
    { name: "JavaScript", icon: Code2, color: "#F7DF1E", level: 85 },
    { name: "Python", icon: Terminal, color: "#3776AB", level: 80 },
    { name: "C / C++", icon: Cpu, color: "#00599C", level: 75 },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-background flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <Navbar />
        {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1 space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for Internship
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
                <span className="text-white">HELLO, I'M</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">
                  ADITYA ANARSE
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl border-l-2 border-primary/50 pl-6 mt-6">
                B.Tech Data Science Student <br />
                <span className="text-primary font-medium">Full Stack Developer</span> & <span className="text-secondary font-medium">UI Designer</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-4"
            >
              <a href="#contact" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary transition-colors rounded-sm">
                Hire Me
              </a>
              <a href="#projects" className="px-8 py-3 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors rounded-sm">
                View Work
              </a>
            </motion.div>

            <div className="flex gap-6 pt-4">
              <a href="https://github.com/Aditya-Anarse/Portfolio-.git" target="_blank" className="text-muted-foreground hover:text-white hover:scale-110 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/aditya-an-ba9a98361" target="_blank" className="text-muted-foreground hover:text-[#0077b5] hover:scale-110 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:adityaanarase8@gmail.com" className="text-muted-foreground hover:text-red-500 hover:scale-110 transition-all">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative z-10 w-full max-w-md aspect-square"
            >
              {/* 3D Floating Elements Simulation */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[80px] animate-pulse" />
                
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute inset-0 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden"
                >
                  {/* Placeholder for Profile Image */}
                  {/* <img src="/images/profile.jpg" alt="Aditya" className="w-full h-full object-cover opacity-80" /> */}
                  <div className="text-center p-8">
                    <Cpu className="w-32 h-32 text-primary/50 mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-bold text-white">DATA<br/>SCIENTIST</h3>
                  </div>
                </motion.div>

                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-4 -right-4 bg-black/80 border border-primary/50 p-4 rounded-xl backdrop-blur-md shadow-lg shadow-primary/20"
                >
                  <Code2 className="w-8 h-8 text-primary mb-2" />
                  <div className="text-xs font-mono text-white">React & Next.js</div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-10 -left-8 bg-black/80 border border-secondary/50 p-4 rounded-xl backdrop-blur-md shadow-lg shadow-secondary/20"
                >
                  <Database className="w-8 h-8 text-secondary mb-2" />
                  <div className="text-xs font-mono text-white">Python & Data</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-2 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">ABOUT <span className="text-primary">ME</span></h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  I am a First Year B.Tech student in <span className="text-white font-medium">Data Science</span> at 
                  Ajeenkya DY Patil University, in collaboration with NIAT.
                </p>
                <p>
                  My journey began with curiosity about how data shapes our world, leading me to explore 
                  <span className="text-primary"> programming</span> and <span className="text-secondary"> web development</span>.
                </p>
                <p>
                  I combine technical skills in Python and C++ with creative frontend development using React and Tailwind CSS 
                  to build immersive, data-driven web experiences.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Degree", value: "B.Tech Data Science" },
                { label: "Year", value: "1st Year (Freshman)" },
                { label: "University", value: "ADYPU x NIAT" },
                { label: "Location", value: "Pune, India" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-primary/50 transition-colors">
                  <h4 className="text-sm font-mono text-primary mb-2 uppercase tracking-wider">{item.label}</h4>
                  <p className="text-white font-display text-lg">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">MY <span className="text-secondary">SKILLS</span></h2>
            <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">FEATURED <span className="text-accent">PROJECTS</span></h2>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Insight Weaver Project */}
            <ProjectCard 
              title="Insight Weaver"
              description="Insight Weaver is an interactive web application I built to showcase my front-end development abilities and design sensibilities. The project demonstrates my skills in creating responsive, user-friendly websites with modern layouts and practical features. The site highlights key aspects of interactive UI and structured presentation of content, making it visually engaging and intuitive to navigate."
              tags={["Python", "HTML", "CSS", "JavaScript"]}
              /* Unsplash: interactive web application design */
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
              githubUrl="https://github.com/Aditya-Anarse/Portfolio-.git"
              liveUrl="https://insight-weaver-47453e6a.base44.app/"
              delay={0}
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">GET IN <span className="text-primary">TOUCH</span></h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-display font-bold">Let's Work Together</h3>
                <p className="text-muted-foreground text-lg">
                  I'm currently looking for internship opportunities in Data Science and Web Development.
                  Have a project in mind or just want to say hi? Drop me a message!
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:adityaanarase8@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                    <div className="text-lg font-medium text-white">adityaanarase8@gmail.com</div>
                  </div>
                </a>

                <a href="tel:7559319566" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group">
                  <div className="p-3 bg-secondary/20 rounded-lg text-secondary group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Phone</div>
                    <div className="text-lg font-medium text-white">+91 7559319566</div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/aditya-anarase-ba9a98361" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group">
                  <div className="p-3 bg-[#0077b5]/20 rounded-lg text-[#0077b5] group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</div>
                    <div className="text-lg font-medium text-white">Aditya Anarse</div>
                  </div>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © {new Date().getFullYear()} Aditya Anarse. Designed with <span className="text-red-500">♥</span> & React.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}
