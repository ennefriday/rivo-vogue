'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GownBadgeIcon } from '@/components/icons/GownBadgeIcon';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import { servicesList as SERVICES_LIST } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';

/* ─── Bespoke SVG social icons ─── */
function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.81 4.47c1.76-1.74 2.33-4.29 2.33-6.66V8.75a8.16 8.16 0 0 0 4.85 1.57v-3.5a4.85 4.85 0 0 1-1.4-.13z" />
    </svg>
  );
}

const SOCIALS = [
  { label: 'Follow Rivo Vogue on Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'Chat with Rivo Vogue on WhatsApp', href: 'https://wa.me/2348000000000', Icon: MessageCircle },
  { label: 'Follow Rivo Vogue on Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
  { label: 'Follow Rivo Vogue on TikTok', href: 'https://tiktok.com', Icon: TikTokIcon },
];

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Store', href: '/store' },
  { label: 'Academy', href: '/academy' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-charcoal text-brand-ivory overflow-hidden selection:bg-brand-gold/30" aria-label="Site Footer">

      {/* ─── Ambient glow decorations ─── */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-brand-gold/[0.03] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-brand-pink/[0.02] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* ─── Top accent line ─── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" aria-hidden="true" />

      {/* ━━━━━━━━━━━━━━━ HERO STATEMENT AREA ━━━━━━━━━━━━━━━ */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 pt-20 sm:pt-24 pb-16 sm:pb-20">

        {/* Large serif wordmark — editorial presence */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 pb-16 border-b border-brand-gold/10">
          <div className="space-y-5 max-w-2xl">
            <Link href="/" className="group block">
              <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-brand-ivory leading-[0.95] tracking-[0.01em] group-hover:text-brand-gold transition-colors duration-700">
                Rivo Vogue
              </h2>
            </Link>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-brand-gold/50" aria-hidden="true" />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gold font-medium">
                Bridal &amp; Stitches
              </span>
            </div>
            <p className="text-sm sm:text-[15px] text-brand-ivory/60 font-light leading-relaxed max-w-lg">
              Where timeless bridal royalty meets master bespoke tailoring. Handcrafting unforgettable silhouettes, asoebi harmony, and luxury curation for discerning women across Delta State and beyond.
            </p>
          </div>

          {/* ─── Direct Funnel CTA ─── */}
          <div className="lg:max-w-sm w-full space-y-6 bg-brand-gold/[0.03] border border-brand-gold/10 p-8 rounded-xl backdrop-blur-sm">
            <div className="space-y-2">
              <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-brand-gold font-medium flex items-center gap-2">
                <GownBadgeIcon className="w-3.5 h-3.5 text-brand-pink" />
                Next Step
              </span>
              <h3 className="font-serif text-2xl font-light text-brand-ivory leading-snug">
                Ready for your fitting?
              </h3>
            </div>
            <p className="text-sm text-brand-ivory/60 font-light leading-relaxed">
              Book a private consultation with our master tailors to begin your couture journey.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-between w-full bg-brand-gold text-brand-charcoal font-sans font-semibold text-[10px] tracking-[0.18em] uppercase px-6 py-4 rounded-full transition-all duration-300 hover:bg-brand-ivory hover:text-brand-charcoal hover:shadow-[0_0_20px_rgba(184,146,90,0.3)] group"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 text-brand-pink transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━ NAVIGATION COLUMNS ━━━━━━━━━━━━━━━ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 py-14 lg:py-16">

          {/* Col 1: Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: coutureEase }}
            className="space-y-5"
          >
            <h4 className="text-[10px] font-sans tracking-[0.35em] uppercase text-brand-gold font-medium">
              Navigate
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group/flink text-[13px] font-light text-brand-ivory/65 hover:text-brand-gold transition-colors flex items-center gap-0 focus-visible:ring-1 focus-visible:ring-brand-gold rounded-sm"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-px left-0 h-px w-0 bg-brand-gold/60 group-hover/flink:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 2: Signature Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: coutureEase, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-sans tracking-[0.35em] uppercase text-brand-gold font-medium">
                Services
              </h4>
            </div>
            <ul className="space-y-3">
              {SERVICES_LIST.map((s, idx) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group/svc flex items-start gap-2.5 text-[12px] font-light text-brand-ivory/65 hover:text-brand-gold transition-colors focus-visible:ring-1 focus-visible:ring-brand-gold rounded-sm"
                  >
                    <span className="text-[9px] text-brand-gold/40 group-hover/svc:text-brand-gold tabular-nums font-mono mt-px transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="leading-snug">{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Studio & Atelier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: coutureEase, delay: 0.2 }}
            className="space-y-5"
          >
            <h4 className="text-[10px] font-sans tracking-[0.35em] uppercase text-brand-gold font-medium">
              Studio &amp; Atelier
            </h4>
            <div className="space-y-4 text-[12px] text-brand-ivory/65 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-brand-gold/70 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-brand-ivory/80 block font-normal">Ughelli Atelier</span>
                  <span className="text-brand-ivory/50 block mt-0.5">Ughelli, Delta State, Nigeria</span>
                  <a
                    href="https://maps.google.com/?q=Ughelli+Delta+State+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/dir inline-flex items-center gap-1 text-[10px] text-brand-gold/70 hover:text-brand-gold mt-1.5 transition-colors"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-2.5 h-2.5 transition-transform group-hover/dir:translate-x-0.5 group-hover/dir:-translate-y-0.5" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-brand-gold/70 flex-shrink-0" />
                <a href="tel:+2348000000000" className="hover:text-brand-gold transition-colors">+234 800 000 0000</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-3.5 h-3.5 text-brand-gold/70 flex-shrink-0" />
                <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-brand-gold/70 flex-shrink-0" />
                <a href="mailto:concierge@rivovogue.com" className="hover:text-brand-gold transition-colors">concierge@rivovogue.com</a>
              </div>
            </div>
          </motion.div>

          {/* Col 4: Hours & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: coutureEase, delay: 0.3 }}
            className="space-y-5"
          >
            <h4 className="text-[10px] font-sans tracking-[0.35em] uppercase text-brand-gold font-medium">
              Atelier Hours
            </h4>
            <div className="space-y-3 text-[12px] text-brand-ivory/65 font-light">
              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-brand-gold/70 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-brand-ivory/80 block">Mon – Sat: 9 AM – 6 PM</span>
                  <span className="text-brand-ivory/45 text-[11px] block mt-0.5">Sunday by Exclusive Appointment</span>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="pt-3">
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-gold/70 font-medium block mb-3">
                Connect
              </span>
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group/social w-9 h-9 rounded-full border border-brand-gold/15 bg-white/[0.02] flex items-center justify-center text-brand-ivory/50 hover:text-brand-gold hover:border-brand-gold/50 hover:bg-brand-gold/[0.05] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold"
                  >
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover/social:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ━━━━━━━━━━━━━━━ LARGE NAME FOOTER TYPOGRAPHY ━━━━━━━━━━━━━━━ */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: coutureEase }}
          className="w-full flex mt-8 md:mt-12 items-center justify-center overflow-hidden"
        >
          <h1 className="text-center font-serif text-[12vw] leading-none tracking-tight font-light bg-clip-text text-transparent bg-gradient-to-b from-brand-ivory/20 to-brand-charcoal select-none">
            RIVO VOGUE
          </h1>
        </motion.div>

        {/* ━━━━━━━━━━━━━━━ BOTTOM BAR ━━━━━━━━━━━━━━━ */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent mt-4" aria-hidden="true" />

        <div className="pt-7 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-brand-ivory/40 font-light tracking-wide">
            &copy; {new Date().getFullYear()} Rivo Vogue Bridal &amp; Stitches. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[11px] text-brand-ivory/40 font-light">
            <span className="text-brand-gold/50">Ughelli · Delta State</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold/25" aria-hidden="true" />
            <span>Designed by Rivo Vogue</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
