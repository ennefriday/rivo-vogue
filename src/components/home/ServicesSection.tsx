'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';
import { ArrowUpRight, Layers } from 'lucide-react';
import { servicesList as SERVICES_LIST } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';

export default function ServicesSection() {
  return (
    <section id="services-overview" className="relative py-28 sm:py-36 bg-brand-charcoal text-brand-ivory px-4 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Ambient Liquid Glass glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-gold/[0.05] rounded-full blur-[140px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-brand-pink/[0.04] rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16 pb-12 sm:pb-20 border-b border-brand-gold/10 mb-8 sm:mb-12">
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
                Our Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
              className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light text-brand-ivory leading-[1.05] tracking-tight"
            >
              Everything You Need to Dress <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
                Beautifully
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
              From bridal gowns and bespoke tailoring to statement accessories and everyday luxury, Rivo Vogue brings together thoughtful craftsmanship, refined style, and beautiful choices for every occasion.
            </p>
          </motion.div>
        </div>

        {/* 7 Services Grid (6-column CSS Grid strategy for desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
          {SERVICES_LIST.map((service, index) => {
            // Determine column span based on the sketch and tablet requirements
            let colSpanClass = 'md:col-span-1 lg:col-span-2'; // Default for items 3, 4, 5 (Row 2)
            let heightClass = 'h-[450px] sm:h-[520px] lg:h-[580px]'; // Default height
            
            if (index === 0) {
              colSpanClass = 'md:col-span-2 lg:col-span-4'; // Item 1: Wide on desktop, full width on tablet
              heightClass = 'h-[450px] sm:h-[520px] lg:h-[580px]';
            } else if (index === 1) {
              colSpanClass = 'md:col-span-1 lg:col-span-2'; // Item 2: Standard
              heightClass = 'h-[450px] sm:h-[520px] lg:h-[580px]';
            } else if (index === 5 || index === 6) {
              colSpanClass = 'md:col-span-1 lg:col-span-3'; // Items 6, 7: Half width on desktop (Row 3), half width on tablet
              heightClass = 'h-[420px] sm:h-[480px] lg:h-[520px]';
            }

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: coutureEase }}
                className={`group relative overflow-hidden bg-brand-charcoal/50 border border-white/5 hover:border-brand-gold/30 transition-colors duration-500 hover:shadow-[0_20px_60px_-15px_rgba(223,177,91,0.15)] ${colSpanClass} ${heightClass}`}
              >
                {/* Background Image */}
                {service.coverImage && service.coverImage !== '' ? (
                  <Image
                    src={service.coverImage}
                    alt={service.title}
                    fill
                    className={`transition-transform duration-1000 group-hover:scale-110 z-0 ${
                      service.slug === 'custom-tailoring' ? 'object-cover object-top' : 'object-cover'
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-brand-charcoal flex flex-col items-center justify-center p-4 text-center z-0">
                    <Layers className="w-8 h-8 text-brand-gold/20 mb-3 group-hover:text-brand-gold/40 transition-colors" />
                    <span className="text-[11px] font-mono text-brand-ivory/30">
                      /media/services/{service.slug}.jpg
                    </span>
                  </div>
                )}
                
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent z-10 transition-opacity duration-700 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-brand-charcoal/20 z-10 transition-opacity duration-700 opacity-0 group-hover:opacity-100" />

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-8 md:p-10">
                  <div className="transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-brand-ivory mb-2 sm:mb-3 drop-shadow-md">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-brand-ivory/80 font-light max-w-sm leading-relaxed mb-6 drop-shadow">
                      {service.shortDescription}
                    </p>
                    
                    {/* Explore Details Link */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium group-hover:text-brand-ivory transition-colors focus-visible:outline-none"
                    >
                      <span>Explore Details</span>
                      <ArrowUpRight className="w-4 h-4 text-brand-pink transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: coutureEase }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 bg-brand-gold/10 hover:bg-brand-gold hover:text-brand-charcoal text-brand-gold border border-brand-gold/40 font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 sm:py-5 rounded-full transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-charcoal" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
