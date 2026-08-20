'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import { servicesList as SERVICES_LIST } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';

export default function ServicesSection() {
  return (
    <section id="services-overview" className="relative py-24 sm:py-32 bg-brand-charcoal text-brand-ivory px-5 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-gold/[0.03] rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-pink/[0.02] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-brand-gold/15">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-brand-gold font-semibold">
                Our Craft & Mastery
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-light text-brand-ivory leading-[1.05] tracking-tight">
              The Seven Pillars of <br />
              <span className="italic text-brand-gold">Rivo Vogue Atelier</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <p className="font-sans text-sm text-brand-ivory/70 max-w-md font-light leading-relaxed">
              Every creation is born from meticulous pattern drafting, exceptional European and African textiles, and timeless elegance.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand-gold/10 hover:bg-brand-gold hover:text-brand-charcoal text-brand-gold border border-brand-gold/30 font-sans font-medium text-xs uppercase tracking-[0.2em] px-6 py-3.5 rounded-full transition-all duration-300 self-start sm:self-auto shrink-0"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-4 h-4 text-brand-pink" />
            </Link>
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16">
          {SERVICES_LIST.map((service, index) => {
            const isFeatured = index === 0; // Highlight Wedding Gown Rentals

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: coutureEase }}
                className={`group relative flex flex-col justify-between rounded-2xl bg-white/[0.02] border border-brand-gold/15 hover:border-brand-gold/50 p-7 sm:p-8 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(223,177,91,0.2)] ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-brand-gold/[0.06] via-white/[0.02] to-transparent' : ''
                }`}
              >
                {/* Number Watermark & Category Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-brand-gold/10">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-2xl sm:text-3xl text-brand-gold font-light tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-4 w-px bg-brand-gold/20" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-ivory/50">
                      Haute Atelier
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-brand-gold/5 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Media frame container for user assets */}
                <div className={`relative w-full rounded-xl overflow-hidden bg-brand-charcoal/90 border border-brand-gold/10 my-6 flex items-center justify-center ${
                  isFeatured ? 'aspect-[16/8]' : 'aspect-[16/9]'
                }`}>
                  <div className="flex flex-col items-center justify-center p-4 text-center">
                    <Layers className="w-6 h-6 text-brand-gold/30 mb-2 group-hover:text-brand-gold/60 transition-colors" />
                    <span className="text-[10.5px] font-mono text-brand-ivory/40">
                      /media/services/{service.slug}.jpg
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent" />
                </div>

                {/* Body Content */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-brand-ivory/70 font-light mt-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-6 mt-6 border-t border-brand-gold/10 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium group-hover:text-brand-ivory transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-pink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <span className="text-[10px] uppercase tracking-widest text-brand-ivory/40 font-sans">
                    Bespoke
                  </span>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
