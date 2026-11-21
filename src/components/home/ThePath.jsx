import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { CheckCircle2, Sparkles, Send } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import { pathSteps } from '../../data/homeContent';
import { fadeUp, viewportOnce } from './motion';

// Single Step Card that illuminates in real-time as the diya flame arrives
const PathStepCard = ({ step, idx, progress }) => {
  const threshold = idx * 0.26 + 0.05;
  
  const borderColor = useTransform(
    progress,
    [threshold - 0.08, threshold, threshold + 0.1],
    ['rgba(201, 162, 75, 0.22)', '#EA580C', '#D4AF37']
  );

  const markerBackground = useTransform(
    progress,
    [threshold - 0.08, threshold],
    ['#1A0610', '#EA580C']
  );

  const markerTextColor = useTransform(
    progress,
    [threshold - 0.08, threshold],
    ['#C9A24B', '#FFFFFF']
  );

  const cardGlow = useTransform(
    progress,
    [threshold - 0.08, threshold, threshold + 0.15],
    ['0 0 0 rgba(0,0,0,0)', '0 0 20px rgba(234, 88, 12, 0.35)', '0 0 10px rgba(212, 175, 55, 0.18)']
  );

  return (
    <motion.div
      className="hm-path-step-card"
      style={{ borderColor, boxShadow: cardGlow }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay: idx * 0.12 }}
    >
      <motion.div 
        className="hm-step-marker"
        style={{ backgroundColor: markerBackground, borderColor }}
      >
        <motion.span className="hm-step-num" style={{ color: markerTextColor }}>
          {step.num}
        </motion.span>
      </motion.div>
      <div className="hm-step-body">
        <div className="hm-step-header-meta">
          <span className="hm-step-phase">Stage {step.num}</span>
          {step.sanskrit && (
            <span className="hm-step-sanskrit">&middot; {step.sanskrit}</span>
          )}
        </div>
        <h3 className="hm-step-title">{step.title}</h3>
        <p className="hm-step-desc">{step.desc}</p>
      </div>
    </motion.div>
  );
};

