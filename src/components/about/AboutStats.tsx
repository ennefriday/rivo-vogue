"use client";

import { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { statsData } from '@/lib/aboutData';

// Reusable animated counter component
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const spring = useSpring(0, {
    stiffness: 40,
    damping: 15,
    mass: 1
  });

  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <div ref={ref} className="flex items-baseline justify-center">
      <motion.span className="font-serif text-5xl md:text-7xl font-light text-brand-gold">
        {display}
      </motion.span>
      <span className="font-serif text-3xl md:text-5xl text-brand-gold ml-1">
        {suffix}
      </span>
    </div>
  );
}

export function AboutStats() {
  return (
    <section className="py-20 border-y border-brand-ivory/10 bg-brand-charcoal text-brand-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-ivory/10">
          
          {statsData.map((stat) => (
            <div key={stat.id} className="pt-8 md:pt-0 flex flex-col items-center justify-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="font-sans text-brand-ivory/60 uppercase tracking-widest text-sm mt-4 font-medium">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
