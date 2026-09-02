"use client";

import { motion } from 'framer-motion';
import { coutureEase } from '@/lib/animations';

export function ContactMap() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full bg-brand-charcoal">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: coutureEase }}
        className="absolute inset-0"
      >
        {/* CSS filters to make the Google Map blend with the dark/luxury theme */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15885.79665821606!2d5.991618258952869!3d5.500123411676066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041bdd28bf428c3%3A0xc3ed1265dc4854e5!2sRIVO%20VOGUE!5e0!3m2!1sen!2sng!4v1788348240412!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
          title="Rivo Vogue Location"
          className="w-full h-full opacity-100"
        />
        
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-brand-charcoal pointer-events-none" />
      </motion.div>
    </section>
  );
}
