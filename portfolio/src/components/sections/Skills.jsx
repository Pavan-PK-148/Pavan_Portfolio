import React from 'react';
import { motion } from 'framer-motion';

const skills = ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion", "Git"];

const Skills = () => (
  <section className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">My Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={skill}
            className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 font-medium"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;