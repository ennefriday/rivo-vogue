'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
    <section id="store-teaser" className="relative py-24 sm:py-32 bg-brand-charcoal text-brand-ivory px-5 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-brand-gold/[0.04] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-brand-gold/15">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
              <span className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-brand-pink font-semibold">
                The Boutique Collection
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-light text-brand-ivory leading-[1.05] tracking-tight">
              Curated Accessories & <br />
              <span className="italic text-brand-gold">Signature Scents</span>
            </h2>
          </div>

          {/* Navigation Controls & Link */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-pink hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold outline-none"
                aria-label="Scroll boutique collection left"
              >
                <ChevronLeft className="w-5 h-5 text-brand-pink" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-pink hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold outline-none"
                aria-label="Scroll boutique collection right"
              >
                <ChevronRight className="w-5 h-5 text-brand-pink" />
              </button>
            </div>

            <Link
              href="/store"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-charcoal font-sans font-semibold text-xs uppercase tracking-[0.18em] px-6 py-3.5 rounded-full hover:bg-brand-ivory transition-all duration-300 shrink-0 shadow-md"
            >
              <ShoppingBag className="w-4 h-4 text-brand-pink" />
              <span>Visit Store</span>
            </Link>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pt-12 sm:pt-16 pb-8 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {STORE_SHOWCASE.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: coutureEase }}
              className="group flex-shrink-0 w-[290px] sm:w-[340px] rounded-2xl bg-white/[0.02] border border-brand-gold/15 hover:border-brand-gold/50 p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(223,177,91,0.15)] snap-start"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-brand-charcoal/90 border border-brand-gold/10 flex items-center justify-center mb-6">
                <div className="flex flex-col items-center justify-center p-4 text-center">
                  <Sparkles className="w-6 h-6 text-brand-gold/30 mb-2 group-hover:text-brand-gold/60 transition-colors" />
                  <span className="font-serif text-lg text-brand-ivory/60 font-light">{item.category}</span>
                  <span className="text-[10px] font-mono text-brand-ivory/30 mt-1">{item.imageSrc}</span>
                </div>

                {/* Category & New Tag */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-charcoal/90 backdrop-blur-md border border-brand-gold/25 text-[9px] uppercase tracking-wider text-brand-gold font-sans font-medium">
                    {item.category}
                  </span>
                  {item.isNew && (
                    <span className="px-2.5 py-1 rounded-full bg-brand-pink/90 text-brand-charcoal text-[9px] uppercase tracking-wider font-sans font-bold">
                      New
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg sm:text-xl font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-300 line-clamp-1">
                      {item.name}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-brand-ivory/65 font-light mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Pricing & Inquiry Action */}
                <div className="pt-5 mt-5 border-t border-brand-gold/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-brand-ivory/40 font-sans">Price</span>
                    <span className="font-sans text-sm font-semibold text-brand-gold">{item.price}</span>
                  </div>

                  <a
                    href={`https://wa.me/2348000000000?text=Hello%20Rivo%20Vogue,%20I%20am%20interested%20in%20the%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10.5px] font-sans tracking-[0.15em] uppercase text-brand-ivory hover:text-brand-gold bg-brand-gold/10 hover:bg-brand-gold/20 px-3.5 py-2 rounded-full border border-brand-gold/20 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-brand-pink" />
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
