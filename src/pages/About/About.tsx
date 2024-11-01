// src/pages/About/About.tsx
import React from 'react';

const About = () => {
  console.log("About section rendered");
  return (
    <div className="p-5" style={{ backgroundColor: '#e0e0e0' }}> {/* Padding and background color */}
      <h2 className="text-2xl font-bold mb-2">About Me</h2> {/* Text size and margin */}
      <p>This is the about section content.</p>
    </div>
  );
};

export default About;