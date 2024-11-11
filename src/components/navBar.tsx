import React, { useState, useEffect, RefObject } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  scrollContainerRef: RefObject<HTMLDivElement>;
}

const Navbar = ({ scrollContainerRef }: NavbarProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

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
 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      // When opening, set blur immediately
      setIsBlurred(true);
      // Then open menu
      setTimeout(() => setIsMenuOpen(true), 50);
    } else {
      // When closing, close menu first
      setIsMenuOpen(false);
      // Remove blur after menu closes
      setTimeout(() => setIsBlurred(false), 500);
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section && scrollContainerRef.current) {
      const topPos = section.offsetTop;
      scrollContainerRef.current.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
      handleMenuToggle(); // Use the new toggle function instead
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block">
        <div className="flex flex-col gap-6">
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
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={handleMenuToggle}
        className="lg:hidden fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300"
      >
        <div className="relative w-6 h-6">
          <Menu className={`absolute inset-0 w-6 h-6 text-white transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`} />
          <X className={`absolute inset-0 w-6 h-6 text-white transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
          }`} />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 ${
          isBlurred || isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop with separate transitions for blur and opacity */}
        <div 
          className={`absolute inset-0 bg-black/60 transition-[opacity] duration-300 
            ${isBlurred ? 'backdrop-blur-sm' : 'backdrop-blur-none'}
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
        />

        {/* Menu Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-64 bg-gray-900/95 backdrop-blur-md transform 
            transition-transform duration-500 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="pt-20 px-6">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;