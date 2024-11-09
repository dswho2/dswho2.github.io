// src/components/navBar.tsx
import React, { useState, useEffect, RefObject } from 'react';

interface NavbarProps {
  scrollContainerRef: RefObject<HTMLDivElement>;
}

const Navbar = ({ scrollContainerRef }: NavbarProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Update active section based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
  
    const handleScroll = () => {
      if (container) {
        const sections = ['home', 'about', 'experience', 'projects', 'contact'];
        const offsets = sections.map(id => {
          const section = document.getElementById(id);
          return section ? section.offsetTop : 0;
        });
  
        const scrollTop = container.scrollTop;
        const activeIndex = offsets.findIndex((offset, index) => {
          return scrollTop >= offset && scrollTop < (offsets[index + 1] || Infinity);
        });
  
        setActiveSection(sections[activeIndex] || 'home');
      }
    };
  
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
  
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollContainerRef]);
  

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section && scrollContainerRef.current) {
      const topPos = section.offsetTop;
      scrollContainerRef.current.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="flex flex-col gap-6">
      {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item.toLowerCase())}
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
          className="text-left flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
        >
          <span
            className={`h-px transition-all duration-300 ${
              hoveredItem === item || activeSection === item.toLowerCase()
                ? 'w-16 bg-[#1ABC9C]'
                : 'w-8 bg-gray-400'
            }`}
          />
          <span
            className={`text-lg ${
              activeSection === item.toLowerCase() ? 'text-[#1ABC9C]' : ''
            }`}
          >
            {item}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
