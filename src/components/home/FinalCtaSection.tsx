'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { coutureEase } from '@/lib/animations';

export default function FinalCtaSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-brand-charcoal via-[#221c17] to-brand-charcoal text-brand-ivory px-5 sm:px-8 lg:px-12 border-t border-brand-gold/20 overflow-hidden text-center">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[400px] sm:h-[600px] bg-brand-gold/[0.08] rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,137,154,0.03)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />

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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          <span className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-brand-gold font-semibold">
            Private Salon & Atelier
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
          className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-brand-ivory leading-[1] tracking-tight"
        >
          Your Dream Look <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
            Starts Here.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
          className="font-sans text-sm sm:text-base lg:text-lg text-brand-ivory/75 font-light max-w-2xl mt-6 leading-relaxed"
        >
          Experience bridal royalty, made-to-measure tailoring, and signature couture. Step into our Ughelli salon or connect directly with our lead bridal concierge.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: coutureEase }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-10 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-charcoal font-sans font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300 hover:bg-brand-ivory hover:shadow-[0_0_30px_rgba(223,177,91,0.4)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <Calendar className="w-4 h-4 text-brand-pink" />
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href="https://wa.me/2348000000000?text=Hello%20Rivo%20Vogue,%20I%20would%20like%20to%20inquire%20about%20a%20bridal%20or%20bespoke%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/[0.05] text-brand-ivory font-sans font-medium text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full border border-brand-gold/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1] hover:border-brand-gold hover:text-brand-gold active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <MessageCircle className="w-4 h-4 text-brand-pink" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Location Subtext */}
        <div className="mt-12 flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-brand-ivory/50">
          <MapPin className="w-3.5 h-3.5 text-brand-gold" />
          <span>Atelier Located in Ughelli, Delta State • Worldwide Shipping</span>
        </div>

      </div>
    </section>
  );
}
