import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Sparkles, Phone, MessageCircle, Shield, Star, 
  Clock, MapPin, CheckCircle, ChevronDown, ArrowRight, 
  Lock, Flame, Zap, Award, Users, Calendar, HelpCircle 
} from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import { servicesData } from '../data/servicesData';
import './Home.css';

const Home = () => {
  // Relationship diagnostic tool active situation
  const [activeSituationIndex, setActiveSituationIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentHeroImg, setCurrentHeroImg] = useState(0);

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

  const loveSituations = [
    {
      id: "ex-back",
      tabLabel: "💔 Ex Left / Blocked Me",
      title: "Get Ex Love Back & Reconnect Hearts",
      problem: "Your ex walked out, stopped communicating, or blocked you on all social media. Misunderstandings, ego, or outside interference tore you apart.",
      cosmicCause: "Severe Venus affliction, malefic Rahu interference, or broken emotional cords causing sudden distance.",
      solution: "Master Arvind performs sacred Vedic love reconnection rituals and energetic cord-healing to dissolve hostility and draw your ex back with renewed desire.",
      timeframe: "Results typically felt in 3 to 10 days",
      successRate: "99.4% Success Rate",
      actionText: "Fix This Situation on WhatsApp",
      image: "/images/services/bring-ex-back.webp"
    },
    {
      id: "love-spells",
      tabLabel: "✨ Need Potent Love Spell",
      title: "Sacred White-Light Love Spells & Fast Binding",
      problem: "You are deeply in love, but your partner is emotionally distant, reluctant to commit, or feelings are fading away.",
      cosmicCause: "Weak planetary magnetic resonance in the 5th & 7th astrological houses preventing full emotional surrender.",
      solution: "Consecrated white-light Vedic love spells channel pure positive cosmic energy, reigniting profound attraction, passion, and true devotion.",
      timeframe: "Visible positive shifts in 48 to 72 hours",
      successRate: "98.9% Success Rate",
      actionText: "Cast Love Spell with Master",
      image: "/images/services/love_reading.webp"
    },
    {
      id: "stop-divorce",
      tabLabel: "⚡ Marital Dispute & Divorce",
      title: "Stop Divorce & Restore Marital Harmony",
      problem: "Constant fights, sleepless nights, separate bedrooms, or pending divorce papers threatening to shatter your family.",
      cosmicCause: "Manglik Dosh clashes, negative domestic Vastu, or malefic transits across the 7th house of marriage.",
      solution: "Gauri-Shankar Vedic poojas combined with home Vastu pacification dissolve mutual resentment and restore peace and sacred fidelity.",
      timeframe: "Significant marital peace within 7 to 14 days",
      successRate: "99.1% Success Rate",
      actionText: "Save My Marriage Now",
      image: "/images/services/toxic-marriage-signs.webp"
    },
    {
      id: "third-party",
      tabLabel: "👥 Third-Party Interference",
      title: "Remove Third-Party & Jealous Envy",
      problem: "A friend, in-law, or third-party romantic interest is manipulating your partner and turning them against you.",
      cosmicCause: "Nazar (Evil Eye), toxic cord attachments, or deliberate negative psychic interference.",
      solution: "Master Arvind conducts an intense occult cord-cutting kriya and installs an impenetrable spiritual shield (Raksha Kavach) around your partner.",
      timeframe: "Negative third-party influences severed in 5 to 12 days",
      successRate: "99.6% Success Rate",
      actionText: "Remove Third-Party Influence",
      image: "/images/services/black-magic-removal.webp"
    },
    {
      id: "vashikaran",
      tabLabel: "🧲 Positive Love Vashikaran",
      title: "Love Vashikaran & Emotional Attraction",
      problem: "Your partner has become stubborn, aggressive, or completely emotionally closed off to your pleas and communication.",
      cosmicCause: "Rigid ego blocks and discordant mental frequency vibrations between both horoscopes.",
      solution: "Ethical Vedic Vashikaran mantras gently harmonize thoughts and awaken compassionate feelings without harm or bad karma.",
      timeframe: "Emotional softness and contact within 4 to 9 days",
      successRate: "99.2% Success Rate",
      actionText: "Consult on Positive Vashikaran",
      image: "/images/services/soulmate-connection.webp"
    },
    {
      id: "twin-flame",
      tabLabel: "🌌 Twin Flame Separation",
      title: "Twin Flame Reunion & Soul Cord Healing",
      problem: "Agonizing runner-chaser stages, intense soul ache, telepathic exhaustion, and inability to move on from your divine counterpart.",
      cosmicCause: "Spiritual karmic debt and unaligned chakra frequencies between twin souls.",
      solution: "Specialized soul-contract readings and heart chakra alignment to end painful separation and bring physical reunion.",
      timeframe: "Alignment shifts within 1 to 2 lunar cycles",
      successRate: "98.7% Success Rate",
      actionText: "Align With My Twin Flame",
      image: "/images/services/relationship_astrology_hero.webp"
    }
  ];

  const currentSituation = loveSituations[activeSituationIndex];

  // Love Testimonials with before/after status
  const loveTestimonials = [
    {
      couple: "Jessica & Marcus",
      city: "Edmonton, AB",
      status: "💔 Blocked for 5 Months ➔ ❤️ Reunited & Engaged",
      text: "Marcus left our shared home and blocked my number everywhere. I felt hopeless until I visited Master Arvind in Edmonton. He performed a sacred love reconnection ritual. In just 11 days, Marcus unblocked me and knocked on my door in tears. We are getting married this summer!",
      timeframe: "Reunited in 11 Days",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      couple: "David & Sarah",
      city: "Calgary, AB",
      status: "⚡ Divorce Papers Filed ➔ ❤️ Sacred Marriage Saved",
      text: "We were sleeping in separate rooms and our lawyers had already prepared separation documents. Master Arvind identified a severe planetary clash and evil eye from an envious relative. After his remedies, the bitterness completely dissolved. He saved our marriage and our children's future.",
      timeframe: "Saved in 2 Weeks",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      couple: "Simran & Harpreet",
      city: "Vancouver, BC",
      status: "👥 Family Opposing Marriage ➔ ❤️ Parents Blessed Union",
      text: "Both our families were strongly opposed to our inter-caste marriage for over 3 years. Master Arvind performed powerful Vedic family harmony poojas. Within 3 weeks, both sets of parents had a change of heart and celebrated our engagement together!",
      timeframe: "Blessings in 18 Days",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      couple: "Chloe & Liam",
      city: "Toronto, ON",
      status: "❄️ Cold Emotional Drift ➔ ❤️ Deep Passion Reignited",
      text: "My fiancé seemed to have lost all interest in me and commitment felt impossible. Master Arvind’s sacred love attraction rituals ignited a spark we hadn't felt in years. He is now more affectionate and attentive than ever before.",
      timeframe: "Shifted in 5 Days",
      image: "https://randomuser.me/api/portraits/women/89.jpg"
    }
  ];

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

  return (
    <div className="home-root">
      
      {/* HERO SECTION */}
      <section className="hero-cosmic-section">
        {/* Animated Background Atmosphere */}
        <div className="hero-celestial-glow glow-1"></div>
        <div className="hero-celestial-glow glow-2"></div>
        <div className="hero-star-particles"></div>

        <div className="hero-inner-container">
          {/* Left Text Content */}
          <div className="hero-text-side">
            <div className="hero-top-badge animate-fade-in">
              <span className="badge-flame-icon">🔥</span>
              <span className="badge-text">Edmonton’s #1 Renowned Love & Relationship Specialist</span>
            </div>

            <h1 className="hero-headline">
              Bring Your Lost Love Back & <br />
              <span className="gradient-text-love">Restore True Passion</span> With <br />
              <span className="gradient-text-gold">Master Arvind</span>
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
                <CheckCircle size={18} className="text-gold" />
                <span>100% Confidential & Ethical</span>
              </div>
              <div className="key-point-item">
                <CheckCircle size={18} className="text-love" />
                <span>Stop Divorce & Third Parties</span>
              </div>
              <div className="key-point-item">
                <CheckCircle size={18} className="text-gold" />
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
                className="btn-gold hero-btn-call"
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
                    <Star key={i} size={14} className="fill-gold" />
                  ))}
                  <strong className="proof-rating">4.99/5 Rating</strong>
                </div>
                <span className="proof-caption">Over 30,000+ Couples Reunited Across Canada</span>
              </div>
            </div>
          </div>

          {/* Right Visual Side - Pure Image Swapping Animation */}
          <div className="hero-visual-side">
            <div className="hero-image-swapper-frame">
              {/* Background Glow */}
              <div className="swapper-halo-glow"></div>

              {/* Multi-Layered 3D Deck Effect */}
              <div className="swapper-deck-layer deck-layer-2"></div>
              <div className="swapper-deck-layer deck-layer-1"></div>

              {/* Main Swapping Image Card */}
              <div className="swapper-main-card">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHeroImg}
                    className="swapper-slide"
                    initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.04, rotate: 2 }}
                    transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <img 
                      src={heroImages[currentHeroImg].src} 
                      alt={heroImages[currentHeroImg].alt} 
                      className="swapper-img"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Minimal Dot Indicators */}
              <div className="swapper-indicators">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentHeroImg(idx)}
                    className={`swapper-dot ${currentHeroImg === idx ? 'active' : ''}`}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
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

      {/* 4. INTERACTIVE RELATIONSHIP EMERGENCY DIAGNOSTIC TOOL */}
      <section className="diagnostic-section section-padding">
        <div className="diagnostic-header text-center">
          <div className="section-badge love-badge">
            <Heart size={14} className="text-love" fill="currentColor" /> Interactive Love Problem Diagnosis
          </div>
          <h2 className="section-title">
            Select Your Situation — <span className="gradient-text-gold">See Master Arvind's Solution</span>
          </h2>
          <p className="section-subtitle">
            Every broken relationship has a unique cosmic signature. Click on your current situation below to see the astrological root cause and Master Arvind's proven Vedic ritual.
          </p>
        </div>

        {/* Situation Tabs */}
        <div className="situation-tabs-grid">
          {loveSituations.map((item, idx) => (
            <button
              key={item.id}
              className={`situation-tab-btn ${activeSituationIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveSituationIndex(idx)}
            >
              <span>{item.tabLabel}</span>
            </button>
          ))}
        </div>

        {/* Selected Situation Display Card with Motion */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSituation.id}
            className="diagnostic-result-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div className="result-card-inner">
              <div className="result-card-info">
                <div className="result-meta-tags">
                  <span className="result-timeframe-tag">
                    <Clock size={14} /> {currentSituation.timeframe}
                  </span>
                  <span className="result-rate-tag">
                    <Sparkles size={14} /> {currentSituation.successRate}
                  </span>
                </div>

                <h3 className="result-title">{currentSituation.title}</h3>
                
                <div className="result-block problem-block">
                  <strong>The Current Situation:</strong>
                  <p>{currentSituation.problem}</p>
                </div>

                <div className="result-block cause-block">
                  <strong>Astrological Root Cause:</strong>
                  <p>{currentSituation.cosmicCause}</p>
                </div>

                <div className="result-block cure-block">
                  <strong>Master Arvind's Proven Remedy:</strong>
                  <p>{currentSituation.solution}</p>
                </div>

                <div className="result-cta-row">
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(`Hello Master Arvind, I need help with: ${currentSituation.title}. Please guide me.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle size={18} />
                    <span>{currentSituation.actionText}</span>
                  </a>

                  <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-gold">
                    <Phone size={18} />
                    <span>Speak with Master Arvind</span>
                  </a>
                </div>
              </div>

              <div className="result-card-visual">
                <div className="result-image-wrapper">
                  <img src={currentSituation.image} alt={currentSituation.title} />
                  <div className="result-image-glass-badge">
                    <Shield size={16} className="text-gold" />
                    <span>100% Confidential Guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 5. TOP LOVE & RELATIONSHIP SERVICES SHOWCASE */}
      <section className="services-showcase-section section-padding">
        <div className="services-showcase-header text-center">
          <div className="section-badge">
            <Sparkles size={14} className="text-gold" /> Specialized Divine Services
          </div>
          <h2 className="section-title">
            Our Core <span className="gradient-text-love">Love & Relationship</span> Remedies
          </h2>
          <p className="section-subtitle">
            Restoring love requires authentic mastery. Explore our specialized services created to protect your happiness and eliminate relationship obstacles permanently.
          </p>
        </div>

        <div className="love-services-grid">
          {servicesData.slice(0, 6).map((service, index) => (
            <div key={service.id} className="love-service-card glass-panel">
              <div className="service-card-top-image">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  onError={(e) => { e.target.src = "/images/services/love-solutions.webp"; }}
                />
                <span className="service-card-badge">{service.badge || "Featured"}</span>
              </div>

              <div className="service-card-body-content">
                <h3 className="service-card-heading">{service.title}</h3>
                <p className="service-card-desc-text">{service.shortDesc}</p>

                <ul className="service-benefits-quicklist">
                  {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                    <li key={bIdx}>
                      <CheckCircle size={14} className="text-love" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-action-bar">
                  <Link to={`/services/${service.id}`} className="service-learn-link">
                    <span>View Full Details</span>
                    <ArrowRight size={15} />
                  </Link>

                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(`Hello Master Arvind, I would like to consult regarding ${service.title}.`)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="service-quick-wa-btn" 
                    title="Quick WhatsApp Inquiry"
                  >
                    <MessageCircle size={16} />
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
            How Master Arvind <span className="gradient-text-gold">Reunites Broken Love</span>
          </h2>
          <p className="section-subtitle">
            A proven, compassionate 4-step spiritual journey designed to dissolve negative energetic blockages and realign both souls in lasting harmony.
          </p>
        </div>

        <div className="process-steps-container">
          <div className="process-step-card glass-panel">
            <div className="process-step-num">01</div>
            <div className="process-step-icon-wrap">
              <Sparkles size={24} className="text-gold" />
            </div>
            <h4>Cosmic Root Diagnosis</h4>
            <p>Master Arvind analyzes both natal horoscopes to identify planetary afflictions (Venus, Mars, Rahu) and karmic blocks creating separation.</p>
          </div>

          <div className="process-step-card glass-panel">
            <div className="process-step-num">02</div>
            <div className="process-step-icon-wrap">
              <Zap size={24} className="text-love" />
            </div>
            <h4>Negative Cord Cleansing</h4>
            <p>Severing accumulated resentment, toxic evil eye, in-law discord, and outside interference poisoning your partner’s thoughts.</p>
          </div>

          <div className="process-step-card glass-panel">
            <div className="process-step-num">03</div>
            <div className="process-step-icon-wrap">
              <Flame size={24} className="text-gold" />
            </div>
            <h4>Sacred Love Spell & Hawan</h4>
            <p>Consecrated Vedic mantras and white-light attraction rituals chanted during favorable cosmic muhurats to awaken intense affection.</p>
          </div>

          <div className="process-step-card glass-panel">
            <div className="process-step-num">04</div>
            <div className="process-step-icon-wrap">
              <Shield size={24} className="text-love" />
            </div>
            <h4>Reunion & Protection Shield</h4>
            <p>Your lover reaches out with genuine remorse and warmth. A protective spiritual talisman (Kavach) is installed to prevent future breakups.</p>
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
            Couples Reunited by <span className="gradient-text-love">Master Arvind</span>
          </h2>
          <p className="section-subtitle">
            Read heartfelt stories from real clients in Edmonton, Calgary, Vancouver, and Toronto whose love was resurrected through Master Arvind's guidance.
          </p>
        </div>

        <div className="reviews-cards-grid">
          {loveTestimonials.map((item, idx) => (
            <div key={idx} className="review-card glass-panel">
              <div className="review-card-top">
                <div className="review-author-wrap">
                  <img src={item.image} alt={item.couple} className="review-avatar" />
                  <div>
                    <h4>{item.couple}</h4>
                    <span className="review-city">{item.city}</span>
                  </div>
                </div>
                <div className="review-stars-col">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-gold" />
                  ))}
                </div>
              </div>

              <div className="review-transformation-badge">
                <Heart size={13} className="text-love" fill="currentColor" />
                <span>{item.status}</span>
              </div>

              <p className="review-text-content">
                "{item.text}"
              </p>

              <div className="review-card-footer">
                <span className="review-timeframe-tag">
                  <CheckCircle size={13} className="text-gold" /> {item.timeframe}
                </span>
                <span className="verified-badge">Verified Consultation</span>
              </div>
            </div>
          ))}
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
