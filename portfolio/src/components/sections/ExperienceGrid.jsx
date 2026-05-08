import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Cpu, CheckCircle2, Terminal } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, color, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl shadow-blue-500/5"
    >
      {/* Decorative Background Icon */}
      <div className="absolute -right-4 -top-4 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-10 transition-opacity">
        <Icon size={120} />
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color} shadow-lg shadow-current/20`}>
          <Icon size={28} className="text-white" />
        </div>
        <div>
          <h4 className="text-2xl font-black dark:text-white uppercase tracking-tighter">{title}</h4>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Systems Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group/item"
          >
            <CheckCircle2 size={14} className="text-blue-500 opacity-50 group-hover/item:opacity-100" />
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom Detail */}
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-[10px] font-mono text-slate-400">&lt;{title.toLowerCase()}&gt;</span>
        <Terminal size={14} className="text-slate-400" />
      </div>
    </motion.div>
  );
};

const ExperienceGrid = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#020617]" id="experience">
      {/* Technical Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <h2 className="text-blue-500 font-mono tracking-tighter text-sm mb-2 flex items-center gap-2 uppercase">
               <span className="w-8 h-[1px] bg-blue-500"></span> 02. Expertise
            </h2>
            <h3 className="text-5xl font-black dark:text-white uppercase italic tracking-tighter">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Arsenal</span>
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-right hidden md:block italic text-sm">
            "Software is a great combination between artistry and engineering."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard 
            title="Frontend" 
            icon={Globe} 
            color="bg-blue-600"
            delay={0.1}
            skills={["React.js", "JavaScript", "TailwindCSS", "Framer Motion", "HTML5", "CSS3"]} 
          />
          <SkillCard 
            title="Backend" 
            icon={Server} 
            color="bg-purple-600"
            delay={0.2}
            skills={["Node.js", "Express.js", "MongoDB", "REST APIs", "Mongoose", "Postman"]} 
          />
          <SkillCard 
            title="Languages" 
            icon={Cpu} 
            color="bg-emerald-600"
            delay={0.3}
            skills={["Java", "Python", "C Language", "SQL", "Git", "Vite"]} 
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;