import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, servicesList } from '@/lib/servicesData';
import ScrollThemeWrapper from '@/components/layout/ScrollThemeWrapper';
import { ServiceDetailHero } from '@/components/services/ServiceDetailHero';
import { ServiceOverview } from '@/components/services/ServiceOverview';
import { ServiceGallery } from '@/components/services/ServiceGallery';
import { ServiceProcess } from '@/components/services/ServiceProcess';
import { PricingPackages } from '@/components/services/PricingPackages';
import { ServiceFaq } from '@/components/services/ServiceFaq';
import { ServicesCta } from '@/components/services/ServicesCta';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | Rivo Vogue',
    };
  }

  return {
    title: `${service.title} | Rivo Vogue Services`,
    description: service.shortDescription,
  };
}

export async function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ScrollThemeWrapper>
      <main className="min-h-screen pt-[100px]">
        <ServiceDetailHero service={service} />
        <ServiceOverview service={service} />
        <ServiceGallery service={service} />
        <ServiceProcess service={service} />
        <PricingPackages service={service} />
        <ServiceFaq service={service} />
        <ServicesCta />
      </main>
    </ScrollThemeWrapper>
  );
}
