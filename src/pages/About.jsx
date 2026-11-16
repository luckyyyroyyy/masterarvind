import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Award, Sparkles, Compass, CheckCircle, PhoneCall, 
  MessageCircle, Heart, Star, MapPin, Clock, ArrowRight, Eye, Sun
} from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import './About.css';

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

  const stats = [
    {
      icon: <Award className="text-gold" size={32} />,
      num: "25+",
      label: "Years of Mastery",
      sub: "Vedic Lineage"
    },
    {
      icon: <Heart className="text-love" size={32} fill="#C2185B" />,
      num: "30k+",
      label: "Couples Reunited",
      sub: "Across Canada & USA"
    },
    {
      icon: <CheckCircle className="text-gold" size={32} />,
      num: "99.4%",
      label: "Resolution Rate",
      sub: "Documented Success"
    },
    {
      icon: <Shield className="text-gold" size={32} />,
      num: "100%",
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
            </div>
          </motion.div>

          {/* Portrait with Floating Badges & Sacred Glow */}
          <motion.div 
            className="about-story-image-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          >
            <div className="about-portrait-card-wrapper">
              
              {/* Floating Badge Top Right */}
              <motion.div 
                className="about-floating-badge badge-top-right"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <Sparkles size={16} className="text-gold" />
                <div>
                  <strong>25+ Years Legacy</strong>
                  <span>Hereditary Master</span>
                </div>
              </motion.div>

              {/* Main Portrait Card */}
              <div className="about-portrait-card glass-panel">
                <div className="about-portrait-img-box">
                  <img 
                    src="/images/services/consult-best-astrologer.webp" 
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

              {/* Floating Badge Bottom Left */}
              <motion.div 
                className="about-floating-badge badge-bottom-left"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.5 }}
              >
                <Heart size={16} className="text-love" fill="#C2185B" />
                <div>
                  <strong>99.4% Reunion Rate</strong>
                  <span>Edmonton Sanctuary</span>
                </div>
              </motion.div>

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
              <span className="stat-big-num">{stat.num}</span>
              <span className="stat-caption">{stat.label}</span>
              <span className="stat-subcaption">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Core Spiritual Principles with Staggered Entrance & Hover Glow */}
      <section className="about-values-section section-padding">
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
