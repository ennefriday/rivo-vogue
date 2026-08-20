"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, ProductCategory } from '@/lib/storeData';
import { ProductRevealCard } from './ProductRevealCard';
import { StoreFilterBar } from './StoreFilterBar';

export function ProductGrid({ initialProducts }: { initialProducts: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');
  
  // Extract unique categories
  const categories: ProductCategory[] = ['All', 'Bags', 'Shoes', 'Perfumes'];

  // Filter products
  const filteredProducts = activeCategory === 'All' 
    ? initialProducts 
    : initialProducts.filter(p => p.category === activeCategory);

  return (
    <section className="bg-brand-charcoal min-h-screen">
      <StoreFilterBar 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelect={setActiveCategory} 
      />

      <div className="py-20 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              // Asymmetric/Masonry offset
              const isMiddleColumn = index % 3 === 1;
              const isLastColumn = index % 3 === 2;
              
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0 }}
                  className={`
                    ${isMiddleColumn ? 'lg:mt-12' : ''} 
                    ${isLastColumn ? 'lg:mt-24' : ''}
                  `}
                >
                  <ProductRevealCard product={product} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center text-brand-ivory/50 font-light">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
