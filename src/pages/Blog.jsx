import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Heart, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: "Signs Your Ex Still Has Deep Feelings for You (And How to Reunite)",
      excerpt: "Even when an ex has blocked you or seems distant, subtle energetic vibrations often reveal unfinished soul contracts. Discover how Vedic astrological transits and love reconnection rituals can turn hesitation into a passionate return.",
      date: "October 14, 2026",
      author: "Master Arvind",
      image: "/images/blogs/love_bond.png",
      tag: "Love & Relationships"
    },
    {
      title: "The Ultimate Guide to Understanding Your Vedic Birth Chart",
      excerpt: "Your Janam Kundli is a snapshot of the celestial heavens at the exact moment of your birth. Discover how planetary placements dictate your romantic destiny, soulmate timing, and hidden karmic potentials.",
      date: "September 28, 2026",
      author: "Master Arvind",
      image: "/images/blogs/birth_chart.png",
      tag: "Vedic Astrology"
    },
    {
      title: "How Sacred White-Light Love Spells Truly Work",
      excerpt: "Distinguishing between dangerous black magic and ethical, positive Vedic love rituals. Learn how sacred Sanskrit mantras align hearts without causing negative karma or violating free will.",
      date: "September 15, 2026",
      author: "Master Arvind",
      image: "/images/blogs/tarot_cards.png",
      tag: "Love Spells"
    },
    {
      title: "What Your Palm's Heart Line Reveals About Marriage & Soulmates",
      excerpt: "The sacred lines on your hands map your destiny. Learn what branches, islands, and intersections on your Heart Line reveal about relationship timing, heartbreak recovery, and lifelong compatibility.",
      date: "September 02, 2026",
      author: "Master Arvind",
      image: "/images/blogs/palm_reading.png",
      tag: "Palmistry"
    },
    {
      title: "Detecting & Clearing Evil Eye (Nazar) Destroying Your Relationship",
      excerpt: "Has your relationship deteriorated suddenly after sharing your happiness? Learn how jealous vibrations and envious stares can trigger unnecessary arguments, and how to raise a spiritual shield.",
      date: "August 22, 2026",
      author: "Master Arvind",
      image: "/images/blogs/vedic_pooja.png",
      tag: "Energy Cleansing"
    },
    {
      title: "Navigating Manglik Dosh Clashes in Marriage",
      excerpt: "Mars afflictions are notorious for marital stress and communication breakdowns. Master Arvind explains effective Vedic pacification remedies and Vastu adjustments to restore peace in your home.",
      date: "August 10, 2026",
      author: "Master Arvind",
      image: "/images/blogs/zodiac_chart.png",
      tag: "Marriage Healing"
    },
    {
      title: "Twin Flames vs. Karmic Soulmates: Recognizing True Spiritual Union",
      excerpt: "Intense attraction isn't always destiny; often it is a karmic mirror demanding spiritual healing. Explore the Vedic markers of twin flame connections and how sacred rituals guide two souls through separation into divine harmony.",
      date: "July 29, 2026",
      author: "Master Arvind",
      image: "/images/blogs/crystal_ball.png",
      tag: "Twin Flame Connection"
    },
    {
      title: "The Power of Full Moon Rituals in Rekindling Lost Romantic Passion",
      excerpt: "The lunar cycles govern water, human emotions, and romantic receptivity. Master Arvind explains how planetary energies during the Purnima (Full Moon) can be channeled through consecrated love yantras to soften hardened hearts.",
      date: "July 15, 2026",
      author: "Master Arvind",
      image: "/images/blogs/full_moon.png",
      tag: "Moon Astrology & Love"
    },
    {
      title: "5 Hidden Chakras Governing Emotional Attachment and Marital Trust",
      excerpt: "When the Anahata (Heart) and Swadhisthana (Sacral) chakras fall out of resonance due to betrayal or stress, emotional detachment sets in. Discover Master Arvind's personalized energy balancing mantras that restore marital trust.",
      date: "June 30, 2026",
      author: "Master Arvind",
      image: "/images/blogs/chakra_alignment.jpg",
      tag: "Chakra Healing"
    },
    {
      title: "How Resonant Healing Crystals Sever Toxic Third-Party Interference",
      excerpt: "Third-party intrusions often stem from lower auric vibrations or ill-wishing outsiders. Discover how sacred black tourmaline, consecrated rose quartz, and ancient Vedic Kavach shields permanently cleanse your love sanctum.",
      date: "June 12, 2026",
      author: "Master Arvind",
      image: "/images/blogs/healing_crystals.png",
      tag: "Spiritual Protection"
    }
  ];

  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <div className="blog-page-root animate-fade-in section-padding">
      <div className="blog-header text-center mb-5">
        <div className="section-badge love-badge" style={{ margin: '0 auto 1.25rem' }}>
          <Sparkles size={14} className="text-love" /> Vedic Wisdom & Spiritual Advice
        </div>
        <h1 className="section-title">
          Master Arvind's <span className="gradient-text-gold">Spiritual Insights Blog</span>
        </h1>
        <p className="section-subtitle">
          Profound articles on love spells, Vedic astrology, healing heartbreak, palmistry, and spiritual protection written by Master Arvind in Edmonton, AB.
        </p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Featured Post */}
        <article className="blog-featured-card glass-panel">
          <div className="blog-featured-image-wrapper">
            <img src={featuredPost.image} alt={featuredPost.title} className="blog-featured-image" />
          </div>
          <div className="blog-featured-content">
            <span className="blog-category-tag">{featuredPost.tag}</span>
            <div className="blog-meta">
              <span><Calendar size={14} className="text-gold" /> {featuredPost.date}</span>
              <span><User size={14} className="text-love" /> {featuredPost.author}</span>
            </div>
            <h2 className="blog-title">{featuredPost.title}</h2>
            <p className="blog-excerpt">{featuredPost.excerpt}</p>
            <div style={{ display: 'flex', gap: '14px', marginTop: 'auto', flexWrap: 'wrap' }}>
              <Link to="/book" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.86rem' }}>
                Consult Master on This
              </Link>
              <a href={`tel:${CONTACT_INFO.phoneLink}`} className="btn-outline" style={{ padding: '10px 18px', fontSize: '0.86rem' }}>
                <Phone size={14} /> Call: {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </article>

        {/* 3-Column Grid for the rest */}
        <div className="blog-grid">
          {gridPosts.map((post, index) => (
            <article key={index} className="blog-card glass-panel">
              <div className="blog-card-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-card-image" />
              </div>
              <div className="blog-card-content">
                <span className="blog-category-tag">{post.tag}</span>
                <div className="blog-meta">
                  <span><Calendar size={13} className="text-gold" /> {post.date}</span>
                  <span><User size={13} className="text-love" /> {post.author}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <Link to="/book" className="btn-primary" style={{ width: '100%', textAlign: 'center', padding: '9px 16px', fontSize: '0.82rem' }}>
                    Request Guidance &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
