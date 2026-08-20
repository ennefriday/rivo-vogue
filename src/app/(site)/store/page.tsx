import { Metadata } from 'next';
import ScrollThemeWrapper from '@/components/layout/ScrollThemeWrapper';
import { StoreHero } from '@/components/store/StoreHero';
import { FeaturedCarousel } from '@/components/store/FeaturedCarousel';
import { ProductGrid } from '@/components/store/ProductGrid';
import { DiasporaOrderingInfo } from '@/components/store/DiasporaOrderingInfo';
import { storeProducts, getFeaturedProducts } from '@/lib/storeData';
import { ServicesCta } from '@/components/services/ServicesCta';

export const metadata: Metadata = {
  title: 'The Rivo Boutique | Luxury Bags, Shoes & Perfumes',
  description: 'Shop an exclusive collection of designer bags, statement footwear, and niche perfumes to elevate your signature style. Ships globally.',
};

export default function StorePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <ScrollThemeWrapper>
      <main className="min-h-screen pt-[100px] bg-brand-charcoal selection:bg-brand-gold/30">
        <StoreHero />
        <FeaturedCarousel products={featuredProducts} />
        <ProductGrid initialProducts={storeProducts} />
        <DiasporaOrderingInfo />
        {/* Reusing the Services CTA since it handles the contact push */}
        <ServicesCta />
      </main>
    </ScrollThemeWrapper>
  );
}
