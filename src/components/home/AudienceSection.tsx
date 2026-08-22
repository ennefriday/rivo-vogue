'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AUDIENCE_LIST } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

export default function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax offsets for the 3 columns (only used on desktop)
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [20, -60]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-brand-charcoal text-brand-ivory px-2 md:px-6 lg:px-12 border-t border-brand-gold/10 overflow-hidden"
    >
      
      {/* ─── Ambient Liquid Glass Accents ─── */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-pink/[0.04] rounded-full blur-[140px] pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-brand-gold/[0.05] rounded-full blur-[150px] pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col justify-end gap-8 pb-10 sm:pb-16 border-b border-brand-gold/20 px-4 md:px-0">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: coutureEase }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <GownBadgeIcon className="w-3.5 h-3.5 text-brand-pink" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-pink font-medium">
                For Women Who Know Their Style
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
              className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light text-brand-ivory leading-[1.15] tracking-tight"
            >
              Quality fashion for every occasion, thoughtfully made around you.
            </motion.h2>
          </div>
        </div>

        {/* 6 Audience Cards Grid - Creative Portrait Staggered Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 pt-12 md:pt-24 pb-8 md:pb-16">
          {AUDIENCE_LIST.map((item, index) => {
            // Assign parallax and staggered margin based on column
            let yTransform = y1;
            let marginClass = "";
            
            if (index % 3 === 0) {
              yTransform = y1;
              marginClass = "md:-mt-12"; 
            } else if (index % 3 === 1) {
              yTransform = y2;
              marginClass = "md:mt-16"; 
            } else {
              yTransform = y3;
              marginClass = "md:mt-4"; 
            }

            return (
              <motion.div
                key={item.id}
                style={isDesktop ? { y: yTransform } : {}}
                className={marginClass}
              >
                <motion.article
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: isDesktop ? '-50px' : '-20px' }}
                  transition={{ duration: 0.8, delay: isDesktop ? (index % 3) * 0.1 : 0.1, ease: coutureEase }}
                  className="group relative overflow-hidden bg-brand-charcoal aspect-[4/5] sm:aspect-[3/4]"
                >
                  {/* Image */}
                  <motion.div 
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      priority={index < 2} // Optimize mobile speed by preloading top images
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </motion.div>

                  {/* Dark Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/90 pointer-events-none transition-opacity duration-700 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 z-10 pointer-events-none">
                    {/* Title on Top */}
                    <motion.h3 
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="font-serif text-2xl sm:text-3xl font-light text-brand-ivory drop-shadow-lg transform transition-all duration-700 group-hover:translate-y-2 group-hover:text-brand-gold"
                    >
                      {item.title}
                    </motion.h3>

                    {/* Description on Bottom */}
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="font-sans text-sm sm:text-base text-brand-ivory/90 font-light leading-relaxed drop-shadow-md transform transition-all duration-700 group-hover:-translate-y-2 opacity-90 group-hover:opacity-100"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.article>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
