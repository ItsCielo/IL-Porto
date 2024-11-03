import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  const smoothScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const headerOffset = 70;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement.offsetTop <= scrollY && sectionElement.offsetTop + sectionElement.offsetHeight > scrollY) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header>
        <nav>
          <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#projects" onClick={(e) => smoothScroll(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#skills" onClick={(e) => smoothScroll(e, 'skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </nav>
      </header>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;