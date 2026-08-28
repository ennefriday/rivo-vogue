"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { coutureEase } from '@/lib/animations';

export function StoreHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-charcoal text-brand-ivory"
    >
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 origin-center"
      >
        <img 
          src="/store.webp" 
          alt="Luxury Accessories Collection" 
          className="w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 via-brand-charcoal/40 to-brand-charcoal"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 text-center">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: coutureEase }}
            className="text-[10px] uppercase tracking-[0.4em] font-sans text-brand-gold font-medium mb-6 block"
          >
            Curated Elegance
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: coutureEase, delay: 0.2 }}
            className="font-serif text-[clamp(3rem,8vw,6.5rem)] font-light leading-[0.95] tracking-tight mb-6"
          >
            The Rivo Boutique
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: coutureEase, delay: 0.4 }}
            className="font-sans text-sm md:text-base text-brand-ivory/70 font-light max-w-xl mx-auto leading-relaxed"
          >
            An exclusive collection of designer bags, statement footwear, and niche perfumes to elevate your signature style.
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-gold/[0.05] blur-[100px] pointer-events-none z-10" />

      {/* Smooth Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-charcoal to-transparent pointer-events-none z-20" />
    </section>
  );
}
