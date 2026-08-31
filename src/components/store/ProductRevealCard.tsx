"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/storeData';
import { ShoppingBag, Eye } from 'lucide-react';

export function ProductRevealCard({ product }: { product: Product }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const whatsappNumber = "2347088835025";
  const message = `Hello Rivo Vogue, I'd like to order the ${product.name} (${product.price}). Please share the details.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group flex flex-col">
      {/* Image container */}
      <Link
        href={`/store/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden rounded-lg bg-[#111] border border-brand-ivory/[0.06]"
      >
        {/* Skeleton pulse */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-brand-ivory/[0.03] animate-pulse" />
        )}

        <img
          src={product.coverImage}
          alt={product.name}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Hover image (desktop) */}
        {product.hoverImage && product.hoverImage !== product.coverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"
          />
        )}

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex gap-1.5 z-10">
          {product.isNewArrival && (
            <span className="bg-brand-gold text-brand-charcoal text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm">
              New
            </span>
          )}
          <span className="bg-brand-charcoal/70 backdrop-blur-sm text-brand-ivory/80 text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-sm border border-brand-ivory/10">
            {product.category}
          </span>
        </div>

        {/* Quick-action buttons on hover */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
          <span className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-brand-charcoal/80 backdrop-blur-md rounded-md text-brand-ivory text-[10px] uppercase tracking-wider font-medium border border-brand-ivory/10 hover:border-brand-gold/30 transition-colors">
            <Eye className="w-3 h-3" />
            View
          </span>
        </div>
      </Link>

      {/* Product info below card */}
      <div className="mt-3 space-y-1 px-0.5">
        <Link href={`/store/${product.slug}`}>
          <h3 className="font-serif text-sm font-light text-brand-ivory leading-snug line-clamp-1 group-hover:text-brand-gold transition-colors duration-200">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-[11px] text-brand-ivory/45 font-light line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="font-sans text-sm font-medium text-brand-ivory tracking-wide">
            {product.price}
          </span>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-[9px] uppercase tracking-widest font-medium text-brand-gold hover:text-brand-ivory transition-colors duration-200"
          >
            <ShoppingBag className="w-3 h-3" />
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
