import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import { specialtyDoors } from '../../data/homeContent';
import { fadeUp, viewportOnce } from './motion';
import { InterlockedRingsArt, SacredLotusArt, ProtectiveEyeArt } from './DoorArt';

export const ThreeDoors = () => {
  const [activeDoor, setActiveDoor] = useState(null);
  const [hintedDoor, setHintedDoor] = useState(null);
  const [doorImageIndex, setDoorImageIndex] = useState({ 0: 0, 1: 0, 2: 0 });
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // When the section first scrolls into view, the three doors open and close once in sequence as a hint
  useEffect(() => {
    if (!isInView) return;
    const timers = [
      setTimeout(() => setHintedDoor(0), 400),
      setTimeout(() => setHintedDoor(null), 1200),
      setTimeout(() => setHintedDoor(1), 1300),
      setTimeout(() => setHintedDoor(null), 2100),
      setTimeout(() => setHintedDoor(2), 2200),
      setTimeout(() => setHintedDoor(null), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  // Rotate smoothly through sanctuary images while a door is open
  useEffect(() => {
    const currentOpen = activeDoor !== null ? activeDoor : hintedDoor;
    if (currentOpen === null || currentOpen === undefined) return;
    const doorData = specialtyDoors[currentOpen];
    if (!doorData || !doorData.images || doorData.images.length <= 1) return;

    const interval = setInterval(() => {
      setDoorImageIndex((prev) => ({
        ...prev,
        [currentOpen]: ((prev[currentOpen] || 0) + 1) % doorData.images.length,
      }));
    }, 3400);

    return () => clearInterval(interval);
  }, [activeDoor, hintedDoor]);

  const handleCardClick = (index, e) => {
    // Allow clicking/tapping anywhere on the card to toggle open/close
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    setActiveDoor((prev) => (prev === index ? null : index));
  };

  const getDoorArt = (id) => {
    switch (id) {
      case 'ex-love-back':
        return <InterlockedRingsArt />;
      case 'love-spells':
        return <SacredLotusArt />;
      case 'black-magic-removal':
      default:
        return <ProtectiveEyeArt />;
    }
  };

  return (
    <section 
      ref={containerRef}
      className="hm-section hm-doors-section"
      aria-labelledby="doors-title"
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
          <span className="hm-eyebrow hm-eyebrow-dark">Specialized Disciplines</span>
          <h2 id="doors-title" className="hm-section-title">
            Three Sacred Doors to Clarity
          </h2>
          <p className="hm-section-lede">
            Direct, focused astrological remedies for life&rsquo;s three most deeply felt emotional and spiritual challenges.
          </p>
        </motion.div>

        {/* 3 Arched Cards Grid with 3D Swinging Doors */}
        <div className="hm-doors-grid">
          {specialtyDoors.map((door, index) => {
            const isOpen = activeDoor === index || hintedDoor === index;
            const themeClass = index === 0 ? 'door-theme-red' : index === 1 ? 'door-theme-orange' : 'door-theme-blue';
            return (
              <motion.article
                key={door.id}
                className={`hm-door-card ${themeClass} ${isOpen ? 'is-doors-open' : ''}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: index * 0.12 }}
                onMouseEnter={() => setActiveDoor(index)}
                onMouseLeave={() => setActiveDoor(null)}
                onFocus={() => setActiveDoor(index)}
                onBlur={() => setActiveDoor(null)}
                onClick={(e) => handleCardClick(index, e)}
                tabIndex={0}
                aria-expanded={isOpen}
              >
                {/* 3D Portal Frame */}
                <div className="hm-door-portal-stage">
                  
                  {/* Inside Room: Background Image Revealed when Doors Swing Open */}
                  <div className="hm-door-inside-room">
                    {(door.images && door.images.length > 0 ? door.images : [door.image]).map((imgSrc, imgIdx) => {
                      const isCurrentImg = (doorImageIndex[index] || 0) === imgIdx;
                      return (
                        <img 
                          key={imgSrc}
                          src={imgSrc} 
                          alt={`${door.title} visual ${imgIdx + 1}`}
                          className={`hm-door-img ${isCurrentImg ? 'is-active-img' : ''}`}
                          loading="lazy"
                          onError={(e) => {
                            if (door.fallbackImage && e.target.src !== door.fallbackImage) {
                              e.target.src = door.fallbackImage;
                            } else {
                              e.target.src = "/images/services/love-solutions.webp";
                            }
                          }}
                        />
                      );
                    })}

                    {/* Subtle sanctuary image dots switcher */}
                    {door.images && door.images.length > 1 && (
                      <div className="hm-door-img-dots" aria-label="Sanctuary visuals" onClick={(e) => e.stopPropagation()}>
                        {door.images.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            type="button"
                            className={`hm-door-dot ${(doorImageIndex[index] || 0) === dotIdx ? 'is-active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setDoorImageIndex((prev) => ({ ...prev, [index]: dotIdx }));
                            }}
                            aria-label={`View sanctuary visual ${dotIdx + 1}`}
                          />
                        ))}
                      </div>
                    )}

                    <div className="hm-door-inside-overlay" aria-hidden="true" />
                    
                    {/* Inner Revealed Content */}
                    <div className="hm-door-inner-content">
                      <span className="hm-door-sanskrit-tag">{door.sanskritLabel || door.tag}</span>
                      <h3 className="hm-door-title">{door.title}</h3>
                      <p className="hm-door-desc">{door.desc || door.summary}</p>

                      <div className="hm-door-actions">
                        <Link to={`/services/${door.id}`} className="hm-btn hm-btn-saffron-sm">
                          <span>Know More</span>
                          <ArrowRight size={13} />
                        </Link>

                        <div className="hm-door-quick-icons">
                          <a 
                            href={`tel:${CONTACT_INFO.phoneLink}`}
                            className="hm-door-icon-btn"
                            title={`Call Master Arvind for ${door.title}`}
                            aria-label={`Call regarding ${door.title}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Phone size={15} />
                          </a>
                          <a 
                            href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(`Hello Master Arvind, I would like to consult with you regarding ${door.title}.`)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="hm-door-icon-btn hm-door-wa-btn"
                            title={`WhatsApp regarding ${door.title}`}
                            aria-label={`WhatsApp regarding ${door.title}`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3D Left Door Leaf */}
                  <div className={`hm-door-leaf leaf-left ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                    <div className="hm-leaf-face">
                      <div className="hm-leaf-arch-rim" />
                      <div className="hm-leaf-art-half art-half-left">
                        {getDoorArt(door.id)}
                      </div>
                      <span className="hm-leaf-handle" />
                    </div>
                  </div>

                  {/* 3D Right Door Leaf */}
                  <div className={`hm-door-leaf leaf-right ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                    <div className="hm-leaf-face">
                      <div className="hm-leaf-arch-rim" />
                      <div className="hm-leaf-art-half art-half-right">
                        {getDoorArt(door.id)}
                      </div>
                      <span className="hm-leaf-handle" />
                    </div>
                  </div>

                  {/* Permanent Outer Arched Trim */}
                  <div className="hm-portal-outer-rim" aria-hidden="true" />
                </div>

                {/* Closed State Title Bar (Visible before doors open) */}
                <div className="hm-door-closed-bar">
                  <span className="hm-closed-sanskrit">{door.sanskritLabel || door.tag}</span>
                  <h3 className="hm-closed-title">{door.title}</h3>
                  <span className="hm-closed-hint">Hover or tap to open sanctuary door</span>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
