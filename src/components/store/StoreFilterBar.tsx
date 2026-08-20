"use client";

import { motion } from 'framer-motion';
import { ProductCategory } from '@/lib/storeData';

interface StoreFilterBarProps {
  categories: ProductCategory[];
  activeCategory: ProductCategory;
  onSelect: (category: ProductCategory) => void;
}

export function StoreFilterBar({ categories, activeCategory, onSelect }: StoreFilterBarProps) {
  return (
    <div className="sticky top-[72px] z-40 bg-brand-charcoal/80 backdrop-blur-md border-b border-brand-ivory/10 py-4 px-6 lg:px-12 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto flex items-center gap-6 overflow-x-auto no-scrollbar mask-edges">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`relative px-4 py-2 text-xs md:text-sm tracking-wider uppercase font-medium whitespace-nowrap transition-colors duration-300 ${
                isActive ? 'text-brand-gold' : 'text-brand-ivory/60 hover:text-brand-ivory'
              }`}
            >
              {category}
              {isActive && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
