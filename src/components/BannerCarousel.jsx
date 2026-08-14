import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BannerCarousel.css';

const BannerCarousel = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // 5 seconds autoplay
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));

  if (!banners || banners.length === 0) return null;

  return (
    <div className="banner-carousel">
      <div 
        className="banner-carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="banner-slide">
            <img src={banner} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </div>
      
      <button className="banner-nav prev" onClick={prevSlide} aria-label="Previous Banner">
        <ChevronLeft size={24} />
      </button>
      <button className="banner-nav next" onClick={nextSlide} aria-label="Next Banner">
        <ChevronRight size={24} />
      </button>

      <div className="banner-indicators">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`banner-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
