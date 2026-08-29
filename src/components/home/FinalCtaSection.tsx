'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Calendar, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { coutureEase } from '@/lib/animations';

export default function FinalCtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 text-brand-charcoal text-center flex flex-col items-center justify-center relative overflow-hidden bg-brand-pink/20">
      {/* Strict lazy-loaded background */}
      {isInView && (
        <Image 
          src="/animatebackground.webp"
          alt="Animated Background"
          fill
          className="object-cover z-0 opacity-80"
          sizes="100vw"
          quality={70}
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: coutureEase }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/30 border border-brand-charcoal/20 backdrop-blur-xl mb-8"
        >
          <Sparkles className="w-4 h-4 text-brand-charcoal" />
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-charcoal font-medium">
            Private Salon & Fashion House
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-12 leading-tight"
        >
          Ready to Look <br />
          <span className="italic">
            Your Best?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
          className="font-sans text-base sm:text-lg lg:text-xl text-brand-charcoal/80 font-light max-w-2xl mt-[-1rem] mb-12 leading-relaxed"
        >
          Whether it&apos;s your wedding day or you just want a perfectly tailored outfit, we&apos;re here to make it happen. Visit our salon or send us a message today.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: coutureEase }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-charcoal text-brand-ivory hover:bg-brand-gold hover:text-brand-charcoal transition-colors duration-500 font-sans tracking-wider text-sm uppercase"
          >
            <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <a
            href="https://wa.me/2347088835025?text=Hello%20Rivo%20Vogue,%20I%20would%20like%20to%20inquire%20about%20a%20bridal%20or%20bespoke%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 border border-brand-charcoal/30 text-brand-charcoal hover:border-brand-charcoal transition-colors duration-500 font-sans tracking-wider text-sm uppercase relative overflow-hidden bg-white/10 backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4 relative z-10 group-hover:text-brand-ivory transition-colors duration-500" />
            <span className="relative z-10 group-hover:text-brand-ivory transition-colors duration-500">Chat on WhatsApp</span>
            <div className="absolute inset-0 bg-brand-charcoal transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
          </a>
        </motion.div>

        {/* Location Subtext */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm font-sans tracking-widest uppercase text-brand-charcoal/60">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-charcoal/60" />
            <span>Fashion House in Ughelli, Delta State</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span>Worldwide Shipping</span>
        </div>

      </div>
    </section>
  );
}
