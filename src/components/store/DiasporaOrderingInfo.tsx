"use client";

import { motion } from 'framer-motion';
import { Globe2, Package, HeadphonesIcon } from 'lucide-react';
import { coutureEase } from '@/lib/animations';

export function DiasporaOrderingInfo() {
  return (
    <section className="py-32 px-6 lg:px-12 bg-[#0a0807] text-brand-ivory relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Text & Steps */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: coutureEase }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-gold/50"></span>
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-gold font-medium">
              Global Access
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-6 leading-[1.1]">
            Seamless Ordering <br /> for the Diaspora
          </h2>
          
          <p className="font-sans text-brand-ivory/70 font-light leading-relaxed mb-12 max-w-lg">
            Distance is no barrier to luxury. We regularly craft bespoke garments and ship our exclusive collections to clients in the UK, US, Canada, and across Europe. Our remote process is designed to ensure a perfect fit and secure delivery.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0 bg-brand-gold/[0.05]">
                <HeadphonesIcon className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-brand-ivory mb-1">1. Virtual Consultation</h4>
                <p className="text-sm text-brand-ivory/60 font-light">Discuss your needs, style, and timeline directly with our team via WhatsApp or Zoom.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0 bg-brand-gold/[0.05]">
                <Globe2 className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-brand-ivory mb-1">2. Guided Measurements</h4>
                <p className="text-sm text-brand-ivory/60 font-light">For bespoke items, we provide detailed video guides to help you take precise measurements at home.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0 bg-brand-gold/[0.05]">
                <Package className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-brand-ivory mb-1">3. International Delivery</h4>
                <p className="text-sm text-brand-ivory/60 font-light">We ship securely via DHL Express, providing full tracking until your luxury item arrives at your doorstep.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Editorial Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: coutureEase }}
          className="relative aspect-[3/4] rounded-2xl overflow-hidden"
        >
          <img 
            src="/images/diaspora-shipping.jpg" 
            alt="International Shipping packaging" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-brand-charcoal/20 mix-blend-multiply"></div>
          
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-brand-charcoal/80 backdrop-blur-md rounded-xl border border-brand-ivory/10">
            <p className="font-serif italic text-brand-gold text-lg text-center">
              "My bespoke dress arrived in London flawlessly packaged and fit perfectly. Unmatched service."
            </p>
            <span className="block text-center text-[10px] uppercase tracking-widest text-brand-ivory/50 mt-4">
              — Sarah T. (London, UK)
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
