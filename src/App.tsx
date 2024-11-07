// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TitleCard from './components/TitleCard/TitleCard';
import About from './pages/About/About';  // Import About
import Projects from './pages/Projects/Projects';  // Import Projects
import Contact from './pages/Contact/Contact';  // Import Contact
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <TitleCard />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;

