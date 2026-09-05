'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';
import { TESTIMONIALS_LIST, TestimonialItem } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

const TestimonialCard = ({ item }: { item: TestimonialItem }) => {
  return (
    <div className="w-[320px] sm:w-[400px] h-full shrink-0 rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-10 flex flex-col justify-between md:backdrop-blur-md hover:bg-white/[0.05] hover:border-brand-gold/30 transition-all duration-500 group cursor-default">
      
      {/* Top: Quote */}
      <div className="flex-1">
        <p className="font-serif text-lg sm:text-xl font-light text-brand-ivory leading-relaxed opacity-90">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* Bottom: Profile & Name */}
      <div className="flex items-center gap-4 mt-8 shrink-0">
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
        
        {/* Section Header */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16 pb-12 sm:pb-20 border-b border-brand-gold/10 mb-12 sm:mb-20">
          <div className="max-w-3xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: coutureEase }}
              className="inline-flex items-center gap-3 mb-4 sm:mb-6"
            >
              <GownBadgeIcon className="w-3.5 h-3.5 text-brand-pink" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-pink font-medium">
                What Our Clients Say
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
              className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light text-brand-ivory leading-[1.05] tracking-tight"
            >
              Real Experiences from <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
                Beautiful Women
              </span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
            className="max-w-lg lg:pb-3 text-left"
          >
            <p className="font-sans text-base sm:text-lg text-brand-ivory/70 font-light leading-relaxed">
              Real stories of joy, confidence, and unforgettable memories from our amazing clients.
            </p>
          </motion.div>
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
