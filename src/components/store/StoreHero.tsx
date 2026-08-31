"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { coutureEase } from '@/lib/animations';
import { Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export function StoreHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[50vh] min-h-[360px] max-h-[480px] flex items-center justify-center overflow-hidden bg-brand-charcoal text-brand-ivory"
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
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/70 via-brand-charcoal/50 to-brand-charcoal"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 text-center">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: coutureEase }}
            className="text-[10px] uppercase tracking-[0.4em] font-sans text-brand-gold font-medium mb-4 block"
          >
            The Rivo Boutique
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: coutureEase, delay: 0.15 }}
            className="font-serif text-[clamp(2.2rem,6vw,4.5rem)] font-light leading-[0.95] tracking-tight mb-4"
          >
            Shop Our Collection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: coutureEase, delay: 0.3 }}
            className="font-sans text-sm text-brand-ivory/60 font-light max-w-md mx-auto leading-relaxed mb-8"
          >
            Dresses, bags, shoes &amp; perfumes — curated for the modern woman.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: coutureEase, delay: 0.45 }}
            className="flex items-center justify-center gap-6 text-[10px] uppercase tracking-widest text-brand-ivory/40 font-sans"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Free Delivery in Delta State
            </span>
            <span className="hidden sm:inline-block w-px h-3 bg-brand-ivory/20"></span>
            <span className="hidden sm:flex items-center gap-1.5">
              <ShoppingBag className="w-3 h-3" />
              Order via WhatsApp
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Smooth Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-charcoal to-transparent pointer-events-none z-20" />
    </section>
  );
}
