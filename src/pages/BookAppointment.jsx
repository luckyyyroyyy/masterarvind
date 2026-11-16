import React, { useState } from 'react';
import { Calendar, Clock, MapPin, MessageSquare, Phone, Mail, Heart, Shield, CheckCircle, Send } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import './BookAppointment.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Get Ex Love Back',
    consultationType: 'WhatsApp / Phone Consultation',
    preferredTime: '',
    situation: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `*New Consultation Request - Master Arvind*\n\n*Name:* ${formData.name || 'Not provided'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Email:* ${formData.email || 'Not provided'}\n*Service:* ${formData.service}\n*Type:* ${formData.consultationType}\n*Preferred Date/Time:* ${formData.preferredTime || 'ASAP'}\n*Situation Details:* ${formData.situation || 'None provided'}`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="booking-page-root animate-fade-in section-padding">
      <div className="booking-header text-center">
        <div className="section-badge love-badge" style={{ margin: '0 auto 1.25rem' }}>
          <Heart size={14} className="text-love" fill="currentColor" /> Private & Confidential Sanctuary
        </div>
        <h1 className="section-title">
          Book a Consultation with <span className="gradient-text-gold">Master Arvind</span>
        </h1>
        <p className="section-subtitle">
          Take the decisive step toward healing your relationship, reuniting with your ex, or breaking spiritual blockages. Appointments available In-Person in Edmonton or via Phone / WhatsApp worldwide.
        </p>
      </div>

      <div className="booking-wrapper">
        {/* Quick Contact & Reassurance Cards */}
        <div className="booking-cards-row">
          <div className="booking-card glass-panel">
            <MapPin className="text-gold booking-card-icon" size={28} />
            <h3>Edmonton Sanctuary</h3>
            <p>{CONTACT_INFO.address}</p>
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gold font-bold mt-2 inline-block"
            >
              Get Directions &rarr;
            </a>
          </div>

          <div className="booking-card glass-panel">
            <Phone className="text-love booking-card-icon" size={28} />
            <h3>Direct Hotline</h3>
            <p>Immediate phone & WhatsApp assistance</p>
            <a href={`tel:${CONTACT_INFO.phoneLink}`} className="text-gold font-bold mt-2 inline-block">
              {CONTACT_INFO.phoneDisplay}
            </a>
          </div>

          <div className="booking-card glass-panel">
            <Clock className="text-gold booking-card-icon" size={28} />
            <h3>Sanctuary Hours</h3>
            <p>Monday - Sunday (7 Days a Week)</p>
            <span className="text-gold font-bold mt-2 inline-block">8:00 AM - 10:00 PM (MST)</span>
          </div>

          <div className="booking-card glass-panel">
            <Shield className="text-love booking-card-icon" size={28} />
            <h3>100% Confidential</h3>
            <p>Your details, identity, and personal life</p>
            <span className="text-gold font-bold mt-2 inline-block">Strictly Protected</span>
          </div>
        </div>

        {/* Main Grid: Form + Location & Map */}
        <div className="booking-layout-grid">
          {/* Booking Form */}
          <div className="booking-form-box glass-panel">
            <h2 className="form-box-title">
              Request Your <span className="gradient-text-love">Confidential Session</span>
            </h2>
            <p className="form-box-subtitle">
              Fill in your details below to connect directly with Master Arvind. You can choose to dispatch your request immediately via WhatsApp.
            </p>

            {submitted ? (
              <div className="booking-success-box text-center">
                <CheckCircle size={48} className="text-gold mb-3" style={{ margin: '0 auto' }} />
                <h3>Consultation Request Initiated!</h3>
                <p>Master Arvind will review your relationship details shortly. For immediate response, feel free to call directly.</p>
                <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-primary mt-4 inline-flex">
                  <Phone size={18} /> Call {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
            ) : (
              <form className="consultation-form" onSubmit={handleWhatsAppSubmit}>
                <div className="form-group-row">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      placeholder="e.g. +1 (587) ..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-field">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="e.g. yourname@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label>Service Required *</label>
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange}
                    >
                      <option value="Get Ex Love Back">Get Ex Love Back & Reconnect Hearts</option>
                      <option value="Sacred Love Spells">Sacred White-Light Love Spells</option>
                      <option value="Love & Relationship Problems">Love & Relationship Problem Solutions</option>
                      <option value="Husband Wife Dispute & Stop Divorce">Husband Wife Dispute & Stop Divorce</option>
                      <option value="Positive Love Vashikaran">Positive Love Vashikaran & Soul Alignment</option>
                      <option value="Twin Flame Reconnection">Twin Flame & Soulmate Reconnection</option>
                      <option value="Black Magic & Evil Eye Removal">Black Magic & Evil Eye Removal</option>
                      <option value="Psychic Reading">Clairvoyant Psychic Reading</option>
                      <option value="Palm Reading">Palm Reading & Hand Analysis</option>
                      <option value="Spiritual Healing">Spiritual Healing & Chakra Cleansing</option>
                      <option value="Family Dispute Resolution">Family Dispute Resolution</option>
                      <option value="Career & Business Astrology">Career & Business Astrology</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-field">
                    <label>Preferred Consultation Format</label>
                    <select 
                      name="consultationType" 
                      value={formData.consultationType} 
                      onChange={handleChange}
                    >
                      <option value="WhatsApp / Phone Consultation">Phone / WhatsApp Call (Anywhere in Canada)</option>
                      <option value="In-Person at Edmonton Sanctuary">In-Person Consultation (Edmonton, AB)</option>
                      <option value="Video Call (Zoom/WhatsApp)">Video Call Session</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Preferred Date & Time</label>
                    <input 
                      type="datetime-local" 
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field full-width">
                  <label>Briefly Describe Your Relationship Situation / Problem *</label>
                  <textarea 
                    rows="4" 
                    name="situation" 
                    required 
                    placeholder="Describe what happened: How long have you been separated? Has your ex blocked you? What outcome are you seeking?"
                    value={formData.situation}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-primary form-submit-btn">
                    <Send size={18} />
                    <span>Send & Connect on WhatsApp</span>
                  </button>
                  <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-gold form-call-btn">
                    <Phone size={18} className="animate-ring" />
                    <span>Or Call Directly Now</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Location Map & Info Card */}
          <div className="booking-map-card glass-panel">
            <div className="map-card-header">
              <h3 className="text-gold">Edmonton Spiritual Center</h3>
              <p className="text-secondary">{CONTACT_INFO.address}</p>
            </div>

            <div className="map-embed-container">
              <iframe 
                title="Master Arvind Edmonton Center"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="map-card-footer">
              <div className="card-footer-item">
                <Mail size={16} className="text-gold" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>
              <div className="card-footer-item">
                <Phone size={16} className="text-love" />
                <a href={`tel:${CONTACT_INFO.phoneLink}`}>{CONTACT_INFO.phoneDisplay}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
