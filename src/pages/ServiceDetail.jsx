import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Star, CheckCircle, Quote, ShieldCheck, PhoneCall, MessageCircle, ArrowLeft, Heart, MapPin, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceIndex = servicesData.findIndex(s => s.id === id);
  const avatarOffset = serviceIndex * 4;

  return (
    <div className="service-detail-root animate-fade-in">
      
      {/* Partition Hero Section */}
      <section className="service-detail-hero">
        <Link to="/services" className="back-to-services-btn top-left-back">
          <ArrowLeft size={18} />
          <span>Back to all services</span>
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
                <div className="trust-avatar-more">30k+</div>
              </div>
              <div className="trust-text">
                <div className="trust-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-gold text-gold" />
                  ))}
                </div>
                <span>Trusted by over 30,000+ clients across Canada</span>
              </div>
            </div>

          </div>
        </div>

        <div className="hero-partition-right">
          <img 
            src={service.image} 
            alt={service.title} 
            className="service-detail-bg-image"
            onError={(e) => { e.target.src = "/images/services/consult-best-astrologer.webp"; }}
          />
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <div className="service-detail-container">
        
        {/* Left Column: Deep Information */}
        <div className="service-main-content">
          <h2 className="content-heading">About This Sacred Remedy</h2>
          <p className="service-description">{service.longDesc}</p>

          <div className="service-contact-buttons">
            <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-primary">
              <PhoneCall size={18} /> Call: {CONTACT_INFO.phoneDisplay}
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(`Hello Master Arvind, I would like to consult about ${service.title}.`)}`} 
              className="btn-whatsapp" 
              target="_blank" 
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp Master Arvind
            </a>
          </div>

          <h2 className="content-heading">How Master Arvind Performs This Ritual</h2>
          <div className="methodology-list">
            {service.methodology.map((step, index) => (
              <div key={index} className="methodology-step glass-panel">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="content-heading">Key Transformation Benefits</h2>
          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item glass-panel">
                <CheckCircle size={22} className="text-love" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Consultation Sidebar */}
        <aside>
          <div className="service-sidebar glass-panel">
            <div className="sidebar-badge">
              <Sparkles size={14} className="text-gold" /> Master Arvind Sanctuary
            </div>
            <h3>Ready to Heal Your Love?</h3>
            <p>Master Arvind is prepared to review your birth details and provide direct spiritual intervention for {service.title}.</p>
            
            <div className="sidebar-hotline-box">
              <span className="hotline-sub">Direct Consultation Line:</span>
              <a href={`tel:${CONTACT_INFO.phoneLink}`} className="hotline-num">
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>

            <div className="sidebar-confidential-note">
              <ShieldCheck size={18} className="text-gold" />
              <span>100% Private & Strictly Confidential</span>
            </div>

            <Link to="/book" className="btn-primary" style={{ width: '100%', marginBottom: '10px' }}>
              Book Session with Master
            </Link>

            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(`Hello Master Arvind, I need urgent advice regarding ${service.title}.`)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', textAlign: 'center' }}
            >
              <MessageCircle size={16} /> Instant WhatsApp Inquiry
            </a>

            <div className="sidebar-location-note">
              <MapPin size={15} className="text-gold" />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </aside>

      </div>

      {/* Dedicated Testimonials Section */}
      <section className="service-testimonials section-padding">
        <div className="testimonials-inner">
          <div className="text-center mb-5">
            <div className="section-badge love-badge" style={{ margin: '0 auto 1rem auto' }}>
              <Heart size={14} className="text-love" fill="currentColor" /> Real Life Miracles
            </div>
            <h2 className="section-title">Client Transformations for {service.title}</h2>
          </div>
          
          <div className="testimonials-grid">
            {service.testimonials.map((testimonial, index) => {
              const gender = index % 2 === 0 ? 'women' : 'men';
              const avatarId = (avatarOffset + index * 7 + 5) % 99;
              
              return (
                <div key={index} className="testimonial-card glass-panel">
                  <Quote size={32} className="quote-icon text-love" />
                  <div className="testimonial-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-gold text-gold" />
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
                      <span className="testimonial-author-verified">Verified Consultation</span>
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