export const ThePath = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress within this section for the curved diya path
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 80%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate flame progression along vertical and horizontal curve
  const flameTopPercent = useTransform(smoothProgress, [0, 1], ['4%', '94%']);
  const flameXOffset = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 14, 0, -14, 0]);

  // Connect form state
  const [form, setForm] = useState({
    firstName: '',
    phone: '',
    topic: 'Love Problem Solution / Relationship Reconciliation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = `*Consultation Request - Master Arvind*\n\n*Name:* ${form.firstName.trim()}\n*Phone:* ${form.phone.trim()}\n*Topic:* ${form.topic}\n*Details:* ${form.message.trim() || 'General inquiry'}`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(waText)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section 
      ref={containerRef}
      className="hm-section hm-path-section"
      aria-labelledby="path-title"
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
          <span className="hm-eyebrow hm-eyebrow-dark">The Methodology &middot; Four Stages</span>
          <h2 id="path-title" className="hm-section-title">
            The Path: How Master Arvind Works
          </h2>
          <p className="hm-section-lede">
            A methodical, dignified Vedic process. No theatrical claims, only precise astrological calculations and dedicated remedial practice.
          </p>
        </motion.div>

        {/* 2-Column Split: Path Steps with Curved SVG Timeline (Left) + Sticky Parchment Connect Form (Right) */}
        <div className="hm-path-layout">
          
          {/* Left Column: 4-Step Animated Curved Path Timeline */}
          <div className="hm-path-timeline-col">
            <div className="hm-path-track-wrapper">
              
              {/* Curved SVG Track running vertically */}
              <svg className="hm-curved-track-svg" viewBox="0 0 60 800" preserveAspectRatio="none" aria-hidden="true">
                {/* Background faint path */}
                <path 
                  d="M 30,10 Q 55,200 30,400 T 30,790" 
                  fill="none" 
                  stroke="rgba(201, 162, 75, 0.22)" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                />
                {/* Animated illuminated progress stroke */}
                <motion.path 
                  d="M 30,10 Q 55,200 30,400 T 30,790" 
                  fill="none" 
                  stroke="#EA580C" 
                  strokeWidth="2.5"
                  style={{ pathLength: smoothProgress }}
                />
              </svg>

              {/* Animated Diya Flame traveling down the path */}
              <motion.div 
                className="hm-path-diya-flame"
                style={{ top: flameTopPercent, x: flameXOffset }}
                aria-hidden="true"
              >
                <div className="hm-diya-glow" />
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#EA580C" className="hm-diya-svg">
                  <path d="M12 2C10.5 4.5 8 8 8 11.5c0 2.5 1.8 4.5 4 4.5s4-2 4-4.5C16 8 13.5 4.5 12 2z" />
                  <path d="M4 16c1 3.5 4.5 6 8 6s7-2.5 8-6H4z" fill="#C9A24B" />
                </svg>
              </motion.div>

              {/* 4 Sequential Steps that Light Up */}
              <div className="hm-path-steps-list">
                {pathSteps.map((step, idx) => (
                  <PathStepCard 
                    key={step.num} 
                    step={step} 
                    idx={idx} 
                    progress={smoothProgress} 
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Sticky Parchment Connect Form */}
          <div className="hm-path-form-col">
            <div className="hm-connect-sticky-card">
              
              <div className="hm-card-header">
                <span className="hm-card-icon-pill">
                  <Sparkles size={16} />
                </span>
                <h3 className="hm-connect-card-title">Begin Your Confidential Consultation</h3>
                <p className="hm-connect-card-subtitle">
                  Direct communication with Master Arvind. Thoughtful, confidential response.
                </p>
              </div>

              {submitted ? (
                <div className="hm-connect-success">
                  <CheckCircle2 size={44} className="hm-success-icon" />
                  <h4>Inquiry Sent to WhatsApp</h4>
                  <p>Master Arvind will review your birth information and respond promptly.</p>
                  <button 
                    type="button" 
                    className="hm-btn hm-btn-saffron-sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Question
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="hm-connect-form">
                  <div className="hm-form-group">
                    <label htmlFor="connect-firstName">Your First Name *</label>
                    <input 
                      id="connect-firstName"
                      type="text" 
                      name="firstName" 
                      required 
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul or Jessica"
                    />
                  </div>

                  <div className="hm-form-group">
                    <label htmlFor="connect-phone">Phone / WhatsApp Number *</label>
                    <input 
                      id="connect-phone"
                      type="tel" 
                      name="phone" 
                      required 
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 (780) 555-0192"
                    />
                  </div>

                  <div className="hm-form-group">
                    <label htmlFor="connect-topic">Area of Concern *</label>
                    <select 
                      id="connect-topic"
                      name="topic" 
                      value={form.topic}
                      onChange={handleChange}
                    >
                      <option value="Love Problem Solution / Relationship Reconciliation">Love Problem Solution / Ex Back</option>
                      <option value="Black Magic & Negative Energy Cleansing">Black Magic &amp; Negative Energy Cleansing</option>
                      <option value="Marriage Harmony & Dispute Resolution">Marriage Harmony &amp; Family Disputes</option>
                      <option value="Janam Kundli & Complete Vedic Horoscope">Janam Kundli &amp; Horoscope Reading</option>
                      <option value="Career, Business & Muhurat Timing">Career, Business &amp; Muhurat Timing</option>
                      <option value="General Life Guidance & Spiritual Peace">General Life Guidance &amp; Spiritual Peace</option>
                    </select>
                  </div>

                  <div className="hm-form-group">
                    <label htmlFor="connect-message">Brief Details of Your Situation (Optional)</label>
                    <textarea 
                      id="connect-message"
                      name="message" 
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share birth details or brief context if you wish..."
                    />
                  </div>

                  <button type="submit" className="hm-btn hm-btn-saffron hm-btn-block">
                    <Send size={16} />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>

                  <p className="hm-form-privacy-note">
                    Strict privacy. Your birth details and personal situation remain confidential.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
