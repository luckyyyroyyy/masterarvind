import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import { fadeUp, viewportOnce } from './motion';

// Helper component for single word illuminated by scroll progress
const IlluminatedWord = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(
    progress,
    range,
    ['rgba(28, 25, 36, 0.28)', 'rgba(28, 25, 36, 0.95)']
  );

  return (
    <motion.span style={{ opacity, color }} className="hm-illuminated-word">
      {word}{' '}
    </motion.span>
  );
};

export const MeetMaster = () => {
  const bioRef = useRef(null);
  const credRef = useRef(null);
  const isCredInView = useInView(credRef, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  const prefersReduced = useReducedMotion();

  // Count-up on "25" when in view
  useEffect(() => {
    if (!isCredInView || prefersReduced) {
      if (prefersReduced) setCount(25);
      return;
    }
    let current = 0;
    const target = 25;
    const duration = 1600;
    const intervalTime = duration / target;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isCredInView, prefersReduced]);

  // Track scroll progress for word-by-word bio illumination
  const { scrollYProgress } = useScroll({
    target: bioRef,
    offset: ['start 85%', 'end 50%'],
  });

  const bioText = "Trained from childhood in classical North Indian Jyotish, Master Arvind approaches astrology not as superstition or theatrical entertainment, but as an ancient diagnostic science. Every birth chart is treated as a sacred blueprint of personal karmic cycles, planetary dashas, and spiritual alignment. From his sanctuary in Edmonton, he has advised individuals, couples, and families across Alberta and all of Canada with uncompromising dignity, patience, and confidentiality.";
  const words = bioText.split(' ');

  return (
    <section 
      className="hm-section hm-meet-section"
      aria-labelledby="meet-master-title"
    >
      <div className="hm-container">
        <div className="hm-meet-layout">
          
          {/* Left Column: Asymmetric Arch Portrait Frame with rotating Mandala */}
          <motion.div 
            className="hm-meet-visual-col"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="hm-meet-portrait-wrap">
              
              {/* Subtle Gold Mandala rotating slowly in background */}
              <div 
                className={`hm-mandala-backdrop ${prefersReduced ? 'is-static' : ''}`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 320 320" width="100%" height="100%">
                  <circle cx="160" cy="160" r="150" stroke="#C9A24B" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.32" />
                  <circle cx="160" cy="160" r="118" stroke="#C9A24B" strokeWidth="1" fill="none" opacity="0.25" />
                  <circle cx="160" cy="160" r="86" stroke="#C9A24B" strokeWidth="1" strokeDasharray="2 3" fill="none" opacity="0.25" />
                  <polygon points="160,10 192,106 288,106 214,160 245,256 160,202 75,256 106,160 32,106 128,106" stroke="#C9A24B" strokeWidth="1" fill="none" opacity="0.22" />
                  <polygon points="160,310 128,214 32,214 106,160 75,64 160,118 245,64 214,160 288,214 192,214" stroke="#C9A24B" strokeWidth="1" fill="none" opacity="0.22" />
                </svg>
              </div>

              {/* Arch Portrait Frame */}
              <div className="hm-meet-arch-frame">
                <img 
                  src="/images/services/shiva-meditation.jpg" 
                  alt="Master Arvind in meditation sanctuary"
                  className="hm-meet-portrait-img"
                  loading="lazy"
                />
                <div className="hm-meet-frame-rim" aria-hidden="true" />
              </div>

              {/* Quiet Badge at Bottom Corner */}
              <div className="hm-meet-corner-pill" ref={credRef}>
                <Award size={16} className="text-gold" />
                <span>
                  <strong>{count}+</strong> Years Hereditary Practice
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Editorial Bio, Illuminated Words, Lineage Credibility */}
          <motion.div 
            className="hm-meet-text-col"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="hm-eyebrow">The Lineage &middot; Master Arvind</p>
            
            <h2 id="meet-master-title" className="hm-section-title">
              Vedic Astrology Practiced With Dignity and Precision
            </h2>

            {/* Scroll-Linked Illuminated Bio Paragraph */}
            <div ref={bioRef} className="hm-meet-illuminated-bio" aria-label="Biography of Master Arvind">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = Math.min(1, (i + 1) / words.length);
                return (
                  <IlluminatedWord 
                    key={i} 
                    word={word} 
                    progress={scrollYProgress} 
                    range={[start, end]} 
                  />
                );
              })}
            </div>

            {/* Credibility Inline Row */}
            <div className="hm-meet-cred-strip">
              <div className="hm-meet-cred-item">
                <ShieldCheck size={18} className="text-saffron" />
                <span>Hereditary Jyotish Lineage</span>
              </div>
              <span className="hm-dot" aria-hidden="true">&middot;</span>
              <div className="hm-meet-cred-item">
                <span>Edmonton Sanctuary &amp; Phone Across Canada</span>
              </div>
              <span className="hm-dot" aria-hidden="true">&middot;</span>
              <div className="hm-meet-cred-item">
                <span>Strict Confidentiality</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hm-meet-actions">
              <a 
                href={`tel:${CONTACT_INFO.phoneLink}`}
                className="hm-btn hm-btn-saffron"
              >
                <Phone size={17} />
                <span>Call Master Arvind</span>
              </a>

              <Link to="/about" className="hm-btn hm-btn-outline">
                <span>Read Full Biography</span>
                <ArrowRight size={15} />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
