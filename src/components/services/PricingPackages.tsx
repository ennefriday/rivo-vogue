"use client";

import { motion } from 'framer-motion';
import { Service } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function PricingPackages({ service }: { service: Service }) {
  if (!service.packages || service.packages.length === 0) return null;

  return (
    <section className="relative py-32 px-6 lg:px-12 bg-[#0a0807] text-brand-ivory border-t border-brand-ivory/[0.03] overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-pink/[0.015] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: coutureEase }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-gold font-medium mb-4 block">
            Investment
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight">
            Curated Packages
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {service.packages.map((pkg, index) => (
            <motion.div 
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: coutureEase, delay: index * 0.2 }}
              className={`group relative p-10 md:p-14 flex flex-col h-full rounded-2xl backdrop-blur-sm transition-all duration-700 ${
                pkg.isPremium 
                  ? 'bg-gradient-to-br from-brand-gold/[0.08] to-transparent border border-brand-gold/30 hover:shadow-[0_0_40px_rgba(184,146,90,0.15)]' 
                  : 'bg-white/[0.02] border border-brand-ivory/10 hover:border-brand-gold/20'
              }`}
            >
              {pkg.isPremium && (
                <div className="absolute -top-3 left-10 md:left-14 bg-brand-gold text-brand-charcoal text-[9px] font-sans font-bold uppercase tracking-[0.2em] py-1.5 px-4 rounded-full shadow-lg">
                  Signature Experience
                </div>
              )}
              
              <div className="pb-8 border-b border-brand-ivory/10 mb-8">
                <h3 className={`font-serif text-3xl font-light mb-3 transition-colors duration-500 ${pkg.isPremium ? 'text-brand-gold' : 'text-brand-ivory group-hover:text-brand-gold'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <p className="font-sans text-2xl font-medium text-brand-ivory tracking-wide">
                    {pkg.price}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center border ${pkg.isPremium ? 'border-brand-gold bg-brand-gold/10' : 'border-brand-pink/50 bg-brand-pink/10'} shrink-0`}>
                      <Check className={`w-2.5 h-2.5 ${pkg.isPremium ? 'text-brand-gold' : 'text-brand-pink'}`} strokeWidth={3} />
                    </div>
                    <span className="text-brand-ivory/70 font-light text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/2347088835025?text=${encodeURIComponent(
                  `Hello Rivo Vogue, I am interested in booking the ${pkg.name} (${pkg.price}) for my big day. Please let me know how to proceed.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between w-full py-5 px-8 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500 ${
                  pkg.isPremium 
                    ? 'bg-brand-gold text-brand-charcoal hover:bg-brand-ivory hover:shadow-xl hover:shadow-brand-gold/20' 
                    : 'border border-brand-ivory/20 text-brand-ivory hover:border-brand-gold hover:text-brand-gold bg-transparent'
                }`}
              >
                <span>Reserve Package</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${pkg.isPremium ? 'text-brand-pink' : 'text-brand-gold'}`} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
