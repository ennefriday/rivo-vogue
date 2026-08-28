import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import AudienceSection from '@/components/home/AudienceSection';
import ServicesSection from '@/components/home/ServicesSection';
import StoreTeaserSection from '@/components/home/StoreTeaserSection';
import TransformationSection from '@/components/home/TransformationSection';
import TrustSection from '@/components/home/TrustSection';
import ScrollThemeTransition from '@/components/home/ScrollThemeTransition';
import PortfolioSection from '@/components/home/PortfolioSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export const metadata: Metadata = {
  title: 'Rivo Vogue | Luxury Bridal Gown Rentals, Bespoke Tailoring & Fashion Academy in Ughelli, Delta State',
  description:
    'Experience bespoke bridal elegance, cathedral wedding gowns, asoebi harmony, curated designer accessories, and professional fashion academy training in Ughelli, Delta State, Nigeria.',
};

export default function HomePage() {
  return (
    <main className="w-full bg-brand-charcoal text-brand-ivory selection:bg-brand-gold/30 selection:text-brand-ivory">
      {/* 1. Hero Section: Value Proposition & Brand Statement */}
      <HeroSection />

      {/* 2. Who It's For: 7 Audience Segmentation Cards */}
      <AudienceSection />

      {/* 3. Services Overview: 7 Fashion House Pillars */}
      <ServicesSection />

      {/* 4. Store Teaser: Curated Accessories & Scent Carousel */}
      <StoreTeaserSection />

      {/* 5–6. Scroll-Driven Seamless Theme Transition Zone */}
      <ScrollThemeTransition>
        <TransformationSection />
        <TrustSection />
      </ScrollThemeTransition>

      {/* 7. Proof: Fashion House Portfolio & Client Chronicles */}
      <PortfolioSection />
      <TestimonialsSection />

      {/* 8. Final CTA Strip: Private Salon & WhatsApp Consultation */}
      <FinalCtaSection />
    </main>
  );
}
