// src/components/Navbar/Navbar.tsx
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#home" className={styles.navLink}>Home</a>
      <a href="#about" className={styles.navLink}>About</a>
      <a href="#projects" className={styles.navLink}>Projects</a>
      <a href="#contact" className={styles.navLink}>Contact</a>
    </nav>
  );
};

export default Navbar;