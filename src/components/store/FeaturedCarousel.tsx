"use client";

import { useRef, useState, useEffect, useCallback } from 'react';
import { Product } from '@/lib/storeData';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function FeaturedCarousel({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('a')?.offsetWidth ?? 260;
    el.scrollBy({ left: direction === 'left' ? -cardWidth - 16 : cardWidth + 16, behavior: 'smooth' });
  };

  if (!products || products.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-brand-charcoal border-b border-brand-ivory/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-gold font-medium mb-1.5 block">
              Just In
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-brand-ivory">
              New Arrivals
            </h2>
          </div>

          {/* Navigation arrows — desktop only */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-brand-ivory/15 flex items-center justify-center transition-all duration-200 disabled:opacity-20 hover:border-brand-gold/40 hover:bg-brand-gold/[0.06]"
            >
              <ChevronLeft className="w-4 h-4 text-brand-ivory" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-brand-ivory/15 flex items-center justify-center transition-all duration-200 disabled:opacity-20 hover:border-brand-gold/40 hover:bg-brand-gold/[0.06]"
            >
              <ChevronRight className="w-4 h-4 text-brand-ivory" />
            </button>
          </div>
        </div>

        {/* Scrollable track */}
        <div className="relative">
          {/* Fade indicators on mobile */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-charcoal to-transparent z-10 pointer-events-none sm:hidden" />
          )}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-charcoal to-transparent z-10 pointer-events-none sm:hidden" />
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/store/${product.slug}`}
                className="group flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] snap-start"
              >
                {/* Image — same aspect-ratio and size as grid cards */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-brand-charcoal border border-brand-ivory/[0.06]">
                  <img
                    src={product.coverImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {product.isNewArrival && (
                    <span className="absolute top-2.5 left-2.5 bg-brand-gold text-brand-charcoal text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm">
                      New
                    </span>
                  )}
                </div>

                {/* Info below image */}
                <div className="mt-3 space-y-0.5">
                  <p className="text-[10px] text-brand-gold/80 tracking-widest uppercase font-sans">{product.category}</p>
                  <h3 className="font-serif text-sm font-light text-brand-ivory leading-snug line-clamp-1">{product.name}</h3>
                  <p className="font-sans text-xs font-medium text-brand-ivory/80 tracking-wide">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
