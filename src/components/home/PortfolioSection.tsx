'use client';

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_IMAGES, PORTFOLIO_VIDEOS, PortfolioItem } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';
import MediaLightbox from './MediaLightbox';

// Register GSAP plugin once at module level
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────
   Autoplay video only when visible in viewport
   ───────────────────────────────────────────── */
function InViewVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { margin: '0px' });

  useEffect(() => {
    if (isInView) {
      ref.current?.play().catch(() => {});
    } else {
      ref.current?.pause();
    }

    const handlePause = () => ref.current?.pause();
    const handlePlay = () => {
      if (isInView) ref.current?.play().catch(() => {});
    };

    window.addEventListener('pause-background-videos', handlePause);
    window.addEventListener('play-background-videos', handlePlay);

    return () => {
      window.removeEventListener('pause-background-videos', handlePause);
      window.removeEventListener('play-background-videos', handlePlay);
    };
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

/* ─────────────────────────────────────────────
   Portfolio Section — Main Component
   ───────────────────────────────────────────── */
export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  /* ── Mobile carousel state ── */
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ── Desktop GSAP horizontal scroll refs ── */
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  /* ═══════════════════════════════════════════════════════════════
     GSAP ScrollTrigger — Horizontal Scroll on Desktop
     
     Architecture:
     ┌─ sectionRef (outer wrapper, no special height)
     │  ┌─ triggerRef (the pin target — gets pinned to viewport)
     │  │  ┌─ trackRef (flex row of images, wider than viewport)
     │  │  │  └─ [image cards...]
     
     ScrollTrigger pins triggerRef and tweens trackRef's x from 0
     to -(scrollWidth - containerWidth), creating the illusion of
     horizontal scrolling driven by vertical scroll.
     ═══════════════════════════════════════════════════════════════ */
  useLayoutEffect(() => {
    // Only run on desktop
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current;
      const trigger = triggerRef.current;
      if (!track || !trigger) return;

      // Wait for images to load so scrollWidth is accurate
      const images = track.querySelectorAll('img');
      let loaded = 0;
      const total = images.length;

      const initScrollTrigger = () => {
        // scrollDistance = total track width minus the visible viewport width
        const scrollAmount = track.scrollWidth - trigger.offsetWidth;
        if (scrollAmount <= 0) return;

        const tween = gsap.to(track, {
          x: -scrollAmount,
          ease: 'none', // Linear mapping — scroll controls the easing
          scrollTrigger: {
            trigger: trigger,
            pin: true,
            pinSpacing: true,
            scrub: 1,            // 1 second of smooth interpolation
            start: 'top top',
            end: () => `+=${scrollAmount}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,    // Prevents flicker on pin start
          },
        });

        // Return cleanup for matchMedia
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          gsap.set(track, { x: 0 });
        };
      };

      // If all images already cached/loaded, init immediately
      if (total === 0) {
        return initScrollTrigger();
      }

      const checkReady = () => {
        loaded++;
        if (loaded >= total) {
          // Small delay to ensure layout is settled
          requestAnimationFrame(() => {
            const cleanup = initScrollTrigger();
            // Store cleanup ref for matchMedia
            if (cleanup) {
              (trigger as any).__gsapCleanup = cleanup;
            }
          });
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          loaded++;
        } else {
          img.addEventListener('load', checkReady, { once: true });
          img.addEventListener('error', checkReady, { once: true });
        }
      });

      // If all were already complete
      if (loaded >= total) {
        const cleanup = initScrollTrigger();
        return cleanup;
      }

      // Cleanup listeners if component unmounts before all loaded
      return () => {
        images.forEach((img) => {
          img.removeEventListener('load', checkReady);
          img.removeEventListener('error', checkReady);
        });
      };
    });

    return () => {
      mm.revert(); // Clean up all matchMedia contexts
    };
  }, []);

  /* ── Mobile carousel handlers ── */
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const child = container.children[index] as HTMLElement;
    if (!child) return;

    const containerCenter = container.getBoundingClientRect().left + container.offsetWidth / 2;
    const childCenter = child.getBoundingClientRect().left + child.offsetWidth / 2;

    container.scrollBy({ left: childCenter - containerCenter, behavior: 'smooth' });
  };

  const scrollToPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const scrollToNext = () => scrollToIndex(Math.min(PORTFOLIO_IMAGES.length - 1, activeIndex + 1));

  /* ── Image card (shared between desktop & mobile) ── */
  const renderImageCard = (item: PortfolioItem, index: number, isDesktopTrack = false) => (
    <div
      key={item.id}
      className={`
        portfolio-card relative flex-shrink-0 snap-center group cursor-pointer overflow-hidden bg-brand-charcoal
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold
        ${isDesktopTrack ? 'h-screen w-auto' : 'h-[60vh] md:h-[75vh] w-auto'}
      `}
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
      <img
        src={item.mediaSrc}
        alt={item.title}
        className="h-full w-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        loading={index < 3 ? 'eager' : 'lazy'}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/60 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Side title (vertical) */}
      <div className="absolute top-0 bottom-0 left-3 md:left-6 flex items-center justify-center pointer-events-none z-20">
        <span
          className="font-serif text-xl md:text-3xl text-brand-ivory whitespace-nowrap tracking-[0.2em] uppercase opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          {item.title}
        </span>
      </div>
    </div>
  );

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          PORTFOLIO IMAGES — Horizontal Scroll Section
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={sectionRef}
        className="relative bg-brand-charcoal text-brand-ivory overflow-hidden"
      >
        {/* Ambient lighting effects */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-gold/[0.05] rounded-full blur-[140px] pointer-events-none mix-blend-screen z-0" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-pink/[0.04] rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" aria-hidden="true" />

        {/* ── Section Header — scrolls away before pin starts ── */}
        <div className="px-6 sm:px-8 lg:px-12 pt-28 sm:pt-36 lg:pt-24 pb-10 relative z-10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-brand-gold/20">
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
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            DESKTOP: Pinned container — ONLY the image track.
            The header has already scrolled away by this point.
            Images fill the entire viewport edge-to-edge.
        ════════════════════════════════════════════════════════ */}
        <div ref={triggerRef} className="hidden lg:block relative overflow-hidden h-screen">
          <div
            ref={trackRef}
            className="flex gap-2 h-full will-change-transform relative z-10"
          >
            {PORTFOLIO_IMAGES.map((item, index) => renderImageCard(item, index, true))}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            MOBILE / TABLET — Swipeable carousel. Hidden on lg+.
        ════════════════════════════════════════════════════════ */}
        <div className="lg:hidden px-6 sm:px-8 pb-6">
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-1 md:gap-4 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {PORTFOLIO_IMAGES.map((item, index) => renderImageCard(item, index, false))}
          </div>

          {/* Navigation dots & arrows */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-2 mb-8">
            <button
              onClick={scrollToPrev}
              disabled={activeIndex === 0}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-ivory/10 flex items-center justify-center text-brand-ivory hover:bg-brand-ivory/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-1.5">
              {PORTFOLIO_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-0.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-6 bg-brand-gold'
                      : 'w-3 bg-brand-ivory/30 hover:bg-brand-ivory/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollToNext}
              disabled={activeIndex === PORTFOLIO_IMAGES.length - 1}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-ivory/10 flex items-center justify-center text-brand-ivory hover:bg-brand-ivory/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════
          VIDEOS SECTION — Appears after horizontal scroll finishes
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-brand-charcoal text-brand-ivory px-6 sm:px-8 lg:px-12 py-16 sm:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {PORTFOLIO_VIDEOS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: coutureEase }}
                className="relative aspect-[3/4] w-full group cursor-pointer overflow-hidden bg-brand-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
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
                  <div className="w-16 h-16 rounded-full bg-brand-ivory/20 md:backdrop-blur-md border border-brand-ivory/30 flex items-center justify-center text-brand-ivory shadow-xl">
                    <Play className="w-6 h-6 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <MediaLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      </section>
    </>
  );
}
