'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';

const StepCircle = ({ step, index, isDesktop, containerInView }: { step: string, index: number, isDesktop: boolean, containerInView: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "1000px 0px -40% 0px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isDesktop) {
      if (containerInView) {
        controls.start("active");
      } else {
        controls.start("inactive");
      }
    } else {
      if (isInView) {
        controls.start("active");
      } else {
        controls.start("inactive");
      }
    }
  }, [isDesktop, containerInView, isInView, controls]);

  return (
    <div ref={ref} className="relative z-10 flex-shrink-0 bg-[#E5E0D8] rounded-full">
      <motion.div 
        animate={controls}
        initial="inactive"
        variants={{
          inactive: {
            borderColor: 'rgba(10,9,8, 0.2)', 
            color: 'rgba(10,9,8, 0.4)',
            scale: 1,
            opacity: 0.4,
          },
          active: {
            borderColor: '#A64D6A',
            color: '#A64D6A',
            scale: 1.15,
            opacity: 1,
            transition: {
              delay: isDesktop ? index * 1.2 : 0,
              duration: 0.5,
              scale: { type: "spring", stiffness: 300, damping: 10 }
            }
          }
        }}
        className="w-14 h-14 rounded-full border-[1.5px] flex items-center justify-center font-serif text-lg bg-[#E5E0D8] relative"
      >
        {/* Hardware-accelerated GPU glow layer */}
        <motion.div
          animate={controls}
          initial="inactive"
          variants={{
            inactive: { opacity: 0 },
            active: { 
              opacity: 1, 
              transition: { delay: isDesktop ? index * 1.2 : 0, duration: 0.5 } 
            }
          }}
          className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(166,77,106,0.6)] pointer-events-none"
        />
        <span className="relative z-10">{step}</span>
      </motion.div>
    </div>
  );
};

export default function TransformationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerInView = useInView(containerRef, { margin: "-100px" });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header - Left Aligned */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: coutureEase }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <GownBadgeIcon className="w-3.5 h-3.5 text-[#A64D6A]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#A64D6A] font-medium">
              The Journey
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: coutureEase }}
            className="font-serif text-[clamp(2.5rem,4vw,3.5rem)] font-light leading-tight"
          >
            How We Bring Your Vision <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#A64D6A] via-[#C9899A] to-[#A64D6A]">
              To Life
            </span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          
          {/* Mobile Vertical Line */}
          <div className="absolute left-7 top-0 bottom-0 w-[1px] bg-current/10 lg:hidden" />
          <motion.div 
            style={{ scaleY: fillHeight }}
            className="absolute left-7 top-0 bottom-0 w-[1px] bg-[#A64D6A] lg:hidden origin-top" 
          />

          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-[1px] bg-current/10" />
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 6, ease: "linear" }}
            className="hidden lg:block absolute top-7 left-0 right-0 h-[1px] bg-[#A64D6A] origin-left" 
          />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div 
                key={step.step} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-8 lg:w-1/6"
              >
                <StepCircle step={step.step} index={index} isDesktop={isDesktop} containerInView={containerInView} />
                <div className="pt-2 lg:pt-0 lg:text-center">
                  <h3 className="font-serif text-xl font-medium mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm opacity-90 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
