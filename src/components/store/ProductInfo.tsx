"use client";

import { motion } from 'framer-motion';
import { Product } from '@/lib/storeData';
import { MessageCircle, ShieldCheck, Truck, Phone } from 'lucide-react';

export function ProductInfo({ product }: { product: Product }) {
  const whatsappNumber = "2347088835025";
  const message = `Hello Rivo Vogue, I am interested in ordering the ${product.name} (${product.price}). Can we discuss the details?`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col h-full"
    >
      {/* Category & Name */}
      <div className="mb-6 pb-6 border-b border-brand-ivory/10">
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-gold mb-2 block">
          {product.category}
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-light text-brand-ivory leading-[1.1] mb-3">
          {product.name}
        </h1>
        <p className="font-sans text-2xl font-light text-brand-ivory">
          {product.price}
        </p>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h3 className="font-serif text-base text-brand-gold mb-2">About This Product</h3>
        <p className="font-sans text-brand-ivory/70 font-light leading-relaxed text-sm">
          {product.fullDescription}
        </p>
      </div>

      {/* Specifications */}
      <div className="mb-8">
        <h3 className="font-serif text-base text-brand-gold mb-3">Specifications</h3>
        <dl className="grid grid-cols-1 gap-y-2 text-sm font-light">
          {product.details.map((detail, idx) => (
            <div key={idx} className="flex justify-between py-2 border-b border-brand-ivory/5">
              <dt className="text-brand-ivory/50">{detail.label}</dt>
              <dd className="text-brand-ivory text-right max-w-[60%]">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA & Reassurance */}
      <div className="mt-auto space-y-5">
        {/* Primary CTA — WhatsApp */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full flex items-center justify-center gap-3 py-4 bg-brand-gold text-brand-charcoal overflow-hidden rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,146,90,0.3)]"
        >
          <span className="absolute inset-0 w-full h-full bg-brand-ivory transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
          <MessageCircle className="w-4 h-4 relative z-10" />
          <span className="relative z-10 font-sans text-xs tracking-[0.2em] uppercase font-bold">
            Order via WhatsApp
          </span>
        </a>

        {/* Secondary CTA — call */}
        <a
          href="tel:+2347088835025"
          className="w-full flex items-center justify-center gap-2 py-3.5 border border-brand-ivory/15 rounded-md text-brand-ivory/70 hover:text-brand-ivory hover:border-brand-ivory/30 transition-all duration-200"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-medium">Call to Order</span>
        </a>

        {/* Trust badges */}
        <div className="grid grid-cols-2 gap-3 pt-5 border-t border-brand-ivory/10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold/60" />
            <span className="text-[10px] text-brand-ivory/40 font-light">Authentic Luxury</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-3.5 h-3.5 text-brand-gold/60" />
            <span className="text-[10px] text-brand-ivory/40 font-light">Delta State Delivery</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
