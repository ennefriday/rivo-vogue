import { Metadata } from 'next';
import ScrollThemeWrapper from '@/components/layout/ScrollThemeWrapper';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesGrid } from '@/components/services/ServicesGrid';
import { PromoPackages } from '@/components/services/PromoPackages';
import { HowWeWork } from '@/components/services/HowWeWork';
import { ServicesFaq } from '@/components/services/ServicesFaq';
import { ServicesCta } from '@/components/services/ServicesCta';

export const metadata: Metadata = {
  title: 'Our Services | Rivo Vogue',
  description: 'Explore Rivo Vogue\'s premium services, from bespoke couture and bridal gown rentals to our fashion academy and professional ushering.',
};

const SERVICE_PAGE_STEPS = [
  {
    step: '01',
    title: 'Choose Your Package',
    description: 'Browse our promo packages and select the one that suits your style and budget.',
  },
  {
    step: '02',
    title: 'Book & Confirm',
    description: 'Contact us to check availability for your event date and reserve your package.',
  },
  {
    step: '03',
    title: 'Make Payment',
    description: 'Pay the required amount to secure your booking.',
  },
  {
    step: '04',
    title: 'Attend Your Fitting',
    description: 'Come in for your fitting and any necessary adjustments.',
  },
  {
    step: '05',
    title: 'Pick Up & Shine',
    description: 'Collect your complete package and look stunning on your special day.',
  },
  {
    step: '06',
    title: 'Return After Your Event',
    description: 'Return all rented items at the agreed time.',
  },
];

export default function ServicesPage() {
  return (
    <ScrollThemeWrapper>
      <main className="min-h-screen pt-[100px]">
        <ServicesHero />
        <ServicesGrid />
        <PromoPackages />
        <HowWeWork steps={SERVICE_PAGE_STEPS} />
        <ServicesFaq />
        <ServicesCta />
      </main>
    </ScrollThemeWrapper>
  );
}
