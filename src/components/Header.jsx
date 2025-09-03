import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Close menu when resizing to desktop view
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Close menu when clicking on nav links (for mobile)
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">Webby Chileshe</h1>

        {/* Mobile menu button with proper ARIA attributes */}
        {isMobile && (
          <button 
            className="menu-button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            <div className="menu-button__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        )}

        {/* Navigation menu */}
        <nav 
          className={`nav ${menuOpen ? 'show' : ''}`} 
          id="main-nav"
          aria-label="Main navigation">

          <Link to="/hero" className="nav__link">Home</Link>
          <Link to="/about" className="nav__link">About</Link>
          <Link to="/education" className="nav__link">Education</Link>
          <Link to="/projects" className="nav__link">Projects</Link>
          <Link to="/skills" className="nav__link">Skills</Link>
          <Link to="/cv" className="nav__link">CV</Link>
          <Link to="/contacts" className="nav__link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;