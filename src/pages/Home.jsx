import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Sparkles, Phone, MessageCircle, Shield, Star, 
  Clock, MapPin, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, 
  Lock, Flame, Zap, Award, Users, Calendar, HelpCircle, Send 
} from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import { servicesData } from '../data/servicesData';
import BannerCarousel from '../components/BannerCarousel';
import './Home.css';

// Animated Growing Counter
const CounterNumber = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.span 
      className="stat-pill-num growing-number"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
    >
      {count}{suffix}
    </motion.span>
  );
};

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentHeroImg, setCurrentHeroImg] = useState(0);

  // Connect Form State (Spiritual Methodology Section)
  const [methodologyForm, setMethodologyForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Love Problem Solution / Ex Back',
    problem: ''
  });
  const [methodologySubmitted, setMethodologySubmitted] = useState(false);

  const handleMethodologyChange = (e) => {
    setMethodologyForm({
      ...methodologyForm,
      [e.target.name]: e.target.value
    });
  };

  const handleMethodologySubmit = (e) => {
    e.preventDefault();
    const fullName = `${methodologyForm.firstName} ${methodologyForm.lastName}`.trim();
    const message = `*New Consultation Request - Master Arvind*\n\n*Name:* ${fullName || 'Not provided'}\n*Phone:* ${methodologyForm.phone}\n*Email:* ${methodologyForm.email}\n*Service:* ${methodologyForm.service}\n*Problem Details:* ${methodologyForm.problem || 'None provided'}`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(message)}`, '_blank');
    setMethodologySubmitted(true);
  };

  // Dynamic Animated Typewriter
  const typewriterPhrases = [
    "Negative Energy Removal",
    "Getting Your Ex Love Back",
    "Stopping Divorce & Separation",
    "Sacred White-Light Love Spells",
    "Black Magic & Evil Eye Cleansing",
    "Twin Flame & Soulmate Reconnection"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    let timer;

    if (!isDeleting && displayText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      setTypingSpeed(90);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => 
          isDeleting 
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
        setTypingSpeed(isDeleting ? 40 : 85);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed]);

  const heroImages = [
    { src: "/images/services/bring-ex-back.webp", alt: "Get Ex Love Back" },
    { src: "/images/services/love_reading.webp", alt: "Sacred Love Spells" },
    { src: "/images/services/soulmate-connection.webp", alt: "Soulmate Connection" },
    { src: "/images/services/relationship_astrology_hero.webp", alt: "Relationship Harmony" },
    { src: "/images/services/toxic-marriage-signs.webp", alt: "Stop Divorce" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImg((prev) => (prev + 1) % heroImages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Love Testimonials (8 Real Stories)
  const loveTestimonials = [
    {
      couple: "Jessica & Marcus",
      city: "Edmonton, AB",
      timeframe: "Reunited in 11 Days",
      text: "Marcus left our shared home and blocked my number everywhere. I felt hopeless until I visited Master Arvind in Edmonton. He performed a sacred love reconnection ritual. In just 11 days, Marcus unblocked me and knocked on my door in tears. We are getting married this summer!",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      couple: "David & Sarah",
      city: "Calgary, AB",
      timeframe: "Marriage Saved in 2 Weeks",
      text: "We were sleeping in separate rooms and our lawyers had already prepared separation documents. Master Arvind identified a severe planetary clash and evil eye from an envious relative. After his remedies, the bitterness completely dissolved. He saved our marriage and our children's future.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      couple: "Simran & Harpreet",
      city: "Vancouver, BC",
      timeframe: "Blessings in 18 Days",
      text: "Both our families were strongly opposed to our inter-caste marriage for over 3 years. Master Arvind performed powerful Vedic family harmony poojas. Within 3 weeks, both sets of parents had a change of heart and celebrated our engagement together!",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      couple: "Chloe & Liam",
      city: "Toronto, ON",
      timeframe: "Reignited in 5 Days",
      text: "My fiancé seemed to have lost all interest in me and commitment felt impossible. Master Arvind’s sacred love attraction rituals ignited a spark we hadn't felt in years. He is now more affectionate and attentive than ever before.",
      image: "https://randomuser.me/api/portraits/women/89.jpg"
    },
    {
      couple: "Aman & Priya",
      city: "Surrey, BC",
      timeframe: "Reunited in 9 Days",
      text: "My partner walked away after constant misunderstandings and refused to speak with me for months. Master Arvind did a detailed astrological reading and performed a Venus attraction ritual. Within 9 days, Aman called me apologizing and asked to restart our relationship!",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      couple: "Michael & Jennifer",
      city: "Red Deer, AB",
      timeframe: "Divorce Stopped in 12 Days",
      text: "Third-party interference and negative jealousy had completely destroyed trust between my wife and me. Master Arvind removed the dark energy surrounding our home. Within 12 days, Jennifer broke off contact with the outside influence and our marriage is thriving again.",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      couple: "Rajesh & Sunita",
      city: "Edmonton, AB",
      timeframe: "Harmony Restored in 7 Days",
      text: "In-law tensions and astrological Manglik dosha were creating daily fights. We visited Master Arvind at his Edmonton sanctuary in Millwoods. His poojas brought an immediate peaceful calm into our marriage. We are happier than ever!",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      couple: "Emily & Daniel",
      city: "Ottawa, ON",
      timeframe: "Reconnected in 8 Days",
      text: "Daniel had gone completely silent and cold after a bitter argument. I consulted Master Arvind over phone from Ottawa. His white-light spiritual healing worked like a miracle. Daniel texted me on day 8 asking to meet and we have reconciled completely.",
      image: "https://randomuser.me/api/portraits/women/53.jpg"
    }
  ];

  const [testimonialPage, setTestimonialPage] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  useEffect(() => {
    if (isTestimonialHovered) return;
    const timer = setInterval(() => {
      setTestimonialPage((prev) => (prev === 0 ? 1 : 0));
    }, 6000); // Transitions to next 4 testimonials every 6 seconds
    return () => clearInterval(timer);
  }, [isTestimonialHovered]);

  const faqs = [
    {
      q: "How fast can Master Arvind bring my ex love back?",
      a: "Many clients experience initial breakthroughs—such as unexpected text messages, unblocking, or emotional dreams—within 48 to 72 hours of the rituals. Complete reconciliations typically solidify within 7 to 14 days, depending on the karmic depth of the separation."
    },
    {
      q: "Are Master Arvind's love spells and rituals safe and ethical?",
      a: "Yes, 100%. Master Arvind practices exclusively white-light Vedic astrology, sacred Sanskrit sound vibrations, and divine celestial alignments. His rituals do not generate negative karma, cause harm, or manipulate someone against their cosmic destiny."
    },
    {
      q: "Can Master Arvind help if my ex has blocked me everywhere or is with someone else?",
      a: "Yes. Physical blocks and third-party distractions are often superficial barriers caused by negative planetary friction and external manipulation. Master Arvind works on the spiritual energetic plane to dissolve the negative energy cord tying them to the other person and reopen their heart to you."
    },
    {
      q: "Are my consultations and situation strictly confidential?",
      a: "Absolutely. Master Arvind upholds the highest code of spiritual privacy and discretion. Your name, photos, birth details, and personal situations are never shared with anyone under any circumstances."
    },
    {
      q: "Can I receive consultation and rituals online or over the phone from anywhere in Canada?",
      a: "Yes! While Master Arvind's main spiritual sanctuary is located in Edmonton (3231 24 Ave NW), he conducts daily high-accuracy phone, WhatsApp, and virtual consultations for clients across Calgary, Vancouver, Toronto, Montreal, Ottawa, and globally."
    }
  ];

  const topBanners = [
    '/images/banners/banner-ex-love-back.jpg',
    '/images/banners/banner-black-magic-removal.jpg',
    '/images/banners/banner-love-spell.jpg'
  ];

  return (
    <div className="home-root">
      
      {/* ========================================================
         0. TOP SACRED HERO BANNERS (CLEAN BANNERS ONLY)
         ======================================================== */}
      <BannerCarousel banners={topBanners} />

      {/* ========================================================
         1. TOP GRAND VEDIC HERO SECTION (COMMANDING AUTHORITY)
         ======================================================== */}
      <section className="vedic-master-hero">
        <div className="vedic-hero-atmosphere">
          <div className="vedic-nebula-orb orb-primary"></div>
          <div className="vedic-nebula-orb orb-gold"></div>
          <div className="vedic-star-shimmer"></div>
        </div>

        <div className="vedic-hero-container">
          {/* Left Column: Framed Sacred Visual Card + Overlaid Badge + 3-Box Stat Strip */}
          <motion.div 
            className="vedic-hero-visual-side"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="vedic-visual-card-wrapper">
              {/* Sacred Frame (Pure visual without overlaid text) */}
              <div className="vedic-framed-card">
                <div className="vedic-card-image-box">
                  <img 
                    src="/images/services/SHIVA.webp" 
                    alt="Master Arvind Vedic Astrology Sanctuary"
                    className="vedic-card-img"
                  />
                  <div className="vedic-card-shimmer"></div>
                </div>
              </div>

              {/* 3-Box Horizontal Stats Strip directly beneath with Animated Growing Numbers */}
              <div className="vedic-stats-strip-underneath">
                <div className="vedic-stat-pill stat-pill-red">
                  <CounterNumber target={30} suffix="k+" />
                  <span className="stat-pill-label">Happy Clients</span>
                </div>
                <div className="vedic-stat-pill stat-pill-orange">
                  <CounterNumber target={100} suffix="%" />
                  <span className="stat-pill-label">Confidential</span>
                </div>
                <div className="vedic-stat-pill stat-pill-crimson">
                  <CounterNumber target={25} suffix="+" />
                  <span className="stat-pill-label">Yrs Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Vedic Master Authority Content */}
          <motion.div 
            className="vedic-hero-content"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          >
            {/* Main Headline */}
            <h1 className="vedic-hero-title">
              <span className="text-solid-red">Best Indian Vedic</span> <br />
              <span className="text-solid-orange">Astrologer in Canada</span>
            </h1>

            {/* Dynamic Typewriter Animation */}
            <div className="vedic-typewriter-row">
              <span className="typewriter-lead">Trusted for </span>
              <span className="typewriter-phrase">{displayText}</span>
              <span className="typewriter-blink">|</span>
            </div>

            {/* Location Subtitle with Gold Accent Line */}
            <div className="vedic-location-strip">
              <span>Serving Millwoods, Edmonton, Calgary & Across Canada</span>
              <div className="vedic-gold-divider"></div>
            </div>

            {/* Narrative Paragraph */}
            <p className="vedic-hero-desc">
              <strong>Master Arvind</strong> is a world-renowned <strong>Indian Vedic Astrologer and Psychic in Canada</strong> with over <strong>25+ years of hereditary experience</strong> helping thousands find instant, lasting solutions for <strong>love problems, marriage issues, career guidance, family disputes, black magic removal, negative energy cleansing, and spiritual healing</strong>. Offering confidential <strong>phone, online, and in-person astrology consultations</strong> across Alberta and throughout Canada.
            </p>

            {/* 4 Feature Bullet Points */}
            <div className="vedic-feature-bullets">
              <div className="vedic-bullet-item">
                <span className="vedic-star-sparkle">✦</span>
                <span><strong>25+ years of trusted experience</strong> in Vedic Astrology and spiritual guidance.</span>
              </div>
              <div className="vedic-bullet-item">
                <span className="vedic-star-sparkle">✦</span>
                <span><strong>Phone, online, and in-person consultations</strong> available across Canada.</span>
              </div>
              <div className="vedic-bullet-item">
                <span className="vedic-star-sparkle">✦</span>
                <span><strong>Expert guidance</strong> for love, marriage, career, family, and black magic removal.</span>
              </div>
              <div className="vedic-bullet-item">
                <span className="vedic-star-sparkle">✦</span>
                <span><strong>Personalized astrology remedies</strong> with complete privacy and 100% confidential consultation.</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="vedic-cta-buttons">
              <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-primary">
                <Phone size={18} className="animate-ring" />
                <span>Call: {CONTACT_INFO.phoneDisplay}</span>
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to book a private consultation.")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-whatsapp" 
              >
                <MessageCircle size={18} />
                <span>WhatsApp Master</span>
              </a>
              <Link to="/book" className="btn-appointment">
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
         2. LOVE RECONCILIATION & PASSION RESTORATION SECTION
         ======================================================== */}
      <section className="hero-cosmic-section">
        {/* Animated Background Atmosphere */}
        <div className="hero-celestial-glow glow-1"></div>
        <div className="hero-celestial-glow glow-2"></div>
        <div className="hero-star-particles"></div>

        <div className="hero-inner-container">
          {/* Left Text Content */}
          <div className="hero-text-side">
            <div className="hero-top-badge animate-fade-in badge-ruby">
              <span className="badge-flame-icon">🔥</span>
              <span className="badge-text">Edmonton’s #1 Renowned Love & Relationship Specialist</span>
            </div>

            <h1 className="hero-headline">
              Bring Your Lost Love Back & <br />
              <span className="gradient-text-love">Restore True Passion</span> With <br />
              <span className="gradient-text-ruby">Master Arvind</span>
            </h1>

            <p className="hero-lead-desc">
              Struggling with a heartbreaking breakup, cold distance, or marriage conflicts? Master Arvind utilizes 25+ years of authentic Vedic spiritual mastery, white-light love spells, and energy cord healing to reunite lovers and bring lifelong peace.
            </p>

            {/* Key Trust Highlights */}
            <div className="hero-key-points">
              <div className="key-point-item">
                <CheckCircle size={18} className="text-love" />
                <span>Get Ex Love Back Swiftly</span>
              </div>
              <div className="key-point-item">
                <CheckCircle size={18} className="text-ruby" />
                <span>100% Confidential & Ethical</span>
              </div>
              <div className="key-point-item">
                <CheckCircle size={18} className="text-love" />
                <span>Stop Divorce & Third Parties</span>
              </div>
              <div className="key-point-item">
                <CheckCircle size={18} className="text-ruby" />
                <span>Rapid Spiritual Results</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="hero-cta-group">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I need urgent help to get my ex love back / fix my relationship.")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary hero-btn-main"
              >
                <Heart size={18} fill="#fff" />
                <span>Reunite With Your Love</span>
              </a>

              <a 
                href={`tel:${CONTACT_INFO.phoneLink}`} 
                className="btn-ruby hero-btn-call"
              >
                <Phone size={18} className="animate-ring" />
                <span>Call: {CONTACT_INFO.phoneDisplay}</span>
              </a>

              <Link to="/book" className="btn-outline hero-btn-book">
                <span>Book Session</span>
              </Link>
            </div>

            {/* Social Proof Bar */}
            <div className="hero-social-proof">
              <div className="proof-avatars">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client review" />
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client review" />
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client review" />
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Client review" />
                <div className="proof-counter">30k+</div>
              </div>
              <div className="proof-text-wrap">
                <div className="proof-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-ruby text-ruby" />
                  ))}
                  <strong className="proof-rating rating-ruby">4.99/5 Rating</strong>
                </div>
                <span className="proof-caption">Over 30,000+ Couples Reunited Across Canada</span>
              </div>
            </div>
          </div>

          {/* Right Visual Side - Pure Reconnection Frame (Zero Overlaid Text) */}
          <div className="hero-visual-side">
            <motion.div 
              className="reconnection-lens-container"
              animate={{ y: [-7, 7, -7] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
            >
              {/* Radiant Rose-Ruby Ambient Halo */}
              <div className="lens-ambient-glow"></div>

              {/* Main Dual-Polarized Lens Frame - Pure Clean Visual */}
              <div className="reconnection-lens-frame">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHeroImg}
                    className="lens-slide-wrap"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                  >
                    {/* Background Primary Image */}
                    <img 
                      src={heroImages[currentHeroImg].src} 
                      alt={heroImages[currentHeroImg].alt} 
                      className="lens-main-img"
                    />

                    {/* Scanning Divine Light Bar (Energy Sweep) */}
                    <div className="lens-energy-sweep"></div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Minimalist Dot Indicators */}
              <div className="lens-dots-row">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentHeroImg(idx)}
                    className={`lens-dot-pill ${currentHeroImg === idx ? 'active' : ''}`}
                    aria-label={`Switch to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. URGENT HELP TICKER */}
      <section className="urgent-ticker-bar">
        <div className="ticker-track">
          <div className="ticker-content">
            <span>✨ WORLD-RENOWNED LOVE SPECIALIST MASTER ARVIND</span>
            <span>•</span>
            <span>❤️ GET YOUR EX LOVE BACK IN 3-7 DAYS</span>
            <span>•</span>
            <span>📍 EDMONTON SANCTUARY: 3231 24 AVE NW</span>
            <span>•</span>
            <span>📞 24/7 HOTLINE: +1 (587) 723-1237</span>
            <span>•</span>
            <span>🛡️ 100% CONFIDENTIAL & ETHICAL WHITE-LIGHT RITUALS</span>
            <span>•</span>
            <span>💍 STOP DIVORCE & MARITAL SEPARATION</span>
            <span>•</span>
            <span>✨ WORLD-RENOWNED LOVE SPECIALIST MASTER ARVIND</span>
            <span>•</span>
            <span>❤️ GET YOUR EX LOVE BACK IN 3-7 DAYS</span>
            <span>•</span>
            <span>📍 EDMONTON SANCTUARY: 3231 24 AVE NW</span>
            <span>•</span>
            <span>📞 24/7 HOTLINE: +1 (587) 723-1237</span>
          </div>
        </div>
      </section>

      {/* 3. TOP LOVE & RELATIONSHIP SERVICES SHOWCASE */}
      <section className="services-showcase-section section-padding">
        <div className="services-showcase-header text-center">
          <div className="section-badge love-badge">
            <Sparkles size={14} className="text-ruby" /> Specialized Divine Services
          </div>
          <h2 className="section-title">
            Our Core <span className="gradient-text-love">Love & Relationship</span> Remedies
          </h2>
          <p className="section-subtitle">
            Restoring love requires authentic mastery. Explore our specialized services created to protect your happiness and eliminate relationship obstacles permanently.
          </p>
        </div>

        <div className="love-services-grid">
          {servicesData.slice(0, 6).map((service) => (
            <div key={service.id} className="love-service-card glass-panel">
              <div className="service-card-top-image">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  onError={(e) => { e.target.src = "/images/services/love-solutions.webp"; }}
                />
              </div>

              <div className="service-card-body-content">
                <h3 className="service-card-heading">{service.title}</h3>

                <div className="service-card-buttons-row">
                  <Link to={`/services/${service.id}`} className="service-btn-know-more">
                    <span>Know More</span>
                    <ArrowRight size={13} />
                  </Link>

                  <a 
                    href={`tel:${CONTACT_INFO.phoneLink}`} 
                    className="service-btn-call"
                    title={`Call Master Arvind about ${service.title}`}
                  >
                    <Phone size={13} />
                    <span>Call</span>
                  </a>

                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(`Hello Master Arvind, I would like to consult regarding ${service.title}.`)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="service-btn-wa" 
                    title={`WhatsApp Master Arvind about ${service.title}`}
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-bottom-action text-center">
          <Link to="/services" className="btn-outline">
            <span>Explore All 13+ Spiritual & Astrology Services</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 6. THE 4-STEP COSMIC JOURNEY OF LOVE RESTORATION */}
      <section className="process-timeline-section section-padding">
        <div className="process-header text-center">
          <div className="section-badge love-badge">
            <Heart size={14} className="text-love" fill="currentColor" /> Spiritual Methodology
          </div>
          <h2 className="section-title">
            How Master Arvind <span className="text-solid-orange">Reunites Broken Love</span>
          </h2>
          <p className="section-subtitle">
            A proven, compassionate 4-step spiritual journey designed to dissolve negative energetic blockages and realign both souls in lasting harmony.
          </p>
        </div>

        <div className="methodology-split-container">
          {/* Left: 2x2 Grid for Steps 1, 2, 3, 4 */}
          <div className="methodology-steps-2x2">
            <div className="process-step-card glass-panel">
              <div className="process-step-num">01</div>
              <div className="process-step-icon-wrap">
                <Sparkles size={22} className="text-gold" />
              </div>
              <h4>Cosmic Root Diagnosis</h4>
              <p>Master Arvind analyzes both natal horoscopes to identify planetary afflictions (Venus, Mars, Rahu) and karmic blocks creating separation.</p>
            </div>

            <div className="process-step-card glass-panel">
              <div className="process-step-num">02</div>
              <div className="process-step-icon-wrap">
                <Zap size={22} className="text-love" />
              </div>
              <h4>Negative Cord Cleansing</h4>
              <p>Severing accumulated resentment, toxic evil eye, in-law discord, and outside interference poisoning your partner’s thoughts.</p>
            </div>

            <div className="process-step-card glass-panel">
              <div className="process-step-num">03</div>
              <div className="process-step-icon-wrap">
                <Flame size={22} className="text-gold" />
              </div>
              <h4>Sacred Love Spell & Hawan</h4>
              <p>Consecrated Vedic mantras and white-light attraction rituals chanted during favorable cosmic muhurats to awaken intense affection.</p>
            </div>

            <div className="process-step-card glass-panel">
              <div className="process-step-num">04</div>
              <div className="process-step-icon-wrap">
                <Shield size={22} className="text-love" />
              </div>
              <h4>Reunion & Protection Shield</h4>
              <p>Your lover reaches out with genuine remorse and warmth. A protective spiritual talisman (Kavach) is installed to prevent future breakups.</p>
            </div>
          </div>

          {/* Right: Connect Form Card */}
          <div className="methodology-form-wrapper">
            <div className="connect-master-card">
              <h3 className="connect-card-title">Connect With Master Arvind</h3>
              <p className="connect-card-subtitle">
                We hear you and would be happy to serve you. Connect and fill this form to get in touch with Arvind Ji now.
              </p>

              <form onSubmit={handleMethodologySubmit} className="connect-actual-form">
                <div className="connect-form-row two-col">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    value={methodologyForm.firstName}
                    onChange={handleMethodologyChange}
                    className="connect-form-input"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={methodologyForm.lastName}
                    onChange={handleMethodologyChange}
                    className="connect-form-input"
                  />
                </div>

                <div className="connect-form-row two-col">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    value={methodologyForm.email}
                    onChange={handleMethodologyChange}
                    className="connect-form-input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    value={methodologyForm.phone}
                    onChange={handleMethodologyChange}
                    className="connect-form-input"
                  />
                </div>

                <div className="connect-form-row full-col">
                  <div className="connect-select-wrap">
                    <select
                      name="service"
                      value={methodologyForm.service}
                      onChange={handleMethodologyChange}
                      className="connect-form-select"
                    >
                      <option value="Love Problem Solution / Ex Back">Love Problem Solution / Ex Back</option>
                      <option value="Stop Divorce & Marriage Separation">Stop Divorce & Marriage Separation</option>
                      <option value="Black Magic & Evil Eye Cleansing">Black Magic & Evil Eye Cleansing</option>
                      <option value="Family & Relationship Harmony">Family & Relationship Harmony</option>
                      <option value="Spiritual Protection & Healing">Spiritual Protection & Healing</option>
                      <option value="Other Astrological Consultation">Other Astrological Consultation</option>
                    </select>
                    <ChevronDown size={18} className="select-arrow-icon" />
                  </div>
                </div>

                <div className="connect-form-row full-col">
                  <textarea
                    name="problem"
                    rows="4"
                    placeholder="Share your problem in detail..."
                    value={methodologyForm.problem}
                    onChange={handleMethodologyChange}
                    className="connect-form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="connect-form-submit-btn">
                  <Send size={16} />
                  <span>Send Message &rarr;</span>
                </button>

                {methodologySubmitted && (
                  <div className="connect-success-msg">
                    <CheckCircle size={16} />
                    <span>Your message has been sent to Master Arvind via WhatsApp!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ABOUT MASTER ARVIND SPOTLIGHT */}
      <section className="master-spotlight-section section-padding">
        <div className="master-spotlight-container glass-panel">
          <div className="master-spotlight-grid">
            <div className="master-image-col">
              <div className="master-portrait-frame">
                <img 
                  src="/images/services/consult-best-astrologer.webp" 
                  alt="Master Arvind Vedic Astrologer" 
                  className="master-portrait-img"
                  onError={(e) => { e.target.src = "/images/services/Master Jai Bn-1.webp"; }}
                />
                <div className="master-experience-badge">
                  <Award size={24} className="text-gold" />
                  <div>
                    <strong>25+ Years</strong>
                    <span>Vedic Astrologer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="master-content-col">
              <div className="section-badge">
                <Award size={14} className="text-gold" /> Master of Vedic Mysticism
              </div>
              <h2 className="master-name-title">
                Meet <span className="gradient-text-gold">Master Arvind</span>
              </h2>
              <h4 className="master-title-sub">
                Edmonton's Renowned Love Astrologer, Psychic Seer & Spiritual Healer
              </h4>

              <p className="master-bio-paragraph">
                For over a quarter of a century, Master Arvind has been the trusted sanctuary for individuals and couples suffering from broken relationships, unbearable heartbreak, and inexplicable life crises. Descended from a sacred lineage of Vedic scholars, Master Arvind combines profound Jyotish wisdom with compassionate psychic intuition.
              </p>

              <p className="master-bio-paragraph">
                Whether you visit his physical sanctuary at <strong>3231 24 Ave NW in Edmonton, AB</strong> or consult with him virtually via Phone and WhatsApp from anywhere across Canada, you will receive immediate, unvarnished truth, unconditional empathy, and personalized spiritual remedies that produce tangible results.
              </p>

              <div className="master-stats-row">
                <div className="master-stat-item">
                  <span className="stat-number">30,000+</span>
                  <span className="stat-label">Couples Reunited</span>
                </div>
                <div className="master-stat-item">
                  <span className="stat-number">99.4%</span>
                  <span className="stat-label">Accurate Readings</span>
                </div>
                <div className="master-stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Years of Mastery</span>
                </div>
                <div className="master-stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Confidential</span>
                </div>
              </div>

              <div className="master-actions-row">
                <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-primary">
                  <Phone size={18} />
                  <span>Call Master Arvind Directly</span>
                </a>
                <Link to="/about" className="btn-outline">
                  <span>Read Full Biography</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLIENT LOVE MIRACLE TRANSFORMATIONS (REVIEWS) */}
      <section className="reviews-section section-padding">
        <div className="reviews-header text-center">
          <div className="section-badge love-badge">
            <Heart size={14} className="text-love" fill="currentColor" /> Real Love Miracles
          </div>
          <h2 className="section-title">
            Couples Reunited by <span className="text-solid-orange">Master Arvind</span>
          </h2>
          <p className="section-subtitle">
            Heartfelt verified experiences from real couples in Edmonton, Calgary, Vancouver, and Toronto whose love was healed through Master Arvind's guidance.
          </p>
        </div>

        <div 
          className="reviews-slider-wrapper"
          onMouseEnter={() => setIsTestimonialHovered(true)}
          onMouseLeave={() => setIsTestimonialHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={testimonialPage}
              className="reviews-cards-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {loveTestimonials.slice(testimonialPage * 4, testimonialPage * 4 + 4).map((item, idx) => (
                <div key={idx} className="simple-review-card">
                  <div className="simple-card-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={17} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  <p className="simple-card-text">
                    "{item.text}"
                  </p>

                  <div className="simple-card-author">
                    <img src={item.image} alt={item.couple} className="simple-card-avatar" />
                    <div className="simple-card-info">
                      <h4 className="simple-card-name">{item.couple}</h4>
                      <div className="simple-card-meta">
                        <span>{item.city}</span>
                        <span className="simple-card-dot">•</span>
                        <span className="simple-card-timeframe">{item.timeframe}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Clean Pagination Controls */}
          <div className="reviews-pagination-row">
            <button 
              className="review-page-nav-btn prev"
              onClick={() => setTestimonialPage((prev) => (prev === 0 ? 1 : 0))}
              aria-label="Previous Testimonials"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="reviews-dots-box">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  className={`review-page-dot ${index === testimonialPage ? 'active' : ''}`}
                  onClick={() => setTestimonialPage(index)}
                  aria-label={`View Testimonials Set ${index + 1}`}
                />
              ))}
            </div>

            <button 
              className="review-page-nav-btn next"
              onClick={() => setTestimonialPage((prev) => (prev === 0 ? 1 : 0))}
              aria-label="Next Testimonials"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 9. EDMONTON SANCTUARY & MAP REACH */}
      <section className="edmonton-sanctuary-section section-padding">
        <div className="edmonton-sanctuary-card glass-panel">
          <div className="sanctuary-grid">
            <div className="sanctuary-info-col">
              <div className="section-badge">
                <MapPin size={14} className="text-gold" /> Edmonton Spiritual Center
              </div>
              <h2 className="sanctuary-title">
                Visit Our Physical Center in <span className="gradient-text-gold">Edmonton, Alberta</span>
              </h2>
              <p className="sanctuary-desc">
                Located conveniently in Edmonton, our sanctuary welcomes you for in-person, highly confidential consultations. If you live anywhere in Canada or internationally, you can also consult Master Arvind effortlessly via direct Phone or WhatsApp.
              </p>

              <ul className="sanctuary-address-list">
                <li>
                  <MapPin className="text-gold list-icon" size={20} />
                  <div>
                    <strong>Center Address:</strong>
                    <p>{CONTACT_INFO.address}</p>
                  </div>
                </li>
                <li>
                  <Phone className="text-love list-icon" size={20} />
                  <div>
                    <strong>Direct Consultation Line:</strong>
                    <p><a href={`tel:${CONTACT_INFO.phoneLink}`} className="text-gold font-bold">{CONTACT_INFO.phoneDisplay}</a></p>
                  </div>
                </li>
                <li>
                  <Clock className="text-gold list-icon" size={20} />
                  <div>
                    <strong>Working Hours:</strong>
                    <p>Monday - Sunday: 8:00 AM - 10:00 PM (Mountain Time)</p>
                  </div>
                </li>
              </ul>

              <div className="sanctuary-btn-group">
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-gold"
                >
                  <MapPin size={16} />
                  <span>Get Directions on Google Maps</span>
                </a>

                <Link to="/book" className="btn-outline">
                  <span>Book In-Person Session</span>
                </Link>
              </div>
            </div>

            <div className="sanctuary-map-col">
              <div className="sanctuary-map-frame">
                <iframe 
                  title="Master Arvind Edmonton Location"
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
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="faq-section-wrapper section-padding">
        <div className="faq-header text-center">
          <div className="section-badge love-badge">
            <HelpCircle size={14} className="text-love" /> Clarity & Answers
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text-gold">Questions</span>
          </h2>
          <p className="section-subtitle">
            Clear, honest answers to help you understand how Master Arvind works with love spells, relationship dilemmas, and spiritual energy.
          </p>
        </div>

        <div className="faq-accordion-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-accordion-item glass-panel ${activeFaq === index ? 'active' : ''}`}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              <div className="faq-question-bar">
                <h3>{faq.q}</h3>
                <ChevronDown
                  className="faq-toggle-icon"
                  size={20}
                  style={{ transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
              <div className={`faq-answer-drawer ${activeFaq === index ? 'open' : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. PRE-FOOTER EMERGENCY LOVE BANNER */}
      <section className="pre-footer-love-banner">
        <div className="pre-footer-inner section-padding">
          <div className="pre-footer-content-wrap text-center">
            <div className="pre-footer-heart-symbol">
              <Heart size={38} className="text-love" fill="#FF3366" />
            </div>

            <h2 className="pre-footer-heading">
              Don’t Let Pride Or Distance End Your Love Story
            </h2>

            <p className="pre-footer-sub">
              Every day spent in separation allows negative energies to settle deeper. Contact Master Arvind right now for a confidential reading and begin your journey back to love.
            </p>

            <div className="pre-footer-actions">
              <a 
                href={`tel:${CONTACT_INFO.phoneLink}`} 
                className="btn-primary" 
                style={{ padding: '16px 36px', fontSize: '1rem' }}
              >
                <Phone size={18} className="animate-ring" />
                <span>Call Master Arvind: {CONTACT_INFO.phoneDisplay}</span>
              </a>

              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to speak with you urgently about my relationship.")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-whatsapp" 
                style={{ padding: '16px 32px', fontSize: '1rem' }}
              >
                <MessageCircle size={18} />
                <span>Urgent WhatsApp Chat</span>
              </a>
            </div>

            <div className="pre-footer-guarantee">
              <Shield size={16} className="text-gold" />
              <span>100% Strict Confidentiality Guaranteed • 25+ Years Experience • Edmonton, AB</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
