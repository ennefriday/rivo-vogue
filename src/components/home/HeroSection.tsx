'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { coutureEase } from '@/lib/animations';

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-[100dvh] flex items-end justify-start overflow-hidden bg-brand-charcoal text-brand-ivory pt-32 pb-16 px-6 sm:px-8 lg:px-12">
        
        {/* ─── Background Video ─── */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-100"
        >
          <source src="https://res.cloudinary.com/dwrcqtkjc/video/upload/v1787327149/back_y9hsvh.mp4" type="video/mp4" />
        </video>
        
        {/* ─── Ambient Liquid Glass Glows ─── */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-brand-gold/[0.08] rounded-full blur-[120px] mix-blend-screen pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-pink/[0.05] rounded-full blur-[120px] mix-blend-screen pointer-events-none" aria-hidden="true" />
        
        {/* Dark Overlay for Text Readability - barely visible but maintains professional contrast at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-brand-charcoal/5 to-transparent pointer-events-none" aria-hidden="true" />

        {/* Subtle luxury geometric grid background lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,146,90,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,146,90,0.04)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none opacity-10" aria-hidden="true" />

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

        {/* ─── Scroll indicator ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 right-6 sm:right-12 flex flex-col items-center gap-2 text-brand-gold/70 pointer-events-none"
        >
          <span className="hidden sm:block font-sans text-[10px] uppercase tracking-[0.3em] font-medium" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-brand-gold/80" />
          </motion.div>
        </motion.div>

      </section>

      {/* ─── Value Proposition Section (Moved from Hero) ─── */}
      <section className="bg-brand-charcoal text-brand-ivory py-20 px-6 sm:px-8 lg:px-12 flex justify-center items-center border-t border-brand-gold/10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: coutureEase }}
          className="max-w-3xl text-center"
        >
          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-brand-ivory/80 font-light leading-relaxed tracking-wide">
            Handcrafting unforgettable wedding gowns, sculpted asoebi, and beautiful everyday wear. Quality fashion made to fit your budget and your style.
          </p>
        </motion.div>
      </section>
    </>
  );
}

