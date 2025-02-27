import React from 'react';
import pfp from '../images/pfp.png';
import { FileDown } from 'lucide-react';

// Create a component that includes the animation style
const AnimationStyle = () => (
  <style>
    {`
      @keyframes circle-border {
        0% { transform: rotate(0deg) translateX(55px) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(55px) rotate(-360deg); }
      }
      
      .circling-light {
        animation: circle-border 3s linear infinite;
      }
    `}
  </style>
);

const Home = () => {
  return (
    <div className="flex justify-center lg:justify-start w-full">
      <div className="flex flex-col items-center">
        {/* Add the animation style component */}
        <AnimationStyle />
        
        <div className="max-w-md w-auto rounded-3xl overflow-hidden shadow-2xl">
          {/* <TitleCard /> */}
          <img
            src={pfp}
            alt="pfp"
            className="w-full h-auto object-cover"
          /> 
        </div>
        <a
          href="/David_Ho.pdf"
          download
          className="group relative flex items-center justify-center mt-4 px-6 py-3 overflow-hidden font-medium rounded-lg text-gray-300 border border-gray-500/30 bg-transparent backdrop-blur-sm transition-all duration-300 hover:shadow-lg active:scale-95 active:shadow-inner"
        >
          {/* Ripple animation on hover */}
          <span className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          
          {/* Pulse rings on hover */}
          <span className="absolute inset-0 scale-0 rounded-lg border border-cyan-700/50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700"></span>
          <span className="absolute inset-0 scale-0 rounded-lg border border-cyan-700/30 opacity-0 group-hover:scale-110 group-hover:opacity-75 transition-all duration-1000 delay-100"></span>
          
          {/* Circling light effect using the class name */}
          <span className="circling-light absolute w-8 h-8 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full blur-md transition-opacity duration-300"></span>
          
          {/* Flash effect on click */}
          <span className="absolute inset-0 bg-cyan-800/20 opacity-0 group-active:opacity-100 transition-opacity duration-150"></span>
          
          {/* Button content */}
          <span className="relative flex items-center z-10 transition-transform duration-300 group-hover:translate-y-px group-active:translate-y-1">
            <FileDown className="mr-2 transition-all duration-300 group-hover:text-cyan-400" size={20} />
            <span className="tracking-wider group-hover:text-cyan-400 transition-colors duration-300">Download Resume</span>
          </span>
          
          {/* Bottom line reveal */}
          <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-cyan-700/50 to-transparent group-hover:w-full transition-all duration-500"></span>
        </a>
      </div>
    </div>
  );
};

export default Home;