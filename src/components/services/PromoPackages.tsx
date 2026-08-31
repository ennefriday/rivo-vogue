'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { coutureEase } from '@/lib/animations';

type Package = {
  name: string;
  price: string;
  items: string[];
  isPopular?: boolean;
};

const promoPackages: Package[] = [
  {
    name: 'Paddy Package',
    price: '30K',
    items: [
      'Regular Wedding Gown',
      'Veil',
      'Petticoat',
      'Bridal robe',
      'Bouquet',
      'Hair Accessories',
      'Earring',
    ],
  },
  {
    name: 'Yanga Package',
    price: '50K',
    items: [
      'Luxury Wedding Gown',
      'Veil',
      'Petticoat',
      'Bridal robe',
      'Bouquet',
      'Hair Accessories',
      'Earring',
      'Bridal Sash',
    ],
  },
  {
    name: 'Confam Package',
    price: '70K',
    isPopular: true,
    items: [
      'Luxury Wedding Gown',
      'Veil',
      'Petticoat',
      'Bridal Robe',
      'Bouquet',
      'Hair Accessories',
      'Earring',
      'Bridal Sash',
    ],
  },
  {
    name: 'Golden Package',
    price: '100K',
    items: [
      'Luxury Wedding Gown',
      'Cathedral Veil',
      'Petticoat',
      'Bridal Robe',
      'Bouquet',
      'Hair Accessories',
      'Earring',
      'Bridal Sash',
      'Bridal Flip Flop',
      '6 Bridesmaid Robe',
    ],
  },
  {
    name: 'Premium Golden',
    price: '150K',
    items: [
      'Exquisite Luxury Wedding Gown',
      'Cathedral Veil',
      'Petticoat',
      'Corset Bridal Robe',
      'Bouquet',
      'Hair Accessories',
      'Earring',
      'Bridal Sash',
      'Bridal Flip Flop',
      '8 Bridesmaid Robes',
    ],
  },
];

export function PromoPackages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: coutureEase },
    },
  };

  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory border-t border-brand-gold/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-pink/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-gold/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: coutureEase }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {/* Elegant script style title */}
          <h2 className="flex flex-col items-center justify-center gap-2 mb-6">
            <span className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-brand-gold drop-shadow-sm font-light tracking-tight leading-none mb-[-10px] md:mb-[-20px] z-10 bg-gradient-to-r from-brand-gold via-brand-pink to-brand-gold bg-clip-text text-transparent">
              Special Rental
            </span>
            <span className="font-sans font-bold text-2xl md:text-4xl tracking-[0.2em] uppercase text-brand-ivory z-0">
              Promo Package
            </span>
          </h2>
          
          <div className="relative inline-block mt-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-brand-pink to-brand-gold opacity-30 blur rounded-lg" />
            <div className="relative px-6 py-4 bg-brand-charcoal/80 backdrop-blur-md border border-brand-gold/20 rounded-lg">
              <p className="font-sans text-sm md:text-base font-light text-brand-ivory/90 leading-relaxed tracking-wide">
                You don't need to break a bank to look exquisite on your big day. <br className="hidden md:block" />
                Enjoy and partake in our promo and save more money.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Packages Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-4"
        >
          {promoPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              variants={itemVariants}
              className={`relative flex flex-col h-full rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 ${
                pkg.isPopular 
                  ? 'bg-gradient-to-b from-brand-gold/[0.15] to-brand-charcoal border border-brand-gold/50 shadow-[0_10px_40px_-10px_rgba(223,177,91,0.2)]' 
                  : 'bg-brand-charcoal/40 border border-brand-ivory/10 hover:border-brand-gold/30'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-gold via-brand-pink to-brand-gold" />
              )}
              
              <div className="p-6 md:p-8 flex-1 flex flex-col backdrop-blur-sm">
                <div className="mb-6">
                  <h3 className="font-sans font-bold text-2xl md:text-3xl text-brand-gold mb-2">
                    {pkg.price}
                  </h3>
                  <div className="h-[1px] w-12 bg-brand-gold/30 mb-4" />
                  <h4 className="font-serif text-lg md:text-xl text-brand-ivory font-light">
                    {pkg.name}
                  </h4>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                      <span className="font-sans text-sm font-light text-brand-ivory/70 leading-tight">
                        {item}
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
                  className={`mt-auto w-full py-3.5 rounded-full text-center font-sans text-xs uppercase tracking-widest transition-all duration-300 ${
                    pkg.isPopular
                      ? 'bg-brand-gold text-brand-charcoal hover:bg-brand-ivory'
                      : 'bg-transparent border border-brand-ivory/20 text-brand-ivory hover:border-brand-gold hover:text-brand-gold'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
