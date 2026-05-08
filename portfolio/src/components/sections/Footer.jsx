import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center">
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
        © 2026 <span className="text-blue-500">Pavan Kalyan Srinivas Robba</span>. All rights reserved.
      </p>
      <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">
        Built with React • Tailwind v4 • Framer Motion
      </p>
    </footer>
  );
};

export default Footer;