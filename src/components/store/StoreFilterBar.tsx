"use client";

import { motion } from 'framer-motion';
import { ProductCategory } from '@/lib/storeData';

interface StoreFilterBarProps {
  categories: ProductCategory[];
  activeCategory: ProductCategory;
  onSelect: (category: ProductCategory) => void;
  productCounts: Record<string, number>;
}

export function StoreFilterBar({ categories, activeCategory, onSelect, productCounts }: StoreFilterBarProps) {
  return (
    <div className="sticky top-[72px] z-40 bg-brand-charcoal/90 backdrop-blur-lg border-b border-brand-ivory/[0.06] py-3 px-6 lg:px-12 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          const count = productCounts[category] ?? 0;
          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`relative flex items-center gap-1.5 px-4 py-2 text-xs tracking-wider uppercase font-medium whitespace-nowrap rounded-full transition-all duration-250 ${
                isActive
                  ? 'bg-brand-gold/15 text-brand-gold border border-brand-gold/25'
                  : 'text-brand-ivory/50 border border-transparent hover:text-brand-ivory hover:bg-brand-ivory/[0.04]'
              }`}
            >
              {category}
              <span className={`text-[9px] tabular-nums transition-colors duration-250 ${isActive ? 'text-brand-gold/70' : 'text-brand-ivory/30'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
