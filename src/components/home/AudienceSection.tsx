'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, HeartHandshake } from 'lucide-react';
import { AUDIENCE_LIST } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

export default function AudienceSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-brand-charcoal text-brand-ivory px-5 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-brand-pink/[0.02] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-brand-gold/15">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
              <span className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-brand-pink font-semibold">
                Curated For You
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-light text-brand-ivory leading-[1.05] tracking-tight">
              Tailored For Every <br />
              <span className="italic text-brand-gold">Cherished Milestone</span>
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-brand-ivory/70 max-w-md font-light leading-relaxed">
            Whether walking the aisle, attending an opulent celebration, or stepping onto the red carpet, our atelier shapes garments that celebrate your individuality.
          </p>
        </div>

        {/* 7 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-12 sm:pt-16">
          {AUDIENCE_LIST.map((item, index) => {
            // Give the 1st card (Brides) or 7th card featured span for asymmetric editorial balance
            const isFeatured = index === 0 || index === 6;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: coutureEase }}
                className={`group relative flex flex-col justify-between rounded-2xl bg-white/[0.02] border border-brand-gold/15 hover:border-brand-gold/50 p-6 sm:p-7 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(184,146,90,0.15)] ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 xl:col-span-2 bg-gradient-to-b from-brand-gold/[0.04] to-transparent' : ''
                }`}
              >
                {/* Top media container (ready for user photography) */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-brand-charcoal/90 border border-brand-gold/10 mb-6 flex items-center justify-center group-hover:border-brand-gold/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent z-10" />
                  
                  {/* Subtle placeholder icon / watermark */}
                  <div className="flex flex-col items-center justify-center p-4 text-center z-0">
                    <span className="font-serif text-3xl sm:text-4xl text-brand-gold/20 group-hover:text-brand-gold/40 transition-colors duration-500 font-light">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono text-brand-ivory/30 mt-1">
                      {item.imageSrc}
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-full bg-brand-charcoal/85 backdrop-blur-md border border-brand-gold/20 text-[9.5px] uppercase tracking-wider text-brand-gold font-sans font-medium">
                    {item.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-pink/90 font-medium block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-brand-ivory/70 font-light mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card footer link */}
                  <div className="pt-6 mt-6 border-t border-brand-gold/10 flex items-center justify-between">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-[11px] font-sans tracking-[0.2em] uppercase text-brand-gold font-medium group-hover:text-brand-ivory transition-colors"
                    >
                      <span>Explore Offerings</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-pink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </Link>

                    <span className="font-mono text-xs text-brand-gold/40">
                      0{index + 1}
                    </span>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

        {/* Bottom Banner Accent */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-brand-gold/[0.04] border border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-light text-brand-ivory">Unsure which experience fits your occasion?</h4>
              <p className="font-sans text-xs sm:text-sm text-brand-ivory/70 font-light mt-0.5">Our bridal consultants in Ughelli are ready to guide your vision.</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-charcoal font-sans font-semibold text-xs uppercase tracking-[0.18em] px-6 py-3 rounded-full hover:bg-brand-ivory transition-all duration-300 shadow-md shrink-0"
          >
            <span>Book Private Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-pink" />
          </Link>
        </div>

      </div>
    </section>
  );
}
