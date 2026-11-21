import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import { ScrollProgress } from '../components/home/ScrollProgress';
import { GrainOverlay } from '../components/home/GrainOverlay';
import { CurvedDivider } from '../components/home/CurvedDivider';
import { BirthChartHero } from '../components/home/BirthChartHero';
import { MarqueeBand } from '../components/home/MarqueeBand';
import { ThreeDoors } from '../components/home/ThreeDoors';
import { NavagrahaOrbit } from '../components/home/NavagrahaOrbit';
import { ThePath } from '../components/home/ThePath';
import { MeetMaster } from '../components/home/MeetMaster';
import { FourVows } from '../components/home/FourVows';
import { Voices } from '../components/home/Voices';
import { SanctuaryFaq } from '../components/home/SanctuaryFaq';
import { FinalInvitation } from '../components/home/FinalInvitation';
import './Home.css';

const Home = () => {
  // Top Sacred Hero Banners Carousel (Preserved Exactly)
  const topBanners = [
    '/images/banners/banner-ex-love-back.jpg',
    '/images/banners/banner-black-magic-removal.jpg',
    '/images/banners/banner-love-spell.jpg'
  ];

  return (
    <div className="hm-page-wrapper">
      {/* 7% Subtle Paper Grain Overlay */}
      <GrainOverlay />

      {/* Crimson-to-Gold Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* 0. Top Sacred Hero Banners Carousel (Untouched) */}
      <BannerCarousel banners={topBanners} />

      {/* 1. Hero: Living Sky, 130-Star Canvas, Word Mask Reveal, North Indian Janam Kundli with 12 Clickable Houses & Rotating Rashi Ring */}
      <BirthChartHero />

      {/* 2. Crooked Marquee Band (Two Counter-Rotating Rows, Pauses on Hover) */}
      <MarqueeBand />

      {/* B. Three Doors to Clarity (Section B: Warm Saffron Ivory #FFF9F2) */}
      <ThreeDoors />

      {/* Transition: Warm Saffron Ivory -> Celestial Sky Tint */}
      <CurvedDivider from="#FFF9F2" to="#F0F6FF" />

      {/* C. Navagraha Orbit: 9 Planetary Disciplines (Section C: Celestial Sky #F0F6FF) */}
      <NavagrahaOrbit />

      {/* Transition: Celestial Sky -> Pure White */}
      <CurvedDivider from="#F0F6FF" to="#FFFFFF" />

      {/* D. The Path & Connect Form (Section D: Pure White #FFFFFF) */}
      <ThePath />

      {/* Transition: Pure White -> Warm Saffron Sand */}
      <CurvedDivider from="#FFFFFF" to="#FFF7ED" />

      {/* E. Meet Master Arvind (Section E: Warm Saffron Sand #FFF7ED) */}
      <MeetMaster />

      {/* Transition: Warm Saffron Sand -> Cool Editorial Slate */}
      <CurvedDivider from="#FFF7ED" to="#F8FAFC" />

      {/* F. Four Vows of Practice (Section F: Cool Editorial Slate #F8FAFC) */}
      <FourVows />

      {/* Transition: Cool Editorial Slate -> Warm Luminous Cream */}
      <CurvedDivider from="#F8FAFC" to="#FFFDF9" />

      {/* G. Client Voices & Review Modal (Section G: Warm Luminous Cream #FFFDF9) */}
      <Voices />

      {/* H. The Sanctuary & FAQ (Section H: Soft Cloud Slate #F1F5F9) */}
      <SanctuaryFaq />

      {/* Transition: Soft Cloud Slate -> Deep Cosmic Royal Blue Invitation */}
      <CurvedDivider from="#F1F5F9" to="#0F233D" />

      {/* I. Final Invitation & Twinkling Starfield (Section I: Deep Night Sky) */}
      <FinalInvitation />
    </div>
  );
};

export default Home;
