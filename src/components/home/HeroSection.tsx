'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ChevronDown, Compass, ShoppingBag } from 'lucide-react';
import { coutureEase } from '@/lib/animations';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-brand-charcoal text-brand-ivory pt-24 pb-16 px-5 sm:px-8 lg:px-12">
      
      {/* ─── Ambient couture glow background ─── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-brand-gold/[0.06] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-brand-pink/[0.04] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      
      {/* Subtle luxury geometric grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(184,146,90,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(184,146,90,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" aria-hidden="true" />

      {/* ─── Main Hero Content ─── */}
      <div className="relative z-10 max-w-[1240px] mx-auto text-center flex flex-col items-center">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: coutureEase }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-gold/[0.08] border border-brand-gold/25 backdrop-blur-md mb-6 sm:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-brand-gold font-medium">
            Haute Couture • Ughelli, Delta State
          </span>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: coutureEase }}
          className="font-serif text-[clamp(2.75rem,7vw,6.5rem)] font-light tracking-[-0.02em] leading-[0.95] text-brand-ivory max-w-5xl"
        >
          Where Bridal Royalty <br className="hidden sm:inline" />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
            Meets Master Tailoring
          </span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: coutureEase }}
          className="font-sans text-sm sm:text-base lg:text-lg text-brand-ivory/75 max-w-2xl mt-6 sm:mt-8 font-light leading-relaxed tracking-wide"
        >
          Handcrafting unforgettable wedding gowns, sculpted asoebi silhouettes, and bespoke evening wear for discerning women across Delta State and beyond.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: coutureEase }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-8 sm:mt-11 w-full sm:w-auto"
        >
          <Link
            href="/services"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-charcoal font-sans font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-400 hover:bg-brand-ivory hover:shadow-[0_0_30px_rgba(223,177,91,0.4)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
          >
            <Compass className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:rotate-45" />
            <span>Explore Services</span>
            <ArrowUpRight className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/store"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/[0.04] text-brand-ivory font-sans font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full border border-brand-gold/30 backdrop-blur-sm transition-all duration-400 hover:bg-white/[0.08] hover:border-brand-gold hover:text-brand-gold active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <ShoppingBag className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:scale-110" />
            <span>Visit Store</span>
          </Link>
        </motion.div>

        {/* Feature Pill Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.65, ease: coutureEase }}
          className="mt-14 sm:mt-20 pt-8 border-t border-brand-gold/15 w-full max-w-4xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-brand-ivory/60"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Bridal Gown Rentals
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
            Bespoke Tailoring
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Asoebi Mastery
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
            Fashion Academy
          </span>
        </motion.div>

      </div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-brand-gold/60 pointer-events-none"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.3em] font-medium">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-brand-gold/80" />
        </motion.div>
      </motion.div>

    </section>
  );
}
