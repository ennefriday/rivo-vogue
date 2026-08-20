'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <section className="relative py-24 sm:py-32 bg-brand-charcoal text-brand-ivory px-5 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-gold/[0.04] rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
            <span className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-brand-pink font-semibold">
              Client Chronicles
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-light text-brand-ivory leading-[1.05] tracking-tight">
            Words from Our <br />
            <span className="italic text-brand-gold">Cherished Royalty</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-ivory/70 font-light mt-4 leading-relaxed">
            Real stories of radiant joy, bespoke confidence, and unforgettable memories across Delta State and the diaspora.
          </p>
        </div>

        {/* Testimonial Showcase Carousel */}
        <div className="relative rounded-3xl bg-white/[0.02] border border-brand-gold/20 p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
          
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            
            {/* Left: Client Avatar Container */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-brand-charcoal/90 border-2 border-brand-gold/40 p-1 flex items-center justify-center shadow-xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-gold/20 via-brand-charcoal to-brand-pink/20 flex flex-col items-center justify-center text-center p-2">
                  <span className="font-serif text-xl sm:text-2xl text-brand-gold font-light">
                    {current.clientName.split(' ')[0][0]}{current.clientName.split(' ')[1] ? current.clientName.split(' ')[1][0] : ''}
                  </span>
                  <span className="text-[8px] font-mono text-brand-ivory/40 mt-1">/media/client</span>
                </div>
              </div>

              {/* Verified Tag */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/25 text-[10px] uppercase tracking-wider text-brand-gold font-sans font-medium">
                <CheckCircle2 className="w-3 h-3 text-brand-gold" />
                <span>Verified Client</span>
              </div>
            </div>

            {/* Right: Testimonial Narrative */}
            <div className="flex-1 text-center lg:text-left">
              
              {/* Star Rating */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
                <span className="ml-2 font-sans text-xs text-brand-gold/80 font-medium">5.0 Star Experience</span>
              </div>

              {/* Quote text */}
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: coutureEase }}
                  className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-brand-ivory leading-snug"
                >
                  &ldquo;{current.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>

              {/* Client Metadata */}
              <div className="mt-8 pt-6 border-t border-brand-gold/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-light text-brand-gold">
                    {current.clientName}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-1 text-xs text-brand-ivory/60 font-sans">
                    <span>{current.role}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-pink" />
                      {current.location}
                    </span>
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <span className="block text-[10.5px] uppercase tracking-wider text-brand-ivory/50 font-sans">Service Tailored</span>
                  <span className="font-sans text-xs text-brand-ivory/80 font-medium">{current.serviceUsed}</span>
                </div>
              </div>

            </div>

          </div>

          {/* Carousel Navigation & Indicators */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-brand-gold/10 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_LIST.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-8 bg-brand-gold' : 'w-2 bg-brand-gold/30 hover:bg-brand-gold/60'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-pink hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 text-brand-pink" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-pink hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 text-brand-pink" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
