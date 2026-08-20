"use client";

import { motion } from 'framer-motion';
import { Product } from '@/lib/storeData';
import { MessageCircle, ShieldCheck, Ruler, Truck } from 'lucide-react';

export function ProductInfo({ product }: { product: Product }) {
  const whatsappNumber = "2348000000000";
  const message = `Hello Rivo Vogue, I am interested in ordering the ${product.name} (${product.price}). Can we discuss the details?`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col h-full"
    >
      <div className="mb-8 border-b border-brand-ivory/10 pb-8">
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-gold mb-3 block">
          {product.category}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-brand-ivory leading-[1.1] mb-4">
          {product.name}
        </h1>
        <p className="font-sans text-2xl font-light text-brand-ivory">
          {product.price}
        </p>
      </div>

      <div className="mb-10">
        <h3 className="font-serif text-lg text-brand-gold mb-3">The Details</h3>
        <p className="font-sans text-brand-ivory/70 font-light leading-relaxed text-sm md:text-base">
          {product.fullDescription}
        </p>
      </div>

      <div className="mb-10">
        <h3 className="font-serif text-lg text-brand-gold mb-4">Specifications</h3>
        <dl className="grid grid-cols-1 gap-y-3 text-sm font-light">
          {product.details.map((detail, idx) => (
            <div key={idx} className="flex justify-between py-2 border-b border-brand-ivory/5">
              <dt className="text-brand-ivory/60">{detail.label}</dt>
              <dd className="text-brand-ivory text-right max-w-[60%]">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-auto space-y-6">
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full flex items-center justify-center gap-3 py-5 bg-brand-gold text-brand-charcoal overflow-hidden rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,146,90,0.3)]"
        >
          <span className="absolute inset-0 w-full h-full bg-brand-ivory transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
          <MessageCircle className="w-5 h-5 relative z-10" />
          <span className="relative z-10 font-sans text-xs tracking-[0.2em] uppercase font-bold">
            Order via WhatsApp
          </span>
        </a>

        {/* Reassurance blocks */}
        <div className="grid grid-cols-1 gap-4 pt-6 border-t border-brand-ivory/10">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-brand-gold mt-0.5" />
            <div>
              <p className="text-xs text-brand-ivory font-medium mb-1">Authentic Luxury</p>
              <p className="text-[11px] text-brand-ivory/50 font-light">All materials and hardware are globally sourced for premium durability.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck className="w-4 h-4 text-brand-gold mt-0.5" />
            <div>
              <p className="text-xs text-brand-ivory font-medium mb-1">Global Shipping</p>
              <p className="text-[11px] text-brand-ivory/50 font-light">Secure tracked delivery available nationwide and internationally.</p>
            </div>
          </div>
          {product.category !== 'Perfumes' && (
            <div className="flex items-start gap-3">
              <Ruler className="w-4 h-4 text-brand-gold mt-0.5" />
              <div>
                <p className="text-xs text-brand-ivory font-medium mb-1">Virtual Sizing Assistance</p>
                <p className="text-[11px] text-brand-ivory/50 font-light">Our team provides exact measurement guides before finalizing your order.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
