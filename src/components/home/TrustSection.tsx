'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useInView } from 'framer-motion';
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

function StatCounter({ value, label }: { value: string; label: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const number = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(number);
    } else {
      motionValue.set(0);
    }
  }, [isInView, motionValue, number]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
      <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#A64D6A] tracking-tight tabular-nums mb-3">
        {displayValue}{suffix}
      </span>
      <span className="font-serif text-sm sm:text-lg md:text-xl font-light text-balance max-w-[150px] sm:max-w-none mx-auto lg:mx-0">
        {label}
      </span>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: coutureEase }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <GownBadgeIcon className="w-3.5 h-3.5 text-[#A64D6A]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#A64D6A] font-medium">
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
            className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.05] tracking-tight"
          >
            Trusted by Women Who <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#A64D6A] via-[#C9899A] to-[#A64D6A]">
              Expect the Best
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: coutureEase }}
            className="font-sans text-base sm:text-lg opacity-90 font-light mt-6 leading-relaxed max-w-lg text-balance"
          >
            Our Fashion House is built on an unwavering commitment to precision, luxurious fabrics, and delivering on our promises—so you never have to worry.
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
                className="rounded-3xl bg-current/[0.03] border border-current/10 backdrop-blur-xl hover:bg-current/[0.05] hover:border-brand-pink/40 p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(229,140,164,0.2)]"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#A64D6A]/10 border border-[#A64D6A]/30 flex items-center justify-center text-[#A64D6A] mb-8">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-light mb-4 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm opacity-90 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-current/10 flex items-center justify-between text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#A64D6A]/90">
                  <span>Standard of Excellence</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A64D6A]" />
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
          className="rounded-3xl bg-current/[0.03] border border-current/10 p-10 sm:p-16 shadow-xl backdrop-blur-md"
        >
          <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-between items-center lg:items-start gap-10 lg:gap-8">
            {STATS_LIST.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
