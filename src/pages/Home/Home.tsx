// src/pages/Home/Home.tsx
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import TitleCard from '../../components/TitleCard/TitleCard';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <section id="home" className={styles.section}>
        <TitleCard />
      </section>
      <section id="about" className={styles.section}>
        <About />
      </section>
      <section id="projects" className={styles.section}>
        <Projects />
      </section>
      <section id="contact" className={styles.section}>
        <Contact />
      </section>
    </div>
  );
};

export default Home;