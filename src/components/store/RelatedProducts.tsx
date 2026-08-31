"use client";

import Link from 'next/link';
import { Product } from '@/lib/storeData';
import { ShoppingBag } from 'lucide-react';

export function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <section className="border-t border-brand-ivory/[0.06] bg-brand-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14 md:py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-gold/70 font-medium mb-1.5 block">
              You May Also Like
            </span>
            <h2 className="font-serif text-2xl font-light text-brand-ivory">
              Related Products
            </h2>
          </div>
          <Link
            href="/store"
            className="text-[10px] uppercase tracking-widest text-brand-ivory/40 hover:text-brand-gold transition-colors font-sans font-medium"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/store/${product.slug}`}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#111] border border-brand-ivory/[0.06]">
                <img
                  src={product.coverImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-3 space-y-0.5">
                <h3 className="font-serif text-sm font-light text-brand-ivory leading-snug line-clamp-1 group-hover:text-brand-gold transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="font-sans text-xs font-medium text-brand-ivory/80 tracking-wide">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
