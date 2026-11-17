import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react';
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
      {/* WhatsApp Live Chat Button */}
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
          <MessageCircle size={24} />
        </div>
        <span className="floating-live-dot" title="Online 24/7"></span>
      </motion.a>

      {/* Direct Phone Call Button */}
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
          <Phone size={22} />
        </div>
      </motion.a>

      {/* Edmonton Sanctuary Location Pin */}
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
            <MapPin size={22} />
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
