/**
 * Shared motion tokens and animation variants for Jyotish Yatra
 * Strict easing: cubic-bezier(0.22, 1, 0.36, 1)
 */

export const EASING = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  once: true,
  amount: 0.2,
};

export const fadeUp = (delay = 0, distance = 24) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: EASING,
    },
  },
});

export const lineDraw = (duration = 1.2, delay = 0) => ({
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: EASING,
    },
  },
});

export const wordMaskReveal = (delay = 0) => ({
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.7,
      delay,
      ease: EASING,
    },
  },
});

/**
 * Calculates approximate lunar phase client-side based on Julian cycle
 */
export const getApproximateMoonPhase = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  let c = 0;
  let e = 0;
  let jd = 0;
  let b = 0;

  let y = year;
  let m = month;
  if (m < 3) {
    y -= 1;
    m += 12;
  }

  c = 365.25 * y;
  e = 30.6 * m;
  jd = c + e + day - 694039.09;
  jd /= 29.5305882;
  b = parseInt(jd);
  jd -= b;
  const phase = Math.round(jd * 8);

  const phases = [
    { name: 'New Moon', glyph: '🌑' },
    { name: 'Waxing Crescent', glyph: '🌒' },
    { name: 'First Quarter', glyph: '🌓' },
    { name: 'Waxing Gibbous', glyph: '🌔' },
    { name: 'Full Moon', glyph: '🌕' },
    { name: 'Waning Gibbous', glyph: '🌖' },
    { name: 'Last Quarter', glyph: '🌗' },
    { name: 'Waning Crescent', glyph: '🌘' },
  ];

  return phases[phase % 8] || { name: 'Waxing Moon', glyph: '🌔' };
};
