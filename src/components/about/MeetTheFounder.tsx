"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { founderData } from '@/lib/aboutData';
import { coutureEase } from '@/lib/animations';

export function MeetTheFounder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left: Founder Image with Parallax */}
        <div className="relative aspect-[3/4] overflow-hidden w-full max-w-md mx-auto md:max-w-none">
          <motion.div 
            className="absolute inset-0 w-full h-[120%]"
            style={{ y: imageY }}
          >
            {/* Placeholder - user will add next/image */}
            <div 
              className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000"
              style={{ backgroundImage: `url(${founderData.image})` }}
            />
          </motion.div>
          {/* Decorative frame */}
          <div className="absolute inset-4 border border-brand-ivory/20 z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-brand-gold z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-brand-gold z-10 pointer-events-none" />
        </div>

        {/* Right: Founder Bio */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: coutureEase }}
          >
            <span className="uppercase text-brand-pink tracking-widest text-xs font-semibold block mb-4">
              Meet The Founder
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-2">
              {founderData.name}
            </h2>
            <h3 className="font-sans text-brand-gold text-sm md:text-base uppercase tracking-widest mb-8">
              {founderData.role}
            </h3>
            
            <p className="font-sans text-lg md:text-xl text-brand-ivory/80 leading-relaxed font-light mb-10">
              {founderData.bio}
            </p>

            {/* Signature-like script element (optional decorative) */}
            <div className="font-serif italic text-3xl text-brand-ivory/40">
              {founderData.name}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
