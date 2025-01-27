import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';
import WorkJourney from './components/WorkJourney';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <WorkJourney/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
