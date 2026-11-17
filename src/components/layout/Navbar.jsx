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
            <div className="top-social-group">
              <span className="top-social-label">Follow Us:</span>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="top-social-icon icon-facebook"
                title="Follow Master Arvind on Facebook"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="top-social-icon icon-instagram"
                title="Follow Master Arvind on Instagram"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to book a private consultation.")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="top-social-icon icon-whatsapp"
                title="Chat with Master Arvind on WhatsApp"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="top-social-icon icon-youtube"
                title="Watch Master Arvind on YouTube"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
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
