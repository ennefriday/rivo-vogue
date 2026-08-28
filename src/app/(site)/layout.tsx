import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

// Configure elegant serif and refined sans
const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({ 
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Rivo Vogue",
    default: "Rivo Vogue | Elegant Bridal & Stitches in Ughelli, Delta State",
  },
  description: "Exquisite bridal wear, bespoke tailoring, and asoebi styling in Ughelli, Delta State, Nigeria.",
  openGraph: {
    title: "Rivo Vogue — Bridal & Stitches",
    description: "Exquisite bridal wear and bespoke tailoring in Ughelli, Delta State.",
    url: 'https://rivovogue.com',
    siteName: 'Rivo Vogue',
    locale: 'en_NG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body className="antialiased selection:bg-brand-gold/30 selection:text-brand-ivory overflow-x-hidden min-h-screen flex flex-col bg-brand-charcoal text-brand-ivory">
        {/* WCAG 2.1 AA Skip to Content Link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-brand-gold text-brand-charcoal px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase font-medium shadow-xl focus-visible:ring-2 focus-visible:ring-brand-gold outline-none"
        >
          Skip to main content
        </a>

        {/* Global Floating/Sticky Header */}
        <Navbar />

        {/* Main Content Area */}
        <div id="main-content" className="flex-1 w-full relative">
          {children}
        </div>

        {/* Global Floating WhatsApp Consultation Action */}
        <WhatsAppButton />

        {/* Global Asymmetrical Editorial Footer */}
        <Footer />
      </body>
    </html>
  );
}