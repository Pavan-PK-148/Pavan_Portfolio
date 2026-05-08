import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
import me from "../../assets/profile.png";
import { Navigate } from 'react-router-dom';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="relative min-h-screen flex items-center justify-center px-6 pt-14 lg:pt-20 overflow-hidden bg-white dark:bg-[#020617]"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            Full Stack Developer
          </motion.div>

          {/* Full Name - Scaled to never cut */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] dark:text-white mb-8 tracking-tighter"
          >
            PAVAN KALYAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              SRINIVAS ROBBA
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl text-lg text-slate-500 dark:text-slate-400 mb-10 leading-relaxed mx-auto lg:mx-0"
          >
            Currently pursuing B.Tech at <span className="text-blue-600 dark:text-blue-400 font-bold">GITAM University</span>. 
            I architect high-performance MERN applications with a focus on AI integration.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5 justify-center lg:justify-start"
          >
            <button 
  onClick={() => {
    const section = document.querySelector('#projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }} 
  className="group px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-bold flex items-center gap-3 hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/40 cursor-pointer"
>
  View Projects 
  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
</button>
            <div className="flex items-center gap-6">
  {/* GitHub Link */}
  <a 
    href="https://github.com/Pavan-PK-148" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group"
  >
    <Github 
      size={28} 
      className="text-slate-400 group-hover:text-blue-500 transition-colors cursor-pointer" 
    />
  </a>

  {/* LinkedIn Link */}
  <a 
    href="https://www.linkedin.com/in/pavan-kalyan-robba-723b43347" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group"
  >
    <Linkedin 
      size={28} 
      className="text-slate-400 group-hover:text-blue-500 transition-colors cursor-pointer" 
    />
  </a>
</div>
          </motion.div>
        </div>

        {/* 3D Image Card - Preserves Proportions */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[400px] aspect-[4/5] rounded-[3rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-3 shadow-2xl"
        >
          <div 
            style={{ transform: "translateZ(50px)" }}
            className="relative h-full w-full rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-slate-800"
          >
            <img 
              src={me} 
              className="w-full h-full object-cover object-top" 
              alt="Pavan Kalyan" 
            />
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;