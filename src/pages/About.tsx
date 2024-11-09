// src/pages/About.tsx
import React from 'react';

const About = () => {
  console.log("About section rendered");
  return (
    <div className="max-w-lg">
      <h2 className="text-3xl font-semibold text-white mb-6">About Me</h2>
      <p className='text-gray-300'>I studied computational physics with a minor in computer science at UIUC.<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

export default About;