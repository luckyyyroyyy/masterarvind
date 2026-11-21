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
                  <Link to={`/services/${service.id}`} className="btn-primary" style={{ padding: '9px 16px', fontSize: '0.84rem' }}>
                    <span>View Ritual & Details</span>
                  </Link>

                  <div className="catalog-quick-contacts">
                    <a 
                      href={`tel:${CONTACT_INFO.phoneLink}`}
                      className="catalog-call-btn"
                      title={`Call Master Arvind at ${CONTACT_INFO.phoneDisplay}`}
                      aria-label="Call Master Arvind"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z"/>
                      </svg>
                    </a>

                    <a 
                      href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(`Hello Master Arvind, I would like to consult about ${service.title}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="catalog-wa-btn"
                      title="Quick WhatsApp Inquiry"
                      aria-label="Chat on WhatsApp"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </a>
                  </div>
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
              <Heart size={34} className="text-love" fill="#DC2626" />
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
