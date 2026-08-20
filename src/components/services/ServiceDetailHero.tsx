"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Service } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';

export function ServiceDetailHero({ service }: { service: Service }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Cinematic dolly-in effect: scale up background slightly and push text down and fade out
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[90vh] min-h-[600px] flex flex-col justify-end overflow-hidden bg-brand-charcoal text-brand-ivory"
    >
      {/* Background with Dolly-in */}
      <motion.div 
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 z-0 origin-center"
      >
        <img 
          src={service.coverImage} 
          alt={service.title} 
          className="w-full h-full object-cover grayscale-[20%]"
        />
        {/* Gradient overlays for contrast and luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/80 via-transparent to-transparent"></div>
      </motion.div>

      {/* Thin Gold accent line tracking progress (optional, but adds flair) */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: coutureEase, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent z-20 origin-left"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 pb-24 md:pb-32">
        <motion.div 
          style={{ y: textY, opacity: textOpacity, filter: blur }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: coutureEase, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-brand-pink/60" />
            <span className="text-brand-pink uppercase tracking-[0.4em] text-[10px] font-semibold">
              Signature Service
            </span>
          </motion.div>
          
          {/* Main Title - Exaggerated Hierarchy */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: coutureEase, delay: 0.3 }}
            className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] font-light leading-[0.95] tracking-tight mb-6"
          >
            {service.title}
          </motion.h1>

          {/* Subtitle / Short Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: coutureEase, delay: 0.5 }}
            className="font-sans text-lg md:text-xl text-brand-ivory/70 font-light max-w-2xl leading-relaxed"
          >
            {service.shortDescription}
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[9px] uppercase tracking-widest text-brand-gold/60 font-sans">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/80 to-transparent"
        />
      </motion.div>
    </section>
  );
}
