'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/*
 * ScrollThemeTransition
 * ─────────────────────
 * Wraps two sections (TransformationSection + TrustSection) and drives a
 * seamless, scroll-scrubbed crossfade between the dark brand theme and a
 * warm light theme.
 *
 * Architecture:
 *   ┌─ wrapper (position: relative, isolate)
 *   │  ├─ lightOverlay (position: absolute, full-size, light bg)
 *   │  │   → opacity animated from 0 → 1 → 1 → 0 via GSAP scrub
 *   │  └─ contentWrapper (position: relative, z-10)
 *   │      └─ children (TransformationSection, TrustSection)
 *
 * The overlay's opacity is scrubbed via ScrollTrigger so the transition is
 * perfectly tied to the user's scroll position. Large feathered edges on
 * the overlay (via CSS mask-image) eliminate any hard lines.
 */

// Light theme palette
const LIGHT_BG    = '#E8E3DB';   // Warm cream — elegant, not sterile
const LIGHT_TEXT  = '#0A0908';   // Near-black for legibility
const DARK_TEXT   = '#FDFBF7';   // Brand ivory

export default function ScrollThemeTransition({ children }: { children: React.ReactNode }) {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!wrapper || !overlay || !content) return;

    // Timeline scrubbed by scroll position through the wrapper
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',     // Begin when top of wrapper hits bottom of viewport
        end:   'bottom top',     // End when bottom of wrapper exits top of viewport
        scrub: 1.2,              // Smooth 1.2s interpolation for buttery feel
        invalidateOnRefresh: true,
      },
    });

    // Phase 1 (0% → 15%): Dark → Light crossfade as section enters
    // Phase 2 (15% → 85%): Hold at full light
    // Phase 3 (85% → 100%): Light → Dark crossfade as section exits
    tl
      .fromTo(overlay,
        { opacity: 0 },
        { opacity: 1, ease: 'power2.inOut', duration: 0.15 },   // 0 → 15%
      )
      .to(overlay,
        { opacity: 1, duration: 0.70 },                          // 15 → 85% (hold)
      )
      .to(overlay,
        { opacity: 0, ease: 'power2.inOut', duration: 0.15 },    // 85 → 100%
      );

    // Mirror timeline for text color (dark ivory → charcoal → dark ivory)
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end:   'bottom top',
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    textTl
      .fromTo(content,
        { color: DARK_TEXT },
        { color: LIGHT_TEXT, ease: 'power2.inOut', duration: 0.15 },
      )
      .to(content,
        { color: LIGHT_TEXT, duration: 0.70 },
      )
      .to(content,
        { color: DARK_TEXT, ease: 'power2.inOut', duration: 0.15 },
      );
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className="relative isolate">
      {/* Light background overlay — feathered edges via CSS mask for seamless blending */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none will-change-[opacity]"
        style={{
          backgroundColor: LIGHT_BG,
          opacity: 0,
          maskImage:    'linear-gradient(to bottom, transparent, black 12vh, black calc(100% - 12vh), transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 12vh, black calc(100% - 12vh), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Content rendered above the overlay */}
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </div>
  );
}
