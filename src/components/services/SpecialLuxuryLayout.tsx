'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Service } from '@/lib/servicesData';

export function SpecialLuxuryLayout({ service }: { service: Service }) {
  return (
    <div className="w-full bg-brand-charcoal text-brand-ivory min-h-screen font-sans selection:bg-brand-gold/30 selection:text-brand-ivory pb-0">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={service.coverImage}
            alt={service.title}
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-charcoal/60 to-brand-charcoal" />
        </motion.div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6 mt-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-2 text-brand-gold/80 mb-6 uppercase tracking-[0.3em] text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            <span>Exclusive Collection</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 font-serif"
          >
            {service.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-brand-ivory/80 max-w-2xl font-light leading-relaxed"
          >
            {service.shortDescription}
          </motion.p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight font-serif">
            Crafted for the <br /> <span className="italic text-brand-ivory/70">Extraordinary</span>
          </h2>
          <p className="text-brand-ivory/70 text-lg leading-loose mb-10">
            {service.fullDescription}
          </p>
          
          {service.packages && service.packages.length > 0 && (
            <div className="space-y-6 border-l border-brand-ivory/20 pl-6">
              {service.packages.map((pkg, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <span className="text-xl font-medium tracking-wide">{pkg.name}</span>
                  <span className="text-brand-gold font-light">{pkg.price}</span>
                  {pkg.features && (
                     <p className="text-sm text-brand-ivory/50 mt-1">{pkg.features.join(' • ')}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative h-[500px] lg:h-[700px] w-full rounded-sm overflow-hidden"
        >
           <Image
              src={service.coverImage}
              alt={`${service.title} detail`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000 grayscale-[0.2]"
           />
           <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>

      {/* Process Section */}
      {service.process && service.process.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-24 border-t border-brand-ivory/10">
           <div className="text-center mb-20">
             <h3 className="text-sm uppercase tracking-[0.3em] text-brand-ivory/50 mb-4">The Experience</h3>
             <p className="text-4xl md:text-5xl font-light font-serif">A Seamless Journey</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {service.process.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-brand-charcoal p-10 rounded-sm hover:bg-white/5 transition-colors border border-brand-ivory/10 flex flex-col h-full group"
                >
                   <span className="text-5xl font-light text-brand-ivory/10 block mb-8 group-hover:text-brand-gold/30 transition-colors duration-500">{step.step}</span>
                   <h4 className="text-xl font-medium mb-4 text-brand-ivory">{step.title}</h4>
                   <p className="text-brand-ivory/60 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
             ))}
           </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="relative w-full py-40 mt-10 overflow-hidden flex flex-col items-center justify-center text-center border-t border-brand-ivory/10">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-brand-charcoal to-brand-charcoal opacity-60" />
         
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative z-10 flex flex-col items-center max-w-3xl px-6"
         >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 font-serif leading-tight">
              Ready to elevate your style?
            </h2>
            <p className="text-brand-ivory/70 text-lg md:text-xl mb-14 font-light max-w-xl leading-relaxed">
              Explore our curated selection and find the perfect addition to your collection in our exclusive store.
            </p>
            <Link 
              href="/store"
              className="group relative inline-flex items-center justify-center px-12 py-6 bg-brand-ivory text-brand-charcoal text-sm font-medium tracking-[0.2em] uppercase overflow-hidden rounded-sm"
            >
              <span className="relative z-10 flex items-center gap-4 transition-transform duration-500 group-hover:-translate-x-3">
                Discover the Store
              </span>
              <ArrowRight className="absolute right-8 w-5 h-5 opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
              <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out bg-brand-gold -z-0" />
            </Link>
         </motion.div>
      </div>
    </div>
  );
}
