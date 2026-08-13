import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Location', path: '/location' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Star className="logo-icon text-gold" size={28} />
          <span className="logo-text">
            {CONTACT_INFO.name.split(' ')[0]} <span className="text-gold">{CONTACT_INFO.name.split(' ').slice(1).join(' ')}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <Link to="/book" className="btn-primary desktop-btn">
            Book Appointment
          </Link>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Link 
              to="/book" 
              className="btn-primary mobile-book-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
