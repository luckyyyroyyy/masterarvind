import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import './FloatingContact.css';

const FloatingContact = () => {
  return (
    <aside className="floating-actions-container" aria-label="Quick Contact Options">
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

      {/* WhatsApp Live Chat Button */}
      <motion.a 
        href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to get guidance on my love/relationship problem.")}`}
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
    </aside>
  );
};

export default FloatingContact;
