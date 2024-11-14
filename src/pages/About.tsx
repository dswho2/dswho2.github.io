// src/pages/About.tsx
import React from 'react';

const About = () => {
  console.log("About section rendered");
  return (
    <div className="max-w-lg">
      <h2 className="text-3xl font-semibold text-white mb-6">About Me</h2>
      <p className='text-gray-300'>
Hi! I’m a software engineer with a background in computational physics and computer science from the University of Illinois at Urbana-Champaign (UIUC). I specialize in machine learning, web development, and building practical solutions to complex problems. I’m passionate about exploring new technologies and continuously expanding my skill set. Feel free to browse this website to learn more about my work, experiences, and projects.
      </p>
    </div>
  );
};

export default About;