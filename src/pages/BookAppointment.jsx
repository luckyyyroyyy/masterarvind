import React from 'react';
import { Calendar, Clock, MapPin, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import './BookAppointment.css';

const BookAppointment = () => {
  return (
    <div className="page-wrapper animate-fade-in section-padding">
      <div className="page-header text-center mb-5">
        <h1 className="section-title">Book an Appointment</h1>
        <p className="text-secondary" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
          Take the first step towards a brighter future. Schedule a confidential reading or spiritual consultation today.
        </p>
      </div>

      <div className="booking-container">
        
        {/* Contact Info Grid in CSS */}
        <div className="booking-info-grid">
          <div className="glass-panel booking-info-card">
            <Calendar className="text-gold mx-auto mb-3" size={32} style={{ margin: '0 auto 15px' }} />
            <h3 style={{ marginBottom: '10px' }}>Availability</h3>
            <p className="text-secondary">Monday - Sunday</p>
            <p className="text-secondary">9:00 AM - 9:00 PM</p>
          </div>
          <div className="glass-panel booking-info-card">
            <MessageSquare className="text-gold mx-auto mb-3" size={32} style={{ margin: '0 auto 15px' }} />
            <h3 style={{ marginBottom: '10px' }}>Consultation Types</h3>
            <p className="text-secondary">In-Person, Phone,</p>
            <p className="text-secondary">WhatsApp & Video Call</p>
          </div>
        </div>

        <div className="booking-main-grid">
          
          <div className="glass-panel booking-form-panel">
            <h2 style={{ marginBottom: '2rem', textAlign: 'center', color: 'var(--accent-gold)' }}>Schedule Your Session</h2>
            <form className="booking-form">
              <div className="form-row">
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={inputStyle} />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Phone Number</label>
                  <input type="tel" placeholder={CONTACT_INFO.phoneDisplay} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Service Required</label>
                  <select style={inputStyle}>
                    <option value="">Select a Service...</option>
                    <option value="psychic">Psychic Reading</option>
                    <option value="love">Love & Relationships</option>
                    <option value="vashikaran">Vashikaran Specialist</option>
                    <option value="healing">Spiritual Healing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Preferred Date & Time</label>
                <input type="datetime-local" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Briefly Describe Your Situation</label>
                <textarea rows="4" placeholder="How can we help you?" style={{...inputStyle, resize: 'vertical'}}></textarea>
              </div>
              <button type="button" className="btn-primary" style={{ marginTop: '1rem', padding: '15px', fontSize: '1.1rem' }}>
                Confirm Booking Request
              </button>
            </form>
          </div>

          <div className="glass-panel booking-map-panel">
            <div className="booking-map-header">
              <h2 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Visit Our Spiritual Center</h2>
              <p className="text-secondary">Located in the heart of {CONTACT_INFO.shortAddress}, offering in-person premium spiritual consultations.</p>
            </div>
            <div style={{ flexGrow: 1, minHeight: '400px', width: '100%' }}>
              <iframe 
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  background: 'rgba(0,0,0,0.2)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: 'white',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

export default BookAppointment;
