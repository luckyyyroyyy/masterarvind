import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Clock, MapPin, Send, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import { lineDraw, wordMaskReveal, getApproximateMoonPhase } from './motion';
import { StarCanvas } from './StarCanvas';

export const BirthChartHero = () => {
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');
  const [pob, setPob] = useState('');
  const [chartFlashing, setChartFlashing] = useState(false);
  const [activeHouseIdx, setActiveHouseIdx] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [moonPhase, setMoonPhase] = useState({ name: 'Waxing Moon', glyph: '🌔' });
  const [spotlight, setSpotlight] = useState({ x: '50%', y: '50%' });
  const [stageTilt, setStageTilt] = useState({ rotateX: 0, rotateY: 0, parallaxX: 0, parallaxY: 0 });
  
  const containerRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMoonPhase(getApproximateMoonPhase());
  }, []);

  // 12 Classical North Indian Vedic Janam Kundli Houses with exact geometric polygons
  const kundliHouses = [
    {
      num: 1,
      name: 'Tanu Bhava',
      title: 'House 1 · Tanu Bhava (Self, Vitality & Life Path)',
      desc: 'Ascendant (Lagna) governing constitution, personal aura, and character.',
      points: '400,100 550,250 400,400 250,250',
      labelPos: { x: 400, y: 175 },
    },
    {
      num: 2,
      name: 'Dhana Bhava',
      title: 'House 2 · Dhana Bhava (Family, Speech & Wealth)',
      desc: 'Lineage roots, financial prosperity, and spoken truth.',
      points: '100,100 400,100 250,250',
      labelPos: { x: 320, y: 140 },
    },
    {
      num: 3,
      name: 'Sahaja Bhava',
      title: 'House 3 · Sahaja Bhava (Courage, Will & Initiative)',
      desc: 'Personal motivation, sibling bonds, and communications.',
      points: '100,100 250,250 100,400',
      labelPos: { x: 140, y: 235 },
    },
    {
      num: 4,
      name: 'Sukha Bhava',
      title: 'House 4 · Sukha Bhava (Mother, Home & Emotional Mind)',
      desc: 'Domestic peace, emotional sanctuary, and real estate.',
      points: '100,400 250,250 400,400 250,550',
      labelPos: { x: 175, y: 400 },
    },
    {
      num: 5,
      name: 'Putra Bhava',
      title: 'House 5 · Putra Bhava (Love, Intellect & Progeny)',
      desc: 'Romantic devotion, past-life merit (Purva Punya), and creative fire.',
      points: '100,400 250,550 100,700',
      labelPos: { x: 140, y: 565 },
    },
    {
      num: 6,
      name: 'Ari Bhava',
      title: 'House 6 · Ari Bhava (Obstacles, Debts & Resolution)',
      desc: 'Overcoming disputes, legal difficulties, and negative energetic cords.',
      points: '100,700 250,550 400,700',
      labelPos: { x: 320, y: 660 },
    },
    {
      num: 7,
      name: 'Kalatra Bhava',
      title: 'House 7 · Kalatra Bhava (Marriage, Spouse & Unions)',
      desc: 'Lifelong marital bonds, partner compatibility, and relationship reconciliation.',
      points: '400,400 550,550 400,700 250,550',
      labelPos: { x: 400, y: 625 },
    },
    {
      num: 8,
      name: 'Randhra Bhava',
      title: 'House 8 · Randhra Bhava (Transformation & Mysticism)',
      desc: 'Karmic regeneration, longevity, and deep esoteric protection.',
      points: '400,700 550,550 700,700',
      labelPos: { x: 480, y: 660 },
    },
    {
      num: 9,
      name: 'Dharma Bhava',
      title: 'House 9 · Dharma Bhava (Destiny, Higher Wisdom & Grace)',
      desc: 'Spiritual guidance, fortunate alignment, and ancestral blessing.',
      points: '700,400 700,700 550,550',
      labelPos: { x: 660, y: 565 },
    },
    {
      num: 10,
      name: 'Karma Bhava',
      title: 'House 10 · Karma Bhava (Career, Authority & Purpose)',
      desc: 'Vocational success, public respect, and auspicious enterprise timing.',
      points: '400,400 550,250 700,400 550,550',
      labelPos: { x: 625, y: 400 },
    },
    {
      num: 11,
      name: 'Labha Bhava',
      title: 'House 11 · Labha Bhava (Gains, Desires & Fulfillment)',
      desc: 'Fruit of endeavors, enduring friendships, and wish fulfillment.',
      points: '700,100 700,400 550,250',
      labelPos: { x: 660, y: 235 },
    },
    {
      num: 12,
      name: 'Vyaya Bhava',
      title: 'House 12 · Vyaya Bhava (Liberation & Spiritual Awakening)',
      desc: 'Subconscious purification, foreign journeys, and sacred detachment.',
      points: '400,100 700,100 550,250',
      labelPos: { x: 480, y: 140 },
    },
  ];

  // 12 Sanskrit Rashi Names for the outer rotating zodiac ring
  const rashis = [
    "Mesha", "Vrishabha", "Mithuna", "Karka", 
    "Simha", "Kanya", "Tula", "Vrishchika", 
    "Dhanu", "Makara", "Kumbha", "Meena"
  ];

  // Sample planetary configurations placed gracefully inside their canonical houses
  const samplePlanets = [
    { glyph: 'Su', name: 'Surya', house: 1, x: 400, y: 285, color: '#EA580C' },
    { glyph: 'Me', name: 'Budha', house: 2, x: 285, y: 210, color: '#16A34A' },
    { glyph: 'Ra', name: 'Rahu', house: 3, x: 200, y: 285, color: '#1D4ED8' },
    { glyph: 'Mo', name: 'Chandra', house: 4, x: 285, y: 400, color: '#0284C7' },
    { glyph: 'Ve', name: 'Shukra', house: 5, x: 200, y: 515, color: '#DC2626' },
    { glyph: 'Ma', name: 'Mangala', house: 6, x: 285, y: 590, color: '#DC2626' },
    { glyph: 'Ju', name: 'Guru', house: 7, x: 400, y: 515, color: '#EA580C' },
    { glyph: 'Ke', name: 'Ketu', house: 9, x: 600, y: 515, color: '#1D4ED8' },
    { glyph: 'Sa', name: 'Shani', house: 11, x: 600, y: 285, color: '#1D4ED8' },
  ];

  // Auto-cycle through houses until the visitor interacts
  useEffect(() => {
    if (isUserInteracting || prefersReduced) return;
    const interval = setInterval(() => {
      setActiveHouseIdx((prev) => (prev + 1) % kundliHouses.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isUserInteracting, prefersReduced, kundliHouses.length]);

  const activeHouse = kundliHouses[activeHouseIdx];

  // Mouse interaction for cursor spotlight & 3D stage tilt
  const handleMouseMove = (e) => {
    if (prefersReduced || window.matchMedia('(hover: none)').matches) return;
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlight({ x: `${x}px`, y: `${y}px` });

    // Subtle 3D tilt (max 6deg)
    const normX = (x - rect.width / 2) / (rect.width / 2);
    const normY = (y - rect.height / 2) / (rect.height / 2);

    setStageTilt({
      rotateX: -normY * 5,
      rotateY: normX * 5,
      parallaxX: normX * 10,
      parallaxY: normY * 10,
    });
  };

  const handleBirthDetailsSubmit = (e) => {
    e.preventDefault();
    setChartFlashing(true);

    const message = `*Vedic Birth Chart Assessment - Master Arvind*\n\n*Date of Birth:* ${dob || 'Not provided'}\n*Time of Birth:* ${tob || 'Not provided'}\n*Place of Birth:* ${pob || 'Not provided'}\n*Today Moon Phase:* ${moonPhase.name}`;

    setTimeout(() => {
      setChartFlashing(false);
      window.open(`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    }, 700);
  };

  const headlineWords = ["Traditional", "Vedic", "Astrology", "in", "Edmonton,", "Serving", "Across", "Canada"];

  return (
    <section 
      ref={containerRef}
      className="hm-section hm-hero-section hm-living-sky" 
      aria-labelledby="main-hero-title"
      onMouseMove={handleMouseMove}
    >
      {/* 130-Star Canvas with Parallax & Occasional Shooting Stars */}
      <StarCanvas count={130} enableShootingStars={true} parallax={{ x: stageTilt.parallaxX, y: stageTilt.parallaxY }} />

      {/* Saffron Spotlight Layer following cursor */}
      <div 
        className="hm-hero-spotlight" 
        style={{ left: spotlight.x, top: spotlight.y }} 
        aria-hidden="true" 
      />

      <div className="hm-container hm-hero-grid">
        
        {/* Left Column: Headline, Lede, Actions, and Birth Details Intake */}
        <div className="hm-hero-text-col">
          <div className="hm-moon-strip-line">
            <span className="hm-eyebrow">Edmonton Vedic Sanctuary</span>
            <span className="hm-dot" aria-hidden="true">&middot;</span>
            <span className="hm-approx-moon" title="Calculated client-side from lunar cycle (approximate)">
              <span className="hm-moon-glyph">{moonPhase.glyph}</span> Today&rsquo;s Moon: <strong>{moonPhase.name}</strong> <em>(approx)</em>
            </span>
          </div>

          {/* Headline Revealed Word by Word through Masks */}
          <h1 id="main-hero-title" className="hm-hero-title hm-masked-headline">
            {headlineWords.map((word, wIdx) => (
              <span key={wIdx} className="hm-word-mask">
                <motion.span 
                  className="hm-word-inner"
                  variants={wordMaskReveal(wIdx * 0.08)}
                  initial="hidden"
                  animate="visible"
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          <p className="hm-hero-lede">
            Rooted in generational Jyotish lineages, Master Arvind provides calm, confidential analysis for marriage harmony, relationship reconciliation, and personal crossroads. Consultations are available in person at his Edmonton sanctuary or remotely by phone across Canada.
          </p>

          <div className="hm-hero-actions">
            <Link to="/book" className="hm-btn hm-btn-saffron">
              <span>Book a Consultation</span>
            </Link>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to ask a question regarding a consultation.")}`}
              target="_blank"
              rel="noreferrer"
              className="hm-link-secondary"
            >
              <span>Ask on WhatsApp</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Inline Credibility Line */}
          <div className="hm-cred-line">
            <span>Generational Jyotish Lineage</span>
            <span className="hm-dot" aria-hidden="true">&middot;</span>
            <span>Edmonton &amp; Online</span>
            <span className="hm-dot" aria-hidden="true">&middot;</span>
            <span>Confidential Assessment</span>
          </div>

          {/* Compact Sacred Birth Details Intake Form */}
          <div className="hm-birth-form-wrapper">
            <div className="hm-birth-form-header">
              <div>
                <span className="hm-form-label">Begin with your birth details:</span>
                <p className="hm-form-sublabel">Calculates planetary houses and natal chart alignments</p>
              </div>
            </div>

            <form onSubmit={handleBirthDetailsSubmit} className="hm-birth-form">
              <div className="hm-birth-inputs">
                <div className="hm-input-group">
                  <label htmlFor="hero-dob">
                    <Calendar size={13} className="text-saffron" /> Date of Birth *
                  </label>
                  <input
                    id="hero-dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                    className="hm-input"
                  />
                </div>
                <div className="hm-input-group">
                  <label htmlFor="hero-tob">
                    <Clock size={13} className="text-saffron" /> Birth Time
                  </label>
                  <input
                    id="hero-tob"
                    type="time"
                    value={tob}
                    onChange={(e) => setTob(e.target.value)}
                    className="hm-input"
                    placeholder="Approx ok"
                  />
                </div>
                <div className="hm-input-group">
                  <label htmlFor="hero-pob">
                    <MapPin size={13} className="text-saffron" /> Birth Place *
                  </label>
                  <input
                    id="hero-pob"
                    type="text"
                    value={pob}
                    onChange={(e) => setPob(e.target.value)}
                    placeholder="City, Country"
                    required
                    className="hm-input"
                  />
                </div>
              </div>

              <div className="hm-birth-submit-row">
                <button type="submit" className="hm-btn hm-btn-saffron-sm hm-btn-submit">
                  <Send size={15} />
                  <span>Send Chart Details to Master Arvind</span>
                </button>
                <span className="hm-birth-privacy-text">Confidential Assessment &middot; Direct Consultation</span>
              </div>
            </form>
          </div>

        </div>

        {/* Right Column: 580x580 SVG Stage with 3D Desktop Tilt, Rotating Rashi Ring, Orbiting Grahas & Interactive Houses */}
        <div className="hm-hero-chart-col">
          <div 
            className="hm-chart-stage-wrapper"
            style={{
              transform: prefersReduced ? 'none' : `perspective(1000px) rotateX(${stageTilt.rotateX}deg) rotateY(${stageTilt.rotateY}deg)`,
              transition: 'transform 0.25s ease-out',
            }}
          >
            {/* 580x580 Master Celestial SVG Stage */}
            <div 
              className={`hm-kundli-board ${chartFlashing ? 'is-flashing-houses' : ''}`}
              onMouseEnter={() => setIsUserInteracting(true)}
              onMouseLeave={() => setIsUserInteracting(false)}
            >
              <svg 
                className="hm-kundli-svg" 
                viewBox="0 0 800 800" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Vedic North Indian Janam Kundli with 12 Houses, Rotating Rashi Zodiac and Orbiting Grahas"
              >
                <defs>
                  {/* Active house golden amber highlight */}
                  <radialGradient id="activeHouseGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#EA580C" stopOpacity="0.32" />
                    <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="#FFFDF9" stopOpacity="0" />
                  </radialGradient>

                  {/* Sacred Central Bindu Glow */}
                  <radialGradient id="centerOmGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#EA580C" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#FFFDF9" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* 1. Rotating Zodiac Ring with 12 Sanskrit Rashi Names */}
                <g className="hm-ambient-ring-rotate">
                  <circle cx="400" cy="400" r="380" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />
                  <circle cx="400" cy="400" r="335" stroke="#1D4ED8" strokeWidth="1.2" opacity="0.45" />
                  
                  {/* 12 Auspicious Rays & Rashi Labels */}
                  {rashis.map((rashi, idx) => {
                    const rad = (idx * 30 * Math.PI) / 180;
                    const rayX1 = 400 + Math.cos(rad) * 335;
                    const rayY1 = 400 + Math.sin(rad) * 335;
                    const rayX2 = 400 + Math.cos(rad) * 380;
                    const rayY2 = 400 + Math.sin(rad) * 380;
                    
                    const textRad = ((idx * 30) + 15) * Math.PI / 180;
                    const textX = 400 + Math.cos(textRad) * 358;
                    const textY = 400 + Math.sin(textRad) * 358;

                    // Alternating vibrant triad for high visibility: Red, Orange, Blue
                    const rashiColor = idx % 3 === 0 ? '#DC2626' : (idx % 3 === 1 ? '#EA580C' : '#1D4ED8');

                    return (
                      <g key={rashi}>
                        <line x1={rayX1} y1={rayY1} x2={rayX2} y2={rayY2} stroke="#EA580C" strokeWidth="1.2" opacity="0.5" />
                        <text
                          x={textX}
                          y={textY}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill={rashiColor}
                          fontSize="11.5"
                          fontFamily="'Cinzel', serif"
                          fontWeight="800"
                          letterSpacing="0.06em"
                          transform={`rotate(${(idx * 30) + 15 + 90}, ${textX}, ${textY})`}
                        >
                          {rashi}
                        </text>
                      </g>
                    );
                  })}
                </g>

                {/* 2. Nine Grahas Orbiting on Two Rings */}
                <g className="hm-orbiting-grahas-layer" aria-hidden="true">
                  <circle cx="400" cy="400" r="315" stroke="#1D4ED8" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.3" />
                  <circle cx="400" cy="400" r="285" stroke="#EA580C" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.3" />

                  {/* 9 Graha Dots floating in orbits */}
                  {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, gIdx) => {
                    const ringRadius = gIdx % 2 === 0 ? 315 : 285;
                    const rad = (angle * Math.PI) / 180;
                    const gx = 400 + Math.cos(rad) * ringRadius;
                    const gy = 400 + Math.sin(rad) * ringRadius;
                    const dotColor = gIdx % 3 === 0 ? "#DC2626" : (gIdx % 3 === 1 ? "#EA580C" : "#1D4ED8");
                    return (
                      <circle
                        key={gIdx}
                        cx={gx}
                        cy={gy}
                        r="4"
                        fill={dotColor}
                        opacity="0.9"
                      />
                    );
                  })}
                </g>

                {/* 3. Base Parchment Canvas */}
                <rect x="100" y="100" width="600" height="600" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" rx="12" />

                {/* 4. Clickable & Hoverable 12 House Polygons */}
                {kundliHouses.map((h, idx) => {
                  const isActive = activeHouseIdx === idx;
                  return (
                    <polygon
                      key={h.num}
                      points={h.points}
                      className={`hm-house-polygon ${isActive ? 'is-active-house' : ''}`}
                      fill={isActive ? 'url(#activeHouseGlow)' : 'transparent'}
                      stroke={isActive ? '#EA580C' : 'transparent'}
                      strokeWidth={isActive ? '2' : '0'}
                      onClick={() => {
                        setIsUserInteracting(true);
                        setActiveHouseIdx(idx);
                      }}
                      onMouseEnter={() => {
                        setIsUserInteracting(true);
                        setActiveHouseIdx(idx);
                      }}
                      style={{ cursor: 'pointer', transition: 'all 0.25s ease' }}
                    />
                  );
                })}

                {/* 5. North Indian Kundli Line-by-Line Drawing */}
                {/* Outer Square */}
                <motion.rect
                  x="100"
                  y="100"
                  width="600"
                  height="600"
                  stroke="#EA580C"
                  strokeWidth="2"
                  variants={lineDraw(1.2, 0.1)}
                  initial="hidden"
                  animate="visible"
                />

                {/* Primary Diagonals */}
                <motion.line
                  x1="100"
                  y1="100"
                  x2="700"
                  y2="700"
                  stroke="#1D4ED8"
                  strokeWidth="1.5"
                  variants={lineDraw(1.2, 0.25)}
                  initial="hidden"
                  animate="visible"
                />
                <motion.line
                  x1="700"
                  y1="100"
                  x2="100"
                  y2="700"
                  stroke="#1D4ED8"
                  strokeWidth="1.5"
                  variants={lineDraw(1.2, 0.25)}
                  initial="hidden"
                  animate="visible"
                />

                {/* Inner Rotated Diamond */}
                <motion.polygon
                  points="400,100 700,400 400,700 100,400"
                  stroke="#EA580C"
                  strokeWidth="1.8"
                  variants={lineDraw(1.4, 0.4)}
                  initial="hidden"
                  animate="visible"
                />

                {/* House Division Lines */}
                <motion.line x1="250" y1="250" x2="400" y2="100" stroke="#DC2626" strokeWidth="1.2" opacity="0.8" variants={lineDraw(0.8, 0.55)} initial="hidden" animate="visible" />
                <motion.line x1="550" y1="250" x2="400" y2="100" stroke="#DC2626" strokeWidth="1.2" opacity="0.8" variants={lineDraw(0.8, 0.55)} initial="hidden" animate="visible" />
                <motion.line x1="250" y1="550" x2="400" y2="700" stroke="#DC2626" strokeWidth="1.2" opacity="0.8" variants={lineDraw(0.8, 0.55)} initial="hidden" animate="visible" />
                <motion.line x1="550" y1="550" x2="400" y2="700" stroke="#DC2626" strokeWidth="1.2" opacity="0.8" variants={lineDraw(0.8, 0.55)} initial="hidden" animate="visible" />

                {/* 6. House Numbers with Active Highlight */}
                {kundliHouses.map((h, idx) => {
                  const isActive = activeHouseIdx === idx;
                  return (
                    <text
                      key={h.num}
                      x={h.labelPos.x}
                      y={h.labelPos.y}
                      textAnchor="middle"
                      fill={isActive ? '#EA580C' : '#334155'}
                      fontSize={isActive ? '15' : '13'}
                      fontFamily="'Cinzel', serif"
                      fontWeight={isActive ? '900' : '700'}
                      opacity={isActive ? 1 : 0.85}
                      style={{ pointerEvents: 'none', transition: 'all 0.25s ease' }}
                    >
                      {h.num}
                    </text>
                  );
                })}

                {/* 7. Central Bindu & Living ॐ */}
                <circle cx="400" cy="400" r="30" fill="url(#centerOmGlow)" />
                <circle cx="400" cy="400" r="16" fill="#FFFFFF" stroke="#EA580C" strokeWidth="1.5" />
                <motion.text
                  x="400"
                  y="406"
                  textAnchor="middle"
                  fill="#EA580C"
                  fontSize="16"
                  fontFamily="'Cinzel', serif"
                  fontWeight="bold"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ transformOrigin: '400px 406px', pointerEvents: 'none' }}
                >
                  ॐ
                </motion.text>

                {/* 8. Sample Planet Glyphs Fading In */}
                {samplePlanets.map((p, idx) => (
                  <motion.g
                    key={p.glyph}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + idx * 0.08, duration: 0.4 }}
                    style={{ pointerEvents: 'none' }}
                  >
                    <circle cx={p.x} cy={p.y} r="16" fill="#FFFDF9" stroke={p.color} strokeWidth="1.2" />
                    <text
                      x={p.x}
                      y={p.y + 4.5}
                      textAnchor="middle"
                      fill={p.color}
                      fontSize="11"
                      fontFamily="'Cinzel', serif"
                      fontWeight="700"
                    >
                      {p.glyph}
                    </text>
                  </motion.g>
                ))}
              </svg>
            </div>

            {/* Caption naming the active/hovered house and its meaning */}
            <motion.div 
              className="hm-chart-legend-box"
              key={activeHouse?.num}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="hm-legend-active-row">
                <span className="hm-legend-graha-badge">
                  <Sparkles size={12} className="text-saffron" />
                  <strong>{activeHouse.title}</strong>
                </span>
              </div>
              <p className="hm-legend-mantra-text">
                {activeHouse.desc}
              </p>
              <p className="hm-chart-caption">
                Hover or tap any of the 12 houses to inspect its astrological domain
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
