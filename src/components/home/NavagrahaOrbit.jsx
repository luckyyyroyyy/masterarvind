import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import { navagrahaServices } from '../../data/homeContent';
import { fadeUp, viewportOnce } from './motion';

export const NavagrahaOrbit = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReduced = useReducedMotion();
  const autoCycleRef = useRef(null);

  // Five concentric orbit rings
  const orbitRadii = [100, 150, 200, 250, 300];

  // Distribute the 9 planets across 5 concentric rings with specific angles (in degrees)
  const planetOrbits = [
    { ring: 0, angle: 0 },    // Surya (r=100)
    { ring: 1, angle: 40 },   // Chandra (r=150)
    { ring: 2, angle: 80 },   // Mangala (r=200)
    { ring: 0, angle: 180 },  // Budha (r=100)
    { ring: 2, angle: 260 },  // Guru (r=200)
    { ring: 1, angle: 220 },  // Shukra (r=150)
    { ring: 3, angle: 140 },  // Shani (r=250)
    { ring: 4, angle: 310 },  // Rahu (r=300)
    { ring: 4, angle: 130 },  // Ketu (r=300)
  ];

  // Auto-cycle through planets every 3.8s until user interacts
  useEffect(() => {
    if (hasInteracted || prefersReduced) return;

    autoCycleRef.current = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % navagrahaServices.length);
    }, 3800);

    return () => clearInterval(autoCycleRef.current);
  }, [hasInteracted, prefersReduced]);

  const handleSelectPlanet = (index) => {
    setHasInteracted(true);
    setSelectedIndex(index);
    if (autoCycleRef.current) clearInterval(autoCycleRef.current);
  };

  const selectedPlanet = navagrahaServices[selectedIndex] || navagrahaServices[0];
  const selectedRing = planetOrbits[selectedIndex]?.ring ?? 0;

  return (
    <section 
      className="hm-section hm-orbit-section"
      aria-labelledby="navagraha-title"
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
          <span className="hm-eyebrow">Cosmic Archetypes &middot; The Nine Influences</span>
          <h2 id="navagraha-title" className="hm-section-title">
            The Navagraha Orbit: Disciplines Under Every Planet
          </h2>
          <p className="hm-section-lede">
            In Vedic astrology, human affairs reflect the nine cosmic planetary forces. Choose a planet to examine its sacred discipline and remedial path.
          </p>
        </motion.div>

        {/* Desktop View: Interactive Orbit Canvas + Side Detail Panel */}
        <div className="hm-orbit-desktop-wrapper">
          
          {/* Orbit System */}
          <div 
            className="hm-orbit-system"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="region"
            aria-label="Navagraha interactive planetary orbit system"
          >
            {/* Concentric Orbit Rings SVG */}
            <svg className="hm-orbit-svg" viewBox="0 0 640 640" aria-hidden="true">
              {/* Subtle astrological axis lines */}
              <line x1="320" y1="14" x2="320" y2="626" className="hm-orbit-axis" />
              <line x1="14" y1="320" x2="626" y2="320" className="hm-orbit-axis" />
              <line x1="104" y1="104" x2="536" y2="536" className="hm-orbit-axis-diag" />
              <line x1="104" y1="536" x2="536" y2="104" className="hm-orbit-axis-diag" />

              {/* 5 Concentric Orbit Rings with Active Highlight */}
              <circle cx="320" cy="320" r="100" className={`hm-orbit-ring ring-1 ${selectedRing === 0 ? 'is-active-ring' : ''}`} />
              <circle cx="320" cy="320" r="150" className={`hm-orbit-ring ring-2 ${selectedRing === 1 ? 'is-active-ring' : ''}`} />
              <circle cx="320" cy="320" r="200" className={`hm-orbit-ring ring-3 ${selectedRing === 2 ? 'is-active-ring' : ''}`} />
              <circle cx="320" cy="320" r="250" className={`hm-orbit-ring ring-4 ${selectedRing === 3 ? 'is-active-ring' : ''}`} />
              <circle cx="320" cy="320" r="300" className={`hm-orbit-ring ring-5 ${selectedRing === 4 ? 'is-active-ring' : ''}`} />

              {/* Outer Cosmic Boundary Ring */}
              <circle cx="320" cy="320" r="312" className="hm-orbit-boundary-ring" />
              
              {/* Center Sun Bindu */}
              <circle cx="320" cy="320" r="34" className="hm-orbit-center-glow" />
              <circle cx="320" cy="320" r="28" className="hm-orbit-center" />
              <text x="320" y="328" textAnchor="middle" className="hm-orbit-center-text">ॐ</text>
            </svg>

            {/* Orbit Container with slow rotation */}
            <div 
              className={`hm-orbit-rotator ${isHovered || prefersReduced ? 'is-slowed' : ''}`}
            >
              {navagrahaServices.map((planet, index) => {
                const config = planetOrbits[index] || { ring: 1, angle: index * 40 };
                const r = orbitRadii[config.ring];
                const rad = (config.angle * Math.PI) / 180;
                const x = 320 + r * Math.cos(rad);
                const y = 320 + r * Math.sin(rad);
                const px = ((x / 640) * 100).toFixed(2);
                const py = ((y / 640) * 100).toFixed(2);
                const isSelected = selectedIndex === index;

                return (
                  <button
                    key={planet.id}
                    type="button"
                    className={`hm-planet-node ${isSelected ? 'is-selected' : ''}`}
                    style={{ left: `${px}%`, top: `${py}%` }}
                    onClick={() => handleSelectPlanet(index)}
                    onFocus={() => handleSelectPlanet(index)}
                    title={`${planet.sanskrit} (${planet.name})`}
                    aria-label={`View ${planet.sanskrit} - ${planet.title}`}
                    aria-pressed={isSelected}
                  >
                    <span className="hm-planet-counter-rotate">
                      <span className="hm-planet-symbol">{planet.symbol}</span>
                      <span className="hm-planet-name">{planet.sanskrit}</span>
                    </span>
                    {isSelected && <span className="hm-planet-pulse-ring" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Side Preview Panel with aria-live */}
          <div 
            className="hm-orbit-detail-panel"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="hm-orbit-panel-inner">
              <div className="hm-panel-planet-header">
                <span className="hm-panel-symbol">{selectedPlanet.symbol}</span>
                <div>
                  <span className="hm-panel-sanskrit">{selectedPlanet.sanskrit || selectedPlanet.graha} Graha &middot; {selectedPlanet.name}</span>
                  <p className="hm-panel-domain">{selectedPlanet.domain || selectedPlanet.meaning}</p>
                </div>
              </div>

              <div className="hm-panel-content">
                {selectedPlanet.image && (
                  <div className="hm-panel-thumb-wrap">
                    <img 
                      src={selectedPlanet.image} 
                      alt={selectedPlanet.title || selectedPlanet.name} 
                      className="hm-panel-thumb-img"
                      loading="lazy" 
                    />
                    <div className="hm-panel-thumb-overlay" aria-hidden="true" />
                  </div>
                )}
                <span className="hm-panel-discipline-label">Astrological Discipline</span>
                <h3 className="hm-panel-service-title">{selectedPlanet.title || selectedPlanet.serviceTitle}</h3>
                <p className="hm-panel-service-desc">{selectedPlanet.desc}</p>
              </div>

              <div className="hm-panel-footer">
                <Link 
                  to={selectedPlanet.route || `/services/${selectedPlanet.serviceId || selectedPlanet.id}`} 
                  className="hm-btn hm-btn-saffron-sm"
                >
                  <span>Explore Remedy</span>
                  <ArrowRight size={14} />
                </Link>

                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(`Hello Master Arvind, I would like guidance regarding ${selectedPlanet.sanskrit} Graha (${selectedPlanet.title}).`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hm-panel-wa-link"
                >
                  <span>Consult Master Arvind on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Graha Chips Row for Direct Click & Keyboard Selection */}
        <div className="hm-orbit-chips-bar" role="tablist" aria-label="Select planet">
          {navagrahaServices.map((planet, index) => {
            const isSelected = selectedIndex === index;
            return (
              <button
                key={planet.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`hm-orbit-chip ${isSelected ? 'is-active' : ''}`}
                onClick={() => handleSelectPlanet(index)}
              >
                <span className="hm-chip-sym">{planet.symbol}</span>
                <span className="hm-chip-name">{planet.sanskrit}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
