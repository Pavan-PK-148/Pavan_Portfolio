import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Award, CheckCircle, ShieldCheck, Cpu, Database, X, ZoomIn, FileText } from 'lucide-react';
import apex from '../../assets/apex.png';
import pythonai from '../../assets/python-ai.png';
import sql from '../../assets/sql.png';
import infosys from '../../assets/Infosys.png';
import kaggle from '../../assets/kaggle.png';
import uptoskills from '../../assets/uptoskills.png';
import uptoskills2 from '../../assets/uptoskills2.png';


const certifications = [
  {
    title: "MERN Stack Intern & Team Leader",
    issuer: "UptoSkills",
    date: "Dec 13, 2025 - Mar 13, 2026",
    description: "Successfully completed MERN Stack internship while demonstrating exceptional leadership as a Team Leader.",
    icon: <ShieldCheck className="text-blue-500" />,
    type: "Internship",
    image: uptoskills
  },
  {
    title: "Internship Experience Letter",
    issuer: "UptoSkills",
    date: "March 13, 2026",
    description: "Formal recognition of valuable contributions, analytical thinking, and professional growth during the internship period.",
    icon: <FileText className="text-indigo-500" />,
    type: "Letter",
    image: uptoskills2
  },
  {
    title: "Web Development Internship",
    issuer: "ApexPlanet Software Pvt. Ltd.",
    date: "Jun 11, 2025 - Jul 26, 2025",
    description: "Completed a virtual internship in Web Development focusing on HTML, CSS, and JavaScript.",
    icon: <ExternalLink className="text-emerald-500" />,
    type: "Internship",
    image: apex 
  },
  {
    title: "Programming Fundamentals using Python",
    issuer: "Infosys Springboard",
    date: "April 6, 2026",
    description: "Awarded for completing 'Programming Fundamentals using Python - Part 1'.",
    icon: <Cpu className="text-orange-500" />,
    type: "Course",
    image: infosys
  },
  {
    title: "Python Using AI Workshop",
    issuer: "AI For Techies",
    date: "May 11, 2025",
    description: "Mastered Python debugging and visualization using AI tools.",
    icon: <Award className="text-blue-400" />,
    type: "Workshop",
    image: pythonai
  },
  {
    title: "Intro to Programming",
    issuer: "Kaggle",
    date: "Dec 9, 2025",
    description: "Successfully completed the fundamental programming course on Kaggle Learn.",
    icon: <CheckCircle className="text-cyan-500" />,
    type: "Course",
    image: kaggle
  }
];

const CertificationCard = ({ cert, index, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    onClick={() => onOpen(cert)}
    className="group relative p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all shadow-2xl cursor-pointer"
  >
    <div className="flex items-start justify-between mb-6">
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 group-hover:bg-blue-600 transition-all duration-300">
        {React.cloneElement(cert.icon, { size: 24, className: "group-hover:text-white transition-colors" })}
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
          {cert.type}
        </span>
        <ZoomIn size={16} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>

    <h4 className="text-2xl font-black dark:text-white mb-2 group-hover:text-blue-500 transition-colors italic uppercase tracking-tighter leading-tight">
      {cert.title}
    </h4>
    <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
      {cert.issuer}
    </p>
    <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
      {cert.description}
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
      <span className="text-xs font-mono text-slate-400 font-bold uppercase">{cert.date}</span>
      <ExternalLink size={18} className="text-blue-500" />
    </div>
  </motion.div>
);

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-32 max-w-7xl mx-auto px-6 relative" id="certifications">
      <div className="mb-20">
        <h2 className="text-blue-500 font-mono tracking-tighter text-sm mb-3 flex items-center gap-3 uppercase">
          <span className="w-10 h-[2px] bg-blue-500"></span> 06. Credentials
        </h2>
        <h3 className="text-5xl md:text-8xl font-black dark:text-white uppercase tracking-tighter italic">
          Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Achievements</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} index={index} onOpen={setSelectedCert} />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-red-500 hover:text-white transition-all z-10"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Certificate Image */}
                <div className="md:w-2/3 bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-8">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-h-[70vh] w-auto rounded-xl shadow-lg border border-slate-200 dark:border-slate-700" 
                  />
                </div>

                {/* Details Side */}
                <div className="md:w-1/3 p-10 flex flex-col justify-center">
                  <h4 className="text-3xl font-black dark:text-white uppercase italic tracking-tighter mb-4">
                    {selectedCert.title}
                  </h4>
                  <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-6">
                    {selectedCert.issuer}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {selectedCert.description}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase">Issued: {selectedCert.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;