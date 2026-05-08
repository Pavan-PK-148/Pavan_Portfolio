import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast'; // Import Toast

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Using toast.promise for a high-end feel
    const sendPromise = emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.promise(sendPromise, {
      loading: 'Launching your message...',
      success: () => {
        setIsSending(false);
        e.target.reset();
        return 'Message sent successfully! 🚀';
      },
      error: () => {
        setIsSending(false);
        return 'Failed to send. Please try again later.';
      },
    }, {
      // Custom styling for the toast to match your theme
      style: {
        borderRadius: '15px',
        background: '#0f172a',
        color: '#fff',
        border: '1px solid #1e293b',
        fontFamily: 'inherit',
        fontWeight: 'bold',
      },
      success: {
        duration: 5000,
        iconTheme: {
          primary: '#2563eb', // Matches your blue-600
          secondary: '#fff',
        },
      },
    });
  };

  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      {/* Toast Container */}
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-500 font-mono tracking-tighter text-sm mb-2 flex items-center gap-2 uppercase">
              <span className="w-8 h-[1px] bg-blue-500"></span> 05. Connectivity
            </h2>
            <h3 className="text-5xl md:text-7xl font-black dark:text-white uppercase tracking-tighter italic">
              Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Conversation</span>
            </h3>
          </motion.div>
          <p className="text-slate-500 dark:text-slate-400 max-w-xs text-right hidden md:block text-sm font-medium italic">
            "Every great system starts with a single connection."
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side: Professional Bio & Info */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-10 rounded-[3rem] bg-slate-900 border border-slate-800 relative overflow-hidden group shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <Sparkles className="text-blue-400" size={20} />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase italic tracking-tighter">Quick Links</h4>
                </div>
                
                <div className="space-y-8">
                  <a href="mailto:pavanrobba148@gmail.com" className="group/item flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover/item:bg-blue-600 transition-all duration-500">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Write me</p>
                      <p className="text-white font-bold group-hover/item:text-blue-400 transition-colors">pavanrobba148@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Current College</p>
                      <p className="text-white font-bold">GITAM University, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-white/5 flex gap-4">
                  <motion.a 
                    whileHover={{ y: -5 }} 
                    href="https://www.linkedin.com/in/pavan-kalyan-robba-723b43347" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 text-white hover:text-blue-500 transition-colors border border-white/5"
                  >
                    <Linkedin size={24} />
                  </motion.a>

                  <motion.a 
                    whileHover={{ y: -5 }} 
                    href="https://github.com/Pavan-PK-148" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 text-white hover:text-blue-500 transition-colors border border-white/5"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
              </div>
              
              {/* Decorative Blur */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition-colors" />
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-10 rounded-[3.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-500/5"
          >
            <div className="flex items-center gap-3 mb-10">
              <MessageSquare className="text-blue-600" size={24} />
              <h4 className="text-2xl font-black dark:text-white uppercase tracking-tighter italic">Direct Message</h4>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Identification</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    className="w-full px-6 py-5 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-4 ring-blue-500/10 outline-none transition-all dark:text-white font-medium"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Response Path</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    className="w-full px-6 py-5 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-4 ring-blue-500/10 outline-none transition-all dark:text-white font-medium"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest">Query / Inquiry</label>
                <textarea 
                  rows="4" 
                  name="message"
                  required
                  className="w-full px-6 py-5 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-4 ring-blue-500/10 outline-none transition-all dark:text-white font-medium"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <motion.button 
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group w-full py-6 ${isSending ? 'bg-slate-500' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-[1.5rem] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-500/30`}
              >
                {isSending ? 'Launching...' : 'Launch Message'} 
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;