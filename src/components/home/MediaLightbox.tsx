'use client';

import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Image as ImageIcon } from 'lucide-react';
import { PortfolioItem } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

interface MediaLightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function MediaLightbox({ item, onClose }: MediaLightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      window.dispatchEvent(new Event('pause-background-videos'));
    } else {
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('play-background-videos'));
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      window.dispatchEvent(new Event('play-background-videos'));
    };
  }, [item, handleKeyDown]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: coutureEase }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-brand-charcoal/95 backdrop-blur-2xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-brand-ivory/10 hover:bg-brand-gold/20 text-brand-pink hover:text-brand-pink border border-brand-gold/30 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold outline-none"
            aria-label="Close media preview"
          >
            <X className="w-5 h-5 text-brand-pink" />
          </button>

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: coutureEase }}
            className="relative max-w-4xl w-full bg-brand-charcoal border border-brand-gold/20 rounded-2xl overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Area */}
            <div className={`relative w-full bg-gradient-to-br from-brand-charcoal via-brand-charcoal/90 to-brand-gold/10 flex items-center justify-center overflow-hidden ${
              item.mediaType === 'video' ? 'aspect-[3/4] lg:aspect-[16/9]' : 'aspect-[16/10] sm:aspect-[16/9]'
            }`}>
              {item.mediaType === 'video' ? (
                <div className="relative w-full h-full bg-black">
                  <video
                    src={item.mediaSrc}
                    autoPlay
                    controls
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-pink mb-4">
                    <ImageIcon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-pink" />
                  </div>
                  <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold font-medium">High-Resolution Photo</span>
                  <p className="font-serif text-lg sm:text-xl text-brand-ivory/90 mt-2 max-w-md">{item.title}</p>
                  <span className="text-xs text-brand-ivory/50 mt-1 font-mono">{item.mediaSrc}</span>
                </div>
              )}

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/30 text-[10px] uppercase tracking-widest text-brand-gold font-sans font-medium">
                {item.category}
              </div>
            </div>

            {/* Caption & Metadata Footer */}
            <div className="p-6 sm:p-8 bg-brand-charcoal border-t border-brand-gold/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-brand-gold font-medium block">{item.category}</span>
                <h3 className="font-serif text-xl sm:text-2xl text-brand-ivory font-light mt-1">{item.title}</h3>
                <p className="font-sans text-xs sm:text-sm text-brand-ivory/70 font-light mt-1.5 max-w-xl leading-relaxed">{item.caption}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
