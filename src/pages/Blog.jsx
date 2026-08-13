import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: "The Ultimate Guide to Understanding Your Birth Chart",
      excerpt: "Your natal chart is a snapshot of the sky at the exact moment you were born. Discover how the placements of planets dictate your personality, destiny, and hidden potentials. A must-read for beginners.",
      date: "August 12, 2026",
      author: "Master Astrologer",
      image: "/images/blogs/birth_chart.png"
    },
    {
      title: "How to Read Tarot Cards: A Beginner's Guide",
      excerpt: "Tarot is more than just divination; it's a mirror to the subconscious. Learn the basic layout, the difference between Major and Minor Arcana, and how to do a simple 3-card pull.",
      date: "August 09, 2026",
      author: "Tarot Expert",
      image: "/images/blogs/tarot_cards.png"
    },
    {
      title: "The Power of Healing Crystals in Daily Life",
      excerpt: "From Amethyst to Rose Quartz, crystals hold vibrational frequencies that can align your chakras and protect your aura. Find out which stones you need for anxiety, love, and focus.",
      date: "August 05, 2026",
      author: "Spiritual Healer",
      image: "/images/blogs/healing_crystals.png"
    },
    {
      title: "Navigating Mercury Retrograde Without Losing Your Mind",
      excerpt: "Mercury retrograde is often feared, but it's actually a powerful time for reflection and realignment. Discover how to navigate its cosmic energy and avoid communication breakdowns.",
      date: "July 28, 2026",
      author: "Master Astrologer",
      image: "/images/blogs/zodiac_chart.png"
    },
    {
      title: "What Your Palm Says About Your Love Life",
      excerpt: "The lines on your hands are a map of your soul's journey. Learn the basics of palmistry and what your heart line reveals about your romantic destiny and relationship patterns.",
      date: "July 22, 2026",
      author: "Palmistry Expert",
      image: "/images/blogs/palm_reading.png"
    },
    {
      title: "Vedic Astrology vs Western Astrology: Key Differences",
      excerpt: "Confused about why your zodiac sign changes between systems? We break down the sidereal vs tropical zodiac systems and explain why Vedic astrology is highly accurate for predictive timing.",
      date: "July 18, 2026",
      author: "Vedic Scholar",
      image: "/images/blogs/vedic_pooja.png"
    },
    {
      title: "Attracting Your Soulmate Through Cosmic Alignment",
      excerpt: "Are you blocking your own blessings? Learn how to clear energetic blockages, manifest love, and use Venus transits to your advantage when looking for your twin flame.",
      date: "July 10, 2026",
      author: "Relationship Guru",
      image: "/images/blogs/love_bond.png"
    },
    {
      title: "The Magic of Scrying: How to Use a Crystal Ball",
      excerpt: "Scrying is an ancient art of gazing into a crystal ball to receive clairvoyant visions. Here is how to prepare your space, cleanse your mind, and start receiving spiritual messages.",
      date: "July 05, 2026",
      author: "Clairvoyant",
      image: "/images/blogs/crystal_ball.png"
    },
    {
      title: "Harnessing the Energy of the Full Moon",
      excerpt: "The Full Moon is a time of release and culmination. Discover powerful rituals for letting go of negative energy, charging your crystals, and writing manifestation intentions.",
      date: "June 29, 2026",
      author: "Spiritual Healer",
      image: "/images/blogs/real_full_moon.png"
    },
    {
      title: "Understanding Zodiac Elements: Fire, Earth, Air, Water",
      excerpt: "The 12 zodiac signs are divided into four fundamental elements. Learn how these elements shape your temperament, compatibility, and core motivations in life.",
      date: "June 21, 2026",
      author: "Master Astrologer",
      image: "/images/blogs/zodiac_elements.png"
    }
  ];

  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <div className="page-wrapper animate-fade-in section-padding">
      <div className="page-header text-center mb-5">
        <h1 className="section-title">Cosmic Insights Blog</h1>
        <p className="text-secondary" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Explore our latest articles on astrology, tarot, crystal healing, and spiritual growth.
        </p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Featured Post (First Post) */}
        <article className="blog-featured-card">
          <div className="blog-featured-image-wrapper">
            <img src={featuredPost.image} alt={featuredPost.title} className="blog-featured-image" />
          </div>
          <div className="blog-featured-content">
            <div className="blog-meta">
              <span><Calendar size={14} className="text-gold" /> {featuredPost.date}</span>
              <span><User size={14} className="text-gold" /> {featuredPost.author}</span>
            </div>
            <h2 className="blog-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{featuredPost.title}</h2>
            <p className="blog-excerpt" style={{ fontSize: '1.1rem' }}>{featuredPost.excerpt}</p>
            <Link to="#" className="blog-read-more" style={{ marginTop: 'auto' }}>
              Read Article <ArrowRight size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '5px' }} />
            </Link>
          </div>
        </article>

        {/* 3-Column Grid for the rest */}
        <div className="blog-grid">
          {gridPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-card-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-card-image" />
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span><Calendar size={14} className="text-gold" /> {post.date}</span>
                  <span><User size={14} className="text-gold" /> {post.author}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link to="#" className="blog-read-more">
                  Read Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
