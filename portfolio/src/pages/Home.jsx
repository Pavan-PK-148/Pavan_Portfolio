import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ExperienceGrid from '../components/sections/ExperienceGrid';
import Projects from '../components/sections/Projects';
import Timeline from '../components/sections/Timeline';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import Navbar from '../components/sections/Navbar';
import Certifications from '../components/sections/Certificates';

const Home = () => {
  return (
    <div className="bg-white dark:bg-[#020617] transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <ExperienceGrid />
      <Projects />
      <Certifications />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;