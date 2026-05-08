import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, ShoppingCart, Code2, Terminal, Globe, Layers } from 'lucide-react';
import ai from "../../assets/AI-Resume.png";
import com from "../../assets/commerce.png";
import cashew from "../../assets/cashew.png";
import media from "../../assets/media.png";
import driver from "../../assets/driver.png";

const projects = [
  {
    title: "AI-Resume-Builder",
    description: "Architected a high-performance MERN platform that leverages AI for real-time resume optimization. Features include multi-format exports and dynamic template injection.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI API", "Tailwind"],
    image: ai,
    github: "https://github.com/Pavan-PK-148/AI-Resume-Builder",
    live: "https://ai-resume-builder148.netlify.app/",
    accent: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "CashewCart E-Commerce",
    description: "A robust scalable commerce engine with secure Redux state management, JWT authentication, and a custom-built admin inventory dashboard.",
    tech: ["React", "Redux", "Express", "Mongoose", "Stripe"],
    image: cashew,
    github: "https://github.com/Pavan-PK-148/CashewKart---MERN-Application",
    live: "https://cashewkart148.netlify.app/",
    accent: "from-blue-500/20 to-emerald-500/20"
  },
  {
    title: "Dynamic E-commerce UI",
    description: "Focused on frontend excellence, this project implements complex filtering logic and highly responsive shopping interactions with zero-latency updates.",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    image: com,
    github: "https://github.com/Pavan-PK-148/Ecommerce-js",
    live: "https://pavan-ecommerce-sit.netlify.app/",
    accent: "from-emerald-500/20 to-blue-500/20"
  },
  {
  title: "Social Media Platform",
  description: "A feature-rich social ecosystem featuring secure Clerk authentication, real-time feed updates, and seamless user interaction layers for a modern community experience.",
  tech: ["React", "Clerk Auth", "Tailwind CSS", "Lucide React"],
  image: media,
  github: "https://github.com/Pavan-PK-148/React-Social-Media",
  live: "https://social-mediaplatform.netlify.app/",
  accent: "from-blue-500/20 to-indigo-500/20"
},
{
  title: "AI Driver Monitoring System",
  description: "A real-time safety solution using YOLOv8 for precise facial landmark tracking. It detects microsleep and yawning patterns to provide instant driver alerts, significantly reducing road fatigue risks.",
  tech: ["YOLOv5", "Python", "OpenCV", "PyTorch"],
  image: driver,
  github: "https://github.com/Pavan-PK-148/Driver_Drowsiness_Detection_YOLO",
  live: "#",
  accent: "from-orange-500/20 to-rose-500/20"
},
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-32 group`}
    >
      {/* 1. The Interactive Browser Mockup */}
      <div className="relative flex-1 w-full">
        <motion.div 
          whileHover={{ y: -10, rotateX: 2, rotateY: isEven ? 5 : -5 }}
          className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-2xl transition-all duration-500"
        >
          {/* Browser Header */}
          <div className="h-8 bg-slate-200 dark:bg-slate-800 flex items-center px-4 gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            <div className="mx-auto bg-slate-300 dark:bg-slate-700 h-4 w-1/2 rounded-md flex items-center justify-center">
                <span className="text-[8px] font-mono text-slate-500 dark:text-slate-400">https://{project.title.toLowerCase()}.dev</span>
            </div>
          </div>
          {/* Project Image */}
          <div className="aspect-video overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
            />
          </div>
        </motion.div>
        
        {/* Abstract Background Glow */}
        <div className={`absolute -inset-4 bg-gradient-to-tr ${project.accent} blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      </div>

      {/* 2. Project Details */}
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-3">
          <Terminal className="text-blue-500" size={20} />
          <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Project_0{index + 1}</span>
        </div>
        
        <h4 className="text-4xl font-black dark:text-white uppercase tracking-tighter">
          {project.title}
        </h4>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic">
          "{project.description}"
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.github} 
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-bold shadow-xl transition-all"
          >
            <Github size={18} /> Source Code
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.live} 
            className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all dark:text-white"
          >
            <Globe size={18} /> Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6" id="projects">
      <div className="mb-12">
        <h2 className="text-blue-500 font-mono tracking-tighter text-sm mb-2 flex items-center gap-2 uppercase">
           <span className="w-8 h-[1px] bg-blue-500"></span> 03. Engineering
        </h2>
        <h3 className="text-5xl md:text-7xl font-black dark:text-white uppercase tracking-tighter italic">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Digital</span> Products
        </h3>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;