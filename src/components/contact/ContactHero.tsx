"use client";

import { motion } from 'framer-motion';
import { coutureEase } from '@/lib/animations';

export function ContactHero() {
  return (
    <section className="relative pt-[120px] pb-24 md:pt-[160px] md:pb-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory overflow-hidden">
      {/* Background Image & Overlay */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: coutureEase }}
      >
        <div className="absolute inset-0 bg-brand-charcoal/70 z-10 mix-blend-multiply"></div>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(/contact_us.webp)` }}
        />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/[0.03] rounded-full blur-[100px] pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-pink/[0.02] rounded-full blur-[100px] pointer-events-none z-10" />

      <div className="max-w-[1400px] mx-auto relative z-20 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: coutureEase }}
          className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-gold font-medium mb-6 block"
        >
          Let's Create Together
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: coutureEase, delay: 0.1 }}
          className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-light leading-[1] tracking-tight mb-8"
        >
          Contact the Fashion House
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: coutureEase, delay: 0.3 }}
          className="font-sans text-brand-ivory/70 font-light max-w-xl mx-auto leading-relaxed text-sm md:text-base"
        >
          Whether you're beginning your bespoke bridal journey or seeking an exclusive styling session, our team is here to assist you in crafting your perfect look.
        </motion.p>
      </div>

      {/* Smooth Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-charcoal to-transparent pointer-events-none z-10" />
    </section>
  );
}
