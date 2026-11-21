import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquarePlus, X, Send, ChevronRight, ChevronLeft } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import { clientVoices } from '../../data/homeContent';
import { fadeUp, viewportOnce } from './motion';

export const Voices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const trackRef = useRef(null);

  // Review form state
  const [form, setForm] = useState({
    name: '',
    city: 'Edmonton, AB',
    service: 'Love Problem Solution / Ex Back',
    rating: 5,
    text: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Update track scroll progress bar
  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const stars = '★'.repeat(form.rating);
    const message = `*Client Review Submission - Master Arvind*\n\n*Name:* ${form.name}\n*City:* ${form.city}\n*Service:* ${form.service}\n*Rating:* ${stars} (${form.rating}/5)\n*Experience:* "${form.text}"`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setForm({ name: '', city: 'Edmonton, AB', service: 'Love Problem Solution / Ex Back', rating: 5, text: '' });
    }, 1800);
  };

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="hm-section hm-voices-section"
      aria-labelledby="voices-title"
    >
      <div className="hm-container">
        
        {/* Section Header */}
        <div className="hm-voices-header-row">
          <motion.div 
            className="hm-section-header-left"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="hm-eyebrow">Client Accounts &middot; Authentic Guidance</span>
            <h2 id="voices-title" className="hm-section-title">
              Voices Across Canada
            </h2>
            <p className="hm-section-lede">
              Read how individuals and couples found emotional reconciliation, career timing, and spiritual peace through Vedic counsel.
            </p>
          </motion.div>

          {/* Action buttons on desktop */}
          <div className="hm-voices-top-actions">
            <button 
              type="button" 
              className="hm-btn hm-btn-outline"
              onClick={() => setIsModalOpen(true)}
            >
              <MessageSquarePlus size={16} />
              <span>Write a Review</span>
            </button>
            <div className="hm-carousel-arrows">
              <button 
                type="button" 
                className="hm-arrow-btn"
                onClick={handlePrev}
                aria-label="Previous review card"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                type="button" 
                className="hm-arrow-btn"
                onClick={handleNext}
                aria-label="Next review card"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable / Draggable Review Cards Strip with Alternating Tilt */}
        <div className="hm-voices-strip-wrapper">
          <div 
            ref={trackRef}
            className="hm-voices-track" 
            tabIndex={0}
            role="region"
            aria-label="Client review cards"
          >
            {clientVoices.map((voice, idx) => {
              const isEven = idx % 2 === 0;
              const tiltClass = isEven ? 'is-tilt-even' : 'is-tilt-odd';

              return (
                <article 
                  key={voice.id || voice.name || idx} 
                  className={`hm-voice-card ${tiltClass}`}
                >
                  {/* 5-Star Row without third-party badge */}
                  <div className="hm-voice-stars" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>

                  {/* Sample Quote Placeholder */}
                  <blockquote className="hm-voice-quote">
                    &ldquo;{voice.quote}&rdquo;
                  </blockquote>

                  {/* Author Info with Profile Avatar Photo */}
                  <div className="hm-voice-author-bar">
                    <div className="hm-voice-avatar-wrap">
                      {voice.avatar ? (
                        <img 
                          src={voice.avatar} 
                          alt={voice.name} 
                          className="hm-voice-avatar-img"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className="hm-voice-avatar-fallback"
                        style={{ display: voice.avatar ? 'none' : 'flex' }}
                        aria-hidden="true"
                      >
                        {voice.initials || voice.name.slice(0, 2).toUpperCase()}
                      </div>
                    </div>
                    <div className="hm-voice-meta">
                      <p className="hm-voice-name">{voice.name}</p>
                      <p className="hm-voice-location">{voice.city} &middot; <span className="hm-voice-service">{voice.service}</span></p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Scroll Progress Bar */}
          <div className="hm-voices-progress-track" aria-hidden="true">
            <div 
              className="hm-voices-progress-thumb" 
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
            />
          </div>
        </div>

        {/* Mobile Write a Review Button */}
        <div className="hm-voices-mobile-cta">
          <button 
            type="button" 
            className="hm-btn hm-btn-outline hm-btn-block"
            onClick={() => setIsModalOpen(true)}
          >
            <MessageSquarePlus size={16} />
            <span>Write a Client Review</span>
          </button>
        </div>

      </div>

      {/* Write a Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="hm-modal-backdrop" onClick={() => setIsModalOpen(false)}>
            <motion.div 
              className="hm-review-modal-card"
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-review-title"
            >
              <div className="hm-modal-header">
                <h3 id="modal-review-title" className="hm-modal-title">Share Your Consultation Experience</h3>
                <button 
                  type="button" 
                  className="hm-modal-close-btn"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {submitted ? (
                <div className="hm-modal-success">
                  <Star size={44} fill="#D4AF37" color="#D4AF37" />
                  <h4>Thank You For Sharing</h4>
                  <p>Your review has been dispatched to Master Arvind.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="hm-review-form">
                  <div className="hm-form-group">
                    <label htmlFor="rev-name">Your Name *</label>
                    <input 
                      id="rev-name"
                      type="text" 
                      required 
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Gurpreet S. or Melissa T."
                    />
                  </div>

                  <div className="hm-form-row hm-form-two-col">
                    <div className="hm-form-group">
                      <label htmlFor="rev-city">Your City *</label>
                      <input 
                        id="rev-city"
                        type="text" 
                        required 
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="e.g. Edmonton, AB"
                      />
                    </div>
                    <div className="hm-form-group">
                      <label htmlFor="rev-rating">Rating *</label>
                      <select 
                        id="rev-rating"
                        value={form.rating}
                        onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                      >
                        <option value={5}>5 Stars (Exceptional)</option>
                        <option value={4}>4 Stars (Very Good)</option>
                        <option value={3}>3 Stars (Good)</option>
                      </select>
                    </div>
                  </div>

                  <div className="hm-form-group">
                    <label htmlFor="rev-service">Consultation Service Received</label>
                    <input 
                      id="rev-service"
                      type="text" 
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      placeholder="e.g. Ex Love Back or Kundli Reading"
                    />
                  </div>

                  <div className="hm-form-group">
                    <label htmlFor="rev-text">Your Experience &amp; Outcome *</label>
                    <textarea 
                      id="rev-text"
                      required 
                      rows={4}
                      value={form.text}
                      onChange={(e) => setForm({ ...form, text: e.target.value })}
                      placeholder="Describe Master Arvind's guidance and how it impacted your situation..."
                    />
                  </div>

                  <button type="submit" className="hm-btn hm-btn-saffron hm-btn-block">
                    <Send size={15} />
                    <span>Submit Review to Master Arvind</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
