"use client";

import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, ProductCategory, storeProducts } from '@/lib/storeData';
import { ProductRevealCard } from './ProductRevealCard';
import { StoreFilterBar } from './StoreFilterBar';
import { Package, Truck, ShieldCheck, MessageCircle } from 'lucide-react';

export function ProductGrid({ initialProducts }: { initialProducts: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const categories: ProductCategory[] = ['All', 'Dresses', 'Bags', 'Shoes', 'Perfumes'];

  // Pre-compute product counts per category
  const productCounts = useMemo(() => {
    const counts: Record<string, number> = { All: initialProducts.length };
    for (const cat of categories) {
      if (cat !== 'All') {
        counts[cat] = initialProducts.filter(p => p.category === cat).length;
      }
    }
    return counts;
  }, [initialProducts]);

  // Shuffle for 'All' view
  const [shuffledProducts, setShuffledProducts] = useState<Product[]>(initialProducts);
  useEffect(() => {
    const shuffled = [...initialProducts].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
  }, [initialProducts]);

  // Scroll to grid top on category change (skip initial mount)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (gridRef.current) {
      const y = gridRef.current.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeCategory]);

  const filteredProducts = activeCategory === 'All'
    ? shuffledProducts
    : initialProducts.filter(p => p.category === activeCategory);

  return (
    <section className="bg-brand-charcoal min-h-screen">
      <StoreFilterBar
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
        productCounts={productCounts}
      />

      <div ref={gridRef} className="py-10 md:py-16 px-6 lg:px-12 max-w-[1400px] mx-auto">

        {/* Results summary */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs text-brand-ivory/40 font-sans tracking-wide">
            Showing <span className="text-brand-ivory/70 font-medium">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && <> in <span className="text-brand-gold/80">{activeCategory}</span></>}
          </p>
        </div>

        {/* Product grid — uniform 2/3/4 columns */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductRevealCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <Package className="w-10 h-10 mx-auto text-brand-ivory/20 mb-4" />
            <p className="text-brand-ivory/50 font-light text-sm">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* Trust / Delivery info strip */}
      <div className="border-t border-brand-ivory/[0.06] bg-[#0a0807]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-brand-gold/15 flex items-center justify-center shrink-0 bg-brand-gold/[0.04]">
                <Truck className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <p className="font-serif text-sm text-brand-ivory mb-1">State Wide Delivery</p>
                <p className="text-[11px] text-brand-ivory/40 font-light leading-relaxed">Secure tracked delivery anywhere in Delta State.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-brand-gold/15 flex items-center justify-center shrink-0 bg-brand-gold/[0.04]">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <p className="font-serif text-sm text-brand-ivory mb-1">Authentic Luxury</p>
                <p className="text-[11px] text-brand-ivory/40 font-light leading-relaxed">Premium materials and expert craftsmanship on every piece.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-brand-gold/15 flex items-center justify-center shrink-0 bg-brand-gold/[0.04]">
                <MessageCircle className="w-4 h-4 text-brand-gold" />
              </div>
              <div>
                <p className="font-serif text-sm text-brand-ivory mb-1">Easy Ordering</p>
                <p className="text-[11px] text-brand-ivory/40 font-light leading-relaxed">Message us on WhatsApp to place orders and get updates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
