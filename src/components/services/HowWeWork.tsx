"use client";

import { motion } from 'framer-motion';
import { coutureEase } from '@/lib/animations';

const steps = [
  {
    num: "01",
    title: "Discovery & Design",
    desc: "We begin with a detailed consultation to understand your vision, culminating in bespoke sketches and fabric selections."
  },
  {
    num: "02",
    title: "The Toile Fitting",
    desc: "A muslin mockup ensures the silhouette and proportions are absolutely flawless before cutting into luxury fabrics."
  },
  {
    num: "03",
    title: "Masterful Construction",
    desc: "Our artisans meticulously hand-sew and embellish your garment, applying hours of dedicated couture techniques."
  },
  {
    num: "04",
    title: "The Final Reveal",
    desc: "Your final fitting and delivery. A breathtaking moment where your fashion dreams become a tangible reality."
  }
];

export function HowWeWork() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory relative border-t border-brand-ivory/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: coutureEase }}
          className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="text-brand-pink uppercase tracking-widest text-xs font-medium mb-4 block">Our Process</span>
            <h2 className="font-serif text-4xl md:text-6xl font-light">The Couture Journey</h2>
          </div>
          <p className="max-w-md text-brand-ivory/70 font-light text-lg">
            Every masterpiece requires a meticulous process. Here is how we bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-brand-ivory/10 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: coutureEase, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="w-24 h-24 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-charcoal mb-8 text-3xl font-serif text-brand-gold shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                {step.num}
              </div>
              <h3 className="text-2xl font-serif font-light mb-4">{step.title}</h3>
              <p className="text-brand-ivory/60 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
