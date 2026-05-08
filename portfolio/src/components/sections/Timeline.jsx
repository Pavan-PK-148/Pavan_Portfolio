import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Star } from 'lucide-react';

const TimelineItem = ({ data, index }) => {
  const isEven = index % 2 === 0;
  const itemRef = useRef(null);

  const { scrollYProgress: itemProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center", "end start"]
  });

  // Scale and Opacity effects for a premium feel
  const scale = useTransform(itemProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(itemProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <div ref={itemRef} className={`relative flex items-center justify-between w-full mb-16 md:mb-24 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      
      {/* 1. The Content Card */}
      <motion.div 
        style={{ scale, opacity }}
        className="w-full md:w-[42%] ml-12 md:ml-0" // Margin-left on mobile to clear the side-line
      >
        <div className="relative p-6 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-500 hover:border-blue-500/50 group">
          
          {/* Decorative Corner Icon (Desktop Only) */}
          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hidden md:flex items-center justify-center border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
             <Star size={14} className="text-blue-500 fill-blue-500" />
          </div>

          <div className="flex items-center gap-3 text-blue-500 mb-4">
            <Calendar size={18} className="group-hover:animate-bounce" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">{data.date}</span>
          </div>

          <h4 className="text-2xl md:text-3xl font-black dark:text-white mb-2 uppercase tracking-tighter italic">
            {data.title}
          </h4>
          
          <p className="text-base md:text-lg font-bold text-blue-600 dark:text-blue-400 mb-5 opacity-80 uppercase tracking-wider">
            {data.subtitle}
          </p>
          
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            {data.description}
          </p>

          {data.gpa && (
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-slate-200 dark:bg-slate-800" />
              <div className="px-4 py-1.5 rounded-xl bg-blue-500/10 text-xs font-black text-blue-500 uppercase tracking-widest">
                Score: {data.gpa}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* 2. The Center/Side Node */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
        <motion.div 
          style={{ scale: itemProgress }}
          className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-slate-900 dark:bg-white flex items-center justify-center border-4 border-white dark:border-[#020617] shadow-xl group-hover:rotate-12 transition-transform"
        >
          {data.type === 'edu' ? (
            <GraduationCap size={24} className="text-white dark:text-slate-900" />
          ) : (
            <Briefcase size={24} className="text-white dark:text-slate-900" />
          )}
        </motion.div>
        
        {/* Connection line pulse dot */}
        <div className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
      </div>

      {/* 3. Empty Spacer (Desktop Only) */}
      <div className="hidden md:block w-[42%]" />
    </div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timelineData = [
    {
      date: "2023 - 2027",
      title: "B.Tech in CSE",
      subtitle: "GITAM University",
      description: "Specializing in Full-Stack ecosystems and cloud-native AI applications.",
      gpa: "8.5 GPA",
      type: "edu"
    },
    {
      date: "Dec 2025 - Mar 2026",
      title: "MERN Stack Intern",
      subtitle: "UptoSkills",
      description: "Optimized server-side logic and architected scalable database schemas.",
      type: "work"
    },
    {
      date: "Jun 2025 - Jul 2025",
      title: "Frontend Intern",
      subtitle: "ApexPlanet",
      description: "Crafted high-fidelity React components with a focus on core web vitals.",
      type: "work"
    },
    {
      date: "2021 - 2023",
      title: "Intermediate (MPC)",
      subtitle: "Sri Chaitanya Junior College",
      description: "Rigorous focus on logical reasoning and mathematical foundations.",
      gpa: "8.6 GPA",
      type: "edu"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 max-w-7xl mx-auto px-6 relative overflow-hidden" id="experience">
      <div className="mb-16 md:mb-24">
        <h2 className="text-blue-500 font-mono tracking-tighter text-sm mb-3 flex items-center gap-3 uppercase">
           <span className="w-10 h-[2px] bg-blue-500"></span> 04. Timeline
        </h2>
        <h3 className="text-5xl md:text-8xl font-black dark:text-white uppercase tracking-tighter italic">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Evolution</span>
        </h3>
      </div>

      <div className="relative">
        {/* The SVG Line - Moves from center (Desktop) to side (Mobile) */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] md:w-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
                style={{ scaleY: pathLength }}
                className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 origin-top"
            />
        </div>

        <div className="relative z-10">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;