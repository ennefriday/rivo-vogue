'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { TRUST_PILLARS, STATS_LIST } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

const iconMap = {
  Crown,
  ShieldCheck,
  Clock,
  Sparkles,
};

export default function TrustSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-brand-charcoal text-brand-ivory px-5 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-gold/[0.04] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-brand-gold font-semibold">
              Reputation & Integrity
            </span>
          </div>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-light text-brand-ivory leading-[1.05] tracking-tight">
            Why Discerning Women <br />
            <span className="italic text-brand-gold">Trust Rivo Vogue</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-ivory/70 font-light mt-4 leading-relaxed">
            Our atelier is built upon an uncompromising commitment to precision fitting, luxurious materials, and punctual deliveries.
          </p>
        </div>

        {/* 4 Trust Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {TRUST_PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.iconName];

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: coutureEase }}
                className="rounded-2xl bg-white/[0.02] border border-brand-gold/15 hover:border-brand-gold/50 p-8 flex flex-col justify-between transition-all duration-400 hover:shadow-[0_20px_50px_-15px_rgba(184,146,90,0.15)]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-brand-ivory mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-brand-ivory/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-brand-gold/10 flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-brand-gold/60">
                  <span>Standard of Excellence</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="rounded-2xl bg-gradient-to-r from-brand-charcoal via-brand-gold/[0.06] to-brand-charcoal border border-brand-gold/20 p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {STATS_LIST.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: coutureEase }}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-brand-gold tracking-tight tabular-nums">
                  {stat.value}
                </span>
                <span className="font-serif text-sm sm:text-base text-brand-ivory font-light mt-2">
                  {stat.label}
                </span>
                <span className="font-sans text-[11px] text-brand-ivory/50 font-light mt-1">
                  {stat.sublabel}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
