'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';
import { Star, ChevronLeft, ChevronRight, MapPin, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_LIST } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_LIST.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_LIST.length) % TESTIMONIALS_LIST.length);
  };

  const current = TESTIMONIALS_LIST[activeIndex];

  return (
    <section className="relative py-28 sm:py-36 bg-brand-charcoal text-brand-ivory px-6 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Ambient Liquid Glass lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-gold/[0.05] rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: coutureEase }}
            className="inline-flex items-center gap-3 mb-4"
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
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-brand-ivory leading-[1.05] tracking-tight"
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
            className="font-sans text-base sm:text-lg text-brand-ivory/80 font-light mt-6 leading-relaxed"
          >
            Real stories of joy, confidence, and unforgettable memories from our amazing clients.
          </motion.p>
        </div>

        {/* Testimonial Showcase Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: coutureEase }}
          className="relative rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-10 sm:p-14 lg:p-20 backdrop-blur-xl shadow-2xl"
        >
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Client Avatar Container */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-brand-charcoal border border-white/10 p-2 flex items-center justify-center shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-gold/30 via-brand-charcoal to-brand-pink/30 flex flex-col items-center justify-center text-center p-3">
                  <span className="font-serif text-2xl sm:text-3xl text-brand-gold font-light">
                    {current.clientName.split(' ')[0][0]}{current.clientName.split(' ')[1] ? current.clientName.split(' ')[1][0] : ''}
                  </span>
                  <span className="text-[9px] font-mono text-brand-ivory/50 mt-2">/media/client</span>
                </div>
              </div>

              {/* Verified Tag */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-[10px] uppercase tracking-wider text-brand-gold font-sans font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                <span>Verified Client</span>
              </div>
            </div>

            {/* Right: Testimonial Narrative */}
            <div className="flex-1 text-center lg:text-left">
              
              {/* Star Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
                <span className="ml-3 font-sans text-sm text-brand-gold/90 font-medium">5.0 Star Experience</span>
              </div>

              {/* Quote text */}
              <div className="min-h-[160px] flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={current.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: coutureEase }}
                    className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-brand-ivory leading-snug"
                  >
                    &ldquo;{current.quote}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Client Metadata */}
              <div className="mt-10 pt-8 border-t border-brand-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-brand-gold">
                    {current.clientName}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2 text-sm text-brand-ivory/70 font-sans font-light">
                    <span>{current.role}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-pink" />
                      {current.location}
                    </span>
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <span className="block text-[11px] uppercase tracking-wider text-brand-ivory/60 font-sans mb-1">Service Tailored</span>
                  <span className="font-sans text-sm text-brand-ivory font-medium">{current.serviceUsed}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Carousel Navigation & Indicators */}
          <div className="mt-12 sm:mt-16 pt-10 border-t border-white/10 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {TESTIMONIALS_LIST.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                    activeIndex === idx ? 'w-10 bg-brand-gold' : 'w-2.5 bg-brand-gold/30 hover:bg-brand-gold/60'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-pink hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-current" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-pink hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-current" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
