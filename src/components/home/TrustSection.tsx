'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { TRUST_PILLARS, STATS_LIST } from '@/lib/homeData';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';
import { coutureEase } from '@/lib/animations';

const iconMap = {
  Crown,
  ShieldCheck,
  Clock,
  Sparkles,
};

export default function TrustSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-brand-charcoal text-brand-ivory px-6 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Ambient Liquid Glass Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-brand-gold/[0.05] rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-pink/[0.03] rounded-full blur-[140px] pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: coutureEase }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <GownBadgeIcon className="w-3.5 h-3.5 text-brand-gold" />
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-medium">
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-brand-ivory leading-[1.05] tracking-tight"
          >
            Trusted by Women Who <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
              Expect the Best
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
            className="font-sans text-base sm:text-lg text-brand-ivory/80 font-light mt-6 leading-relaxed max-w-lg mx-auto"
          >
            Our atelier is built on an unwavering commitment to precision, luxurious fabrics, and delivering on our promises—so you never have to worry.
          </motion.p>
        </div>

        {/* 4 Trust Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-24 sm:mb-32">
          {TRUST_PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.iconName as keyof typeof iconMap];

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: coutureEase }}
                className="rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] hover:border-brand-gold/40 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(184,146,90,0.2)]"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-8">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-brand-ivory mb-4 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-ivory/80 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-brand-gold/20 flex items-center justify-between text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-brand-gold/80">
                  <span>Standard of Excellence</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: coutureEase }}
          className="rounded-3xl bg-gradient-to-r from-brand-charcoal via-brand-gold/[0.08] to-brand-charcoal border border-brand-gold/30 p-10 sm:p-16 shadow-2xl backdrop-blur-md"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 text-center">
            {STATS_LIST.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: coutureEase }}
                className="flex flex-col items-center"
              >
                <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-brand-gold tracking-tight tabular-nums mb-3">
                  {stat.value}
                </span>
                <span className="font-serif text-lg sm:text-xl text-brand-ivory font-light">
                  {stat.label}
                </span>
                <span className="font-sans text-xs text-brand-ivory/70 font-light mt-2">
                  {stat.sublabel}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
