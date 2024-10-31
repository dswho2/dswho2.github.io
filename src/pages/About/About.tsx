// src/pages/About/About.tsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  
  console.log("About section rendered");
  return (
    <div className={styles.about}>
      <h2>About Me</h2>
      <p>This is the about section content.</p>
    </div>
  );
};

export default About;
