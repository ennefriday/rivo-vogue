"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { aboutCtaData } from '@/lib/aboutData';
import { coutureEase } from '@/lib/animations';

export function AboutCta() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory text-center flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-brand-pink/5 blur-[100px] pointer-events-none rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: coutureEase }}
        className="max-w-3xl relative z-10"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-12 leading-tight">
          {aboutCtaData.headline}
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href={aboutCtaData.primaryButton.href}
            className="w-full sm:w-auto px-8 py-4 bg-brand-ivory text-brand-charcoal hover:bg-brand-gold hover:text-brand-ivory transition-colors duration-500 font-sans tracking-wider text-sm uppercase"
          >
            {aboutCtaData.primaryButton.label}
          </Link>
          
          <Link 
            href={aboutCtaData.secondaryButton.href}
            className="w-full sm:w-auto px-8 py-4 border border-brand-ivory/30 text-brand-ivory hover:border-brand-gold hover:text-brand-gold transition-colors duration-500 font-sans tracking-wider text-sm uppercase group relative overflow-hidden"
          >
            <span className="relative z-10">{aboutCtaData.secondaryButton.label}</span>
            <div className="absolute inset-0 bg-brand-gold/10 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
          </Link>
        </div>

        <div className="mt-8">
          <Link 
            href={aboutCtaData.tertiaryButton.href}
            className="font-sans text-brand-ivory/60 hover:text-brand-pink transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-brand-pink pb-1"
          >
            {aboutCtaData.tertiaryButton.label}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
