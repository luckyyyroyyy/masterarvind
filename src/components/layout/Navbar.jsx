import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Heart, Sparkles, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Love Services', path: '/services' },
    { name: 'Locations', path: '/location' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Urgent Help Bar */}
      <div className="navbar-top-bar">
        <div className="navbar-top-container">
          <div className="top-bar-left">
            <span className="live-pulse-dot"></span>
            <span className="top-bar-tag">
              <Heart size={13} className="text-love inline-icon" fill="currentColor" /> Love & Relationship Crisis? Urgent Spiritual Help Available 24/7
            </span>
            <span className="top-bar-location">
              <MapPin size={12} className="text-gold inline-icon" /> {CONTACT_INFO.shortAddress}, Canada
            </span>
          </div>
          <div className="top-bar-right">
            <a href={`tel:${CONTACT_INFO.phoneLink}`} className="top-call-link">
              <Phone size={13} className="animate-ring" />
              <span>Call Direct: <strong>{CONTACT_INFO.phoneDisplay}</strong></span>
            </a>
            <span className="top-divider">|</span>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I need urgent guidance with my relationship/love problem.")}`} 
              target="_blank" 
              rel="noreferrer" 
              className="top-wa-link"
            >
              <MessageCircle size={13} />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar-main">
        <div className="navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="brand-symbol">
              <div className="symbol-outer-ring"></div>
              <Sparkles className="symbol-icon" size={20} />
            </div>
            <div className="brand-text-group">
              <span className="brand-name">
                MASTER <span className="brand-gold">ARVIND</span>
              </span>
              <span className="brand-sub">Love Astrologer & Spiritualist • Edmonton</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="desktop-nav-wrap">
            <ul className="nav-menu">
              {navLinks.map((link) => (
                <li key={link.name} className="nav-item">
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="navbar-actions">
            <a 
              href={`tel:${CONTACT_INFO.phoneLink}`} 
              className="nav-action-phone" 
              title="Call Master Arvind Now"
            >
              <div className="phone-pulse-badge">
                <Phone size={18} className="animate-ring" />
              </div>
              <div className="phone-text-block">
                <span className="phone-label">Direct Hotline</span>
                <span className="phone-number">{CONTACT_INFO.phoneDisplay}</span>
              </div>
            </a>

            <Link to="/book" className="btn-primary nav-book-btn">
              <span>Book Session</span>
            </Link>

            <button 
              className="mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="brand-text-group">
              <span className="brand-name">MASTER <span className="brand-gold">ARVIND</span></span>
              <span className="brand-sub">Edmonton, Alberta • Love & Relationship Expert</span>
            </div>
          </div>

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
          </ul>

          <div className="mobile-drawer-actions">
            <a 
              href={`tel:${CONTACT_INFO.phoneLink}`} 
              className="btn-primary mobile-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={18} />
              <span>Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to book a relationship consultation.")}`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp mobile-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>

            <Link 
              to="/book" 
              className="btn-gold mobile-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Book Confidential Session</span>
            </Link>

            <div className="mobile-address-note">
              <MapPin size={15} className="text-gold" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
