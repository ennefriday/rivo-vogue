"use client";

import { motion } from 'framer-motion';
import { Service } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory">
      <div className="max-w-5xl mx-auto">
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
    </section>
  );
}
