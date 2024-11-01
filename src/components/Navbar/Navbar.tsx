// src/components/Navbar/Navbar.tsx
import React from 'react';

const Navbar = () => {
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
      <a
        href={href}
        className="text-white no-underline mx-4 relative group transition-colors duration-300"
      >
        <span className="relative z-10 group-hover:text-[#ff5733] transition-colors duration-300">
          {children}
        </span>
        <span className="block h-0.5 w-0 bg-[#ff5733] transition-all duration-300 group-hover:w-full absolute left-1/2 -translate-x-1/2 bottom-0"></span>
      </a>
    );
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 text-white flex justify-center py-2 z-10">
      <div className="relative">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
