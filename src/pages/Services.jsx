import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData as allServices } from '../data/servicesData';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Love & Relationships",
    "Healing & Protection",
    "Life & Career",
    "Astrology & Readings"
  ];

  const filteredServices = activeCategory === "All" 
    ? allServices 
    : allServices.filter(s => s.category === activeCategory);

  return (
    <div className="page-wrapper animate-fade-in">
      
      {/* Hero Header */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Premium Services</h1>
          <p className="services-hero-subtitle">
            Explore our comprehensive range of 20 unique astrological and spiritual services, each designed to bring you peace, clarity, and success.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div style={{ padding: '1rem 0 4rem 0' }}>
        
        {/* Category Filters */}
        <div className="services-filter-container">
          {categories.map(category => (
            <button 
              key={category}
              className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Premium Image Cards Grid */}
        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div key={index} className="service-card-premium">
              <div className="service-card-image-wrapper">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-card-image" 
                  onError={(e) => { e.target.src = "/images/services/consult-best-astrologer.webp" }}
                />
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>
                <div className="service-card-action">
                  <Link to={`/services/${service.id}`} className="btn-outline" style={{ width: '100%', display: 'inline-block' }}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom CTA */}
      <section className="services-cta">
        <h2>Ready to align your stars?</h2>
        <p>Whether you're seeking clarity in love, spiritual healing, or guidance for your career, our master astrologers are ready to guide you towards a brighter future.</p>
        <Link to="/book" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
          Schedule a Session Today
        </Link>
      </section>

    </div>
  );
};

export default Services;
