'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import {
  ChevronDown,
  ArrowUpRight,
  MessageCircle,
  Phone,
  MapPin,
} from 'lucide-react';
import { coutureEase } from '@/lib/animations';
import { servicesList as SERVICES_LIST } from '@/lib/servicesData';

/* ─── Navigation data ─── */
const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Store', href: '/store' },
  { label: 'Academy', href: '/academy' },
  { label: 'Contact', href: '/contact' },
];

/* ─── Framer Motion variants ─── */
const mobileDrawerVariants = {
  closed: { clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' },
  open: { clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' },
};

const mobileLinkVariants = {
  closed: { opacity: 0, x: -40 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.25 + i * 0.07, duration: 0.55, ease: coutureEase },
  }),
};

const mobileBottomVariants = {
  closed: { opacity: 0, y: 30 },
  open: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.5, ease: coutureEase } },
};

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  /* ─── Scroll direction awareness ─── */
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 20);
    if (latest > 80 && latest > prev && !isMobileMenuOpen) {
      setIsHidden(true);
      setIsServicesOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  /* ─── Route change cleanup ─── */
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }

  /* ─── Body scroll lock ─── */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  /* ─── Escape key ─── */
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;
    if (isServicesOpen) setIsServicesOpen(false);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      hamburgerRef.current?.focus();
    }
  }, [isServicesOpen, isMobileMenuOpen]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  /* ─── Focus trap ─── */
  useEffect(() => {
    if (!isMobileMenuOpen || !drawerRef.current) return;
    const els = drawerRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex="0"]'
    );
    if (!els.length) return;
    const first = els[0], last = els[els.length - 1];
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', trap);
    first.focus();
    return () => document.removeEventListener('keydown', trap);
  }, [isMobileMenuOpen]);

  /* ─── Dropdown hover helpers ─── */
  const openDropdown = () => { if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current); setIsServicesOpen(true); };
  const closeDropdown = () => { dropdownTimeout.current = setTimeout(() => setIsServicesOpen(false), 220); };

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━ DESKTOP / TABLET HEADER ━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.header
        animate={{ y: isHidden && !isMobileMenuOpen ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: coutureEase }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          isScrolled || isServicesOpen
            ? 'bg-brand-charcoal/85 backdrop-blur-xl border-b border-brand-gold/10 shadow-[0_2px_40px_-12px_rgba(184,146,90,0.12)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Thin decorative gold accent line at top */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" aria-hidden="true" />

        <div className={`max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'py-3.5' : 'py-5 lg:py-6'
        }`}>

          {/* ─── Logo ─── */}
          <Link
            href="/"
            className="group relative flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal rounded-sm"
            aria-label="Rivo Vogue — Home"
          >
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.06em] text-[1.55rem] sm:text-[1.7rem] font-light text-brand-ivory group-hover:text-brand-gold transition-colors duration-500 leading-none">
                Rivo Vogue
              </span>
              <span className="font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.45em] uppercase text-brand-gold/80 font-medium mt-1 group-hover:text-brand-gold transition-colors duration-500">
                Bridal &amp; Stitches
              </span>
            </div>
            {/* Thin gold separator */}
            <div className="hidden lg:block h-8 w-px bg-brand-gold/20 ml-1" aria-hidden="true" />
          </Link>

          {/* ─── Desktop nav ─── */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                    <button
                      type="button"
                      onClick={() => setIsServicesOpen((v) => !v)}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                      className={`group/link relative flex items-center gap-1.5 py-1 text-[11px] tracking-[0.25em] uppercase font-sans font-medium transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm ${
                        active || isServicesOpen ? 'text-brand-gold' : 'text-brand-ivory/90 hover:text-brand-gold'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-brand-pink' : 'text-brand-gold/50'}`} aria-hidden="true" />
                      {/* Animated underline */}
                      <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-brand-gold transition-all duration-500 ease-out ${
                        active || isServicesOpen ? 'w-full' : 'w-0 group-hover/link:w-full'
                      }`} />
                    </button>

                    {/* ─── Mega dropdown ─── */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, ease: coutureEase }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-5 w-[700px] z-50"
                        >
                          {/* Arrow pointer */}
                          <div className="w-3 h-3 mx-auto -mb-1.5 rotate-45 bg-brand-charcoal/95 border-l border-t border-brand-gold/20" />
                          
                          <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-brand-gold/20">
                            
                            {/* Brand Image Background */}
                            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                              <Image
                                src="/images/brand/mobile-nav-bg.jpg"
                                alt=""
                                fill
                                priority
                                className="object-cover opacity-[0.12] grayscale-[50%]"
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/95 via-brand-charcoal/90 to-brand-charcoal/98" />
                            </div>

                            {/* Content container relative to keep it above background */}
                            <div className="relative z-10">
                              {/* Header strip */}
                              <div className="px-8 pt-6 pb-4 flex items-center justify-between border-b border-brand-gold/15">
                                <span className="text-[10px] font-sans tracking-[0.35em] uppercase text-brand-gold font-medium">
                                  7 Signature Offerings
                                </span>
                                <Link
                                  href="/services"
                                  onClick={() => setIsServicesOpen(false)}
                                  className="group/all text-[10px] font-sans tracking-[0.25em] uppercase text-brand-ivory/60 hover:text-brand-gold flex items-center gap-1.5 transition-colors"
                                >
                                  <span>View all services</span>
                                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5" />
                                </Link>
                              </div>
                              
                              {/* Service items */}
                              <div className="grid grid-cols-2 gap-px bg-brand-gold/[0.1]">
                                {SERVICES_LIST.map((s, idx) => (
                                  <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="group/item flex items-start gap-4 px-8 py-5 bg-transparent hover:bg-brand-gold/[0.08] backdrop-blur-sm transition-colors duration-300"
                                  >
                                    <span className="font-serif text-[13px] text-brand-gold/50 group-hover/item:text-brand-gold transition-colors mt-0.5 tabular-nums">
                                      {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <div className="flex-1 min-w-0">
                                      <span className="block font-serif text-[14.5px] text-brand-ivory/90 group-hover/item:text-brand-gold transition-colors leading-snug">
                                        {s.title}
                                      </span>
                                      <span className="block text-[11px] text-brand-ivory/50 mt-1.5 line-clamp-2 font-light leading-relaxed">
                                        {s.shortDescription}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                              
                              {/* Footer strip */}
                              <div className="px-8 py-4 border-t border-brand-gold/15 flex items-center justify-between bg-brand-charcoal/40 backdrop-blur-md">
                                <span className="text-[11px] italic font-serif text-brand-ivory/50">Bespoke luxury, rooted in Ughelli</span>
                                <Link
                                  href="/contact"
                                  onClick={() => setIsServicesOpen(false)}
                                  className="group/cta text-[10px] font-sans tracking-[0.2em] uppercase text-brand-gold font-medium flex items-center gap-1.5 hover:text-brand-ivory transition-colors"
                                >
                                  <span>Book a Consultation</span>
                                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 text-brand-pink" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group/link relative py-1 text-[11px] tracking-[0.25em] uppercase font-sans font-medium transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm ${
                    active ? 'text-brand-gold' : 'text-brand-ivory/90 hover:text-brand-gold'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-brand-gold transition-all duration-500 ease-out ${
                    active ? 'w-full' : 'w-0 group-hover/link:w-full'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* ─── Right side: CTA + hamburger ─── */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 border border-brand-gold/30 text-brand-ivory font-sans font-semibold text-[10px] tracking-[0.2em] uppercase px-7 py-3 rounded-full transition-all duration-300 hover:border-brand-gold hover:text-brand-gold active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
            >
              Book Fitting
            </Link>

            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full border border-brand-gold/30 bg-brand-charcoal/50 hover:bg-brand-charcoal transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold backdrop-blur-md"
            >
              <div className="w-[20px] flex flex-col items-end gap-[6px]">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 7.5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
                  transition={{ duration: 0.35, ease: coutureEase }}
                  className="block h-[1.5px] bg-brand-gold rounded-full origin-center"
                  style={{ width: 20 }}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block h-[1.5px] w-3.5 bg-brand-ivory/80 rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -7.5, width: 20 } : { rotate: 0, y: 0, width: 20 }}
                  transition={{ duration: 0.35, ease: coutureEase }}
                  className="block h-[1.5px] bg-brand-gold rounded-full origin-center"
                  style={{ width: 14 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ━━━━━━━━━━━━━━━━━━━━━ MOBILE DRAWER ━━━━━━━━━━━━━━━━━━━━━ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            ref={drawerRef}
            variants={mobileDrawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.65, ease: coutureEase }}
            className="fixed inset-0 z-50 lg:hidden bg-brand-charcoal text-brand-ivory overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* ─── Background imagery ─── */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <Image
                src="/images/brand/mobile-nav-bg.jpg"
                alt=""
                fill
                priority
                className="object-cover opacity-[0.15] scale-110 grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/90 via-brand-charcoal/95 to-brand-charcoal" />
            </div>

            {/* ─── Top bar ─── */}
            <div className="relative z-10 flex items-center justify-between px-5 sm:px-8 py-5">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col">
                <span className="font-serif tracking-[0.06em] text-[1.55rem] font-light text-brand-ivory leading-none">Rivo Vogue</span>
                <span className="font-sans text-[8.5px] tracking-[0.45em] uppercase text-brand-gold/80 font-medium mt-1">Bridal &amp; Stitches</span>
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-gold/30 bg-brand-charcoal/50 hover:bg-brand-charcoal transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold backdrop-blur-md"
              >
                <div className="w-[20px] flex flex-col items-center gap-[6px]">
                  <span className="block h-[1.5px] w-[20px] bg-brand-gold rounded-full rotate-45 translate-y-[3.75px]" />
                  <span className="block h-[1.5px] w-[20px] bg-brand-gold rounded-full -rotate-45 -translate-y-[3.75px]" />
                </div>
              </button>
            </div>

            {/* Thin gold line */}
            <div className="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            {/* ─── Navigation links ─── */}
            <div className="relative z-10 flex-1 overflow-y-auto px-5 sm:px-8 pt-10 pb-6 flex flex-col justify-between min-h-0">
              <nav className="space-y-2">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    custom={idx}
                    variants={mobileLinkVariants}
                    initial="closed"
                    animate="open"
                  >
                    {link.hasDropdown ? (
                      <div className="border-b border-brand-gold/[0.15] py-4">
                        <div className="flex items-center justify-between">
                          <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-baseline gap-5 group"
                          >
                            <span className="font-mono text-[12px] text-brand-pink tabular-nums transition-colors">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <span className="font-serif text-[clamp(2rem,6vw,2.75rem)] font-light text-brand-ivory group-hover:text-brand-gold transition-colors leading-none tracking-tight">
                              {link.label}
                            </span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => setIsMobileServicesOpen((v) => !v)}
                            aria-expanded={isMobileServicesOpen}
                            aria-label="Expand services"
                            className="p-3 rounded-full hover:bg-brand-gold/15 transition-colors border border-brand-gold/10"
                          >
                            <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                        </div>

                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: coutureEase }}
                              className="overflow-hidden"
                            >
                              <div className="mt-5 ml-12 pl-5 border-l border-brand-gold/20 space-y-4 pb-2">
                                {SERVICES_LIST.map((s) => (
                                  <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="group/sub flex items-center justify-between py-1.5"
                                  >
                                    <span className="text-base font-sans font-light text-brand-ivory/80 group-hover/sub:text-brand-gold transition-colors">
                                      {s.title}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-brand-pink opacity-0 group-hover/sub:opacity-100 transition-opacity flex-shrink-0" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="border-b border-brand-gold/[0.15] py-4">
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-baseline gap-5 group"
                        >
                          <span className="font-mono text-[12px] text-brand-gold/50 tabular-nums group-hover:text-brand-pink transition-colors">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="font-serif text-[clamp(2rem,6vw,2.75rem)] font-light text-brand-ivory group-hover:text-brand-gold transition-colors leading-none tracking-tight">
                            {link.label}
                          </span>
                        </Link>
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* ─── Bottom actions ─── */}
              <motion.div
                variants={mobileBottomVariants}
                initial="closed"
                animate="open"
                className="mt-12 space-y-6"
              >
                <div className="h-px w-full bg-gradient-to-r from-brand-gold/30 via-brand-gold/15 to-transparent" />

                <div className="flex items-center gap-2.5 text-[11px] font-sans tracking-[0.35em] uppercase text-brand-gold/80">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Ughelli · Delta State · Nigeria</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/2348000000000?text=Hello%20Rivo%20Vogue,%20I%20would%20like%20to%20book%20an%20appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-charcoal font-sans font-semibold text-[11px] tracking-[0.2em] uppercase py-4 rounded-full hover:bg-brand-ivory transition-colors shadow-lg shadow-brand-gold/20"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-pink" />
                    Book via WhatsApp
                  </a>
                  <a
                    href="tel:+2348000000000"
                    className="flex-1 inline-flex items-center justify-center gap-3 border border-brand-gold/40 text-brand-ivory font-sans font-medium text-[11px] tracking-[0.2em] uppercase py-4 rounded-full hover:border-brand-gold hover:text-brand-gold transition-colors bg-brand-charcoal/40"
                  >
                    <Phone className="w-4 h-4 text-brand-pink" />
                    Call Atelier
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
