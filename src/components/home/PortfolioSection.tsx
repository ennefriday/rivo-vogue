'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Maximize2, ArrowUpRight, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_LIST, PortfolioItem } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';
import MediaLightbox from './MediaLightbox';

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section className="relative py-24 sm:py-32 bg-brand-charcoal text-brand-ivory px-5 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-gold/[0.03] rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-pink/[0.02] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-brand-gold/15">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-brand-gold font-semibold">
                The Atelier Gallery
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-light text-brand-ivory leading-[1.05] tracking-tight">
              Recent Work & <br />
              <span className="italic text-brand-gold">Bridal Memories</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <p className="font-sans text-sm text-brand-ivory/70 max-w-md font-light leading-relaxed">
              Explore our latest creations — from ethereal white cathedral trains to dramatic traditional asoebi splendor.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand-gold/10 hover:bg-brand-gold hover:text-brand-charcoal text-brand-gold border border-brand-gold/30 font-sans font-medium text-xs uppercase tracking-[0.2em] px-6 py-3.5 rounded-full transition-all duration-300 self-start sm:self-auto shrink-0"
            >
              <span>Explore All Work</span>
              <ArrowUpRight className="w-4 h-4 text-brand-pink" />
            </Link>
          </div>
        </div>

        {/* Asymmetric Gallery Grid (4 Images + 2 Videos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16">
          {PORTFOLIO_LIST.map((item, index) => {
            const isVideo = item.mediaType === 'video';
            const isWide = index === 3; // Make academy masterclass card wider or distinctive

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: coutureEase }}
                className={`group relative rounded-2xl overflow-hidden bg-brand-charcoal/90 border border-brand-gold/15 hover:border-brand-gold/50 cursor-pointer transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(223,177,91,0.2)] flex flex-col justify-between ${
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
                <div className={`relative w-full overflow-hidden bg-gradient-to-br from-brand-charcoal via-brand-charcoal/80 to-brand-gold/10 flex items-center justify-center ${
                  item.aspectRatio === 'portrait' ? 'aspect-[3/4]' : item.aspectRatio === 'landscape' ? 'aspect-[16/10]' : 'aspect-square'
                }`}>
                  <div className="flex flex-col items-center justify-center p-6 text-center z-0">
                    {isVideo ? (
                      <div className="w-14 h-14 rounded-full bg-brand-gold/20 border border-brand-gold/60 flex items-center justify-center text-brand-pink mb-3 shadow-lg group-hover:scale-110 transition-transform duration-400">
                        <Play className="w-6 h-6 text-brand-pink ml-0.5" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-pink mb-3 group-hover:scale-110 transition-transform duration-400">
                        <ImageIcon className="w-5 h-5 text-brand-pink" />
                      </div>
                    )}
                    <span className="font-serif text-lg text-brand-ivory/80 font-light max-w-xs">{item.title}</span>
                    <span className="text-[10px] font-mono text-brand-ivory/40 mt-1">{item.mediaSrc}</span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-400" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/30 text-[9px] uppercase tracking-wider text-brand-gold font-sans font-medium">
                      {item.category}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/30 flex items-center justify-center text-brand-pink group-hover:bg-brand-gold/20 transition-all">
                      <Maximize2 className="w-3.5 h-3.5 text-brand-pink" />
                    </div>
                  </div>

                  {/* Bottom Text in overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="font-serif text-xl font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-ivory/60 font-light mt-1 line-clamp-1">
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
