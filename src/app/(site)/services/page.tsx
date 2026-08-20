import { Metadata } from 'next';
import ScrollThemeWrapper from '@/components/layout/ScrollThemeWrapper';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { HowWeWork } from '@/components/services/HowWeWork';
import { ServicesFaq } from '@/components/services/ServicesFaq';
import { ServicesCta } from '@/components/services/ServicesCta';

export const metadata: Metadata = {
  title: 'Our Services | Rivo Vogue',
  description: 'Explore Rivo Vogue\'s premium services, from bespoke couture and bridal gown rentals to our fashion academy and professional ushering.',
};

export default function ServicesPage() {
  return (
    <ScrollThemeWrapper>
      <main className="min-h-screen pt-[100px]">
        <ServicesHero />
        <ServicesGrid />
        <HowWeWork />
        <ServicesFaq />
        <ServicesCta />
      </main>
    </ScrollThemeWrapper>
  );
}
