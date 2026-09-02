'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { coutureEase } from '@/lib/animations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const rawText = "From unforgettable wedding gowns to perfectly sculpted asoebi and everyday elegance, we create quality fashion tailored to your body, your style, and your budget — so you always feel confident in what you wear.";

export default function HeroSection() {
  const textContainerRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Global video pause listener for when the lightbox opens
  useEffect(() => {
    const handlePause = () => videoRef.current?.pause();
    const handlePlay = () => videoRef.current?.play().catch(() => {});

    window.addEventListener('pause-background-videos', handlePause);
    window.addEventListener('play-background-videos', handlePlay);

    return () => {
      window.removeEventListener('pause-background-videos', handlePause);
      window.removeEventListener('play-background-videos', handlePlay);
    };
  }, []);

  // GSAP Text Reveal
  useGSAP(() => {
    if (!textContainerRef.current) return;
    const words = textContainerRef.current.querySelectorAll('.reveal-word');
    
    gsap.fromTo(words, 
      { opacity: 0.1, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: 'top 85%',
          end: 'center 45%',
          scrub: 1,
        }
      }
    );
  }, { scope: textContainerRef });

  const words = rawText.split(" ");

  return (
    <>
      <section className="relative min-h-[100dvh] flex items-end justify-start overflow-hidden bg-brand-charcoal text-brand-ivory pt-32 pb-16 px-6 sm:px-8 lg:px-12">
        
        {/* ─── Background Video ─── */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-100"
        >
          <source src="https://res.cloudinary.com/dwrcqtkjc/video/upload/v1787327149/back_y9hsvh.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for Text Readability & Seamless Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-charcoal to-transparent pointer-events-none" aria-hidden="true" />

        {/* ─── Main Hero Content ─── */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto flex flex-col items-start pb-8">
          
          {/* Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: coutureEase }}
            className="font-serif text-[clamp(2.25rem,4.5vw,4rem)] font-light tracking-[-0.02em] leading-[1.05] text-brand-ivory max-w-4xl text-left"
          >
            Your Destination for Bridal Wear & Bespoke Fashion <br className="hidden sm:inline" />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
              in Delta State.
            </span>
          </motion.h1>

          {/* Action CTAs - Stacked Ghost Buttons / Underlined Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: coutureEase }}
            className="flex flex-col items-start gap-3 mt-8 w-full sm:w-auto"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-brand-ivory font-sans font-medium text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-brand-gold"
            >
              <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-gold/40 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 group-hover:after:bg-brand-gold">
                Explore Services
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="/store"
              className="group inline-flex items-center gap-3 text-brand-ivory font-sans font-medium text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-brand-gold"
            >
              <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-brand-gold/40 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 group-hover:after:bg-brand-gold">
                Shop Accessories
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>

        </div>

      </section>

      {/* ─── Value Proposition Section (Moved from Hero) ─── */}
      <section className="relative bg-brand-charcoal text-brand-ivory pt-20 sm:pt-24 lg:pt-32 xl:pt-40 pb-24 px-6 sm:px-8 lg:px-12 flex justify-center items-center">
        
        {/* Overlapping Badge (Static, properly sized) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
           <Image src="/badge.png" alt="Rivo Vogue Signature Badge" fill className="object-contain" priority />
        </div>

        <div className="max-w-[1000px] text-center relative z-10">
          {/* Subtle background glow for the text */}
          <div className="absolute inset-0 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none" aria-hidden="true" />
          
          <h2 
            ref={textContainerRef}
            className="font-serif text-[clamp(1.5rem,4vw,3.25rem)] text-brand-ivory font-light leading-[1.35] tracking-wide relative z-10 flex flex-wrap justify-center items-center"
          >
            {words.map((word, i) => {
              const textLower = word.toLowerCase();
              const isGold = textLower.includes("wedding") || textLower.includes("gown") || textLower.includes("asoebi") || textLower.includes("confident");
              const isGradient = textLower.includes("quality") || textLower.includes("fashion") || textLower.includes("budget") || textLower.includes("style");
              
              let customClass = "reveal-word mr-[0.25em] mb-[0.1em] inline-block will-change-[opacity,transform] ";
              if (isGold) {
                customClass += "italic text-brand-gold ";
              } else if (isGradient) {
                customClass += "font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory to-brand-gold ";
              }

              return (
                <span key={i} className={customClass}>
                  {word}
                </span>
              );
            })}
          </h2>
        </div>
      </section>
    </>
  );
}
