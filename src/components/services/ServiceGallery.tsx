'use client';

import { useRef, useState, useMemo } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Service } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';
import MediaLightbox from '@/components/home/MediaLightbox';
import { PortfolioItem } from '@/lib/homeData';

export function ServiceGallery({ service }: { service: Service }) {
  const container = useRef<HTMLDivElement>(null);
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  
  const baseImages = useMemo(() => service.galleryImages || [], [service.galleryImages]);
  
  const displayImages = useMemo(() => {
    let filled = [...baseImages];
    if (filled.length === 0) return [];
    while (filled.length < 7) {
      filled = [...filled, ...baseImages];
    }
    return filled.slice(0, 7);
  }, [baseImages]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  if (baseImages.length === 0) return null;

  const activeImage = selectedImageId ? baseImages.find(img => img.id === selectedImageId) : null;
  const lightboxItem: PortfolioItem | null = activeImage ? {
    id: String(activeImage.id),
    title: activeImage.alt || `${service.title} Gallery`,
    category: 'Bridal Gowns',
    mediaType: 'image',
    mediaSrc: activeImage.src,
    aspectRatio: 'landscape',
    caption: `Exclusive view from the ${service.title} collection.`
  } : null;

  return (
    <section className="bg-brand-charcoal text-brand-ivory border-t border-brand-gold/10">
      
      {/* Introduction Header for Gallery */}
      <div className="pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: coutureEase }}
        >
          <span className="text-brand-pink uppercase tracking-widest text-[10px] font-medium mb-4 block">
            Visual Story
          </span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-tight">
            Curated Portfolio
          </h2>
        </motion.div>
      </div>

      {/* Zoom Parallax Container */}
      <div ref={container} className="relative h-[300vh] w-full">
        <div className="sticky top-0 h-screen overflow-hidden bg-brand-charcoal">
          
          {/* Subtle central glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[100vmin] w-[100vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(184,146,90,0.08),transparent_60%)] blur-[40px]"
          />

          {displayImages.map((img, index) => {
            const scale = scales[index % scales.length];

            // Specific layout classes to mimic the cinematic cluster
            const layoutClasses = [
              /* 0: Center, large */
              '', 
              /* 1: Top Left */
              '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[35vh] [&>div]:!w-[30vw]',
              /* 2: Top Right (higher up) */
              '[&>div]:!-top-[15vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[22vw]',
              /* 3: Right side */
              '[&>div]:!left-[30vw] [&>div]:!h-[35vh] [&>div]:!w-[25vw]',
              /* 4: Bottom Left */
              '[&>div]:!top-[30vh] [&>div]:!left-[8vw] [&>div]:!h-[25vh] [&>div]:!w-[22vw]',
              /* 5: Bottom Right */
              '[&>div]:!top-[28vh] [&>div]:!-left-[25vw] [&>div]:!h-[30vh] [&>div]:!w-[30vw]',
              /* 6: Far Right Bottom */
              '[&>div]:!top-[25vh] [&>div]:!left-[25vw] [&>div]:!h-[20vh] [&>div]:!w-[18vw]'
            ];

            return (
              <motion.div
                key={`${img.id}-${index}`}
                style={{ scale }}
                className={`absolute top-0 flex h-full w-full items-center justify-center ${layoutClasses[index]}`}
              >
                <div 
                  className="relative h-[35vh] w-[30vw] overflow-hidden group cursor-pointer border border-brand-gold/10"
                  onClick={() => setSelectedImageId(img.id)}
                >
                  <img
                    src={img.src}
                    alt={img.alt || `Portfolio piece ${index + 1}`}
                    className="h-full w-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-brand-gold uppercase tracking-[0.2em] text-[10px] font-medium border border-brand-gold/30 px-5 py-2.5 rounded-full backdrop-blur-sm bg-brand-charcoal/40">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <MediaLightbox 
        item={lightboxItem}
        onClose={() => setSelectedImageId(null)}
      />
    </section>
  );
}
