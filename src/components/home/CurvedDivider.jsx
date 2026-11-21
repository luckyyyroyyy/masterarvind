import React from 'react';

/**
 * Curved SVG divider between alternating bright light (cream #FAF7F2) and pure white (#FFFFFF) sections.
 * Guarantees zero visible seams, gaps, or transparent flashes.
 * @param {'to-dark' | 'to-light'} type - Direction of transition
 */
export const CurvedDivider = ({ type = 'to-dark', from, to }) => {
  const isToDark = type === 'to-dark';
  const bgColor = from || (isToDark ? '#FAF7F2' : '#FFFFFF');
  const fillColor = to || (isToDark ? '#FFFFFF' : '#FAF7F2');

  return (
    <div 
      className={`hm-curved-divider ${isToDark ? 'hm-divider-to-dark' : 'hm-divider-to-light'}`} 
      aria-hidden="true"
      style={{
        backgroundColor: bgColor,
        lineHeight: 0,
        margin: '-1px 0',
      }}
    >
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '56px' }}
      >
        <path
          d="M0 0 C 380 58, 1060 58, 1440 0 L 1440 60 L 0 60 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
