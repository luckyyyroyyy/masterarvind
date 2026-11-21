import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, lineDraw, viewportOnce } from './motion';

export const FourVows = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const commitments = [
    {
      sanskrit: "Parampara",
      meaning: "Lineage",
      sentence: "Knowledge transmitted unbroken from guru to disciple across generations of Jyotish masters.",
    },
    {
      sanskrit: "Dharma",
      meaning: "Right Action",
      sentence: "Remedies recommended solely for spiritual harmony and karmic balance, never out of fear or commercial motive.",
    },
    {
      sanskrit: "Satya",
      meaning: "Truthfulness",
      sentence: "Clear, unvarnished diagnostic insight from the birth chart; no fabricated promises or artificial timelines.",
    },
    {
      sanskrit: "Gopya",
      meaning: "Sacred Secrecy",
      sentence: "Absolute confidentiality; what enters the sanctuary remains strictly between you and Master Arvind.",
    },
  ];

  return (
    <section 
      className="hm-section hm-vows-section"
      aria-labelledby="vows-title"
    >
      <div className="hm-container">
        
        {/* Section Header */}
        <motion.div 
          className="hm-section-header hm-text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <span className="hm-eyebrow hm-eyebrow-dark">Ethical Framework &middot; The Four Commitments</span>
          <h2 id="vows-title" className="hm-section-title">
            The Four Vows of Practice
          </h2>
          <p className="hm-section-lede">
            The unchanging principles that govern every reading, calculation, and spiritual remedy performed in our sanctuary.
          </p>
        </motion.div>

        {/* 4 Large Editorial Commitment Rows with Opposing Hover Shift */}
        <div className="hm-commitments-list" role="list">
          {commitments.map((vow, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={vow.sanskrit}
                role="listitem"
                className={`hm-commitment-row ${isHovered ? 'is-hovered' : ''}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                tabIndex={0}
              >
                {/* Gold Rule Line that Draws In */}
                <motion.div 
                  className="hm-commitment-rule"
                  variants={lineDraw}
                  aria-hidden="true"
                />

                <div className="hm-commitment-inner">
                  {/* Left: Large Italic Sanskrit Word that shifts left on hover */}
                  <div className="hm-commitment-sanskrit-wrap">
                    <span className="hm-commitment-num">0{index + 1}</span>
                    <span className="hm-commitment-sanskrit">
                      {vow.sanskrit}
                    </span>
                    <span className="hm-commitment-meaning">
                      &middot; {vow.meaning}
                    </span>
                  </div>

                  {/* Right: Explanatory Sentence that shifts right in opposite direction */}
                  <div className="hm-commitment-sentence-wrap">
                    <p className="hm-commitment-sentence">
                      {vow.sentence}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Final Bottom Rule Line */}
          <motion.div 
            className="hm-commitment-rule"
            variants={lineDraw}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  );
};
