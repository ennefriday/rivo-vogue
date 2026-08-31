'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/homeData';
import { coutureEase } from '@/lib/animations';

/* ─────────────────────────────────────────────────────────────
 * Desktop Step Circle — auto-activates sequentially once the
 * container scrolls into view, with a spring micro-animation.
 * ───────────────────────────────────────────────────────────── */
const DesktopStepCircle = ({
  step,
  index,
  containerInView,
}: {
  step: string;
  index: number;
  containerInView: boolean;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (containerInView) {
      controls.start('active');
    } else {
      controls.start('inactive');
    }
  }, [containerInView, controls]);

  return (
    <div className="relative z-10 flex-shrink-0 bg-brand-charcoal rounded-full">
      <motion.div
        animate={controls}
        initial="inactive"
        variants={{
          inactive: {
            borderColor: 'rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.35)',
            scale: 1,
          },
          active: {
            borderColor: '#B8925A',
            color: '#B8925A',
            scale: 1.15,
            transition: {
              delay: index * 1.1,
              duration: 0.5,
              scale: { type: 'spring', stiffness: 300, damping: 12 },
            },
          },
        }}
        className="w-16 h-16 rounded-full border-[1.5px] flex items-center justify-center font-serif text-lg bg-brand-charcoal relative"
      >
        {/* GPU-accelerated glow */}
        <motion.div
          animate={controls}
          initial="inactive"
          variants={{
            inactive: { opacity: 0 },
            active: {
              opacity: 1,
              transition: { delay: index * 1.1, duration: 0.5 },
            },
          }}
          className="absolute inset-0 rounded-full shadow-[0_0_24px_rgba(184,146,90,0.5)] pointer-events-none"
        />
        <span className="relative z-10">{step}</span>
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
 * Mobile / Tablet Step Circle — activates as the scroll-driven
 * progress line reaches it, providing a perfectly synchronous
 * glow effect.
 * ───────────────────────────────────────────────────────────── */
const MobileStepCircle = ({
  step,
  isActive,
}: {
  step: string;
  isActive: boolean;
}) => {
  return (
    <div className="relative z-10 flex-shrink-0 bg-brand-charcoal rounded-full">
      <motion.div
        animate={isActive ? 'active' : 'inactive'}
        initial="inactive"
        variants={{
          inactive: {
            borderColor: 'rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.35)',
            scale: 1,
          },
          active: {
            borderColor: '#B8925A',
            color: '#B8925A',
            scale: 1.15,
            transition: {
              duration: 0.4,
              scale: { type: 'spring', stiffness: 300, damping: 12 },
            },
          },
        }}
        className="w-12 h-12 rounded-full border-[1.5px] flex items-center justify-center font-serif text-sm bg-brand-charcoal relative"
      >
        {/* GPU-accelerated glow */}
        <motion.div
          animate={isActive ? 'active' : 'inactive'}
          initial="inactive"
          variants={{
            inactive: { opacity: 0 },
            active: {
              opacity: 1,
              transition: { duration: 0.4 },
            },
          }}
          className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(184,146,90,0.5)] pointer-events-none"
        />
        <span className="relative z-10">{step}</span>
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
 * MAIN COMPONENT
 * ───────────────────────────────────────────────────────────── */
export function HowWeWork({ steps = PROCESS_STEPS }: { steps?: { step: string; title: string; description: string; }[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerInView = useInView(containerRef, { margin: '-100px' });
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(
    () => steps.map(() => false)
  );

  // Responsive breakpoint
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ── Scroll-driven line for mobile/tablet ─────────────── */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  /* ── Track which mobile steps the line has reached ───── */
  const updateActiveSteps = useCallback(() => {
    if (isDesktop || !timelineRef.current) return;

    const timelineRect = timelineRef.current.getBoundingClientRect();
    const timelineTop = timelineRect.top;
    const timelineHeight = timelineRect.height;

    if (timelineHeight === 0) return;

    // The line fills from top of timeline to viewport center
    const viewportCenter = window.innerHeight / 2;
    const lineFillPx = viewportCenter - timelineTop;
    const progress = Math.max(0, Math.min(1, lineFillPx / timelineHeight));

    const newActive = stepRefs.current.map((ref) => {
      if (!ref || !timelineRef.current) return false;
      const stepRect = ref.getBoundingClientRect();
      const stepCenter = stepRect.top + stepRect.height / 2;
      // Step is active when the filled line reaches its vertical center
      const stepOffset = stepCenter - timelineTop;
      const stepProgress = stepOffset / timelineHeight;
      return progress >= stepProgress;
    });

    setActiveSteps(newActive);
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) return;

    const onScroll = () => {
      requestAnimationFrame(updateActiveSteps);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateActiveSteps(); // initial call
    return () => window.removeEventListener('scroll', onScroll);
  }, [isDesktop, updateActiveSteps]);

  return (
    <section className="py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory relative border-t border-brand-ivory/10 overflow-hidden">
      {/* Background ambience */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Header ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: coutureEase }}
          className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div>
            <span className="text-brand-pink uppercase tracking-widest text-xs font-medium mb-4 block">
              The Journey
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light">
              How We Bring Your Vision{' '}
              <span className="italic text-brand-gold">To Life</span>
            </h2>
          </div>
          <p className="max-w-md text-brand-ivory/70 font-light text-lg">
            Every masterpiece requires a meticulous process. Here is how we bring your vision to life.
          </p>
        </motion.div>

        {/* ── Desktop: Horizontal Timeline ───────────────── */}
        <div ref={containerRef} className="hidden lg:block relative">
          {/* Track background */}
          <div className="absolute top-8 left-0 right-0 h-[1px] bg-brand-ivory/10" />
          {/* Animated fill line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 6, ease: 'linear' }}
            className="absolute top-8 left-0 right-0 h-[1px] bg-gradient-to-r from-brand-gold via-brand-pink to-brand-gold origin-left"
          />

          <div className="flex gap-8 justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center gap-8 w-1/6"
              >
                <DesktopStepCircle
                  step={step.step}
                  index={index}
                  containerInView={containerInView}
                />
                <div className="text-center">
                  <h3 className="font-serif text-xl font-light mb-2 text-brand-ivory">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-ivory/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile / Tablet: Vertical Timeline ─────────── */}
        <div ref={timelineRef} className="lg:hidden relative">
          {/* Track background */}
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-brand-ivory/10" />
          {/* Scroll-driven fill line — uses CSS scaleY for 60fps */}
          <motion.div
            style={{ scaleY: fillHeight }}
            className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-gold via-brand-pink to-brand-gold origin-top will-change-transform"
          />

          <div className="flex flex-col gap-14">
            {steps.map((step, index) => (
              <div
                key={step.step}
                ref={(el) => { stepRefs.current[index] = el; }}
                className="relative flex items-start gap-6"
              >
                {/* Step circle on the left, aligned with the line */}
                <div className="flex-shrink-0">
                  <MobileStepCircle
                    step={step.step}
                    isActive={activeSteps[index]}
                  />
                </div>

                {/* Content on the right */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: coutureEase }}
                  className="pt-1 flex-1"
                >
                  <h3 className="font-serif text-xl font-light mb-2 text-brand-ivory">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-ivory/60 font-light leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
