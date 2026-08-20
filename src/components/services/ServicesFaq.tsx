"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { globalServicesFaqs } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';
import { Plus, Minus } from 'lucide-react';

export function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory border-t border-brand-ivory/10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: coutureEase }}
          className="text-center mb-16"
        >
          <span className="text-brand-pink uppercase tracking-widest text-xs font-medium mb-4 block">Information</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {globalServicesFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: coutureEase, delay: index * 0.1 }}
                className="border-b border-brand-ivory/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
                >
                  <h3 className={`font-serif text-xl md:text-2xl font-light transition-colors duration-500 ${isOpen ? 'text-brand-gold' : 'text-brand-ivory group-hover:text-brand-gold'}`}>
                    {faq.question}
                  </h3>
                  <div className="ml-6 flex-shrink-0 relative w-6 h-6 text-brand-pink">
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.4, ease: coutureEase }}
                      className="absolute inset-0"
                    >
                      <Plus className="w-6 h-6" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: isOpen ? 0 : -90, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: coutureEase }}
                      className="absolute inset-0"
                    >
                      <Minus className="w-6 h-6" />
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: coutureEase }}
                    >
                      <div className="pb-8 pr-12 text-brand-ivory/70 font-light leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
