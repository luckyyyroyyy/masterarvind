import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Star, CheckCircle, Quote, ArrowRight, ShieldCheck, PhoneCall, MessageCircle, ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  
  // Find the matching service from the rich data file
  const service = servicesData.find(s => s.id === id);

  // If service doesn't exist, redirect to main services page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Calculate unique avatar IDs based on the service index
  const serviceIndex = servicesData.findIndex(s => s.id === id);
  const avatarOffset = serviceIndex * 4;

  return (
    <div className="page-wrapper animate-fade-in">
      
      {/* Partition Hero Section */}
      <section className="service-detail-hero" style={{ position: 'relative' }}>
        <Link to="/services" className="back-to-services-btn top-left-back">
          <ArrowLeft size={18} />
          <span className="hide-on-mobile">Back to all services</span>
        </Link>
        
        <div className="hero-partition-left">
          <div className="service-detail-hero-content">
            <span className="service-detail-hero-category">{service.category}</span>
            <h1 className="service-detail-hero-title">{service.title}</h1>
            <p className="service-hero-desc">
              {service.shortDesc}
            </p>
            
            <div className="hero-trust-building">
              <div className="trust-avatars">
                <img src={`https://randomuser.me/api/portraits/women/${(avatarOffset + 11) % 99}.jpg`} alt="Client" />
                <img src={`https://randomuser.me/api/portraits/men/${(avatarOffset + 22) % 99}.jpg`} alt="Client" />
                <img src={`https://randomuser.me/api/portraits/women/${(avatarOffset + 33) % 99}.jpg`} alt="Client" />
                <img src={`https://randomuser.me/api/portraits/men/${(avatarOffset + 44) % 99}.jpg`} alt="Client" />
                <div className="trust-avatar-more">10k+</div>
              </div>
              <div className="trust-text">
                <div className="trust-stars">
                  <Star size={16} className="fill-gold text-gold" />
                  <Star size={16} className="fill-gold text-gold" />
                  <Star size={16} className="fill-gold text-gold" />
                  <Star size={16} className="fill-gold text-gold" />
                  <Star size={16} className="fill-gold text-gold" />
                </div>
                <span>Trusted by thousands globally</span>
              </div>
            </div>

          </div>
        </div>
        <div className="hero-partition-right">
          <img 
            src={service.image} 
            alt={service.title} 
            className="service-detail-bg-image"
            onError={(e) => { e.target.src = "/images/services/consult-best-astrologer.webp" }}
          />
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <div className="service-detail-container">
        
        {/* Left Column: Deep Information */}
        <div className="service-main-content">
          <h2>About This Service</h2>
          <p className="service-description" style={{ marginBottom: '2rem' }}>{service.longDesc}</p>

          <div className="service-contact-buttons">
            <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-primary">
              <PhoneCall size={20} /> Call Now
            </a>
            <a href={`https://wa.me/${CONTACT_INFO.whatsappLink}`} className="btn-whatsapp" target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>

          <h2>Our Methodology</h2>
          <div className="methodology-list">
            {service.methodology.map((step, index) => (
              <div key={index} className="methodology-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <CheckCircle size={24} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky CTA Sidebar */}
        <aside>
          <div className="service-sidebar">
            <h3>Ready to Begin?</h3>
            <p>Our master astrologers are ready to guide you on your spiritual journey with {service.title}.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              <ShieldCheck size={18} className="text-gold" />
              <span style={{ fontSize: '0.9rem' }}>100% Confidential</span>
            </div>
            <Link to="/book" className="btn-primary">
              Book a Session
            </Link>
            <Link to="/contact" className="btn-outline" style={{ width: '100%' }}>
              Have Questions?
            </Link>
          </div>
        </aside>

      </div>

      {/* Dedicated Testimonials Section */}
      <section className="service-testimonials">
        <div className="testimonials-inner">
          <h2>Success Stories</h2>
          <div className="testimonials-grid">
            {service.testimonials.map((testimonial, index) => {
              // Alternate genders and use offset for uniqueness
              const gender = index % 2 === 0 ? 'women' : 'men';
              const avatarId = (avatarOffset + index * 7 + 5) % 99;
              
              return (
                <div key={index} className="testimonial-card">
                  <Quote size={40} className="quote-icon" />
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  
                  <div className="testimonial-author-wrapper">
                    <img 
                      src={`https://randomuser.me/api/portraits/${gender}/${avatarId}.jpg`} 
                      alt={testimonial.name} 
                      className="testimonial-avatar" 
                    />
                    <div className="testimonial-author-info">
                      <span className="testimonial-author-name">{testimonial.name}</span>
                      <span className="testimonial-author-verified">Verified Client</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
