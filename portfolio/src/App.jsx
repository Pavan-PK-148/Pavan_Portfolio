import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import ExperienceGrid from './components/sections/ExperienceGrid';
import About from './components/sections/About';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
  const html = document.documentElement;
  if (darkMode) {
    html.classList.add('dark');
    html.style.colorScheme = 'dark';
  } else {
    html.classList.remove('dark');
    html.style.colorScheme = 'light';
  }
}, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-500">
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#020617]/70">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="text-xl font-bold">PORTFOLIO<span className="text-blue-600">.</span></div>
            
            <button 
              onClick={() => setDarkMode(!darkMode)} // This must toggle the state
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all hover:scale-110 active:scale-95"
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;