"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/lib/storeData';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';

export function ProductRevealCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={`/store/${product.slug}`}
      className="group block relative w-full aspect-[3/4] overflow-hidden rounded-xl border border-brand-ivory/10 bg-brand-charcoal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Image */}
      <motion.img 
        src={product.coverImage} 
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      
      {/* Reveal Image (Hover) */}
      <motion.img 
        src={product.hoverImage || product.coverImage} 
        alt={`${product.name} Lifestyle`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent opacity-80" />

      {/* Badges Top Left */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <span className="bg-white/10 backdrop-blur-md text-brand-ivory text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20">
          {product.category}
        </span>
      </div>

      {/* Initial Info (Bottom left) */}
      <motion.div 
        animate={{ y: isHovered ? -15 : 0, opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-6 left-6 right-6 z-10"
      >
        <h3 className="font-serif text-2xl font-light text-brand-ivory mb-1">
          {product.name}
        </h3>
        <p className="font-sans font-medium text-brand-gold text-sm tracking-wide">
          {product.price}
        </p>
      </motion.div>

      {/* Sliding Reveal Panel (Hover) */}
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 bg-brand-charcoal/95 backdrop-blur-xl border-t border-brand-gold/20 p-6 z-20 flex flex-col"
      >
        <h3 className="font-serif text-xl font-light text-brand-gold mb-2">
          {product.name}
        </h3>
        <p className="text-xs text-brand-ivory/60 font-light line-clamp-2 mb-6">
          {product.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="font-sans font-medium text-brand-ivory text-sm tracking-wide">
            {product.price}
          </span>
          <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-4 h-4 text-brand-charcoal" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
