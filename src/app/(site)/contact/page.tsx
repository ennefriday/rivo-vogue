import { Metadata } from 'next';
import ScrollThemeWrapper from '@/components/layout/ScrollThemeWrapper';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactSplitLayout } from '@/components/contact/ContactSplitLayout';
import { ContactMap } from '@/components/contact/ContactMap';
import { ContactFaq } from '@/components/contact/ContactFaq';

export const metadata: Metadata = {
  title: 'Contact Us | Rivo Vogue',
  description: 'Book a consultation or get in touch with the Rivo Vogue Fashion House in Ughelli, Delta State. We look forward to crafting your perfect look.',
};

export default function ContactPage() {
  return (
    <ScrollThemeWrapper>
      <main className="min-h-screen bg-brand-charcoal selection:bg-brand-gold/30">
        <ContactHero />
        <ContactSplitLayout />
        <ContactMap />
        <ContactFaq />
      </main>
    </ScrollThemeWrapper>
  );
}
