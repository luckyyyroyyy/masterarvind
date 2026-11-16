import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Phone, MessageCircle, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { servicesData as allServices } from '../data/servicesData';
import { CONTACT_INFO } from '../config/contact';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Love & Relationships",
    "Healing & Protection",
    "Astrology & Readings",
    "Life & Career"
  ];

  const filteredServices = activeCategory === "All" 
    ? allServices 
    : allServices.filter(s => s.category === activeCategory);

  return (
    <div className="services-page-root animate-fade-in">
      
      {/* Hero Header */}
      <section className="services-hero-banner">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content text-center">
          <div className="section-badge love-badge" style={{ margin: '0 auto 1.25rem' }}>
            <Heart size={14} className="text-love" fill="currentColor" /> Authentic Spiritual Solutions
          </div>
          <h1 className="services-hero-title">
            Master Arvind’s <span className="gradient-text-gold">Spiritual & Love Services</span>
          </h1>
          <p className="services-hero-subtitle">
            Explore our specialized Vedic rituals, relationship problem resolutions, sacred love spells, and clairvoyant readings conducted by Edmonton's most trusted spiritual master.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="section-padding">
        
        {/* Category Filters */}
        <div className="services-filter-row">
          {categories.map(category => (
            <button 
              key={category}
              className={`filter-btn-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "Love & Relationships" && <Heart size={13} className="text-love inline-block mr-1" fill="currentColor" />}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Premium Service Cards Grid */}
        <div className="services-catalog-grid">
          {filteredServices.map((service, index) => (
            <div key={service.id} className="service-catalog-card glass-panel">
              <div className="catalog-image-wrap">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="catalog-img" 
                  onError={(e) => { e.target.src = "/images/services/consult-best-astrologer.webp"; }}
                />
                <span className="catalog-badge">{service.badge || service.category}</span>
              </div>

              <div className="catalog-card-content">
                <span className="catalog-category-tag">{service.category}</span>
                <h3 className="catalog-title">{service.title}</h3>
                <p className="catalog-desc">{service.shortDesc}</p>

                {service.benefits && (
                  <ul className="catalog-benefits-list">
                    {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <li key={bIdx}>
                        <CheckCircle size={13} className="text-gold" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="catalog-actions-bar">
                  <Link to={`/services/${service.id}`} className="btn-primary" style={{ padding: '9px 18px', fontSize: '0.84rem' }}>
                    <span>View Ritual & Details</span>
                  </Link>

                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(`Hello Master Arvind, I would like to consult about ${service.title}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="catalog-wa-btn"
                    title="Quick WhatsApp Inquiry"
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Urgent CTA */}
      <section className="services-cta-banner">
        <div className="services-cta-container section-padding text-center">
          <div className="services-cta-box glass-panel">
            <div className="cta-icon-circle">
              <Heart size={34} className="text-love" fill="#C2185B" />
            </div>
            <h2 className="services-cta-title">
              Unsure Which Spiritual Remedy Fits Your Love Dilemma?
            </h2>
            <p className="services-cta-subtitle">
              Master Arvind provides immediate personal assessments. Call or message us directly on WhatsApp for guidance tailored to your birth chart and situation.
            </p>
            <div className="services-cta-buttons">
              <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-primary">
                <Phone size={18} /> Call: {CONTACT_INFO.phoneDisplay}
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I need advice on which spiritual service is right for my situation.")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-whatsapp"
              >
                <MessageCircle size={18} /> WhatsApp Live Advice
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
