'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Ruler, CheckCircle2 } from 'lucide-react';
import { TRANSFORMATION_PILLARS, PROCESS_STEPS } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

export default function TransformationSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-brand-charcoal text-brand-ivory px-5 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/[0.03] rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto">
        
        {/* ─── PART 1: 2-COLUMN PROBLEM -> TRANSFORMATION ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-20 sm:pb-28 border-b border-brand-gold/15">
          
          {/* Left Column: 4 Transformation Pillars */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-brand-gold font-semibold">
                The Rivo Promise
              </span>
            </div>
            
            <h2 className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-light text-brand-ivory leading-[1.05] tracking-tight mb-6">
              Why Your Silhouette <br />
              <span className="italic text-brand-gold">Deserves Haute Couture</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-brand-ivory/70 font-light leading-relaxed mb-10 max-w-xl">
              Off-the-rack garments ask your body to adapt to the fabric. At Rivo Vogue, we sculpt luxury fabric around your natural contours, elevating your posture and commanding respect.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TRANSFORMATION_PILLARS.map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: coutureEase }}
                  className="p-6 rounded-xl bg-white/[0.02] border border-brand-gold/15 hover:border-brand-gold/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-lg text-brand-gold font-light tabular-nums">
                      {pillar.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                  </div>
                  <h3 className="font-serif text-lg font-light text-brand-ivory mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-ivory/65 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Showcase Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-brand-charcoal/90 border border-brand-gold/25 p-8 flex flex-col justify-between shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent z-10" />
              
              {/* Media placeholder / Watermark */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0">
                <Scissors className="w-10 h-10 text-brand-gold/30 mb-3" />
                <span className="font-serif text-2xl text-brand-ivory/40 font-light">Atelier Craftsmanship</span>
                <span className="text-xs font-mono text-brand-ivory/30 mt-1">/media/brand/atelier-fitting.jpg</span>
              </div>

              {/* Floating Quote Card */}
              <div className="relative z-20 mt-auto p-6 rounded-xl bg-brand-charcoal/90 backdrop-blur-xl border border-brand-gold/30 shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Ruler className="w-4 h-4 text-brand-gold" />
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-brand-gold font-medium">Over 28 Anatomical Points</span>
                </div>
                <p className="font-serif italic text-sm text-brand-ivory/90 font-light leading-snug">
                  &ldquo;A gown should not merely fit; it should feel like an extension of your sovereign grace.&rdquo;
                </p>
                <span className="block text-[10px] font-sans uppercase tracking-widest text-brand-ivory/50 mt-2">
                  Rivo Vogue Master Stylist
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ─── PART 2: HOW IT WORKS (6-STEP JOURNEY) ─── */}
        <div className="pt-20 sm:pt-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
              <span className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-brand-pink font-semibold">
                The Journey
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-light text-brand-ivory leading-tight">
              How We Bring Your Vision <br />
              <span className="italic text-brand-gold">To Perfection</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: coutureEase }}
                className="relative rounded-2xl bg-white/[0.02] border border-brand-gold/15 p-6 flex flex-col justify-between hover:border-brand-gold/40 transition-colors"
              >
                <div>
                  <span className="font-serif text-2xl text-brand-gold font-light block mb-4 tabular-nums">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg font-light text-brand-ivory mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-ivory/65 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-gold/10 flex items-center justify-between text-[10px] uppercase font-mono text-brand-ivory/40">
                  <span>Phase {step.step}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold/60" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
