import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Cursor from './components/Cursor';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>

      <Cursor />
      <Header />
      {/* Gradient Background only for Hero and About sections */}
      <div className='relative'>
        <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className='container mx-auto px-10 pt-24 md:pt-20'>
          <Hero />
          <AboutMe />
        </div>
      </div>

      
      <div className='container mx-auto px-10 pt-10 bg-neutral-950'>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
