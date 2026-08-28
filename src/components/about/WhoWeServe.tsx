"use client";

import { motion } from 'framer-motion';
import { whoWeServeData } from '@/lib/aboutData';
import { fadeUpVariant, coutureEase } from '@/lib/animations';

export function WhoWeServe() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 md:mb-24"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: coutureEase }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">{whoWeServeData.title}</h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whoWeServeData.audiences.map((audience, index) => {
            const Icon = audience.icon;
            
            return (
              <motion.div
                key={audience.id}
                className="group relative flex flex-col items-center text-center p-8 border border-brand-ivory/10 hover:border-brand-gold/30 transition-colors duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: coutureEase }}
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-brand-ivory/[0.03] flex items-center justify-center group-hover:bg-brand-pink/10 transition-colors duration-500">
                  <Icon className="w-8 h-8 text-brand-pink" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-serif text-xl font-medium mb-4">{audience.title}</h3>
                
                <p className="font-sans text-brand-ivory/70 text-sm leading-relaxed">
                  {audience.description}
                </p>

                {/* Subtle corner accent */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
