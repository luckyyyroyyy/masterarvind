import React from 'react';

/**
 * Subtle 7% paper-grain overlay for the authentic handmade parchment feel
 */
export const GrainOverlay = () => {
  return (
    <div className="hm-grain-overlay" aria-hidden="true">
      <svg className="hm-grain-svg">
        <filter id="hm-paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hm-paper-noise)" />
      </svg>
    </div>
  );
};
