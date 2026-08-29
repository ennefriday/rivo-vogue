"use client";

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { coutureEase } from '@/lib/animations';

export function ServicesCta() {
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: coutureEase }}
        className="max-w-3xl relative z-10"
      >
        <span className="uppercase tracking-widest text-xs font-bold mb-6 block opacity-80">Ready to Begin?</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-12 leading-tight">
          Book Your Private Consultation Today
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-brand-charcoal text-brand-ivory hover:bg-brand-gold hover:text-brand-charcoal transition-colors duration-500 font-sans tracking-wider text-sm uppercase"
          >
            Schedule Appointment
          </Link>
          
          <Link 
            href="/contact#whatsapp"
            className="w-full sm:w-auto px-8 py-4 border border-brand-charcoal/30 text-brand-charcoal hover:border-brand-charcoal transition-colors duration-500 font-sans tracking-wider text-sm uppercase group relative overflow-hidden bg-white/10 backdrop-blur-sm"
          >
            <span className="relative z-10 group-hover:text-brand-ivory transition-colors duration-500">Chat on WhatsApp</span>
            <div className="absolute inset-0 bg-brand-charcoal transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
