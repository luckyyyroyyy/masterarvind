import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin crimson-to-gold scroll-progress bar at the very top of the viewport
 */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="hm-scroll-progress-track" aria-hidden="true">
      <motion.div
        className="hm-scroll-progress-bar"
        style={{ scaleX }}
      />
    </div>
  );
};
