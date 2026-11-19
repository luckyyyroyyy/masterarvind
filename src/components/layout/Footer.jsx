import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Mail, Phone, MapPin, Heart, Shield, Sparkles, Clock, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-logo">
              <div className="footer-brand-symbol">
                <Sparkles size={22} className="text-dark" />
              </div>
              <div className="footer-brand-text">
                <span className="footer-brand-title">MASTER <span className="text-gold">ARVIND</span></span>
                <span className="footer-brand-tagline">Vedic Love & Relationship Astrologer</span>
              </div>
            </Link>
            
            <p className="footer-desc">
              Edmonton’s foremost spiritual master and Vedic astrologer, specializing in restoring broken love, resolving marital discord, ethical love spells, and liberating lives from negative energies.
            </p>

            <div className="footer-badges">
              <span className="badge-pill">25+ Years Experience</span>
              <span className="badge-pill">30,000+ Reunions</span>
            </div>

            <div className="footer-cta-quick">
              <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-primary footer-quick-btn">
                <Phone size={14} /> <span>Call Master Arvind</span>
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to book a relationship consultation.")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-whatsapp footer-quick-btn"
              >
                <MessageCircle size={14} /> <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Love & Relationship Services Col */}
          <div className="footer-col">
            <h3 className="footer-heading">Love & Relationships</h3>
            <ul className="footer-links-list">
              <li><Link to="/services/ex-love-back">Get Ex Love Back</Link></li>
              <li><Link to="/services/love-spells">Sacred Love Spells</Link></li>
              <li><Link to="/services/love-relationships">Relationship Problem Solutions</Link></li>
              <li><Link to="/services/husband-wife-dispute">Husband Wife Dispute & Stop Divorce</Link></li>
              <li><Link to="/services/vashikaran-specialist">Positive Love Vashikaran</Link></li>
              <li><Link to="/services/twin-flame-reconnection">Twin Flame Reconnection</Link></li>
            </ul>
          </div>

          {/* Spiritual & Protection Col */}
          <div className="footer-col">
            <h3 className="footer-heading">Spiritual & Healing</h3>
            <ul className="footer-links-list">
              <li><Link to="/services/black-magic-removal">Black Magic & Evil Eye Removal</Link></li>
              <li><Link to="/services/psychic-reading">Clairvoyant Psychic Reading</Link></li>
              <li><Link to="/services/palm-reading">Palm Reading & Hand Analysis</Link></li>
              <li><Link to="/services/spiritual-healing">Chakra Balancing & Aura Cleansing</Link></li>
              <li><Link to="/services/family-problems">Family Dispute Resolution</Link></li>
              <li><Link to="/services/career-guidance">Career & Business Prosperity</Link></li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="footer-col contact-col">
            <h3 className="footer-heading">Edmonton Sanctuary</h3>
            <ul className="footer-contact-info">
              <li className="footer-contact-item">
                <div className="contact-icon-wrap">
                  <MapPin size={17} />
                </div>
                <div className="contact-text-wrap">
                  <span className="contact-meta-label">Center Address</span>
                  <p className="contact-meta-val">{CONTACT_INFO.address}</p>
                </div>
              </li>
              <li className="footer-contact-item">
                <div className="contact-icon-wrap">
                  <Phone size={17} />
                </div>
                <div className="contact-text-wrap">
                  <span className="contact-meta-label">Direct Hotline</span>
                  <a href={`tel:${CONTACT_INFO.phoneLink}`} className="contact-meta-val highlight-phone">
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="footer-contact-item">
                <div className="contact-icon-wrap">
                  <Mail size={17} />
                </div>
                <div className="contact-text-wrap">
                  <span className="contact-meta-label">Email Inquiries</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="contact-meta-val">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>
              <li className="footer-contact-item">
                <div className="contact-icon-wrap">
                  <Clock size={17} />
                </div>
                <div className="contact-text-wrap">
                  <span className="contact-meta-label">Availability</span>
                  <p className="contact-meta-val">Mon – Sun: 8:00 AM – 10:00 PM (MST)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All Rights Reserved. Edmonton, AB, Canada.</p>
          <div className="footer-bottom-links">
            <Link to="/about">About Master Arvind</Link>
            <Link to="/services">Services</Link>
            <Link to="/location">Locations</Link>
            <Link to="/book">Book Appointment</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
