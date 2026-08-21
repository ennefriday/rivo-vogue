'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, HeartHandshake } from 'lucide-react';
import { AUDIENCE_LIST } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

export default function AudienceSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-brand-charcoal text-brand-ivory px-6 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* ─── Ambient Liquid Glass Accents ─── */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-pink/[0.04] rounded-full blur-[140px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-brand-gold/[0.05] rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 sm:pb-20 border-b border-brand-gold/20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: coutureEase }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-pink font-medium">
                Curated For You
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
              className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-brand-ivory leading-[1.05] tracking-tight"
            >
              Created for Every <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
                Beautiful Moment
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
            className="font-sans text-base sm:text-lg text-brand-ivory/80 max-w-md font-light leading-relaxed"
          >
            Whether you are walking down the aisle, attending a grand celebration, or stepping out in style, we design garments that bring out your absolute best.
          </motion.p>
        </div>

        {/* 7 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-16 sm:pt-20">
          {AUDIENCE_LIST.map((item, index) => {
            // Give the 1st card (Brides) or 7th card featured span for asymmetric editorial balance
            const isFeatured = index === 0 || index === 6;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: coutureEase }}
                className={`group relative flex flex-col justify-between rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/[0.05] hover:border-brand-gold/40 hover:shadow-[0_20px_60px_-15px_rgba(184,146,90,0.2)] ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 xl:col-span-2' : ''
                }`}
              >
                {/* Top media container (ready for user photography) */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-brand-charcoal border border-white/5 mb-8 flex items-center justify-center group-hover:border-brand-gold/30 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent z-10" />
                  
                  {/* Subtle placeholder icon / watermark */}
                  <div className="flex flex-col items-center justify-center p-4 text-center z-0">
                    <span className="font-serif text-3xl sm:text-5xl text-brand-ivory/10 group-hover:text-brand-gold/30 transition-colors duration-500 font-light">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono text-brand-ivory/30 mt-2">
                      {item.imageSrc}
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/30 text-[10px] uppercase tracking-wider text-brand-gold font-sans font-medium">
                    {item.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-brand-pink/90 font-medium block mb-2">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-400">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-brand-ivory/80 font-light mt-4 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card footer link */}
                  <div className="pt-8 mt-8 border-t border-brand-gold/20 flex items-center justify-between">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium group-hover:text-brand-ivory transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal rounded-sm"
                    >
                      <span>Explore Offerings</span>
                      <ArrowUpRight className="w-4 h-4 text-brand-pink group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Link>

                    <span className="font-mono text-xs text-brand-ivory/30">
                      0{index + 1}
                    </span>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

        {/* Bottom Banner Accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: coutureEase }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-brand-gold/30 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-light text-brand-ivory">Not sure where to begin?</h4>
              <p className="font-sans text-sm sm:text-base text-brand-ivory/80 font-light mt-2">Let our expert consultants in Ughelli guide you to your perfect look.</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-charcoal font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 sm:py-5 rounded-full hover:bg-brand-ivory transition-all duration-400 shadow-md shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
