"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ourStoryData } from '@/lib/aboutData';
import { coutureEase } from '@/lib/animations';

export function OurStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory relative overflow-hidden">
      {/* Decorative large background text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-bold text-brand-ivory/[0.02] whitespace-nowrap select-none pointer-events-none"
        style={{ y: y1 }}
      >
        Rivo Vogue
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Heading and graphic element */}
        <div className="md:col-span-5 md:col-start-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: coutureEase }}
          >
            <span className="uppercase text-brand-gold tracking-widest text-xs font-semibold block mb-4">
              Legacy & Vision
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light mb-8 leading-tight">
              {ourStoryData.title}
            </h2>
            <div className="w-12 h-[1px] bg-brand-pink mb-8"></div>
          </motion.div>
        </div>

        {/* Right: Scrollytelling Paragraphs */}
        <div className="md:col-span-5 flex flex-col gap-8">
          {ourStoryData.paragraphs.map((paragraph, index) => (
            <motion.p 
              key={index}
              className="font-sans text-lg md:text-xl text-brand-ivory/80 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: coutureEase }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
