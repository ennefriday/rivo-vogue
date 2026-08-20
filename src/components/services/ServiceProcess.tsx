'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Service } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';

export function ServiceProcess({ service }: { service: Service }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  });

  // Grow a line down as the user scrolls
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  if (!service.process || service.process.length === 0) return null;

  return (
    <section ref={containerRef} className="relative py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory border-t border-brand-gold/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: coutureEase }}
          className="text-center mb-24"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-gold font-medium mb-4 block">
            The Methodology
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight">
            Our Couture Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central Vertical Line (Track) */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-ivory/[0.05] md:-translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[23px] md:left-1/2 top-0 w-[1px] bg-gradient-to-b from-brand-gold via-brand-pink to-transparent md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-16 md:space-y-32">
            {service.process.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={step.step} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Step Number Dot */}
                  <div className="absolute left-0 md:left-1/2 w-12 h-12 -translate-x-0 md:-translate-x-1/2 rounded-full border border-brand-gold/30 bg-brand-charcoal flex items-center justify-center z-10 shadow-[0_0_15px_rgba(184,146,90,0.1)]">
                    <span className="font-serif text-sm text-brand-gold tabular-nums">
                      {step.step}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: coutureEase }}
                      className="group"
                    >
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-brand-ivory mb-4 group-hover:text-brand-gold transition-colors duration-500">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-brand-ivory/60 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
