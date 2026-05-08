import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className="fixed top-0 left-0 w-full z-[100] h-24 border-b border-white/10 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl flex items-center shadow-lg"
>
  <div className="w-full px-6 md:px-12 flex items-center justify-between">
    
    <div className="text-2xl md:text-3xl font-black tracking-tighter dark:text-white shrink-0">
      PORTFOLIO<span className="text-blue-600">.</span>
    </div>

    {/* Navigation Links - Pushed to the absolute right */}
    <div className="flex items-center gap-10">
  <ul className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-500">
    <li>
      <a href="#about" className="hover:text-blue-500 transition-colors cursor-pointer">
        About
      </a>
    </li>
    <li>
      <a href="#experience" className="hover:text-blue-500 transition-colors cursor-pointer">
        Experience
      </a>
    </li>
    <li>
      <a href="#projects" className="hover:text-blue-500 transition-colors cursor-pointer">
        Projects
      </a>
    </li>
  </ul>
  
  {/* Contact Button */}
  <a href="#contact">
    <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95 cursor-pointer">
      Contact
    </button>
  </a>
</div>

  </div>
</motion.nav>
  );
};

export default Navbar;