'use client';

import { useRef, useState, useMemo, useEffect } from 'react';
import { useScroll, useTransform, motion, useInView, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Service } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';
import MediaLightbox from '@/components/home/MediaLightbox';
import { PortfolioItem } from '@/lib/homeData';

/* ─────────────────────────────────────────────────────────────
 * Gallery Image Card — individual item with reveal animation,
 * parallax shift, and hover micro-interactions.
 * ───────────────────────────────────────────────────────────── */
function GalleryCard({
  img,
  index,
  onSelect,
  serviceTitle,
}: {
  img: { id: number; src: string; alt: string; aspect: string };
  index: number;
  onSelect: (id: number) => void;
  serviceTitle: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-60px' });

  // Per-card parallax — subtle Y shift on scroll
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const yShift = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const smoothY = useSpring(yShift, { stiffness: 120, damping: 30, mass: 0.5 });

  // Stagger delay based on position within the masonry
  const delay = (index % 3) * 0.12;

  return (
    <motion.div
      ref={cardRef}
      style={{ y: smoothY }}
      className="relative group cursor-pointer will-change-transform"
      onClick={() => onSelect(img.id)}
    >
      {/* Reveal wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.92, y: 40 }
        }
        transition={{
          duration: 0.8,
          delay,
          ease: coutureEase,
        }}
        className="relative overflow-hidden rounded-lg"
      >
        {/* Image with Next.js optimisation */}
        <div
          className={`relative w-full overflow-hidden ${
            img.aspect === 'landscape'
              ? 'aspect-[4/3]'
              : img.aspect === 'square'
                ? 'aspect-square'
                : 'aspect-[3/4]'
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt || `${serviceTitle} portfolio ${index + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading={index < 4 ? 'eager' : 'lazy'}
          />

          {/* Gradient overlay — always present, intensifies on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Gold shimmer border on hover */}
          <div className="absolute inset-0 rounded-lg border border-brand-gold/0 group-hover:border-brand-gold/30 transition-all duration-500" />

          {/* Hover CTA badge */}
          <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-3 group-hover:translate-y-0">
            <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-sans font-medium border border-brand-gold/30 px-5 py-2 rounded-full backdrop-blur-md bg-brand-charcoal/50">
              View
            </span>
          </div>
        </div>

        {/* Caption bar below image */}
        <div className="pt-4 pb-2">
          <p className="font-serif text-sm text-brand-ivory/80 font-light leading-relaxed group-hover:text-brand-gold transition-colors duration-400 line-clamp-1">
            {img.alt}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * MAIN COMPONENT — Masonry-inspired staggered grid with
 * parallax, progressive reveal, and lightbox integration.
 * ───────────────────────────────────────────────────────────── */
export function ServiceGallery({ service }: { service: Service }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const images = useMemo(() => service.galleryImages || [], [service.galleryImages]);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Horizontal scroll progress for the decorative accent line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '100%']);

  if (images.length === 0) return null;

  // Split images into columns for true masonry
  const getColumns = () => {
    if (!isDesktop) {
      // 2 columns on mobile/tablet
      const cols: typeof images[] = [[], []];
      images.forEach((img, i) => cols[i % 2].push(img));
      return cols;
    }
    // 3 columns on desktop
    const cols: typeof images[] = [[], [], []];
    images.forEach((img, i) => cols[i % 3].push(img));
    return cols;
  };

  const columns = getColumns();

  // Lightbox data
  const activeImage = selectedImageId
    ? images.find((img) => img.id === selectedImageId)
    : null;
  const lightboxItem: PortfolioItem | null = activeImage
    ? {
        id: String(activeImage.id),
        title: activeImage.alt || `${service.title} Gallery`,
        category: 'Bridal Gowns',
        mediaType: 'image',
        mediaSrc: activeImage.src,
        aspectRatio: 'portrait',
        caption: `Exclusive view from the ${service.title} collection.`,
      }
    : null;

  return (
    <section
      ref={sectionRef}
      className="relative bg-brand-charcoal text-brand-ivory border-t border-brand-gold/10 overflow-hidden"
    >
      {/* Background ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(80vw,600px)] h-[min(80vw,600px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(184,146,90,0.06),transparent_70%)] blur-[60px]"
      />

      {/* ── Section Header ──────────────────────────────── */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: coutureEase }}
          >
            <span className="text-brand-pink uppercase tracking-[0.3em] text-[10px] font-sans font-medium mb-4 block">
              Visual Story
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight">
              Curated Portfolio
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: coutureEase }}
            className="max-w-sm text-brand-ivory/60 font-light text-sm md:text-base leading-relaxed"
          >
            A glimpse into the artistry, precision, and beauty behind every piece we create.
          </motion.p>
        </div>

        {/* Animated accent line */}
        <div className="relative mt-10">
          <div className="w-full h-[1px] bg-brand-ivory/10" />
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-brand-gold via-brand-pink to-brand-gold"
          />
        </div>
      </div>

      {/* ── Masonry Grid ────────────────────────────────── */}
      <div className="px-4 sm:px-6 lg:px-12 pb-24 md:pb-32 max-w-7xl mx-auto">
        <div className={`grid gap-4 md:gap-6 ${isDesktop ? 'grid-cols-3' : 'grid-cols-2'}`}>
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col gap-4 md:gap-6"
              style={{
                // Offset alternate columns for masonry stagger
                marginTop: colIdx === 1 ? (isDesktop ? '3rem' : '1.5rem') : colIdx === 2 ? '5rem' : '0',
              }}
            >
              {col.map((img, imgIdx) => {
                // Calculate the global index for stagger ordering
                const globalIndex = colIdx + imgIdx * columns.length;

                return (
                  <GalleryCard
                    key={img.id}
                    img={img}
                    index={globalIndex}
                    onSelect={setSelectedImageId}
                    serviceTitle={service.title}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ────────────────────────────────────── */}
      <MediaLightbox
        item={lightboxItem}
        onClose={() => setSelectedImageId(null)}
      />
    </section>
  );
}
