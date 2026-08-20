"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { Product } from '@/lib/storeData';
import Link from 'next/link';

export function FeaturedCarousel({ products }: { products: Product[] }) {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current && containerRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, [products]);

  if (!products || products.length === 0) return null;

  // Repeat products just to make the carousel feel fuller if there are too few
  const displayProducts = [...products, ...products];

  return (
    <section className="py-24 bg-[#0a0807] overflow-hidden border-t border-brand-ivory/10">
      <div className="px-6 lg:px-12 mb-12 flex items-end justify-between max-w-[1400px] mx-auto">
        <div>
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-gold font-medium mb-3 block">
            Exclusive
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-ivory">
            New Arrivals
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="w-16 h-px bg-brand-gold/30"></span>
          <span className="text-[9px] uppercase tracking-widest text-brand-ivory/40">Drag to explore</span>
        </div>
      </div>

      <div ref={containerRef} className="cursor-grab active:cursor-grabbing px-6 lg:px-12 max-w-[1400px] mx-auto overflow-hidden">
        <motion.div 
          ref={carouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-6 md:gap-8"
        >
          {displayProducts.map((product, index) => (
            <motion.div 
              key={`${product.id}-${index}`} 
              className="min-w-[280px] md:min-w-[350px] flex-shrink-0 group relative"
            >
              <Link href={`/store/${product.slug}`} className="block relative overflow-hidden aspect-[4/5] rounded-lg">
                <img 
                  src={product.coverImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  draggable="false"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNewArrival && (
                    <span className="bg-brand-charcoal text-brand-gold text-[9px] uppercase tracking-widest px-3 py-1 rounded-sm border border-brand-gold/20 backdrop-blur-sm">
                      New
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] text-brand-gold tracking-widest uppercase block mb-1">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-xl font-light text-brand-ivory mb-1">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm font-medium text-brand-ivory/90">
                    {product.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
