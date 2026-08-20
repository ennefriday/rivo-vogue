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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127110.15049592534!2d5.918919632860831!3d5.495088219463595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104198c616fc8b99%3A0xc47e30d71a938c8!2sUghelli%2C%20Delta!5e0!3m2!1sen!2sng!4v1714578121074!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Rivo Vogue Location"
          className="w-full h-full opacity-60"
        />
        
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-brand-charcoal pointer-events-none" />
      </motion.div>
    </section>
  );
}
