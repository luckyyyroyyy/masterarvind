import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Shield, Award, Sparkles, Compass, CheckCircle, PhoneCall, 
  MessageCircle, Heart, Star, MapPin, Clock, ArrowRight, Eye, Sun
} from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import './About.css';

// Precision Animated Growing Stat Counter for About Page
const StatCounter = ({ target, suffix = "", decimals = 0, formatComma = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    let startTime = null;
    let animationFrameId;
    const duration = 2000;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * target;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : formatComma 
      ? Math.floor(displayValue).toLocaleString() 
      : Math.floor(displayValue).toString();

  return (
    <motion.span 
      ref={ref} 
      className="stat-big-num growing-number"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {formatted}{suffix}
    </motion.span>
  );
};

const About = () => {
  const [activeInstrument, setActiveInstrument] = useState(0);

  const instruments = [
    {
      name: "Vedic Love Synastry Charts",
      description: "Calculated with to-the-minute astronomical precision based on ancient Jyotish mathematics. Master Arvind compares both lovers' charts to reveal karmic bonds, planetary clashes (Venus-Mars-Rahu), and the exact auspicious timing for reconciliation.",
      image: "/images/astrology_birth_chart_1786437182041.png",
      counter: "30k+",
      trustText: "Over 30,000+ synastry charts analyzed",
      tags: ["Jyotish Accuracy", "Karmic Bonds", "Timing Calculation"]
    },
    {
      name: "Sacred Love & Clairvoyant Tarot",
      description: "Esoteric tarot spreads channeled during deep meditation to reveal the unspoken feelings, hidden thoughts, and future intentions of your partner or ex. It provides immediate, unfiltered clarity on relationship crossroads.",
      image: "/images/astrology_tarot_cards_1786433937486.png",
      counter: "25k+",
      trustText: "Trusted by 25,000+ love seekers",
      tags: ["Clairvoyant Insight", "Unspoken Feelings", "Clear Timelines"]
    },
    {
      name: "Energy Cord Cleansing Crystals",
      description: "Resonant energized crystals and consecrated geometric yantras used during Master Arvind's intensive spiritual rituals to sever toxic third-party cords, break the evil eye (Nazar), and amplify love attraction.",
      image: "/images/astrology_healing_crystals_1786437220476.png",
      counter: "10k+",
      trustText: "Purified 10,000+ auric fields",
      tags: ["Aura Cleansing", "Cut Third-Party Cords", "White-Light Healing"]
    }
  ];

  // Auto-rotate spiritual instruments every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveInstrument((prev) => (prev + 1) % instruments.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [instruments.length]);

  const stats = [
    {
      icon: <Award className="text-gold" size={32} />,
      target: 25,
      suffix: "+",
      decimals: 0,
      label: "Years of Mastery",
      sub: "Vedic Lineage"
    },
    {
      icon: <Heart className="text-love" size={32} fill="#C2185B" />,
      target: 30,
      suffix: "k+",
      decimals: 0,
      label: "Couples Reunited",
      sub: "Across Canada & USA"
    },
    {
      icon: <CheckCircle className="text-gold" size={32} />,
      target: 99.4,
      suffix: "%",
      decimals: 1,
      label: "Resolution Rate",
      sub: "Documented Success"
    },
    {
      icon: <Shield className="text-gold" size={32} />,
      target: 100,
      suffix: "%",
      decimals: 0,
      label: "Confidentiality",
      sub: "Strict Sanctuary Pledge"
    }
  ];

  const values = [
    {
      icon: <Shield className="text-gold" size={30} />,
      title: "Absolute Discretion",
      description: "Every consultation is conducted under the strictest pledge of confidentiality. Your identity, photos, and personal situations are sacredly safeguarded.",
      accent: "gold"
    },
    {
      icon: <Sparkles className="text-love" size={30} />,
      title: "100% White-Light Rituals",
      description: "No negative karma, no harm, and no destructive forces. Master Arvind works solely with sacred divine energies and positive cosmic universal frequencies.",
      accent: "love"
    },
    {
      icon: <Compass className="text-gold" size={30} />,
      title: "Actionable & Lasting Results",
      description: "We do not offer vague platitudes. You receive concrete timelines, personalized mantras, and clear spiritual direction to permanently restore harmony.",
      accent: "gold"
    }
  ];

  return (
    <div className="about-page-root">

      {/* 1. Hero Section with Animated Ambient Orbs */}
      <section className="about-hero-section">
        <div className="about-hero-orb orb-1"></div>
        <div className="about-hero-orb orb-2"></div>
        <div className="about-hero-orb orb-3"></div>

        <div className="about-hero-content">
          <motion.div 
            className="section-badge love-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ margin: '0 auto 1.5rem auto' }}
          >
            <Heart size={14} className="text-love" fill="currentColor" /> Authentic Vedic Master
          </motion.div>

          <motion.h1 
            className="about-hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Meet <span className="gradient-text-gold">Master Arvind</span>
          </motion.h1>

          <motion.p 
            className="about-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Canada’s trusted authority on love reconciliation, sacred Vedic rituals, and spiritual problem solving with over 25 years of divine mastery in Edmonton, AB.
          </motion.p>

          <motion.div 
            className="about-hero-tags"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <span className="hero-pill-tag"><Sun size={14} className="text-gold" /> Vedic Jyotish Master</span>
            <span className="hero-pill-tag"><Heart size={14} className="text-love" fill="#C2185B" /> Get Ex Love Back Specialist</span>
            <span className="hero-pill-tag"><MapPin size={14} className="text-gold" /> Edmonton Sanctuary</span>
            <span className="hero-pill-tag"><Shield size={14} className="text-gold" /> 100% Private</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission & Personal Story with Slide & Floating Badges */}
      <section className="about-story-section section-padding">
        <div className="about-story-container">
          
          <motion.div 
            className="about-story-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="section-badge">
              <Award size={14} className="text-gold" /> Divine Heritage
            </div>

            <h2 className="about-section-heading">
              Dedicated to Reconnecting Hearts & <span className="gradient-text-love">Restoring Peace</span>
            </h2>

            <p className="about-text-lead">
              For over two and a half decades, <strong>Master Arvind</strong> has served as a beacon of hope for thousands of individuals caught in the storm of heartbreak, emotional separation, and marital breakdown.
            </p>

            <p className="about-text-body">
              Born into a revered lineage of Vedic astrologers and spiritual healers, Master Arvind was initiated into the sacred sciences of Jyotish, Mantra Shastra, and psychic channeling at an early age. His deep empathy and uncompromising spiritual ethics have earned him a reputation as Edmonton’s premier astrologer.
            </p>

            <p className="about-text-body">
              Master Arvind believes that true love is the highest cosmic vibration in the universe. When relationships falter due to temporary planetary afflictions, ego clashes, or jealous interference, his sacred white-light remedies gently dissolve obstacles and reunite souls in unconditional devotion.
            </p>

            <div className="about-contact-buttons">
              <motion.a 
                href={`tel:${CONTACT_INFO.phoneLink}`} 
                className="btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <PhoneCall size={18} />
                <span>Call: {CONTACT_INFO.phoneDisplay}</span>
              </motion.a>

              <motion.a 
                href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to book a private consultation.")}`} 
                className="btn-whatsapp" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp Master</span>
              </motion.a>

              <div className="about-social-icons-group">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-btn btn-facebook"
                  title="Follow Master Arvind on Facebook"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-btn btn-instagram"
                  title="Follow Master Arvind on Instagram"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="about-social-btn btn-youtube"
                  title="Follow Master Arvind on YouTube"
                  aria-label="YouTube"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Portrait with Sacred Glow */}
          <motion.div 
            className="about-story-image-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          >
            <div className="about-portrait-card-wrapper">

              {/* Main Portrait Card */}
              <div className="about-portrait-card glass-panel">
                <div className="about-portrait-img-box">
                  <img 
                    src="/images/services/master-arvind-portrait.jpg" 
                    alt="Master Arvind" 
                    className="about-portrait-img" 
                    onError={(e) => { e.target.src = "/images/services/Master Jai Bn-1.webp"; }}
                  />
                  <div className="about-portrait-shine"></div>
                </div>

                <div className="about-portrait-meta">
                  <div className="meta-icon">
                    <Star size={24} className="fill-gold" />
                  </div>
                  <div>
                    <strong>Master Arvind</strong>
                    <p>{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Global & Canadian Impact Stats with Staggered Pop-in */}
      <section className="about-stats-strip">
        <div className="about-stats-container">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              className="about-stat-box glass-panel"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ 
                y: -6, 
                scale: 1.03,
                boxShadow: "0 18px 36px rgba(194, 24, 91, 0.12)"
              }}
            >
              <div className="stat-icon-wrapper mb-2">
                {stat.icon}
              </div>
              <StatCounter 
                target={stat.target} 
                suffix={stat.suffix} 
                decimals={stat.decimals} 
              />
              <span className="stat-caption">{stat.label}</span>
              <span className="stat-subcaption">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Core Spiritual Principles with Staggered Entrance & Hover Glow */}
      <section className="about-values-section">
        <div className="about-values-container">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge love-badge">
              <Shield size={14} className="text-love" /> Our Guiding Code
            </div>
            <h2 className="section-title">
              Master Arvind's <span className="gradient-text-gold">Core Principles</span>
            </h2>
            <p className="section-subtitle">
              Ethical, transparent, and results-driven spiritual guidance you can trust with your most delicate personal matters.
            </p>
          </motion.div>

          <div className="about-values-grid">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                className={`about-value-card glass-panel accent-${val.accent}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 18px 40px rgba(184, 134, 11, 0.15)"
                }}
              >
                <div className="val-icon-wrap">
                  {val.icon}
                </div>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sacred Instruments with AnimatePresence Tab Switching */}
      <section className="about-instruments-section section-padding">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <Sparkles size={14} className="text-gold" /> Ancient Divine Tools
          </div>
          <h2 className="section-title">
            Our Sacred <span className="gradient-text-love">Spiritual Instruments</span>
          </h2>
          <p className="section-subtitle">
            Explore the traditional tools Master Arvind employs to diagnose karmic blockages and channel powerful healing energies.
          </p>
        </motion.div>

        <motion.div 
          className="instruments-panel-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="instruments-nav-tabs">
            {instruments.map((inst, idx) => (
              <motion.button
                key={idx}
                className={`inst-tab-btn ${activeInstrument === idx ? 'active' : ''}`}
                onClick={() => setActiveInstrument(idx)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{inst.name}</span>
                {activeInstrument === idx && (
                  <motion.div 
                    className="active-tab-glow" 
                    layoutId="activeTabGlow"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeInstrument}
              className="inst-display-area"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="inst-image-side">
                <div className="inst-img-wrapper">
                  <img src={instruments[activeInstrument].image} alt={instruments[activeInstrument].name} />
                  <div className="inst-floating-chip">
                    <Sparkles size={14} className="text-gold" />
                    <span>{instruments[activeInstrument].counter} Consultations</span>
                  </div>
                </div>
              </div>

              <div className="inst-info-side">
                <div className="inst-tags-row">
                  {instruments[activeInstrument].tags.map((tag, tIdx) => (
                    <span key={tIdx} className="inst-tag-pill">{tag}</span>
                  ))}
                </div>

                <h3 className="inst-name-title">{instruments[activeInstrument].name}</h3>
                
                <p className="inst-description-text">
                  {instruments[activeInstrument].description}
                </p>

                <div className="inst-trust-strip">
                  <CheckCircle size={18} className="text-gold" />
                  <span>{instruments[activeInstrument].trustText}</span>
                </div>

                <div className="inst-cta-row">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <Link to="/book" className="btn-primary">
                      <span>Book Private Session</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-outline">
                      <PhoneCall size={16} />
                      <span>Call Master Arvind</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </motion.div>
      </section>

      {/* 6. Bottom Sanctuary Callout with Floating Bobbing Pin */}
      <section className="about-bottom-cta section-padding text-center">
        <motion.div 
          className="about-cta-box glass-panel"
          initial={{ opacity: 0, scale: 0.96, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          whileHover={{ boxShadow: "0 20px 50px rgba(194, 24, 91, 0.12)" }}
        >
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
            style={{ display: 'inline-block' }}
          >
            <div className="sanctuary-icon-circle">
              <MapPin size={34} className="text-gold" />
            </div>
          </motion.div>

          <h2>Visit Our Edmonton Sanctuary Or Call Today</h2>
          
          <p className="about-cta-lead-text">
            Conveniently located at <strong>{CONTACT_INFO.address}</strong>. Private appointments available in-person or via Phone/WhatsApp daily across Canada & USA.
          </p>

          <div className="about-cta-actions">
            <motion.a 
              href={`tel:${CONTACT_INFO.phoneLink}`} 
              className="btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <PhoneCall size={18} /> Call: {CONTACT_INFO.phoneDisplay}
            </motion.a>

            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link to="/book" className="btn-gold">
                Schedule Appointment
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
