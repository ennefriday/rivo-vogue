'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
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
  { label: 'Chat with Rivo Vogue on WhatsApp', href: 'https://wa.me/2347088835025', Icon: MessageCircle },
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
      
      {/* ─── Modern Ambient Gradients ─── */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-gold/[0.04] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-pink/[0.03] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      {/* ─── Premium Glass Line ─── */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-12">
        
        {/* ━━━━━━━━━━━━━━━ TOP SECTION: BRAND & GRID ━━━━━━━━━━━━━━━ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20 border-b border-brand-ivory/5">
          
          {/* Brand Column (Span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: coutureEase }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              <Link href="/" className="inline-block group outline-none">
                <span className="font-serif tracking-[0.05em] text-[2rem] sm:text-[2.5rem] font-bold leading-none uppercase flex gap-[0.2em] group-hover:brightness-110 transition-all duration-500">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F4E1A2] via-[#C59B4C] to-[#8F6527]">RIVO</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F5C2CD] via-[#D17B94] to-[#9E4057]">VOGUE</span>
                </span>
                <span className="block font-['Great_Vibes','Brush_Script_MT',cursive] text-brand-gold text-lg mt-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  Bridals and Stitches
                </span>
              </Link>
              <p className="mt-8 text-[14px] text-brand-ivory/60 font-light leading-relaxed max-w-sm">
                Elevating elegance through timeless bridal couture and master bespoke tailoring. Handcrafting unforgettable silhouettes for discerning women.
              </p>
            </div>

            {/* Social Icons integrated directly under brand */}
            <div className="mt-12">
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-brand-ivory/5 border border-brand-ivory/10 text-brand-ivory/60 hover:bg-brand-gold hover:text-brand-charcoal hover:border-brand-gold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  >
                    <Icon className="w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Links Grid (Span 8) */}
          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            
            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: coutureEase, delay: 0.1 }}
            >
              <h4 className="text-[11px] font-sans tracking-[0.25em] uppercase text-brand-gold font-medium mb-6">
                Navigation
              </h4>
              <ul className="space-y-4">
                {QUICK_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-[13px] font-light text-brand-ivory/60 hover:text-brand-ivory transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                    >
                      <span className="w-0 h-px bg-brand-gold group-hover:w-3 transition-all duration-300 ease-out" />
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: coutureEase, delay: 0.2 }}
            >
              <h4 className="text-[11px] font-sans tracking-[0.25em] uppercase text-brand-gold font-medium mb-6">
                Collections
              </h4>
              <ul className="space-y-4">
                {SERVICES_LIST.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group inline-flex items-center gap-2 text-[13px] font-light text-brand-ivory/60 hover:text-brand-ivory transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                    >
                      <span className="w-0 h-px bg-brand-gold group-hover:w-3 transition-all duration-300 ease-out" />
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300 ease-out line-clamp-1">
                        {s.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Studio */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: coutureEase, delay: 0.3 }}
              className="col-span-2 md:col-span-1"
            >
              <h4 className="text-[11px] font-sans tracking-[0.25em] uppercase text-brand-gold font-medium mb-6">
                Fashion House
              </h4>
              <ul className="space-y-5 text-[13px] text-brand-ivory/60 font-light">
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-4 h-4 text-brand-gold/60 mt-0.5 group-hover:text-brand-gold transition-colors" />
                  <div className="flex flex-col gap-1">
                    <span className="text-brand-ivory/90 font-medium">109 Upper Afiesere Rd,</span>
                    <span>Ughelli 333105, Delta</span>
                  </div>
                </li>
                <li className="flex items-center gap-3 group">
                  <Phone className="w-4 h-4 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                  <a href="tel:07088835025" className="hover:text-brand-gold transition-colors outline-none focus-visible:underline">
                    0708 883 5025
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 text-brand-gold/60 group-hover:text-brand-gold transition-colors" />
                  <a href="mailto:concierge@rivovogue.com" className="hover:text-brand-gold transition-colors outline-none focus-visible:underline">
                    concierge@rivovogue.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group pt-2">
                  <Clock className="w-4 h-4 text-brand-gold/60 mt-0.5 group-hover:text-brand-gold transition-colors" />
                  <div className="flex flex-col gap-1">
                    <span>Mon – Sat: 9 AM – 6 PM</span>
                    <span className="text-[11px] text-brand-ivory/40">Sunday by Appointment</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━ MODERN MASSIVE TYPOGRAPHY ━━━━━━━━━━━━━━━ */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: coutureEase }}
          className="w-full flex justify-center py-10 lg:py-16 overflow-hidden"
        >
          <span className="font-serif text-[14vw] leading-[0.8] tracking-[-0.04em] font-medium bg-clip-text text-transparent bg-gradient-to-b from-brand-ivory/10 via-brand-ivory/[0.03] to-brand-charcoal select-none pointer-events-none">
            RIVO VOGUE
          </span>
        </motion.div>

        {/* ━━━━━━━━━━━━━━━ BOTTOM BAR ━━━━━━━━━━━━━━━ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-brand-ivory/5 text-[12px] text-brand-ivory/40 font-light">
          <p className="flex items-center gap-1.5">
            <span>&copy; {new Date().getFullYear()} Rivo Vogue.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </p>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="#" className="hover:text-brand-gold transition-colors outline-none focus-visible:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-gold transition-colors outline-none focus-visible:underline">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
