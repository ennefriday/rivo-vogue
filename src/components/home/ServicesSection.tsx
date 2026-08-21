'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import { servicesList as SERVICES_LIST } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';

export default function ServicesSection() {
  return (
    <section id="services-overview" className="relative py-28 sm:py-36 bg-brand-charcoal text-brand-ivory px-6 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Ambient Liquid Glass glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold/[0.05] rounded-full blur-[140px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-brand-pink/[0.04] rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />

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
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-medium">
                Our Core Offerings
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
              className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-brand-ivory leading-[1.05] tracking-tight"
            >
              The Seven Pillars of <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
                Rivo Vogue
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
            className="flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <p className="font-sans text-base sm:text-lg text-brand-ivory/80 max-w-md font-light leading-relaxed">
              From the perfect wedding gown to your go-to everyday wear, we craft outfits that make you feel confident, beautiful, and completely yourself.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 bg-brand-gold/10 hover:bg-brand-gold hover:text-brand-charcoal text-brand-gold border border-brand-gold/40 font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 sm:py-5 rounded-full transition-all duration-400 self-start sm:self-auto shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16 sm:pt-20">
          {SERVICES_LIST.map((service, index) => {
            const isFeatured = index === 0; // Highlight Wedding Gown Rentals

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: coutureEase }}
                className={`group relative flex flex-col justify-between rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] hover:border-brand-gold/40 p-8 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(223,177,91,0.2)] ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-brand-gold/[0.08] via-white/[0.02] to-transparent' : ''
                }`}
              >
                {/* Number Watermark & Category Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-brand-gold/20">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-3xl sm:text-4xl text-brand-gold font-light tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-6 w-px bg-brand-gold/30" />
                    <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-brand-ivory/60 font-medium">
                      Haute Atelier
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-400">
                    <ArrowUpRight className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Media frame container for user assets */}
                <div className={`relative w-full rounded-2xl overflow-hidden bg-brand-charcoal border border-white/5 my-8 flex items-center justify-center group-hover:border-brand-gold/30 transition-colors ${
                  isFeatured ? 'aspect-[16/8]' : 'aspect-[16/10]'
                }`}
                >
                  <div className="flex flex-col items-center justify-center p-4 text-center z-0">
                    <Layers className="w-8 h-8 text-brand-gold/20 mb-3 group-hover:text-brand-gold/40 transition-colors" />
                    <span className="text-[11px] font-mono text-brand-ivory/30">
                      /media/services/{service.slug}.jpg
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/10 to-transparent z-10" />
                </div>

                {/* Body Content */}
                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-400 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-brand-ivory/80 font-light mt-4 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-8 mt-8 border-t border-brand-gold/20 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium group-hover:text-brand-ivory transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal rounded-sm"
                  >
                    <span>Explore Details</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-pink group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>

                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-ivory/40 font-sans font-medium">
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
