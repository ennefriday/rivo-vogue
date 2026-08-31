import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { storeProducts, getProductBySlug } from '@/lib/storeData';
import { ProductGallery } from '@/components/store/ProductGallery';
import { ProductInfo } from '@/components/store/ProductInfo';
import { RelatedProducts } from '@/components/store/RelatedProducts';
import ScrollThemeWrapper from '@/components/layout/ScrollThemeWrapper';

export async function generateStaticParams() {
  return storeProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return { title: 'Product Not Found | Rivo Vogue' };
  }

  return {
    title: `${product.name} | Rivo Vogue Store`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get related products (same category, excluding current)
  const relatedProducts = storeProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <ScrollThemeWrapper>
      <main className="min-h-screen pt-[100px] bg-[#0a0807] text-brand-ivory selection:bg-brand-gold/30">
        
        {/* Breadcrumb */}
        <div className="w-full px-6 lg:px-12 py-4 border-b border-brand-ivory/[0.06] max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-sans text-brand-ivory/40">
            <a href="/store" className="hover:text-brand-gold transition-colors">Store</a>
            <span className="text-brand-ivory/15">/</span>
            <a href="/store" className="hover:text-brand-gold transition-colors">{product.category}</a>
            <span className="text-brand-ivory/15">/</span>
            <span className="text-brand-ivory/70">{product.name}</span>
          </div>
        </div>

        {/* Split Layout */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 relative">
            
            {/* Left: Gallery */}
            <div className="w-full lg:w-[58%]">
              <ProductGallery images={product.galleryImages} productName={product.name} />
            </div>

            {/* Right: Sticky Info */}
            <div className="w-full lg:w-[42%] relative">
              <div className="lg:sticky lg:top-[120px]">
                <ProductInfo product={product} />
              </div>
            </div>

          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}

      </main>
    </ScrollThemeWrapper>
  );
}
