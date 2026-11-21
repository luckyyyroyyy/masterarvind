import React from 'react';

/**
 * Three sacred gold line-art motifs for the 3D swinging doors
 */

export const InterlockedRingsArt = () => (
  <svg viewBox="0 0 160 160" width="80" height="80" fill="none" className="hm-door-art-svg" aria-hidden="true">
    <circle cx="65" cy="80" r="38" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />
    <circle cx="95" cy="80" r="38" stroke="#D4AF37" strokeWidth="1.5" opacity="0.85" />
    <circle cx="80" cy="80" r="14" fill="rgba(234, 88, 12, 0.15)" stroke="#D4AF37" strokeWidth="1" />
    <path d="M80 50L83 70L80 74L77 70Z" fill="#EA580C" />
    <path d="M80 110L83 90L80 86L77 90Z" fill="#EA580C" />
  </svg>
);

export const SacredLotusArt = () => (
  <svg viewBox="0 0 160 160" width="80" height="80" fill="none" className="hm-door-art-svg" aria-hidden="true">
    <path d="M80 35 C70 65, 55 90, 80 120 C105 90, 90 65, 80 35 Z" stroke="#D4AF37" strokeWidth="1.5" fill="rgba(212, 175, 55, 0.12)" />
    <path d="M80 60 C55 70, 30 85, 45 115 C70 115, 75 90, 80 60 Z" stroke="#D4AF37" strokeWidth="1.25" opacity="0.8" />
    <path d="M80 60 C105 70, 130 85, 115 115 C90 115, 85 90, 80 60 Z" stroke="#D4AF37" strokeWidth="1.25" opacity="0.8" />
    <circle cx="80" cy="90" r="5" fill="#EA580C" />
    <circle cx="80" cy="120" r="2.5" fill="#D4AF37" />
  </svg>
);

export const ProtectiveEyeArt = () => (
  <svg viewBox="0 0 160 160" width="80" height="80" fill="none" className="hm-door-art-svg" aria-hidden="true">
    <path d="M30 80 Q80 35 130 80 Q80 125 30 80 Z" stroke="#D4AF37" strokeWidth="1.5" fill="rgba(26, 6, 16, 0.4)" />
    <circle cx="80" cy="80" r="24" stroke="#D4AF37" strokeWidth="1.25" strokeDasharray="3 3" />
    <circle cx="80" cy="80" r="14" fill="#1A0610" stroke="#EA580C" strokeWidth="1.5" />
    <circle cx="80" cy="80" r="6" fill="#D4AF37" />
    {/* Radiating protection rays */}
    <line x1="80" y1="25" x2="80" y2="15" stroke="#D4AF37" strokeWidth="1.2" />
    <line x1="80" y1="135" x2="80" y2="145" stroke="#D4AF37" strokeWidth="1.2" />
    <line x1="25" y1="80" x2="15" y2="80" stroke="#D4AF37" strokeWidth="1.2" />
    <line x1="135" y1="80" x2="145" y2="80" stroke="#D4AF37" strokeWidth="1.2" />
  </svg>
);
