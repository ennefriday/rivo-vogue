import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { storeProducts, getProductBySlug } from '@/lib/storeData';
import { ProductGallery } from '@/components/store/ProductGallery';
import { ProductInfo } from '@/components/store/ProductInfo';
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

  return (
    <ScrollThemeWrapper>
      <main className="min-h-screen pt-[100px] bg-[#0a0807] text-brand-ivory selection:bg-brand-gold/30">
        
        {/* Breadcrumb / Top Bar */}
        <div className="w-full px-6 lg:px-12 py-6 border-b border-brand-ivory/10 max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase font-sans text-brand-ivory/50">
            <a href="/store" className="hover:text-brand-gold transition-colors">Store</a>
            <span className="w-1 h-1 rounded-full bg-brand-ivory/20" />
            <span className="hover:text-brand-gold transition-colors cursor-default">{product.category}</span>
            <span className="w-1 h-1 rounded-full bg-brand-ivory/20" />
            <span className="text-brand-gold">{product.name}</span>
          </div>
        </div>

        {/* Split Screen Layout */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* Left: Scrollable Gallery */}
            <div className="w-full lg:w-[60%]">
              <ProductGallery images={product.galleryImages} productName={product.name} />
            </div>

            {/* Right: Sticky Product Info */}
            <div className="w-full lg:w-[40%] relative">
              <div className="lg:sticky lg:top-[140px]">
                <ProductInfo product={product} />
              </div>
            </div>

          </div>
        </div>

      </main>
    </ScrollThemeWrapper>
  );
}
