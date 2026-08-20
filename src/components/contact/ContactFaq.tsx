"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const CONTACT_FAQS = [
  {
    question: "What is your typical response time?",
    answer: "We aim to respond to all inquiries via WhatsApp and email within 2 to 4 business hours during our standard operating times (Mon-Sat, 9 AM - 6 PM). Requests received on Sundays will be addressed first thing Monday morning."
  },
  {
    question: "Do I need to pay a deposit before booking an appointment?",
    answer: "A consultation fee is required to secure your booking for bespoke and bridal services. This fee is fully deductible from your final garment cost should you choose to proceed with Rivo Vogue."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "To ensure every client receives our undivided attention and a premium experience, we operate strictly by appointment for bridal and bespoke services. However, you may walk in to browse our store for ready-to-wear accessories, bags, and perfumes."
  },
  {
    question: "What is your policy on rescheduling an appointment?",
    answer: "We kindly request at least 24 hours' notice if you need to reschedule your fitting or consultation. This allows us to offer the time slot to another client."
  }
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <section className="py-24 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-gold font-medium mb-3 block">
            Clear Answers
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            Booking FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {CONTACT_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border-b transition-colors duration-300 ${isOpen ? 'border-brand-gold/30' : 'border-brand-ivory/10'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className={`font-serif text-lg md:text-xl transition-colors ${isOpen ? 'text-brand-gold' : 'text-brand-ivory group-hover:text-brand-gold/80'}`}>
                    {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0 w-8 h-8 rounded-full border border-brand-ivory/20 flex items-center justify-center bg-brand-charcoal transition-colors group-hover:border-brand-gold/50">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-brand-gold" />
                    ) : (
                      <Plus className="w-4 h-4 text-brand-ivory" />
                    )}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-brand-ivory/60 font-light leading-relaxed pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
