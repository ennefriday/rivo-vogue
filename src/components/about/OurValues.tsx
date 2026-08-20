"use client";

import { motion } from 'framer-motion';
import { ourValuesData } from '@/lib/aboutData';
import { fadeUpVariant, coutureEase } from '@/lib/animations';

export function OurValues() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-brand-ivory text-brand-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 md:mb-24"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: coutureEase }}
        >
          <span className="uppercase text-brand-gold tracking-widest text-xs font-semibold block mb-4">
            How We Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">{ourValuesData.title}</h2>
          <div className="w-16 h-[1px] bg-brand-charcoal mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {ourValuesData.values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <motion.div
                key={value.id}
                className="flex flex-col md:flex-row items-start gap-6 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: coutureEase }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-brand-charcoal/10 flex items-center justify-center group-hover:border-brand-pink group-hover:bg-brand-pink/5 transition-all duration-300">
                  <Icon className="w-5 h-5 text-brand-charcoal group-hover:text-brand-pink transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                <div>
                  <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-brand-pink transition-colors duration-300">{value.title}</h3>
                  <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
