import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Navigation, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import { homeFaqs } from '../../data/homeContent';
import { fadeUp, viewportOnce } from './motion';

export const SanctuaryFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section 
      className="hm-section hm-faq-section"
      aria-labelledby="faq-section-title"
    >
      <div className="hm-container">
        
        {/* Section Header */}
        <motion.div 
          className="hm-section-header hm-text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="hm-eyebrow">Clear Questions &middot; Edmonton Sanctuary</span>
          <h2 id="faq-section-title" className="hm-section-title">
            The Sanctuary &amp; Frequently Asked Questions
          </h2>
          <p className="hm-section-lede">
            Honest answers regarding consultation privacy, appointments, fees, and visits to our Edmonton sanctuary.
          </p>
        </motion.div>

        {/* 2-Column Split: FAQ Accordion (Left) + Arched Temple Map Window (Right) */}
        <div className="hm-faq-layout">
          
          {/* Left Column: Accordion with CSS Grid-Row Height Animation */}
          <div className="hm-faq-accordion-col">
            <div className="hm-faq-list" role="region" aria-label="Frequently Asked Questions">
              {homeFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={faq.q}
                    className={`hm-faq-item ${isOpen ? 'is-open' : ''}`}
                  >
                    <button
                      type="button"
                      className="hm-faq-trigger"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-header-${index}`}
                    >
                      <span className="hm-faq-question">{faq.q}</span>
                      <span className={`hm-faq-icon ${isOpen ? 'is-rotated' : ''}`} aria-hidden="true">
                        <ChevronDown size={18} />
                      </span>
                    </button>

                    {/* CSS Grid-Row Animation Container */}
                    <div 
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-header-${index}`}
                      className={`hm-faq-grid-collapse ${isOpen ? 'is-expanded' : ''}`}
                    >
                      <div className="hm-faq-grid-inner">
                        <p className="hm-faq-answer">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Arched Temple Window Map Card */}
          <div className="hm-faq-map-col">
            <div className="hm-sanctuary-card">
              
              {/* Arched Temple Frame for Google Maps */}
              <div className="hm-map-arch-frame">
                <iframe 
                  title="Master Arvind Edmonton Location"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="hm-map-frame-rim" aria-hidden="true" />
                <div className="hm-map-bobbing-pin" aria-hidden="true">
                  <MapPin size={22} className="text-saffron" />
                </div>
              </div>

              {/* Sanctuary Physical Location Info */}
              <div className="hm-sanctuary-info">
                <div className="hm-sanctuary-header">
                  <span className="hm-sanctuary-tag">Edmonton Sanctuary</span>
                  <h3 className="hm-sanctuary-name">Master Arvind Astrological Consultation Center</h3>
                </div>

                <div className="hm-sanctuary-details">
                  <p className="hm-sanctuary-address">
                    <MapPin size={16} className="text-saffron flex-shrink-0" />
                    <span>{CONTACT_INFO.address}</span>
                  </p>

                  <p className="hm-sanctuary-hours">
                    <span>In-person consultations by prior appointment. Daily phone &amp; remote video consultations available Canada-wide.</span>
                  </p>
                </div>

                <div className="hm-sanctuary-actions">
                  <a 
                    href={CONTACT_INFO.googleMapsUrl || `https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="hm-btn hm-btn-saffron-sm"
                  >
                    <Navigation size={14} />
                    <span>Get Directions</span>
                  </a>

                  <a 
                    href={`tel:${CONTACT_INFO.phoneLink}`}
                    className="hm-sanctuary-phone-link"
                  >
                    <Phone size={14} />
                    <span>{CONTACT_INFO.phoneDisplay}</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
