'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';
import { Play, Maximize2, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_LIST, PortfolioItem } from '@/lib/homeData';
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
              <GownBadgeIcon className="w-3.5 h-3.5 text-brand-gold" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-medium">
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
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 bg-brand-gold/10 hover:bg-brand-gold hover:text-brand-charcoal text-brand-gold border border-brand-gold/40 font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.2em] px-8 py-4 sm:py-5 rounded-full transition-all duration-400 self-start sm:self-auto shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
            >
              <span>Explore All Work</span>
              <ArrowUpRight className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric Gallery Grid (4 Images + 2 Videos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16 sm:pt-20">
          {PORTFOLIO_LIST.map((item, index) => {
            const isVideo = item.mediaType === 'video';
            const isWide = index === 3; // Make academy masterclass card wider or distinctive

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: coutureEase }}
                className={`group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-brand-gold/40 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(223,177,91,0.2)] flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal ${
                  isWide ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                aria-label={`Open media: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
              >
                {/* Media Container with placeholder styling */}
                <div className={`relative w-full overflow-hidden bg-gradient-to-br from-brand-charcoal/80 via-brand-charcoal/40 to-transparent flex items-center justify-center ${
                  item.aspectRatio === 'portrait' ? 'aspect-[3/4]' : item.aspectRatio === 'landscape' ? 'aspect-[16/10]' : 'aspect-square'
                }`}>
                  <div className="flex flex-col items-center justify-center p-8 text-center z-0">
                    {isVideo ? (
                      <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/50 flex items-center justify-center text-brand-pink mb-4 shadow-xl group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-400">
                        <Play className="w-6 h-6 ml-1 transition-colors" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-pink mb-4 group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all duration-400">
                        <ImageIcon className="w-6 h-6 transition-colors" />
                      </div>
                    )}
                    <span className="font-serif text-xl text-brand-ivory/60 font-light max-w-xs">{item.title}</span>
                    <span className="text-[11px] font-mono text-brand-ivory/30 mt-2">{item.mediaSrc}</span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-400 z-10" />

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
                    <span className="px-4 py-1.5 rounded-full bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/30 text-[10px] uppercase tracking-wider text-brand-gold font-sans font-medium">
                      {item.category}
                    </span>

                    <div className="w-10 h-10 rounded-full bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/30 flex items-center justify-center text-brand-pink group-hover:bg-brand-gold group-hover:text-brand-charcoal transition-all">
                      <Maximize2 className="w-4 h-4 transition-colors" />
                    </div>
                  </div>

                  {/* Bottom Text in overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <h3 className="font-serif text-2xl font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-400">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-ivory/80 font-light mt-2 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Reusable Lightbox Modal */}
      <MediaLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />

    </section>
  );
}
