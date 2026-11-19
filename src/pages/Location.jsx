import React from 'react';
import { MapPin, Phone, MessageCircle, Star, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../config/contact';
import './Location.css';

const Location = () => {
  const cities = [
    { 
      name: "Edmonton (Headquarters)", 
      image: "/images/locations/edmonton.png", 
      address: CONTACT_INFO.address,
      isHQ: true,
      desc: "Our primary spiritual sanctuary in Alberta. Offering private in-person consultations, powerful love reconnection rituals, and instant phone sessions." 
    },
    { 
      name: "Calgary", 
      image: "/images/locations/calgary.png", 
      address: "Daily Phone & WhatsApp Sessions for Calgary & Surrounding Area",
      isHQ: false,
      desc: "Specialized in Get Ex Love Back, marital reconciliation, and breaking negative energy curses for clients throughout Calgary." 
    },
    { 
      name: "Vancouver", 
      image: "/images/locations/vancouver.png", 
      address: "British Columbia Virtual & Remote Spiritual Services",
      isHQ: false,
      desc: "Dedicated guidance in love synastry, psychic clairvoyance, chakra balancing, and third-party removal across BC." 
    },
    { 
      name: "Toronto & GTA", 
      image: "/images/locations/toronto.png", 
      address: "Ontario Virtual Sanctuary & Daily Phone Consultations",
      isHQ: false,
      desc: "Expert love spell casting, marriage dispute solutions, and business astrology consultations for Toronto and the GTA." 
    },
    { 
      name: "Montreal", 
      image: "/images/locations/montreal.png", 
      address: "Quebec Remote Spiritual Guidance & Rituals",
      isHQ: false,
      desc: "Compassionate Vedic readings for lovers in separation, negative energy cleansing, and soulmate alignment." 
    },
    { 
      name: "Ottawa", 
      image: "/images/locations/ottawa.png", 
      address: "National Capital Region Consultations",
      isHQ: false,
      desc: "Dedicated spiritual remedies for family disputes, divorce prevention, and lifelong relationship harmony." 
    }
  ];

  return (
    <div className="location-page-root animate-fade-in section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="location-header text-center mb-5" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="section-badge love-badge" style={{ margin: '0 auto 1.25rem' }}>
          <MapPin size={14} className="text-love" /> Serving All of Canada & Worldwide
        </div>
        <h1 className="section-title">
          Master Arvind's <span className="gradient-text-love">Locations & Sanctuary</span>
        </h1>
        <p className="section-subtitle">
          Headquartered in <strong>Edmonton, Alberta</strong>, Master Arvind welcomes in-person visitors at his sanctuary and serves clients across every Canadian province through high-accuracy phone and video consultations.
        </p>
      </div>

      {/* Featured Edmonton Headquarters Banner */}
      <div className="location-hq-box glass-panel">
        <div className="location-hq-grid">
          <div>
            <span className="section-badge" style={{ marginBottom: '1rem', background: '#FFF8E7' }}>
              <Star size={14} className="text-gold fill-gold" /> Primary Canadian Center
            </span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '12px', color: '#1C1924', lineHeight: '1.2' }}>
              Edmonton Sanctuary — <span className="gradient-text-love">Master Arvind</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.75', marginBottom: '1.5rem' }}>
              Visit us in person for an intimate, confidential love or spiritual reading. Walk-ins and pre-booked private appointments are welcomed daily.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '1.8rem', color: '#1C1924' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={20} className="text-love" />
                <strong style={{ fontSize: '1.02rem' }}>{CONTACT_INFO.address}</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={20} className="text-love" />
                <strong style={{ fontSize: '1.02rem' }}>Hotline: {CONTACT_INFO.phoneDisplay}</strong>
              </div>
            </div>
            <div className="location-btn-row" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-primary">
                <Phone size={16} /> Call Direct Now
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to visit or consult with you in Edmonton.")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={16} /> WhatsApp Inquiry
              </a>
            </div>
          </div>

          <div className="location-map-frame">
            <iframe 
              title="Edmonton Main Center"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Grid of Locations */}
      <h2 className="section-title text-center" style={{ fontSize: '2.4rem', marginBottom: '2.5rem' }}>
        Major Canadian <span className="gradient-text-love">Cities Served</span>
      </h2>

      <div className="location-cities-grid">
        {cities.map((city, index) => (
          <div key={index} className="glass-panel" style={{ position: 'relative', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', background: '#FFFFFF', borderRadius: '20px', border: '1px solid rgba(184, 134, 11, 0.2)', boxShadow: '0 8px 30px rgba(28, 25, 36, 0.06)' }}>
            <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={city.image} 
                alt={`${city.name} location`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
              />
              {city.isHQ && (
                <span style={{ position: 'absolute', top: '14px', right: '14px', background: 'var(--accent-love)', color: '#fff', padding: '4px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '800', boxShadow: '0 2px 10px rgba(194, 24, 91, 0.3)' }}>
                  HEADQUARTERS
                </span>
              )}
            </div>
            
            <div style={{ padding: '2rem', position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <MapPin className="text-love" size={22} />
                <h3 style={{ fontSize: '1.5rem', margin: 0, color: '#1C1924' }}>{city.name}</h3>
              </div>
              <p style={{ color: 'var(--accent-love)', fontSize: '0.86rem', marginBottom: '1rem', fontWeight: '700' }}>
                {city.address}
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.8rem', fontSize: '0.95rem', flexGrow: 1, lineHeight: '1.65' }}>
                {city.desc}
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Link to="/book" className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem', flex: 1, textAlign: 'center' }}>
                  Book in {city.name.split(' ')[0]}
                </Link>
                <a 
                  href={`tel:${CONTACT_INFO.phoneLink}`} 
                  className="btn-outline" 
                  style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
                  title="Call Master Arvind"
                >
                  <Phone size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
