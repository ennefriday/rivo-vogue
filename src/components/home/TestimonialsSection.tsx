'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_LIST, TestimonialItem } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

const TestimonialCard = ({ item }: { item: TestimonialItem }) => {
  return (
    <div className="w-[320px] h-[320px] shrink-0 rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md hover:bg-white/[0.05] hover:border-brand-gold/30 transition-colors duration-500 hover:shadow-[0_10px_40px_-10px_rgba(223,177,91,0.15)] group cursor-default">
      
      {/* Top: Profile & Rating */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-charcoal border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-gold/30 transition-colors duration-500">
             <div className="w-full h-full bg-gradient-to-br from-brand-gold/20 to-brand-pink/20 flex items-center justify-center">
               <span className="font-serif text-lg text-brand-gold font-light">
                 {item.clientName.charAt(0)}
               </span>
             </div>
          </div>
          <div>
            <h3 className="font-serif text-base font-medium text-brand-gold leading-tight">
              {item.clientName}
            </h3>
            <div className="flex items-center gap-1 mt-1 text-[9px] text-brand-ivory/50 uppercase tracking-[0.1em] font-sans">
              <CheckCircle2 className="w-3 h-3 text-brand-gold" />
              <span>Verified Client</span>
            </div>
          </div>
        </div>
        
        {/* Stars */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold opacity-90" />
          ))}
        </div>
      </div>

      {/* Middle: Quote */}
      <div className="flex-1 py-5 flex items-center">
        <p className="font-serif text-lg sm:text-xl font-light text-brand-ivory leading-snug line-clamp-5 opacity-90">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* Bottom: Meta */}
      <div className="pt-5 border-t border-brand-gold/10 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-brand-ivory/60 font-sans font-light">
          <span className="truncate">{item.role}</span>
          <span>•</span>
          <span className="flex items-center gap-1 shrink-0">
            <MapPin className="w-3 h-3 text-brand-pink/80" />
            <span className="truncate max-w-[100px]">{item.location}</span>
          </span>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-brand-gold/80 font-sans font-medium truncate">
          {item.serviceUsed}
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-brand-charcoal text-brand-ivory overflow-hidden border-t border-brand-gold/10">
      
      {/* Ambient Liquid Glass lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-gold/[0.05] rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="relative z-10">
        
        {/* Section Header (Consistent with Trust/Transformation) */}
        <div className="max-w-[1400px] mx-auto text-center mb-16 sm:mb-24 px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: coutureEase }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <GownBadgeIcon className="w-3.5 h-3.5 text-brand-gold" />
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-medium">
              What Our Clients Say
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] tracking-tight text-brand-ivory"
          >
            Real Experiences from <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
              Beautiful Women
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
            className="font-sans text-base sm:text-lg opacity-80 font-light mt-6 leading-relaxed max-w-lg mx-auto text-balance"
          >
            Real stories of joy, confidence, and unforgettable memories from our amazing clients.
          </motion.p>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative w-full overflow-hidden mask-edges py-4">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            
            {/* Group 1 */}
            <div className="flex shrink-0 gap-6 px-3">
              {TESTIMONIALS_LIST.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>

            {/* Group 2 (Duplicate for infinite loop) */}
            <div className="flex shrink-0 gap-6 px-3" aria-hidden="true">
              {TESTIMONIALS_LIST.map((item) => (
                <TestimonialCard key={`${item.id}-dup`} item={item} />
              ))}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
