import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import './FloatingContact.css';

const FloatingContact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8 // Wait for initial page load animations
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.5 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div 
      className="floating-contact-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Email Button */}
      <motion.a 
        href={`mailto:${CONTACT_INFO.email}`} 
        className="floating-btn email"
        variants={itemVariants}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Email Us"
      >
        <Mail size={24} />
        <span className="tooltip">Email Us</span>
      </motion.a>

      {/* Call Button */}
      <motion.a 
        href={`tel:${CONTACT_INFO.phoneLink}`} 
        className="floating-btn call"
        variants={itemVariants}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Call Us"
      >
        <Phone size={24} />
        <span className="tooltip">Call Now</span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a 
        href={`https://wa.me/${CONTACT_INFO.whatsappLink}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp"
        variants={itemVariants}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="tooltip">WhatsApp Us</span>
      </motion.a>
    </motion.div>
  );
};

export default FloatingContact;
