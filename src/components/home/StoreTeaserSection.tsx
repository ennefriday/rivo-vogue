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

        </div>

        {/* Horizontal Carousel Wrapper */}
        <div className="relative group/carousel">
          {/* Left Arrow (Desktop) */}
          <button
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-brand-charcoal/90 backdrop-blur-md border border-brand-gold/40 items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-current" />
          </button>
          
          {/* Right Arrow (Desktop) */}
          <button
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-brand-charcoal/90 backdrop-blur-md border border-brand-gold/40 items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-current" />
          </button>

          {/* Horizontal Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto pt-16 sm:pt-20 pb-12 no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {STORE_SHOWCASE.map((item, index) => (
            <motion.article
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: { opacity: 0, x: 40, scale: 0.98 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1, 
                  transition: { duration: 0.8, delay: index * 0.1, ease: coutureEase } 
                }
              }}
              className="group flex-shrink-0 w-[300px] sm:w-[360px] rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-brand-gold/40 hover:shadow-[0_20px_60px_-15px_rgba(223,177,91,0.2)] snap-start max-md:!opacity-100 max-md:![transform:none]"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/5] w-full bg-brand-charcoal overflow-hidden group-hover:border-brand-gold/30 transition-colors">
                {/* Base Image */}
                <img src={item.imageSrc} alt={item.name} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                
                {/* Desktop Hover Image */}
                {item.hoverImageSrc && (
                  <img src={item.hoverImageSrc} alt={`${item.name} alternate view`} className="absolute inset-0 w-full h-full object-contain object-center transition-all duration-700 group-hover:scale-105 opacity-0 lg:group-hover:opacity-100 hidden lg:block" />
                )}

                {/* Mobile Auto Reveal Image */}
                {item.hoverImageSrc && (
                  <motion.img 
                    src={item.hoverImageSrc} 
                    alt={`${item.name} alternate view mobile`} 
                    className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-700 lg:hidden"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { 
                        opacity: [0, 0, 1, 1, 0],
                        transition: { duration: 10, repeat: Infinity, times: [0, 0.45, 0.5, 0.95, 1], ease: "easeInOut" }
                      }
                    }}
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent z-10 pointer-events-none" />

                {/* Category & Tags */}
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
                {item.originalPrice && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1.5 rounded-full bg-red-500/90 text-white text-[10px] uppercase tracking-wider font-sans font-bold shadow-lg">
                      Sale
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 pt-6">
                <div>
                  <h3 className="font-serif text-2xl font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-400 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="font-sans text-sm text-brand-ivory/80 font-light mt-3 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Pricing & Action */}
                <div className="pt-6 mt-6 border-t border-brand-gold/20 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-xl font-semibold text-brand-gold">{item.price}</span>
                    {item.originalPrice && (
                      <span className="font-sans text-sm text-brand-ivory/40 line-through">{item.originalPrice}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 w-full">
                    <Link
                      href={`/store/${item.id}`}
                      className="flex-1 flex items-center justify-center gap-2 text-[11px] font-sans tracking-[0.15em] uppercase text-brand-ivory bg-white/[0.05] hover:bg-white/[0.1] px-4 py-3.5 rounded-full border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal text-center"
                    >
                      Details
                    </Link>
                    <a
                      href={`https://wa.me/2347088835025?text=Hello%20Rivo%20Vogue,%20I%20am%20interested%20in%20purchasing%20the%20${encodeURIComponent(item.name)}.%20Image:%20https://rivovogue.com${item.imageSrc}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-[11px] font-sans tracking-[0.15em] uppercase text-brand-charcoal bg-brand-gold hover:bg-brand-ivory px-4 py-3.5 rounded-full transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal text-center"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Buy</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
            {/* View More Card */}
            <motion.article
              initial={{ opacity: 0, x: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: STORE_SHOWCASE.length * 0.05, ease: coutureEase }}
              className="group flex-shrink-0 w-[300px] sm:w-[360px] rounded-3xl bg-brand-charcoal border border-brand-gold/20 flex flex-col overflow-hidden transition-all duration-500 hover:bg-brand-gold/10 hover:border-brand-gold/40 snap-start max-md:!opacity-100 max-md:![transform:none]"
            >
              <Link href="/store" className="flex flex-col items-center justify-center h-full gap-6 text-brand-gold w-full p-8">
                <div className="w-20 h-20 rounded-full border border-brand-gold/30 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-500 shadow-[0_0_30px_rgba(223,177,91,0.1)] group-hover:shadow-[0_0_40px_rgba(223,177,91,0.3)]">
                  <ChevronRight className="w-10 h-10 text-current" />
                </div>
                <div className="text-center">
                  <span className="font-serif text-3xl font-light block mb-2">View All</span>
                  <span className="font-sans text-sm tracking-widest uppercase text-brand-ivory/60 group-hover:text-brand-charcoal/80 transition-colors">Full Collection</span>
                </div>
              </Link>
            </motion.article>
          </div>
        </div>

        {/* Visit Store Button at the Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: coutureEase }}
          className="mt-4 sm:mt-8 flex justify-center"
        >
          <Link
            href="/store"
            className="group inline-flex items-center gap-3 bg-brand-gold text-brand-charcoal font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 sm:py-5 rounded-full hover:bg-brand-ivory transition-all duration-400 shrink-0 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
          >
            <ShoppingBag className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:scale-110" />
            <span>Visit Store</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
