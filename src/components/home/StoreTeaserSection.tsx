'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';
import { ShoppingBag, ChevronLeft, ChevronRight, Sparkles, MessageCircle } from 'lucide-react';
import { STORE_SHOWCASE } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

export default function StoreTeaserSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 380;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="store-teaser" className="relative py-28 sm:py-36 bg-brand-charcoal text-brand-ivory px-6 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Liquid Glass Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-brand-gold/[0.05] rounded-full blur-[140px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-pink/[0.03] rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 sm:pb-20 border-b border-brand-gold/20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: coutureEase }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <GownBadgeIcon className="w-3.5 h-3.5 text-brand-pink" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-pink font-medium">
                Shop the Collection
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
              className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-brand-ivory leading-[1.05] tracking-tight"
            >
              Perfect Accessories <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
                for Every Occasion
              </span>
            </motion.h2>
          </div>

          {/* Navigation Controls & Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
            className="flex items-center gap-6"
          >
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-pink hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
                aria-label="Scroll boutique collection left"
              >
                <ChevronLeft className="w-5 h-5 text-current" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-pink hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
                aria-label="Scroll boutique collection right"
              >
                <ChevronRight className="w-5 h-5 text-current" />
              </button>
            </div>

            <Link
              href="/store"
              className="group inline-flex items-center gap-3 bg-brand-gold text-brand-charcoal font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 sm:py-5 rounded-full hover:bg-brand-ivory transition-all duration-400 shrink-0 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
            >
              <ShoppingBag className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:scale-110" />
              <span>Visit Store</span>
            </Link>
          </motion.div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pt-16 sm:pt-20 pb-12 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {STORE_SHOWCASE.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: coutureEase }}
              className="group flex-shrink-0 w-[300px] sm:w-[360px] rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.05] hover:border-brand-gold/40 hover:shadow-[0_20px_60px_-15px_rgba(223,177,91,0.2)] snap-start"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-brand-charcoal border border-white/5 flex items-center justify-center mb-8 group-hover:border-brand-gold/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent z-10" />
                
                <div className="flex flex-col items-center justify-center p-4 text-center z-0">
                  <Sparkles className="w-8 h-8 text-brand-gold/20 mb-3 group-hover:text-brand-gold/40 transition-colors" />
                  <span className="font-serif text-xl text-brand-ivory/50 font-light">{item.category}</span>
                  <span className="text-[11px] font-mono text-brand-ivory/30 mt-2">{item.imageSrc}</span>
                </div>

                {/* Category & New Tag */}
                <div className="absolute top-4 left-4 flex gap-3 z-20">
                  <span className="px-4 py-1.5 rounded-full bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/30 text-[10px] uppercase tracking-wider text-brand-gold font-sans font-medium">
                    {item.category}
                  </span>
                  {item.isNew && (
                    <span className="px-3 py-1.5 rounded-full bg-brand-pink/90 text-brand-charcoal text-[10px] uppercase tracking-wider font-sans font-bold">
                      New
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-400 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="font-sans text-sm text-brand-ivory/80 font-light mt-3 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Pricing & Inquiry Action */}
                <div className="pt-6 mt-6 border-t border-brand-gold/20 flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] uppercase tracking-widest text-brand-ivory/50 font-sans mb-1">Price</span>
                    <span className="font-sans text-base font-semibold text-brand-gold">{item.price}</span>
                  </div>

                  <a
                    href={`https://wa.me/2348000000000?text=Hello%20Rivo%20Vogue,%20I%20am%20interested%20in%20the%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-brand-ivory hover:text-brand-charcoal bg-white/[0.05] hover:bg-brand-gold px-5 py-3 rounded-full border border-brand-gold/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-pink group-hover:text-brand-charcoal transition-colors" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
