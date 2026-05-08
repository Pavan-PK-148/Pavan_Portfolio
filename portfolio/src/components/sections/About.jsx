import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Zap,
  ArrowUpRight,
  Globe,
  Layers,
  Fingerprint,
  ShieldCheck,
  Terminal,
  Award,
  Code2,
  Sparkles,
  Database,
  Cpu,
} from 'lucide-react';

const techStack = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind",
  "OpenAI",
  "JWT",
  "Framer",
];

const stats = [
  { value: "3+", label: "Full Stack Projects" },
  { value: "2+", label: "AI Integrated Systems" },
  { value: "20+", label: "Responsive Components" },
  { value: "1+", label: "Years Learning & Building" },
];

const timeline = [
  {
    year: "2025",
    role: "Frontend Intern",
    company: "ApexPlanet",
  },
  {
    year: "2025",
    role: "MERN Team Lead",
    company: "UptoSkills",
  },
  {
    year: "2026",
    role: "AI Full Stack Projects",
    company: "Personal Portfolio",
  },
];

const skills = [
  { name: "Backend Architecture", width: "92%" },
  { name: "API Security", width: "88%" },
  { name: "UI Engineering", width: "90%" },
  { name: "AI Integration", width: "86%" },
];

const About = () => {
  return (
    <section
      className="relative py-32 bg-white dark:bg-[#020617] overflow-hidden"
      id="about"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky top-24"
          >
            <div className="space-y-8">

              {/* Label */}
              <div className="flex items-center gap-4">
                <span className="w-12 h-[2px] bg-blue-500" />
                <p className="text-blue-500 uppercase tracking-[0.4em] text-xs font-black">
                  About Me
                </p>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-slate-900 dark:text-white">
                  Full Stack <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    Engineer
                  </span>
                </h2>

                <div className="flex flex-wrap gap-3 mt-6">
                  {[
                    "MERN STACK",
                    "AI INTEGRATION",
                    "TEAM LEAD",
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[11px] font-bold tracking-widest"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl">
                I specialize in building scalable full-stack applications with
                modern UI systems and AI-powered workflows. My focus lies in
                combining engineering precision with intuitive user experiences
                to create production-ready digital products.
              </p>

              {/* Identity */}
              <div className="flex items-center gap-5 pt-6">
                <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-xl">
                  <Fingerprint className="text-blue-500" size={28} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-black">
                    Identity
                  </p>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Pavan Kalyan Srinivas Robba
                  </h4>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-10">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-black mb-5">
                  Tech Ecosystem
                </p>

                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      whileHover={{ y: -4 }}
                      key={index}
                      className="px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">

            {/* Main Intro Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-2 p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 opacity-[0.03]">
                <Terminal size={220} />
              </div>

              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 rounded-3xl bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-500/20">
                  <Layers className="text-white" size={30} />
                </div>

                <ArrowUpRight className="text-slate-300" size={32} />
              </div>

              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
                Building Modern Digital Experiences
              </h3>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                Currently pursuing Computer Science Engineering at{" "}
                <span className="font-bold text-blue-500">
                  GITAM University
                </span>
                . I work extensively with the MERN ecosystem, developing
                scalable systems, AI-powered tools, and high-performance
                interfaces focused on usability and clean architecture.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-blue-600 text-white shadow-2xl shadow-blue-600/20 relative overflow-hidden"
            >
              <Briefcase
                className="absolute -right-8 -bottom-8 opacity-10"
                size={150}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs tracking-[0.3em] uppercase font-black">
                    Experience
                  </span>

                  <ShieldCheck size={28} />
                </div>

                <h4 className="text-3xl font-black leading-tight mb-4">
                  MERN Intern & Team Lead
                </h4>

                <p className="text-blue-100 leading-relaxed">
                  Led development workflows at UptoSkills while building secure
                  APIs, authentication systems, and scalable backend
                  architectures.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="text-yellow-500" />
                <h4 className="font-black uppercase tracking-widest text-sm dark:text-white">
                  Project Impact
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {stats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-black text-blue-500">
                      {item.value}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <Code2 className="text-emerald-500" size={28} />
                <h4 className="text-xl font-black dark:text-white">
                  Core Expertise
                </h4>
              </div>

              <div className="space-y-7">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>

                      <span className="text-sm font-bold text-blue-500">
                        {skill.width}
                      </span>
                    </div>

                    <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;