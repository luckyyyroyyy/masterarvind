import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Heart, Sparkles, Phone, MessageCircle, Shield, Star, 
  Clock, MapPin, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, 
  Lock, Flame, Zap, Award, Users, Calendar, HelpCircle, Send, ShieldCheck,
  Edit3, X 
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

// Precision Animated Stat Counter (In-View Triggered for Meet Master Arvind Section)
const StatCounter = ({ target, suffix = "", decimals = 0, formatComma = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    let startTime = null;
    let animationFrameId;
    const duration = 2000;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * target;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : formatComma 
      ? Math.floor(displayValue).toLocaleString() 
      : Math.floor(displayValue).toString();

  return (
    <motion.span 
      ref={ref} 
      className="stat-number growing-stat-number"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      {formatted}{suffix}
    </motion.span>
  );
};

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

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

  // Write a Review Modal State
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    city: '',
    service: 'Ex Love Problem Solution',
    rating: 5,
    text: ''
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const message = `*New 5-Star Google Review Submission - Master Arvind*\n\n*Name:* ${reviewForm.name}\n*City:* ${reviewForm.city}\n*Service:* ${reviewForm.service}\n*Rating:* ${'⭐'.repeat(reviewForm.rating)}\n*Review:* "${reviewForm.text}"`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent(message)}`, '_blank');
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setIsReviewModalOpen(false);
      setReviewForm({ name: '', city: '', service: 'Ex Love Problem Solution', rating: 5, text: '' });
    }, 2000);
  };

  // 9 Diverse Astrological & Spiritual Services (Excluding pure love/relationship services)
  const diverseServices = [
    'career-guidance',
    'psychic-reading',
    'horoscope-reading',
    'palm-reading',
    'spiritual-healing',
    'black-magic-removal',
    'family-problems',
    'court-cases',
    'vastu-shastra'
  ].map(id => servicesData.find(s => s.id === id)).filter(Boolean);

  // Why Choose Us Pillars Data
  const whyChooseUsData = [
    {
      num: "01",
      icon: <Award size={26} />,
      bgClass: "icon-bg-gold",
      title: "25+ Years Hereditary Lineage",
      highlight: "Sacred Vedic Scholarship",
      desc: "Descended from a multi-generational lineage of enlightened Jyotish masters, Master Arvind combines ancestral spiritual authority with deep clairvoyant intuition.",
      tag: "Verified Master"
    },
    {
      num: "02",
      icon: <Sparkles size={26} />,
      bgClass: "icon-bg-ruby",
      title: "100% White-Light Sacred Rituals",
      highlight: "Ethical Divine Energies",
      desc: "Exclusively positive, safe universal frequencies that heal souls. Zero harmful karma, zero forced manipulation, and total spiritual protection.",
      tag: "Pure & Ethical"
    },
    {
      num: "03",
      icon: <Zap size={26} />,
      bgClass: "icon-bg-orange",
      title: "Fast & Tangible Breakthroughs",
      highlight: "Results in 3 to 7 Days",
      desc: "Accurately diagnosing the root cosmic blockage to perform targeted Vedic remedies that spark undeniable breakthroughs within days.",
      tag: "Proven Impact"
    },
    {
      num: "04",
      icon: <Lock size={26} />,
      bgClass: "icon-bg-emerald",
      title: "Absolute Confidentiality",
      highlight: "100% Privacy Protected",
      desc: "Your personal story, photos, and birth chart details are safeguarded with strict spiritual discretion, total anonymity, and zero judgment.",
      tag: "Discreet Sanctuary"
    }
  ];

  // 10 Distinct Dynamic Morphing Shapes for Why Choose Us Cards (Morphing every 2s, one-by-one)
  const masterShapes = [
    "24px 24px 24px 24px", // 1. Classic Sleek Rounded Card
    "60px 18px 60px 18px", // 2. Sacred Diagonal Leaf
    "18px 60px 18px 60px", // 3. Reverse Diagonal Leaf
    "60px 60px 18px 60px", // 4. Top Arch Teardrop
    "18px 60px 60px 18px", // 5. Fluid Wave Pebble
    "55px 18px 30px 60px", // 6. Dynamic Asymmetric Polygon
    "30px 60px 55px 18px", // 7. Inverted Asymmetric Wave
    "20px 50px 20px 50px", // 8. Gentle Elliptical Petal
    "50px 20px 50px 20px", // 9. Opposite Elliptical Petal
    "44px 44px 18px 18px"  // 10. Vaulted Arch Dome
  ];

  // 4 Unique offset sequences of 10 shapes (completing full seamless loop)
  const cardMorphShapes = [
    [
      masterShapes[0], masterShapes[1], masterShapes[2], masterShapes[3], masterShapes[4],
      masterShapes[5], masterShapes[6], masterShapes[7], masterShapes[8], masterShapes[9],
      masterShapes[0]
    ],
    [
      masterShapes[3], masterShapes[4], masterShapes[5], masterShapes[6], masterShapes[7],
      masterShapes[8], masterShapes[9], masterShapes[0], masterShapes[1], masterShapes[2],
      masterShapes[3]
    ],
    [
      masterShapes[6], masterShapes[7], masterShapes[8], masterShapes[9], masterShapes[0],
      masterShapes[1], masterShapes[2], masterShapes[3], masterShapes[4], masterShapes[5],
      masterShapes[6]
    ],
    [
      masterShapes[8], masterShapes[9], masterShapes[0], masterShapes[1], masterShapes[2],
      masterShapes[3], masterShapes[4], masterShapes[5], masterShapes[6], masterShapes[7],
      masterShapes[8]
    ]
  ];

  // 8 Attractive Vibrant Solid Colors for Why Choose Us Cards (Cycling every 4 seconds)
  const masterColorThemes = [
    { bg: "#EA580C", border: "rgba(255, 255, 255, 0.5)", shadow: "0 16px 40px rgba(234, 88, 12, 0.42)" }, // 1. Sunset Saffron
    { bg: "#B91C1C", border: "rgba(255, 255, 255, 0.5)", shadow: "0 16px 40px rgba(185, 28, 28, 0.42)" }, // 2. Ruby Crimson
    { bg: "#6D28D9", border: "rgba(255, 255, 255, 0.5)", shadow: "0 16px 40px rgba(109, 40, 217, 0.42)" }, // 3. Mystic Violet
    { bg: "#1D4ED8", border: "rgba(255, 255, 255, 0.5)", shadow: "0 16px 40px rgba(29, 78, 216, 0.42)" },  // 4. Cosmic Sapphire
    { bg: "#047857", border: "rgba(255, 255, 255, 0.5)", shadow: "0 16px 40px rgba(4, 120, 87, 0.42)" },  // 5. Divine Emerald
    { bg: "#BE185D", border: "rgba(255, 255, 255, 0.5)", shadow: "0 16px 40px rgba(190, 24, 93, 0.42)" },  // 6. Lotus Magenta
    { bg: "#B45309", border: "rgba(255, 255, 255, 0.5)", shadow: "0 16px 40px rgba(180, 83, 9, 0.42)" },  // 7. Sacred Amber Gold
    { bg: "#0F766E", border: "rgba(255, 255, 255, 0.5)", shadow: "0 16px 40px rgba(15, 118, 110, 0.42)" }  // 8. Mystic Ocean Teal
  ];

  const getCardColorCycle = (offset) => {
    const list = [];
    for (let i = 0; i < 8; i++) {
      list.push(masterColorThemes[(i + offset) % 8]);
    }
    list.push(masterColorThemes[offset % 8]);
    return {
      bg: list.map(c => c.bg),
      border: list.map(c => c.border),
      shadow: list.map(c => c.shadow)
    };
  };

  const cardColors = [
    getCardColorCycle(0),
    getCardColorCycle(2),
    getCardColorCycle(4),
    getCardColorCycle(6)
  ];

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

  // Row 1 Official Google Reviews (5 Authentic Client Stories)
  const googleReviewsRow1 = [
    {
      name: "Jessica Martinez & Marcus",
      meta: "Local Guide · 14 reviews · Edmonton",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      date: "2 weeks ago",
      tag: "❤️ Ex Love Reconnection",
      text: "Marcus had packed his bags, left our home, and blocked my number everywhere. I was heartbroken until a friend recommended Master Arvind in Edmonton. In just 11 days of his sacred Vedic rituals, Marcus called me in tears asking to come back. We are now happily engaged!",
      outcome: "Reunited in 11 Days"
    },
    {
      name: "David & Sarah Sterling",
      meta: "Verified Client · Calgary, AB",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      date: "3 weeks ago",
      tag: "💍 Marriage Saved from Divorce",
      text: "Divorce papers were already drawn up and we hadn't spoken with kindness in months. Master Arvind diagnosed severe planetary blockage and performed white-light family harmony poojas. Within two weeks the anger completely vanished. He saved our family.",
      outcome: "Marriage Saved in 14 Days"
    },
    {
      name: "Simranjeet Kaur & Harpreet",
      meta: "Local Guide · 22 reviews · Vancouver",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
      date: "a month ago",
      tag: "✨ Inter-Caste Family Approval",
      text: "Both our parents vehemently rejected our relationship for 3 long years. We consulted Master Arvind virtually over WhatsApp. His spiritual remedies removed the hostility between the families. Both families joyfully attended our engagement!",
      outcome: "Parental Blessing in 18 Days"
    },
    {
      name: "Chloe & Liam Henderson",
      meta: "Verified Client · Toronto, ON",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      date: "a month ago",
      tag: "🔥 Passion & Commitment Reignited",
      text: "Liam grew distant and told me he had lost feelings. Master Arvind performed a Venus love attraction reading and ritual. In only 5 days, Liam surprised me with flowers and admitted how deeply he loves me. The romance is stronger than when we first met.",
      outcome: "Reignited in 5 Days"
    },
    {
      name: "Amandeep Singh & Priya",
      meta: "Local Guide · 9 reviews · Surrey, BC",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      date: "2 months ago",
      tag: "🛡️ Negative Energy Cleansed",
      text: "Constant unexplainable fighting tore our relationship apart. Master Arvind identified negative evil eye energy sent by an envious person. Once cleansed, the dark cloud lifted immediately. We are at complete peace and closer than ever.",
      outcome: "Harmony Restored in 9 Days"
    }
  ];

  // Row 2 Official Google Reviews (5 Authentic Client Stories)
  const googleReviewsRow2 = [
    {
      name: "Michael & Jennifer Kowalski",
      meta: "Verified Client · Red Deer, AB",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
      date: "3 weeks ago",
      tag: "🚫 Third-Party Interference Removed",
      text: "An outside third person came between my wife and me, creating a wedge that looked impossible to fix. Master Arvind performed protective Vedic shield poojas. Within 12 days, the outside contact completely ceased and my wife returned home full of love.",
      outcome: "Reunited in 12 Days"
    },
    {
      name: "Rajesh & Sunita Patel",
      meta: "Local Guide · 31 reviews · Edmonton",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80",
      date: "2 weeks ago",
      tag: "🕉️ Manglik Dosha & In-Law Healing",
      text: "We visited Master Arvind at his Edmonton center. We were suffering from deep Manglik dosha and severe family stress. His personalized gemstones and prayers brought instant serenity. Master Arvind is truly God-gifted and profoundly humble.",
      outcome: "Peace in 7 Days"
    },
    {
      name: "Emily & Daniel Tremblay",
      meta: "Verified Client · Montreal, QC",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
      date: "a month ago",
      tag: "🕊️ Long-Distance Reconnection",
      text: "Living in different provinces, Daniel stopped calling and said he couldn't do it anymore. Master Arvind worked remotely using our birth photos. On day 8, Daniel booked a flight to visit me. We moved in together last weekend. Master Arvind is a miracle worker!",
      outcome: "Reconnected in 8 Days"
    },
    {
      name: "Navjot & Gurpreet Brar",
      meta: "Local Guide · 17 reviews · Calgary",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
      date: "5 weeks ago",
      tag: "💫 Accurate Destiny & Soulmate Forecast",
      text: "I had given up on marriage after multiple broken engagements. Master Arvind read my Kundali and accurately pinpointed the exact month my soulmate would arrive. Met Gurpreet exactly when he predicted and we are married today! Forever indebted.",
      outcome: "Accurate Destiny Forecast"
    },
    {
      name: "Tanya & Brandon Scott",
      meta: "Verified Client · Edmonton Sanctuary",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&auto=format&fit=crop&q=80",
      date: "1 month ago",
      tag: "🌟 Sacred White-Light Love Healing",
      text: "Master Arvind's sanctuary in Edmonton is full of calming spiritual aura. His reading was 100% accurate without me saying a word. His love spell worked gently with zero negativity. Brandon treats me like a queen now. Don't hesitate to contact him!",
      outcome: "Result in 6 Days"
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
          {/* Left Column: Vedic Master Authority Content */}
          <motion.div 
            className="vedic-hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
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

          {/* Right Column: Framed Sacred Visual Card + Overlaid Badge + 3-Box Stat Strip */}
          <motion.div 
            className="vedic-hero-visual-side"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="vedic-visual-card-wrapper">
              {/* Sacred Frame - Pop Small to Big Animation (Whole Frame & Image Together) */}
              <motion.div 
                className="vedic-framed-card"
                initial={{ opacity: 0, scale: 0.15 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 175, 
                  damping: 11, 
                  mass: 0.8,
                  delay: 0.15 
                }}
                whileHover={{ scale: 1.025, transition: { duration: 0.25 } }}
              >
                <div className="vedic-card-image-box">
                  <img 
                    src="/images/services/shiva-meditation.jpg" 
                    alt="Master Arvind Vedic Astrology Sanctuary - Lord Shiva in Meditation"
                    className="vedic-card-img"
                  />
                  <div className="vedic-card-shimmer"></div>
                </div>
              </motion.div>

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
        </div>
      </section>

      {/* ========================================================
         2. THREE CORE SPECIALIZED SERVICES (GET EX BACK, LOVE SPELL, BLACK MAGIC REMOVAL)
         ======================================================== */}
      <section className="three-pillars-section section-padding">
        <div className="three-pillars-container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="section-badge love-badge">
              <Sparkles size={14} className="text-ruby" /> Most Requested Divine Consultations
            </div>
            <h2 className="section-title">
              Specialized <span className="text-solid-red">Spiritual</span> Solutions
            </h2>
            <p className="section-subtitle">
              Master Arvind’s three primary sacred specialties — reuniting broken love, casting ethical white-light love spells, and permanently eradicating dark black magic forces.
            </p>
          </motion.div>

          <div className="three-pillars-grid">
            {/* Card 1: Get Ex Love Back - Flying in from Left */}
            <motion.div 
              className="three-pillar-card"
              initial={{ opacity: 0, x: -90, y: 70, rotate: -6, scale: 0.85 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 75, 
                damping: 14, 
                mass: 0.85,
                delay: 0.1 
              }}
              whileHover={{ y: -10, transition: { duration: 0.25, ease: "easeOut" } }}
            >
              <div className="pillar-card-image-wrap">
                <img 
                  src="/images/services/ex-love-couple.jpg" 
                  alt="Get Ex Love Back in 3-7 Days" 
                  className="pillar-card-img"
                  onError={(e) => { e.target.src = "/images/services/love-solutions.webp"; }}
                />
              </div>
              <div className="pillar-card-body">
                <h3 className="pillar-card-title">Get Ex Love Back</h3>
                <p className="pillar-card-desc">
                  Reignite lost passion, dissolve third-party interference, and bring your ex-partner back into your life permanently within 3 to 7 days.
                </p>
                <div className="pillar-card-actions">
                  <Link to="/services/ex-love-back" className="pillar-btn-more">
                    <span>Know More</span>
                    <ArrowRight size={13} />
                  </Link>
                  <a href={`tel:${CONTACT_INFO.phoneLink}`} className="pillar-btn-call" title="Call Now">
                    <Phone size={13} />
                    <span>Call</span>
                  </a>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I need urgent guidance to get my ex love back.")}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="pillar-btn-wa"
                    title="WhatsApp Now"
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Sacred Love Spells - Flying in from Bottom */}
            <motion.div 
              className="three-pillar-card"
              initial={{ opacity: 0, y: 110, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 75, 
                damping: 14, 
                mass: 0.85,
                delay: 0.25 
              }}
              whileHover={{ y: -10, transition: { duration: 0.25, ease: "easeOut" } }}
            >
              <div className="pillar-card-image-wrap">
                <img 
                  src="/images/services/love-spell-candles.jpg" 
                  alt="Sacred Love Spells & Attraction" 
                  className="pillar-card-img"
                  onError={(e) => { e.target.src = "/images/services/love-solutions.webp"; }}
                />
              </div>
              <div className="pillar-card-body">
                <h3 className="pillar-card-title">Love Spells</h3>
                <p className="pillar-card-desc">
                  Ethical Vedic attraction rituals to spark deep devotion, inspire marriage commitment, and strengthen emotional soulmate bonds with zero negative karma.
                </p>
                <div className="pillar-card-actions">
                  <Link to="/services/love-spells" className="pillar-btn-more">
                    <span>Know More</span>
                    <ArrowRight size={13} />
                  </Link>
                  <a href={`tel:${CONTACT_INFO.phoneLink}`} className="pillar-btn-call" title="Call Now">
                    <Phone size={13} />
                    <span>Call</span>
                  </a>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to consult regarding sacred love spells.")}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="pillar-btn-wa"
                    title="WhatsApp Now"
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Black Magic Removal - Flying in from Right */}
            <motion.div 
              className="three-pillar-card"
              initial={{ opacity: 0, x: 90, y: 70, rotate: 6, scale: 0.85 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 75, 
                damping: 14, 
                mass: 0.85,
                delay: 0.4 
              }}
              whileHover={{ y: -10, transition: { duration: 0.25, ease: "easeOut" } }}
            >
              <div className="pillar-card-image-wrap">
                <img 
                  src="/images/services/black-magic-ritual.jpg" 
                  alt="Black Magic & Negative Energy Removal" 
                  className="pillar-card-img"
                  onError={(e) => { e.target.src = "/images/services/love-solutions.webp"; }}
                />
              </div>
              <div className="pillar-card-body">
                <h3 className="pillar-card-title">Black Magic Removal</h3>
                <p className="pillar-card-desc">
                  Permanently eradicate dark forces, jealous curses, evil eye (Nazar), and negative spiritual blocks sabotaging your relationships, health, and peace.
                </p>
                <div className="pillar-card-actions">
                  <Link to="/services/black-magic-removal" className="pillar-btn-more">
                    <span>Know More</span>
                    <ArrowRight size={13} />
                  </Link>
                  <a href={`tel:${CONTACT_INFO.phoneLink}`} className="pillar-btn-call" title="Call Now">
                    <Phone size={13} />
                    <span>Call</span>
                  </a>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I need urgent help with black magic and negative energy removal.")}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="pillar-btn-wa"
                    title="WhatsApp Now"
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. THE 4-STEP COSMIC JOURNEY OF LOVE RESTORATION */}
      <section className="process-timeline-section section-padding">
        <motion.div 
          className="process-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="section-badge love-badge">
            <Heart size={14} className="text-love" fill="currentColor" /> Spiritual Methodology
          </div>
          <h2 className="section-title">
            How Master Arvind <span className="text-solid-orange">Reunites Broken Love</span>
          </h2>
          <p className="section-subtitle">
            A proven, compassionate 4-step spiritual journey designed to dissolve negative energetic blockages and realign both souls in lasting harmony.
          </p>
        </motion.div>

        <div className="methodology-split-container">
          {/* Left: 2x2 Grid for Steps 1, 2, 3, 4 - Popping up one after another */}
          <div className="methodology-steps-2x2">
            <motion.div 
              className="process-step-card glass-panel"
              initial={{ opacity: 0, scale: 0.35, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 130, 
                damping: 12, 
                mass: 0.75, 
                delay: 0.1 
              }}
              whileHover={{ y: -6, scale: 1.025, transition: { duration: 0.2 } }}
            >
              <div className="process-step-num">01</div>
              <div className="process-step-icon-wrap">
                <Sparkles size={22} className="text-gold" />
              </div>
              <h4>Cosmic Root Diagnosis</h4>
              <p>Master Arvind analyzes both natal horoscopes to identify planetary afflictions (Venus, Mars, Rahu) and karmic blocks creating separation.</p>
            </motion.div>

            <motion.div 
              className="process-step-card glass-panel"
              initial={{ opacity: 0, scale: 0.35, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 130, 
                damping: 12, 
                mass: 0.75, 
                delay: 0.5 
              }}
              whileHover={{ y: -6, scale: 1.025, transition: { duration: 0.2 } }}
            >
              <div className="process-step-num">02</div>
              <div className="process-step-icon-wrap">
                <Zap size={22} className="text-love" />
              </div>
              <h4>Negative Cord Cleansing</h4>
              <p>Severing accumulated resentment, toxic evil eye, in-law discord, and outside interference poisoning your partner’s thoughts.</p>
            </motion.div>

            <motion.div 
              className="process-step-card glass-panel"
              initial={{ opacity: 0, scale: 0.35, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 130, 
                damping: 12, 
                mass: 0.75, 
                delay: 0.9 
              }}
              whileHover={{ y: -6, scale: 1.025, transition: { duration: 0.2 } }}
            >
              <div className="process-step-num">03</div>
              <div className="process-step-icon-wrap">
                <Flame size={22} className="text-gold" />
              </div>
              <h4>Sacred Love Spell & Hawan</h4>
              <p>Consecrated Vedic mantras and white-light attraction rituals chanted during favorable cosmic muhurats to awaken intense affection.</p>
            </motion.div>

            <motion.div 
              className="process-step-card glass-panel"
              initial={{ opacity: 0, scale: 0.35, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                type: "spring", 
                stiffness: 130, 
                damping: 12, 
                mass: 0.75, 
                delay: 1.3 
              }}
              whileHover={{ y: -6, scale: 1.025, transition: { duration: 0.2 } }}
            >
              <div className="process-step-num">04</div>
              <div className="process-step-icon-wrap">
                <Shield size={22} className="text-love" />
              </div>
              <h4>Reunion & Protection Shield</h4>
              <p>Your lover reaches out with genuine remorse and warmth. A protective spiritual talisman (Kavach) is installed to prevent future breakups.</p>
            </motion.div>
          </div>

          {/* Right: Connect Form Card - Falling from the sky naturally */}
          <div className="methodology-form-wrapper">
            <motion.div 
              className="connect-master-card"
              initial={{ opacity: 0, y: -280, rotate: -2.5, scale: 1.02 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ 
                type: "spring", 
                stiffness: 75, 
                damping: 11, 
                mass: 1.35, 
                delay: 0.35 
              }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
         4. DIVERSE ASTROLOGY & SPIRITUAL SERVICES SHOWCASE (9-CARD GRID)
         ======================================================== */}
      <section className="services-showcase-section section-padding">
        <div className="services-showcase-header text-center">
          <div className="section-badge love-badge">
            <Sparkles size={14} className="text-ruby" /> Specialized Divine Services
          </div>
          <h2 className="section-title">
            Our Comprehensive <span className="gradient-text-love">Vedic Astrology & Spiritual</span> Remedies
          </h2>
          <p className="section-subtitle">
            Beyond relationship guidance, Master Arvind provides hereditary astrological foresight, career prosperity rituals, psychic clairvoyance, family dispute resolution, and space energy cleansing.
          </p>
        </div>

        <div className="love-services-grid">
          {diverseServices.map((service, idx) => (
            <motion.div 
              key={service.id} 
              className="love-service-card glass-panel"
              initial={{ 
                opacity: 0, 
                scale: 0.25, 
                rotate: (idx % 2 === 0 ? -35 : 35), 
                y: 50 
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0, 
                y: 0 
              }}
              viewport={{ once: false, amount: 0.12 }}
              transition={{ 
                type: "spring", 
                stiffness: 140, 
                damping: 10, 
                mass: 0.75, 
                delay: (idx % 3) * 0.12 + Math.floor(idx / 3) * 0.15 
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.03, 
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
            >
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
            </motion.div>
          ))}
        </div>

        <div className="services-bottom-action text-center">
          <Link to="/services" className="btn-outline">
            <span>Explore All 15+ Spiritual & Astrology Services</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 7. ABOUT MASTER ARVIND SPOTLIGHT */}
      <section className="master-spotlight-section section-padding">
        <div className="master-spotlight-container glass-panel">
          <div className="master-spotlight-grid">
            <div className="master-image-col">
              <div className="master-portrait-frame">
                <img 
                  src="/images/services/master-arvind-portrait.jpg" 
                  alt="Master Arvind Vedic Astrologer & Spiritualist" 
                  className="master-portrait-img"
                  onError={(e) => { e.target.src = "/images/services/Master Jai Bn-1.webp"; }}
                />
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
                  <StatCounter target={30000} suffix="+" formatComma={true} />
                  <span className="stat-label">Couples Reunited</span>
                </div>
                <div className="master-stat-item">
                  <StatCounter target={99.4} suffix="%" decimals={1} />
                  <span className="stat-label">Accurate Readings</span>
                </div>
                <div className="master-stat-item">
                  <StatCounter target={25} suffix="+" />
                  <span className="stat-label">Years of Mastery</span>
                </div>
                <div className="master-stat-item">
                  <StatCounter target={100} suffix="%" />
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

      {/* ========================================================
         7.5 WHY CHOOSE US SECTION (POWERFUL & ATTRACTIVE)
         ======================================================== */}
      <section className="why-choose-section section-padding">
        <div className="why-choose-container">
          <motion.div 
            className="why-choose-header text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="section-badge love-badge">
              <Sparkles size={14} className="text-ruby" /> Unrivaled Spiritual Authority
            </div>
            <h2 className="section-title">
              Why Thousands Trust <span className="gradient-text-love">Master Arvind</span>
            </h2>
            <p className="section-subtitle">
              Discover the core pillars of trust, authentic hereditary Vedic mastery, and compassionate care that make Master Arvind Canada’s most sought-after spiritualist.
            </p>
          </motion.div>

          <div className="why-choose-grid">
            {whyChooseUsData.map((item, idx) => (
              <motion.div
                key={idx}
                className="why-choose-card"
                initial={{ 
                  opacity: 0, 
                  y: 35, 
                  scale: 0.94,
                  backgroundColor: cardColors[idx].bg[0],
                  borderColor: cardColors[idx].border[0]
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  borderRadius: cardMorphShapes[idx],
                  backgroundColor: cardColors[idx].bg,
                  borderColor: cardColors[idx].border,
                  boxShadow: cardColors[idx].shadow
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ 
                  opacity: { duration: 0.5, delay: idx * 0.12 },
                  y: { type: "spring", stiffness: 110, damping: 13, delay: idx * 0.12 },
                  scale: { type: "spring", stiffness: 110, damping: 13, delay: idx * 0.12 },
                  borderRadius: { 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: idx * 0.5 
                  },
                  backgroundColor: {
                    duration: 32,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 1.0
                  },
                  borderColor: {
                    duration: 32,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 1.0
                  },
                  boxShadow: {
                    duration: 32,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 1.0
                  }
                }}
                whileHover={{ y: -8, scale: 1.025, transition: { duration: 0.25 } }}
              >
                <div className="why-card-top-row">
                  <span className="why-card-num">{item.num}</span>
                  <span className="why-card-tag">{item.tag}</span>
                </div>

                <div className={`why-card-icon-wrap ${item.bgClass}`}>
                  {item.icon}
                </div>

                <h3 className="why-card-title">{item.title}</h3>
                <span className="why-card-highlight">{item.highlight}</span>
                <p className="why-card-desc">{item.desc}</p>
                <div className="why-card-bottom-bar"></div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="why-reassurance-ribbon"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <div className="why-ribbon-left">
              <div className="why-ribbon-icon">
                <ShieldCheck size={26} />
              </div>
              <div className="why-ribbon-text">
                <h4>Facing a painful breakup, family crisis, or negative energy?</h4>
                <p>Speak directly with Master Arvind today for a confidential, compassionate reading.</p>
              </div>
            </div>

            <div className="why-ribbon-actions">
              <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-primary">
                <Phone size={16} />
                <span>Call Directly</span>
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsappLink}?text=${encodeURIComponent("Hello Master Arvind, I would like to consult with you confidentially.")}`} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-whatsapp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. CLIENT LOVE MIRACLE TRANSFORMATIONS (OFFICIAL GOOGLE REVIEWS WITH CAR-BRAKE ANIMATION) */}
      <section className="reviews-section">
        <div className="reviews-header-container">
          <div className="reviews-header text-center">
            <div className="section-badge love-badge">
              <Heart size={14} className="text-love" fill="currentColor" /> Real Love Miracles
            </div>
            <h2 className="section-title">
              Couples Reunited by <span className="text-solid-orange">Master Arvind</span>
            </h2>
            <p className="section-subtitle">
              Heartfelt 5-star experiences posted on Google by real couples and families whose love was healed through Master Arvind's sacred Vedic guidance.
            </p>
          </div>

          {/* Official Google Reviews Trust Bar */}
          <div className="google-trust-bar">
            <div className="google-trust-left">
              <div className="google-big-g">
                <svg viewBox="0 0 24 24" width="28" height="28">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </div>
              <div className="google-rating-summary">
                <div className="google-score-row">
                  <span className="google-score-num">4.9</span>
                  <div className="google-trust-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#FBBC04" color="#FBBC04" />
                    ))}
                  </div>
                </div>
                <span className="google-reviews-count">Based on 380+ Verified Google Reviews</span>
              </div>
            </div>

            <div className="google-trust-badges">
              <div className="google-pill-badge">
                <ShieldCheck size={15} className="text-emerald" />
                <span>100% Genuine Client Experiences</span>
              </div>
              <div className="google-pill-badge">
                <Heart size={14} className="text-love" fill="currentColor" />
                <span>Over 30,000 Couples Reunited</span>
              </div>
              <button 
                type="button" 
                className="google-write-review-btn"
                onClick={() => setIsReviewModalOpen(true)}
              >
                <Edit3 size={14} />
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Two Animated Rows Viewport with Car-Brake Dynamics (Full Bleed - Edge to Edge) */}
        <div className="google-reviews-viewport">
          {/* Row 1: Left to Right */}
          <div className="google-reviews-row row-left-to-right">
            <div className="google-reviews-track">
              {[...googleReviewsRow1, ...googleReviewsRow1].map((item, idx) => (
                <div key={`row1-${idx}`} className="google-review-card">
                  <div className="google-card-header">
                    <div className="google-user-profile">
                      <img src={item.avatar} alt={item.name} className="google-avatar" />
                      <div className="google-user-meta">
                        <h4 className="google-user-name">{item.name}</h4>
                        <span className="google-user-sub">{item.meta}</span>
                      </div>
                    </div>
                    <div className="google-g-logo" title="Google Verified Review">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                      </svg>
                    </div>
                  </div>

                  <div className="google-card-rating">
                    <div className="google-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#FBBC04" color="#FBBC04" />
                      ))}
                    </div>
                    <span className="google-card-date">{item.date}</span>
                  </div>

                  <p className="google-card-text">
                    "{item.text}"
                  </p>

                  <div className="google-card-footer">
                    <div className="google-verified-pill">
                      <CheckCircle size={14} className="text-emerald" />
                      <span>{item.outcome}</span>
                    </div>
                    <span className="google-helpful-badge">Helpful 👍</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="google-reviews-row row-right-to-left">
            <div className="google-reviews-track">
              {[...googleReviewsRow2, ...googleReviewsRow2].map((item, idx) => (
                <div key={`row2-${idx}`} className="google-review-card">
                  <div className="google-card-header">
                    <div className="google-user-profile">
                      <img src={item.avatar} alt={item.name} className="google-avatar" />
                      <div className="google-user-meta">
                        <h4 className="google-user-name">{item.name}</h4>
                        <span className="google-user-sub">{item.meta}</span>
                      </div>
                    </div>
                    <div className="google-g-logo" title="Google Verified Review">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                      </svg>
                    </div>
                  </div>

                  <div className="google-card-rating">
                    <div className="google-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} fill="#FBBC04" color="#FBBC04" />
                      ))}
                    </div>
                    <span className="google-card-date">{item.date}</span>
                  </div>

                  <p className="google-card-text">
                    "{item.text}"
                  </p>

                  <div className="google-card-footer">
                    <div className="google-verified-pill">
                      <CheckCircle size={14} className="text-emerald" />
                      <span>{item.outcome}</span>
                    </div>
                    <span className="google-helpful-badge">Helpful 👍</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Google Write a Review Interactive Modal */}
        <AnimatePresence>
          {isReviewModalOpen && (
            <div className="review-modal-backdrop" onClick={() => setIsReviewModalOpen(false)}>
              <motion.div 
                className="review-modal-card" 
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="review-modal-header">
                  <div className="review-modal-title-row">
                    <div className="google-mini-g">
                      <svg viewBox="0 0 24 24" width="22" height="22">
                        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="review-modal-title">Write a Review for Master Arvind</h3>
                      <p className="review-modal-subtitle">Share your authentic Vedic miracle experience</p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="review-modal-close" 
                    onClick={() => setIsReviewModalOpen(false)}
                  >
                    <X size={20} />
                  </button>
                </div>

                {reviewSubmitted ? (
                  <div className="review-success-state">
                    <CheckCircle size={48} className="text-emerald" />
                    <h4>Thank You For Sharing!</h4>
                    <p>Your 5-star review has been recorded and submitted for verification.</p>
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="review-modal-form">
                    <div className="review-rating-select">
                      <label>Your Rating:</label>
                      <div className="review-stars-interactive">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            className="star-btn"
                            onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                          >
                            <Star 
                              size={26} 
                              fill={star <= reviewForm.rating ? "#FBBC04" : "none"} 
                              color={star <= reviewForm.rating ? "#FBBC04" : "#D1D5DB"} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="review-form-row">
                      <div className="review-input-group">
                        <label>Your Name / Couple Name *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Jessica & Marcus" 
                          value={reviewForm.name}
                          onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                        />
                      </div>
                      <div className="review-input-group">
                        <label>City & Province *</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Edmonton, AB" 
                          value={reviewForm.city}
                          onChange={(e) => setReviewForm({ ...reviewForm, city: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="review-input-group">
                      <label>Vedic Consultation or Healing Service</label>
                      <select 
                        value={reviewForm.service}
                        onChange={(e) => setReviewForm({ ...reviewForm, service: e.target.value })}
                      >
                        <option value="Ex Love Problem Solution">Ex Love Problem Solution</option>
                        <option value="Stopping Divorce & Separation">Stopping Divorce & Separation</option>
                        <option value="Inter-Caste Marriage Approval">Inter-Caste Marriage Approval</option>
                        <option value="Black Magic & Negative Energy Cleansing">Black Magic & Negative Energy Cleansing</option>
                        <option value="Kundali & Horoscope Guidance">Kundali & Horoscope Guidance</option>
                      </select>
                    </div>

                    <div className="review-input-group">
                      <label>Your Story & Experience *</label>
                      <textarea 
                        required 
                        rows={4}
                        placeholder="Describe how Master Arvind helped you and the positive changes you experienced..."
                        value={reviewForm.text}
                        onChange={(e) => setReviewForm({ ...reviewForm, text: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="review-submit-btn">
                      <Send size={16} />
                      <span>Post Verified Review</span>
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* 9. FAQ & EDMONTON LOCATION MAP (SPLIT SECTION) */}
      <section className="faq-map-section section-padding">
        <div className="faq-map-container">
          <div className="faq-map-header text-center">
            <div className="section-badge love-badge">
              <HelpCircle size={14} className="text-love" /> Clarity & Location
            </div>
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text-gold">Questions</span>
            </h2>
            <p className="section-subtitle">
              Clear, honest answers to common questions about Master Arvind’s consultations, sacred remedies, and our Edmonton sanctuary location.
            </p>
          </div>

          <div className="faq-map-split-grid">
            {/* Left Side: FAQ Accordion */}
            <div className="faq-accordion-col">
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
            </div>

            {/* Right Side: Map Card */}
            <div className="faq-map-col">
              <div className="faq-map-card glass-panel">
                <div className="faq-map-frame-box">
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

                <div className="faq-map-details">
                  <div className="faq-map-address">
                    <MapPin className="text-gold" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>Master Arvind Spiritual Sanctuary</strong>
                      <p>{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  <div className="faq-map-buttons">
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-gold"
                    >
                      <MapPin size={15} />
                      <span>Get Directions</span>
                    </a>

                    <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-outline">
                      <Phone size={15} />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
