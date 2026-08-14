import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <Star className="text-gold" size={32} />
              <span>{CONTACT_INFO.name.split(' ')[0]} <span className="text-gold">{CONTACT_INFO.name.split(' ').slice(1).join(' ')}</span></span>
            </Link>
            <p className="footer-desc">
              Discover your destiny with our premium astrology and spiritual services. 
              Guiding you towards a brighter, more harmonious future.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 11 3 11c1.2.6 2.6.5 3.8-.1C-2 6.5 1 2 1 2c2.6 3.1 6.5 5.1 10.8 5.4C11.5 4.5 13 2 16 2c2.2 0 4 1.8 4 4 1.2-.2 2.3-.7 3.2-1.3-.4 1.2-1.2 2.1-2.2 2.7 1.1-.1 2.1-.4 3-.9z"></path></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-col links-col">
            <h3 style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: '#FFDE4E', textUnderlineOffset: '8px', textDecorationThickness: '2px' }}>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/blog">Latest Insights</Link></li>
              <li><Link to="/book">Book Appointment</Link></li>
            </ul>
          </div>
          
          <div className="footer-col services-col">
            <h3 style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: '#FFDE4E', textUnderlineOffset: '8px', textDecorationThickness: '2px' }}>Top Services</h3>
            <ul>
              <li><Link to="/services">Psychic Reading</Link></li>
              <li><Link to="/services">Palm Reading</Link></li>
              <li><Link to="/services">Love & Relationships</Link></li>
              <li><Link to="/services">Spiritual Healing</Link></li>
              <li><Link to="/services">Vashikaran Specialist</Link></li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3 style={{ color: '#fff', textDecoration: 'underline', textDecorationColor: '#FFDE4E', textUnderlineOffset: '8px', textDecorationThickness: '2px' }}>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin className="text-gold" size={18} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li>
                <Phone className="text-gold" size={18} />
                <a href={`tel:${CONTACT_INFO.phoneLink}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <Mail className="text-gold" size={18} />
                <a href={`mailto:${CONTACT_INFO.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container bottom-container">
          <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
