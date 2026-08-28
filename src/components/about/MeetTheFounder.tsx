"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { founderData } from '@/lib/aboutData';
import { coutureEase } from '@/lib/animations';

export function MeetTheFounder() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left: Founder Letter */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: coutureEase }}
          >
            <span className="font-serif font-bold text-lg md:text-xl block mb-6 md:mb-10 text-brand-ivory">
              From the founder of Rivo Vogue
            </span>
            <h2 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight mb-8 md:mb-12">
              We didn't start this to build another brand.
            </h2>
            
            <div className="font-sans text-lg md:text-xl text-brand-ivory/80 leading-[1.4] font-medium space-y-6 mb-12">
              <p>
                I started this because I got tired of watching women compromise on their big days. Every bride I talked to had the same problem. A vision of what they wanted to look like, and no way to bring it to life without endless stress and subpar results.
              </p>
              <p>
                That's the gap we built this to close. Not another fashion house churning out dresses. A team that understands what actually makes a woman feel her most powerful, confident self on her most important days.
              </p>
            </div>

            <div className="mt-8 pt-8">
              <h3 className="font-sans font-bold text-xl md:text-2xl mb-1 text-brand-ivory">
                {founderData.name}
              </h3>
              <p className="font-sans text-brand-ivory/60">
                {founderData.role}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Founder Image */}
        <div className="relative aspect-[3/4] overflow-hidden w-full max-w-md mx-auto md:max-w-none order-1 md:order-2 rounded-sm bg-brand-charcoal">
          <div 
            className="w-full h-full bg-cover bg-center grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-1000"
            style={{ backgroundImage: `url(${founderData.image})` }}
          />
        </div>

      </div>
    </section>
  );
}
