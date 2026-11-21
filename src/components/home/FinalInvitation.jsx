import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import { fadeUp, viewportOnce } from './motion';
import { StarCanvas } from './StarCanvas';

export const FinalInvitation = () => {
  return (
    <section 
      className="hm-section hm-final-invitation-section"
      aria-labelledby="final-invite-title"
    >
      {/* 90-Star Twinkling Night Canvas (Pauses Off-Screen Automatically) */}
      <StarCanvas count={90} shootingStars={false} />

      {/* Floating Crescent Moon & Vedic Halo SVG */}
      <div className="hm-celestial-moon-art" aria-hidden="true">
        <svg viewBox="0 0 200 200" width="140" height="140" className="hm-crescent-svg">
          <circle cx="100" cy="100" r="88" stroke="#C9A24B" strokeWidth="0.75" strokeDasharray="3 4" fill="none" opacity="0.35" />
          <path
            d="M100 25C141.421 25 175 58.5786 175 100C175 141.421 141.421 175 100 175C79.2893 175 60.5893 166.611 47 153C67.5 153 88 135 88 100C88 65 67.5 47 47 47C60.5893 33.3893 79.2893 25 100 25Z"
            fill="url(#moonGlow)"
            opacity="0.88"
          />
          <defs>
            <radialGradient id="moonGlow" cx="0%" cy="0%" r="100%">
              <stop offset="0%" stopColor="#FFFDF9" />
              <stop offset="60%" stopColor="#FBF6EE" />
              <stop offset="100%" stopColor="#EA580C" stopOpacity="0.4" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="hm-container hm-text-center">
        <motion.div 
          className="hm-final-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="hm-eyebrow hm-eyebrow-dark">The Next Step &middot; Edmonton Sanctuary</span>
          
          <h2 id="final-invite-title" className="hm-final-title">
            Your Birth Chart Awaits Its Reading
          </h2>

          <p className="hm-final-lede">
            Whether facing an unresolved relationship, unexpected separation, or seeking clarity on life&rsquo;s crossroads, a calm, personal consultation provides direction grounded in ancient scripture.
          </p>

          <div className="hm-final-actions">
            <Link to="/book" className="hm-btn hm-btn-saffron">
              <Calendar size={18} />
              <span>Book a Consultation</span>
            </Link>

            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to schedule a private Vedic astrology consultation.")}`}
              target="_blank"
              rel="noreferrer"
              className="hm-btn hm-btn-outline-cream"
            >
              <span>Ask on WhatsApp &rarr;</span>
            </a>

            <div className="hm-final-phone-block">
              <a 
                href={`tel:${CONTACT_INFO.phoneLink}`}
                className="hm-link-phone"
              >
                <Phone size={15} />
                <span>Direct: <span className="hm-phone-selectable">{CONTACT_INFO.phoneDisplay}</span></span>
              </a>
            </div>
          </div>

          <div className="hm-final-cred-line">
            <span>Confidential Assessment</span>
            <span className="hm-dot" aria-hidden="true">&middot;</span>
            <span>In-Person Edmonton &amp; Phone Across Canada</span>
            <span className="hm-dot" aria-hidden="true">&middot;</span>
            <span>25+ Years Hereditary Practice</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
