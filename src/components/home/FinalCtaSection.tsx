'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { coutureEase } from '@/lib/animations';

export default function FinalCtaSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-brand-charcoal via-[#221c17] to-brand-charcoal text-brand-ivory px-6 sm:px-8 lg:px-12 border-t border-brand-gold/20 overflow-hidden text-center">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[400px] sm:h-[600px] bg-brand-gold/[0.08] rounded-full blur-[160px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,137,154,0.03)_0%,transparent_70%)] pointer-events-none mix-blend-screen" aria-hidden="true" />

      {/* Top and Bottom filigree lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: coutureEase }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/30 backdrop-blur-xl mb-8"
        >
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-medium">
            Private Salon & Atelier
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
          className="font-serif text-[clamp(3rem,6vw,5rem)] font-light text-brand-ivory leading-[1.05] tracking-tight"
        >
          Ready to Look <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
            Your Best?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
          className="font-sans text-base sm:text-lg lg:text-xl text-brand-ivory/80 font-light max-w-2xl mt-8 leading-relaxed"
        >
          Whether it&apos;s your wedding day or you just want a perfectly tailored outfit, we&apos;re here to make it happen. Visit our salon or send us a message today.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: coutureEase }}
          className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mt-12 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-charcoal font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] px-10 py-5 rounded-full transition-all duration-400 hover:bg-brand-ivory hover:shadow-[0_0_30px_rgba(223,177,91,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
          >
            <Calendar className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:scale-110" />
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <a
            href="https://wa.me/2348000000000?text=Hello%20Rivo%20Vogue,%20I%20would%20like%20to%20inquire%20about%20a%20bridal%20or%20bespoke%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/[0.05] text-brand-ivory font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.2em] px-10 py-5 rounded-full border border-brand-gold/30 backdrop-blur-md transition-all duration-400 hover:bg-white/[0.1] hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-brand-charcoal"
          >
            <MessageCircle className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:scale-110" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Location Subtext */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm font-sans tracking-widest uppercase text-brand-ivory/60">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span>Atelier in Ughelli, Delta State</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span>Worldwide Shipping</span>
        </div>

      </div>
    </section>
  );
}
