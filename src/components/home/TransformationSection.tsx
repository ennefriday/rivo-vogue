'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Ruler, CheckCircle2 } from 'lucide-react';
import { TRANSFORMATION_PILLARS, PROCESS_STEPS } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

export default function TransformationSection() {
  return (
    <section className="relative py-28 sm:py-36 bg-brand-charcoal text-brand-ivory px-6 sm:px-8 lg:px-12 border-t border-brand-gold/10 overflow-hidden">
      
      {/* Ambient Liquid Glass Accents */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/[0.04] rounded-full blur-[140px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-brand-pink/[0.03] rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* ─── PART 1: OVERLAPPING EDITORIAL PANELS ─── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 pb-24 sm:pb-32 border-b border-brand-gold/20">
          
          {/* Left Column: 4 Transformation Pillars */}
          <div className="w-full lg:w-[60%] lg:pr-16 lg:pb-16 z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: coutureEase }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-medium">
                Our Promise to You
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
              className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light text-brand-ivory leading-[1.05] tracking-tight mb-8"
            >
              Clothes That Truly <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
                Understand You
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
              className="font-sans text-base sm:text-lg text-brand-ivory/80 font-light leading-relaxed mb-12 max-w-xl"
            >
              Off-the-rack garments ask your body to adapt to the fabric. At Rivo Vogue, we craft each piece around your natural contours, elevating your confidence and ensuring you always look your best.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {TRANSFORMATION_PILLARS.map((pillar, index) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: coutureEase }}
                  className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] hover:border-brand-gold/40 transition-all duration-500 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl text-brand-gold font-light tabular-nums">
                      {pillar.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-gold/30" />
                  </div>
                  <h3 className="font-serif text-xl font-light text-brand-ivory mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-ivory/70 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Showcase Container (Overlapping) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, delay: 0.3, ease: coutureEase }}
            className="w-full lg:w-[45%] lg:-ml-[5%] relative z-10"
          >
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-brand-charcoal border border-white/10 p-8 flex flex-col justify-between shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/10 to-transparent z-10" />
              
              {/* Media placeholder / Watermark */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-0">
                <Scissors className="w-12 h-12 text-brand-gold/20 mb-4" />
                <span className="font-serif text-3xl text-brand-ivory/30 font-light">Atelier Craftsmanship</span>
                <span className="text-xs font-mono text-brand-ivory/30 mt-2">/media/brand/atelier-fitting.jpg</span>
              </div>

              {/* Floating Quote Card */}
              <div className="relative z-20 mt-auto p-8 rounded-2xl bg-white/[0.05] backdrop-blur-2xl border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <Ruler className="w-5 h-5 text-brand-gold" />
                  <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-brand-gold font-medium">Over 28 Anatomical Points</span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-brand-ivory/90 font-light leading-snug">
                  &ldquo;Every outfit we make is designed to celebrate who you are, making you feel confident and comfortable in your own skin.&rdquo;
                </p>
                <span className="block text-[11px] font-sans uppercase tracking-widest text-brand-ivory/60 mt-4 font-medium">
                  Rivo Vogue Master Stylist
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ─── PART 2: HOW IT WORKS (6-STEP JOURNEY) ─── */}
        <div className="pt-24 sm:pt-32">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: coutureEase }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-pink font-medium">
                The Journey
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
              className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-light text-brand-ivory leading-tight"
            >
              How We Bring Your Vision <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-ivory via-brand-gold to-brand-ivory">
                To Life
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: coutureEase }}
                className="relative rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 flex flex-col justify-between hover:bg-white/[0.05] hover:border-brand-gold/40 transition-all duration-500 shadow-lg"
              >
                <div>
                  <span className="font-serif text-3xl text-brand-gold font-light block mb-6 tabular-nums">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-xl font-light text-brand-ivory mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-ivory/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-gold/20 flex items-center justify-between text-[11px] uppercase font-sans font-medium text-brand-ivory/50">
                  <span>Phase {step.step}</span>
                  <CheckCircle2 className="w-4 h-4 text-brand-gold/80" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
