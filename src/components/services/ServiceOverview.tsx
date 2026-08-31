"use client";

import { motion } from 'framer-motion';
import { Service } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="py-24 md:py-32 bg-brand-charcoal text-brand-ivory">
      <div className="px-6 lg:px-12 max-w-5xl mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: coutureEase }}
            className="lg:col-span-5"
          >
            <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-gold mb-6 leading-tight">
              The Essence of {service.title}
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: coutureEase, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="text-xl md:text-2xl font-light text-brand-ivory/90 leading-relaxed">
              {service.fullDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {service.videoOverview && (
        <div className="w-full flex flex-col items-center">
          {/* Full-bleed video container with increased height and NO border radius */}
          <div className="relative w-full h-[55vh] md:h-[70vh]">
            <video 
              src={service.videoOverview.src} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover" 
              style={{ pointerEvents: 'none' }}
            />
            {/* Subtle gradient overlay to ensure text readability without overpowering the video */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-brand-charcoal/20 to-transparent flex items-center justify-center p-6 text-center">
              {service.videoOverview.overlayText && (
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-light text-brand-ivory tracking-[0.2em] uppercase drop-shadow-md">
                  {service.videoOverview.overlayText}
                </h3>
              )}
            </div>
          </div>
          
          {/* Button immediately below the video with a small gap */}
          {service.videoOverview.buttonText && service.videoOverview.buttonLink && (
            <div className="mt-8 px-6">
              <a 
                href={service.videoOverview.buttonLink}
                className="inline-block border border-brand-gold/60 text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-500 px-10 py-3.5 rounded-full font-sans text-xs uppercase tracking-[0.15em]"
              >
                {service.videoOverview.buttonText}
              </a>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
