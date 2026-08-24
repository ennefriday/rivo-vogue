'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollThemeTransition({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Fade in the light background layer as the section enters, and fade out as it leaves.
  // 0% -> 15%: Fades from Dark to Light
  // 15% -> 85%: Stays Light
  // 85% -> 100%: Fades back to Dark
  const lightOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  
  // Text color transitions seamlessly alongside the background
  const textColor = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.85, 1], 
    ["#FDFBF7", "#0A0908", "#0A0908", "#FDFBF7"] // Ivory to Charcoal
  );

  return (
    <motion.div 
      ref={containerRef}
      style={{ color: textColor }}
      className="relative bg-brand-charcoal"
    >
      {/* Light Background Layer - #E5E0D8 is a custom darker white/cream */}
      <motion.div 
        style={{ 
          opacity: lightOpacity,
          maskImage: 'linear-gradient(to bottom, transparent, black 15vh, black calc(100% - 15vh), transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15vh, black calc(100% - 15vh), transparent)'
        }}
        className="absolute inset-0 bg-[#E5E0D8] pointer-events-none"
      />

      {/* Content wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
