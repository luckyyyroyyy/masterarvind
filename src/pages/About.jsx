import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Sparkles, Compass, BookOpen, Globe, Users, CheckCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import './About.css';

const About = () => {
  const [activeInstrument, setActiveInstrument] = useState(0);

  const instruments = [
    {
      name: "Vedic Birth Charts",
      description: "Calculated with to-the-minute precision based on ancient Jyotish mathematics, the birth chart is the fundamental blueprint of your soul's journey. It reveals karma, inherent strengths, and cosmic timing.",
      image: "/images/astrology_birth_chart_1786437182041.png",
      avatars: ["https://i.pravatar.cc/100?img=44", "https://i.pravatar.cc/100?img=12", "https://i.pravatar.cc/100?img=5"],
      counter: "15k+",
      trustText: "Join 15,000+ chart seekers"
    },
    {
      name: "The Tarot",
      description: "A rich tapestry of esoteric symbolism used for immediate, intuitive answers. Our grandmasters use the cards not to predict a fixed future, but to reveal the hidden undercurrents of your present reality.",
      image: "/images/astrology_tarot_cards_1786433937486.png",
      avatars: ["https://i.pravatar.cc/100?img=16", "https://i.pravatar.cc/100?img=33", "https://i.pravatar.cc/100?img=22"],
      counter: "20k+",
      trustText: "Trusted by 20,000+ clients"
    },
    {
      name: "Crystal Matrices",
      description: "Specific resonant stones and geometric grid formations used to clear energetic blockages during our most intensive healing sessions, amplifying the power of our spiritual remedies.",
      image: "/images/astrology_healing_crystals_1786437220476.png",
      avatars: ["https://i.pravatar.cc/100?img=9", "https://i.pravatar.cc/100?img=64", "https://i.pravatar.cc/100?img=28"],
      counter: "5k+",
      trustText: "Chosen by 5,000+ healers"
    }
  ];

  return (
    <div className="about-pro-page animate-fade-in">

      {/* 1. Hero Section */}
      <section className="about-pro-hero">
        <div className="about-pro-hero-overlay"></div>
        <div className="about-pro-hero-content">
          <h1 className="pro-hero-title">Empowering Lives Through Cosmic Clarity</h1>
          <p className="pro-hero-subtitle">Premium astrological guidance tailored for the modern truth-seeker.</p>
        </div>
      </section>

      {/* 2. Mission & Vision (Two-Column) */}
      <section className="mission-section section-padding">
        <div className="mission-container">
          <div className="mission-content">
            <h2 className="pro-section-title">Our Mission</h2>
            <p className="pro-text-lead">
              For over two decades, {CONTACT_INFO.name} has been the guiding light for thousands of individuals seeking spiritual answers. We believe that the universe has a distinct plan for everyone, and our mission is to help you uncover it with clarity and confidence.
            </p>
            <p className="pro-text-body" style={{ marginBottom: '2rem' }}>
              Whether you are navigating career transitions, facing complex relationship dynamics, or seeking a deeper understanding of your life's true purpose, our authentic and profoundly accurate readings are designed to illuminate your path. We combine ancient Vedic wisdom with modern psychological framing to provide guidance that is not just insightful, but deeply actionable.
            </p>
            <div className="mission-contact-buttons">
              <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-primary animate-pulse-slow">
                <PhoneCall size={20} /> Call Now
              </a>
              <a href={`https://wa.me/${CONTACT_INFO.whatsappLink}`} className="btn-whatsapp animate-pulse-slow" target="_blank" rel="noreferrer">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="mission-image-wrapper">
            <img src="/images/944911565587737657.jpg" alt={`${CONTACT_INFO.name} Mission`} className="mission-image glass-panel" />
          </div>
        </div>
      </section>

      {/* 3. Global Impact Stats */}
      <section className="impact-stats-section">
        <div className="impact-stats-container">
          <div className="impact-stat glass-panel">
            <Globe className="text-gold mb-3" size={32} />
            <span className="impact-number">120+</span>
            <span className="impact-label">Countries Reached</span>
          </div>
          <div className="impact-stat glass-panel">
            <Users className="text-gold mb-3" size={32} />
            <span className="impact-number">50k+</span>
            <span className="impact-label">Readings Delivered</span>
          </div>
          <div className="impact-stat glass-panel">
            <CheckCircle className="text-gold mb-3" size={32} />
            <span className="impact-number">99%</span>
            <span className="impact-label">Client Satisfaction</span>
          </div>
        </div>
      </section>

      {/* 3.5 Our Methodology */}
      <section className="methodology-section section-padding" style={{ paddingTop: '2rem' }}>
        <h2 className="pro-section-title text-center">Our Methodology</h2>
        <div className="methodology-grid">
          <div className="methodology-step">
            <div className="step-number text-gold">01</div>
            <h3>Natal Analysis</h3>
            <p>We begin by casting a highly precise chart based on your exact time and coordinates of birth to map your celestial blueprint.</p>
          </div>
          <div className="methodology-step">
            <div className="step-number text-gold">02</div>
            <h3>Planetary Transits</h3>
            <p>We analyze the current movement of the cosmos and how it actively interacts with your foundational natal energies.</p>
          </div>
          <div className="methodology-step">
            <div className="step-number text-gold">03</div>
            <h3>Spiritual Remedies</h3>
            <p>Finally, we provide actionable guidance, from Vedic Poojas to psychological framing, to help you overcome cosmic friction.</p>
          </div>
        </div>
      </section>

      {/* 4. Core Values Grid */}
      <section className="values-section section-padding" style={{ paddingTop: '0' }}>
        <h2 className="pro-section-title text-center">Our Core Principles</h2>
        <div className="values-grid">
          <div className="value-card glass-panel">
            <Shield className="text-gold mb-4" size={36} />
            <h3>Strict Confidentiality</h3>
            <p>Your privacy is our paramount concern. We uphold the strictest standards of discretion for all our private and high-profile clients.</p>
          </div>
          <div className="value-card glass-panel">
            <Sparkles className="text-gold mb-4" size={36} />
            <h3>Uncompromising Authenticity</h3>
            <p>No generic interpretations. Every reading is a deeply personal, unscripted channel into your unique celestial blueprint.</p>
          </div>
          <div className="value-card glass-panel">
            <Compass className="text-gold mb-4" size={36} />
            <h3>Actionable Guidance</h3>
            <p>We do not dictate your fate. We reveal the cosmic energies at play so you can make empowered, confident decisions for your future.</p>
          </div>
        </div>
      </section>

      {/* 5. Sacred Instruments (Interactive) */}
      <section className="instruments-section section-padding" style={{ paddingTop: '0' }}>
        <h2 className="pro-section-title" style={{ textAlign: 'center' }}>Our Sacred Instruments</h2>
        <p className="text-secondary mb-5 mx-auto" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>Explore the tools of the trade our master astrologers use to decode the universe and guide your journey.</p>

        <div className="instruments-container glass-panel">
          <div className="instruments-tabs">
            {instruments.map((inst, idx) => (
              <button
                key={idx}
                className={`instrument-tab ${activeInstrument === idx ? 'active' : ''}`}
                onClick={() => setActiveInstrument(idx)}
              >
                {inst.name}
              </button>
            ))}
          </div>

          <div className="instrument-content-area">
            <div className="instrument-image-wrapper">
              <img src={instruments[activeInstrument].image} alt={instruments[activeInstrument].name} className="animate-fade-in" key={activeInstrument} />
            </div>
            <div className="instrument-text animate-fade-in" key={`text-${activeInstrument}`}>
              <h3 className="text-gold mb-3 text-2xl">{instruments[activeInstrument].name}</h3>
              <p className="text-secondary leading-relaxed text-lg" style={{ lineHeight: 1.8, marginBottom: '2rem' }}>
                {instruments[activeInstrument].description}
              </p>
              
              <ul className="trust-bullets">
                <li><Shield size={16} className="text-gold"/> 100% Confidential & Secure</li>
                <li><CheckCircle size={16} className="text-gold"/> Board Certified Master Astrologers</li>
                <li><Sparkles size={16} className="text-gold"/> Deeply Personalized Insights</li>
              </ul>
              
              <div className="avatar-stack-wrapper">
                <div className="avatar-stack">
                  {instruments[activeInstrument].avatars.map((av, i) => (
                    <img key={i} src={av} alt={`Client ${i+1}`} className="stack-avatar" />
                  ))}
                  <div className="stack-counter">{instruments[activeInstrument].counter}</div>
                </div>
                <span className="stack-text">{instruments[activeInstrument].trustText}</span>
              </div>

              <div className="instrument-actions">
                <Link to="/book" className="btn-primary">Book Session</Link>
                <Link to="/services" className="btn-outline">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Trust & Media */}
      <section className="media-trust-section">
        <p className="media-trust-title">TRUSTED BY SEEKERS WORLDWIDE & FEATURED IN</p>
        <div className="media-trust-logos">
          <span className="media-logo">COSMIC TIMES</span>
          <span className="media-logo">THE DAILY MYSTIC</span>
          <span className="media-logo">ASTRAL LIVING</span>
          <span className="media-logo">SPIRITUALITY TODAY</span>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="pro-cta-section section-padding text-center" style={{ paddingTop: '1rem' }}>
        <h2 className="pro-section-title" style={{ textAlign: 'center' }}>Your Cosmic Blueprint Awaits</h2>
        <p className="pro-cta-text mb-5 mx-auto" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
          The stars hold the answers you seek. Our master astrologers are ready to guide you towards a future of clarity and purpose.
        </p>
        <div className="pro-cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <Link to="/book" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>Book a Consultation</Link>
          <Link to="/services" className="btn-outline" style={{ padding: '1rem 2.5rem' }}>View All Services</Link>
        </div>
      </section>

    </div>
  );
};

export default About;
