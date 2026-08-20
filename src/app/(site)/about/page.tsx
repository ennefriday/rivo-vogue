import { Metadata } from 'next';
import ScrollThemeWrapper from '@/components/layout/ScrollThemeWrapper';
import { AboutHero } from '@/components/about/AboutHero';
import { OurStory } from '@/components/about/OurStory';
import { WhoWeServe } from '@/components/about/WhoWeServe';
import { MeetTheFounder } from '@/components/about/MeetTheFounder';
import { OurValues } from '@/components/about/OurValues';
import { WorkshopGallery } from '@/components/about/WorkshopGallery';
import { AboutStats } from '@/components/about/AboutStats';
import { AboutCta } from '@/components/about/AboutCta';

export const metadata: Metadata = {
  title: 'About Us | Rivo Vogue',
  description: 'Learn about Rivo Vogue, Ughelli\'s premier destination for luxury bridal wear, bespoke fashion, and fashion academy.',
};

export default function AboutPage() {
  return (
    <ScrollThemeWrapper>
      <main className="min-h-screen pt-[100px]">
        <AboutHero />
        <OurStory />
        <WhoWeServe />
        <MeetTheFounder />
        <OurValues />
        <WorkshopGallery />
        <AboutStats />
        <AboutCta />
      </main>
    </ScrollThemeWrapper>
  );
}
