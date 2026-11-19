import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../config/contact';
import './FloatingContact.css';

const FloatingContact = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside className="floating-actions-container" aria-label="Quick Contact & Social Dock">
      {/* WhatsApp Live Chat Button (Official WhatsApp Icon) */}
      <motion.a 
        href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to consult on my love/spiritual problem.")}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn floating-whatsapp-btn"
        aria-label="WhatsApp Master Arvind"
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="floating-pulse-ring"></span>
        <span className="floating-tooltip">
          Chat on WhatsApp
        </span>
        <div className="floating-icon-wrap">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#FFFFFF">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </div>
        <span className="floating-live-dot" title="Online 24/7"></span>
      </motion.a>

      {/* Direct Phone Call Button (Official Google Phone Dialer Icon) */}
      <motion.a 
        href={`tel:${CONTACT_INFO.phoneLink}`} 
        className="floating-btn floating-call-btn"
        aria-label={`Call Master Arvind at ${CONTACT_INFO.phoneDisplay}`}
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="floating-tooltip">
          Call: {CONTACT_INFO.phoneDisplay}
        </span>
        <div className="floating-icon-wrap animate-ring">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#FFFFFF">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
          </svg>
        </div>
      </motion.a>

      {/* Book Now Floating Button (Mobile Mode Only - Placed Above Location Pin) */}
      <motion.div
        className="floating-book-wrapper"
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          to="/book" 
          className="floating-btn floating-book-btn"
          aria-label="Book Private Session with Master Arvind"
        >
          <span className="floating-tooltip">
            Book Private Session
          </span>
          <div className="floating-icon-wrap">
            <CalendarCheck size={22} />
          </div>
        </Link>
      </motion.div>

      {/* Edmonton Sanctuary Location Pin (Official Google Maps 4-Color Pin Logo) */}
      <motion.div
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link 
          to="/location" 
          className="floating-btn floating-location-btn"
          aria-label="Edmonton Sanctuary Location"
        >
          <span className="floating-tooltip">
            Edmonton Sanctuary
          </span>
          <div className="floating-icon-wrap">
            <svg viewBox="0 0 92.3 132.3" width="24" height="32" fill="none">
              <path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z"/>
              <path fill="#EA4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z"/>
              <path fill="#4285F4" d="M46.2 28.5c9.8 0 17.7 7.9 17.7 17.7 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 27.5-32.7-5.6-10.8-15.3-19-27-22.7L32.6 34.8c3.3-3.8 8.1-6.3 13.6-6.3"/>
              <path fill="#FBBC04" d="M46.2 63.8c-9.8 0-17.7-7.9-17.7-17.7 0-4.3 1.5-8.3 4.1-11.3l-28 33.3c4.8 10.6 12.8 19.2 21 29.9l34.1-40.5c-3.3 3.9-8.1 6.3-13.5 6.3"/>
              <path fill="#34A853" d="M59.1 109.2c15.4-24.1 33.3-35 33.3-63 0-7.7-1.9-14.9-5.2-21.3L25.6 98c2.6 3.4 5.3 7.3 7.9 11.3 9.4 14.5 6.8 23.1 12.8 23.1s3.4-8.7 12.8-23.2"/>
            </svg>
          </div>
        </Link>
      </motion.div>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <motion.button 
          onClick={scrollToTop}
          className="floating-btn floating-scroll-top-btn"
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="floating-tooltip">
            Back to Top
          </span>
          <div className="floating-icon-wrap">
            <ArrowUp size={22} />
          </div>
        </motion.button>
      )}
    </aside>
  );
};

export default FloatingContact;
