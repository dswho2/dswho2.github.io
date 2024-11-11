import React, { useRef } from 'react';
import Navbar from './components/navBar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-screen w-screen bg-gradient-to-tr from-[#031221] to-[#19395c] overflow-hidden">
      {/* Main scrollable container */}
      <div ref={scrollContainerRef} className="flex flex-col lg:flex-row h-full w-full overflow-y-auto">
        
        {/* Left side with conditional sticky positioning */}
        <div className="w-full lg:w-[50%] lg:sticky top-0 h-screen flex items-center justify-center px-10 text-white relative">
          <div className="pt-10 lg:pt-0"> {/* Add padding above name for small screens */}
            <h1 className="text-5xl font-bold mb-4">David Ho</h1>
            <p className="text-xl text-gray-300 mb-16">Software Engineer</p>
            
            {/* Pass scrollContainerRef to Navbar */}
            <Navbar scrollContainerRef={scrollContainerRef} />
          </div>
        </div>

        {/* Right side scrollable content */}
        <div className="w-full lg:w-[50%] px-6 lg:px-16 space-y-10">
          <section id="home" className="h-screen flex items-center">
            <Home />
          </section>
          <section id="about" className="flex items-center py-10">
            <About />
          </section>
          <section id="experience" className="flex items-center py-10">
            <Experience />
          </section>
          <section id="projects" className="flex items-center py-10">
            <Projects />
          </section>
          <section id="contact" className="h-screen flex items-center pb-10">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
