"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { coutureEase, fadeUpVariant } from '@/lib/animations';

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-charcoal text-brand-ivory px-6">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <img 
          src="/placeholder-services-hero.jpg" 
          alt="Rivo Vogue Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal via-brand-charcoal/80 to-brand-charcoal"></div>
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="text-brand-gold uppercase tracking-[0.3em] text-xs font-medium mb-6 block"
        >
          Atelier & Services
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: coutureEase, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-8"
        >
          Crafting <span className="italic text-brand-pink/90">Elegance</span>,<br />
          One Stitch at a Time
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: coutureEase, delay: 0.3 }}
          className="font-light text-brand-ivory/80 text-lg md:text-xl max-w-2xl"
        >
          From bespoke bridal couture to our professional fashion academy, explore the full suite of Rivo Vogue&apos;s luxury offerings.
        </motion.p>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-ivory/50 mb-3">Explore</span>
        <div className="w-[1px] h-12 bg-brand-ivory/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 w-full h-full bg-brand-gold"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
