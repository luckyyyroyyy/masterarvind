import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, MapPin, Quote, Shield, Users } from 'lucide-react';
import CarouselStacked from '../components/CarouselStacked';
import BannerCarousel from '../components/BannerCarousel';
import './Home.css';

const Home = () => {
  const serviceSlides = [
    {
      image: "/images/services/vedic-astrology.webp",
      title: "Birth Chart",
      description: "Map your life's cosmic blueprint.",
      badge: "Astrology",
    },
    {
      image: "/images/services/tarot-reading.webp",
      title: "Tarot Reading",
      description: "Gain clarity with ancient mystic insights.",
      badge: "Guidance",
    },
    {
      image: "/images/services/love-solutions.webp",
      title: "Love Binding",
      description: "Reunite with your soulmate spiritually.",
      badge: "Romance",
    },
    {
      image: "/images/services/palmistry.webp",
      title: "Palmistry",
      description: "Read the hidden lines of your destiny.",
      badge: "Insight",
    },
    {
      image: "/images/services/spiritual-healing.webp",
      title: "Vedic Pooja",
      description: "Cleanse your aura with ancient rituals.",
      badge: "Spiritual",
    },
    {
      image: "/images/services/psychic-reading.webp",
      title: "Psychic Reading",
      description: "Peer into the mysteries of your future.",
      badge: "Psychic",
    },
    {
      image: "/images/services/health-wellness.webp",
      title: "Crystal Healing",
      description: "Restore your body's energy balance.",
      badge: "Healing",
    },
    {
      image: "/images/services/career-guidance.webp",
      title: "Horoscope",
      description: "Navigate your daily cosmic energies.",
      badge: "Zodiac",
    }
  ];

  const cities = [
    "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton",
    "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener",
    "London", "Victoria", "Halifax", "Oshawa", "Windsor"
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      location: "Toronto, ON",
      text: "The reading I received was incredibly accurate. It gave me the clarity I needed to make a major career decision. Truly a life-changing experience.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Chen",
      location: "Vancouver, BC",
      text: "I was skeptical at first, but the astrological insight into my relationship dynamics was spot on. It has brought so much peace to my marriage.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Elena Rodriguez",
      location: "Montreal, QC",
      text: "Absolutely phenomenal! The detailed birth chart analysis completely resonated with my life path. I highly recommend these premium services.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "David Sterling",
      location: "Calgary, AB",
      text: "The business astrology consultation gave me the exact timing to launch my new venture. I've never experienced such profound clarity and success.",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  ];

  const faqs = [
    {
      q: "How accurate are psychic readings?",
      a: "Our readings are highly accurate, drawing on decades of experience and deep spiritual connection to provide clear, actionable insights into your past, present, and future."
    },
    {
      q: "Can astrology really solve my relationship problems?",
      a: "Yes. By understanding the cosmic energies affecting you and your partner, we provide spiritual remedies and guidance to restore harmony and love."
    },
    {
      q: "What is a Vashikaran Specialist?",
      a: "A Vashikaran specialist uses ancient spiritual mantras to positively influence situations and people, often used to resolve deep-seated love and marriage issues."
    },
    {
      q: "Are the consultations completely confidential?",
      a: "Absolutely. We value your privacy, and all consultations and readings are kept 100% strictly confidential."
    }
  ];

  const [activeFaq, setActiveFaq] = React.useState(null);

  return (
    <div className="home-page animate-fade-in">
      {/* Banners Section */}
      <BannerCarousel banners={['/images/bnr1.png', '/images/bnr2.png', '/images/bnr3.png']} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Expert Guidance for Love, Life & <span className="gradient-text">Destiny</span>
          </h1>
          <p className="hero-subtitle">
            Overcome relationship struggles and life's uncertainties through authentic Tarot insights, precise Palm readings, and powerful Vedic Poojas. Let our spiritual expertise bring lasting harmony back into your life.
          </p>

          <ul className="hero-features-list">
            <li><Star size={18} className="text-gold" /> Love & Relationship</li>
            <li><Star size={18} className="text-gold" /> Tarot Card Reading</li>
            <li><Star size={18} className="text-gold" /> Pooja & Vedic Remedies</li>
            <li><Star size={18} className="text-gold" /> Palm Reading</li>
          </ul>

          <div className="hero-actions">
            <Link to="/book" className="btn-primary">Book Your Session</Link>
            <Link to="/services" className="btn-outline">Explore Services</Link>
          </div>

          <div className="hero-trust-indicators">
            <div className="trust-item">
              <div className="avatar-group">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" />
                <div className="avatar-more">10k+</div>
              </div>
              <div className="trust-text-stack">
                <div className="trust-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-gold" />)}
                  <span className="rating-text">4.9/5</span>
                </div>
                <span>Happy Clients</span>
              </div>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <Shield size={32} className="text-gold" />
              <div className="trust-text-stack">
                <span className="trust-highlight">100% Private</span>
                <span>Confidential</span>
              </div>
            </div>
          </div>
        </div>

        {/* Moving Images */}
        <div className="hero-images-wrapper">
          <img src="/images/hero-love.jpg" alt="Love & Relationship" className="floating-card card-1" />
          <img src="/images/hero-palm.jpg" alt="Palm Reading" className="floating-card card-2" style={{ objectPosition: '20% center' }} />
          <img src="/images/hero-tarot.jpg" alt="Tarot Cards" className="floating-card card-3" />
          <img src="/images/hero-pooja.jpg" alt="Pooja & Vedic Remedies" className="floating-card card-4" />
        </div>

        <div className="hero-overlay"></div>
      </section>

      {/* Services Section */}
      <section className="services-section section-padding">
        <h2 className="section-title">Our Premium Services</h2>

        <CarouselStacked slides={serviceSlides} />

        <div className="services-action-container" style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/services" className="btn-outline">View All Premium Services</Link>
        </div>
      </section>

      {/* Locations Parallax Section */}
      <section className="locations-parallax-section">
        <div className="parallax-overlay"></div>
        <div className="parallax-content">
          <h2 className="section-title">Serving Across Canada</h2>

          <div className="locations-glass-panel">
            <div className="locations-glass-content">
              <h3>Nationwide Spiritual Guidance</h3>
              <p>Experience profound insights from anywhere. Our premium services are available via Phone and Online consultations across the country, with exclusive In-Person sessions available in select metropolitan areas.</p>
              <Link to="/book" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                Book Your Session
              </Link>
            </div>

            <div className="city-pills-container">
              {cities.slice(0, 12).map((city, index) => (
                <div key={index} className="city-pill">
                  <MapPin size={14} className="city-pill-icon" />
                  <span>{city}</span>
                </div>
              ))}
              <Link to="/location" className="city-pill view-all-pill">
                <span>View All Locations</span>
                <span className="link-arrow" style={{ marginLeft: '5px' }}>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section-padding">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card glass-panel">
              <Quote className="text-gold mb-4" size={32} />
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-avatar" />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span className="text-gold">{testimonial.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item glass-panel ${activeFaq === index ? 'active' : ''}`}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                <ChevronDown
                  className="text-gold transition-transform"
                  size={24}
                  style={{ transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0)' }}
                />
              </div>
              <div className={`faq-answer ${activeFaq === index ? 'open' : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
