"use client";

import { motion } from 'framer-motion';
import { fadeUpVariant, coutureEase } from '@/lib/animations';
import { aboutHeroData } from '@/lib/aboutData';

export function AboutHero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image / Placeholder */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: coutureEase }}
      >
        <div className="absolute inset-0 bg-brand-charcoal/60 z-10 mix-blend-multiply"></div>
        {/* We use a standard div as a placeholder. The user will swap this with next/image */}
        <div 
          className="w-full h-full bg-brand-charcoal bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHeroData.image})` }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center mt-20">
        <motion.h1 
          className="font-serif text-4xl md:text-6xl lg:text-8xl text-brand-ivory font-light mb-6 tracking-tight"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2, ease: coutureEase }}
        >
          {aboutHeroData.title}
        </motion.h1>
        
        <motion.p 
          className="font-sans text-lg md:text-xl lg:text-2xl text-brand-ivory/90 max-w-2xl font-light leading-relaxed"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.4, ease: coutureEase }}
        >
          {aboutHeroData.description}
        </motion.p>
      </div>

      {/* Decorative Gold Line */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-brand-gold to-transparent z-20"
        initial={{ height: 0 }}
        animate={{ height: 96 }}
        transition={{ duration: 1, delay: 0.8, ease: coutureEase }}
      />
      
      {/* Smooth Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-charcoal to-transparent pointer-events-none z-10" />
    </section>
  );
}
