import React from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Crooked marquee band: two counter-rotating rows of service names
 * Row 1: Outlined text
 * Row 2: Italic gold text
 * Pauses on hover
 */
export const MarqueeBand = () => {
  const prefersReduced = useReducedMotion();

  const row1Services = [
    "Get Ex Love Back",
    "Sacred Love Spells",
    "Black Magic Removal",
    "Janam Kundli Reading",
    "Marriage Harmony & Dispute Resolution",
    "Career & Financial Timing",
    "Evil Eye & Negative Energy Cleansing",
    "Spiritual Chakra & Aura Healing",
  ];

  const row2Phrases = [
    "Edmonton Vedic Sanctuary",
    "Confidential Astrological Guidance",
    "Serving Calgary, Edmonton & Across Canada",
    "Generational North Indian Lineage",
    "Ethical White-Light Remedies",
    "Daily Phone & In-Person Sessions",
  ];

  return (
    <div className="hm-marquee-wrapper" aria-hidden="true">
      <div className={`hm-crooked-strip ${prefersReduced ? 'is-static' : ''}`}>
        
        {/* Row 1: Leftward moving outlined text */}
        <div className="hm-marquee-row row-left">
          <div className="hm-marquee-track">
            {[...row1Services, ...row1Services, ...row1Services].map((item, idx) => (
              <span key={`r1-${idx}`} className="hm-marquee-item item-outlined">
                <span>{item}</span>
                <span className="hm-marquee-star">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward moving italic gold text */}
        <div className="hm-marquee-row row-right">
          <div className="hm-marquee-track">
            {[...row2Phrases, ...row2Phrases, ...row2Phrases].map((item, idx) => (
              <span key={`r2-${idx}`} className="hm-marquee-item item-gold-italic">
                <span>{item}</span>
                <span className="hm-marquee-star">✦</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
