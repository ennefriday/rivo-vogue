'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';

function InViewVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { margin: "0px" });

  useEffect(() => {
    if (isInView) {
      ref.current?.play().catch(() => {});
    } else {
      ref.current?.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={ref}
      src={src}
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
  );
}
import { Play, Maximize2, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_IMAGES, PORTFOLIO_VIDEOS, PortfolioItem } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';
import MediaLightbox from './MediaLightbox';

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section className="relative py-28 sm:py-36 bg-brand-charcoal text-brand-ivory px-6 sm:px-8 lg:px-12 overflow-hidden">
      
      {/* Ambient Liquid Glass Lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-gold/[0.05] rounded-full blur-[140px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-pink/[0.04] rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />

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
                Our Masterpieces
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
              className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-brand-ivory leading-[1.05] tracking-tight"
            >
              Stories of Elegance <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
                &amp; Joy
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
              Discover real stories of women who chose Rivo Vogue to make their special days unforgettable—from breathtaking white gowns to stunning asoebi.
            </p>
          </motion.div>
        </div>

        {/* Images Horizontal Scroll/Carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-1 md:gap-4 pt-10 sm:pt-16 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {PORTFOLIO_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: coutureEase }}
              className="relative h-[60vh] md:h-[75vh] flex-shrink-0 snap-center group cursor-pointer overflow-hidden bg-brand-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              aria-label={`Open image: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
            >
              {/* Base Image */}
              <img 
                src={item.mediaSrc} 
                alt={item.title} 
                className="h-full w-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/60 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Side Title using writing-mode */}
              <div className="absolute top-0 bottom-0 left-3 md:left-6 flex items-center justify-center pointer-events-none z-20">
                <span 
                  className="font-serif text-xl md:text-3xl text-brand-ivory whitespace-nowrap tracking-[0.2em] uppercase opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8 md:pt-16">
          {PORTFOLIO_VIDEOS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: coutureEase }}
              className="relative aspect-[4/5] md:aspect-video w-full group cursor-pointer overflow-hidden bg-brand-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              aria-label={`Open video: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
            >
              <InViewVideo src={item.mediaSrc} />
              
              {/* Play icon overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-brand-charcoal/20">
                <div className="w-16 h-16 rounded-full bg-brand-ivory/20 backdrop-blur-md border border-brand-ivory/30 flex items-center justify-center text-brand-ivory shadow-xl">
                  <Play className="w-6 h-6 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Reusable Lightbox Modal */}
      <MediaLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />

    </section>
  );
}
