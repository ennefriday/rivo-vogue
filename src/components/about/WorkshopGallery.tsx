"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { workshopGalleryData } from '@/lib/aboutData';
import { coutureEase } from '@/lib/animations';
import MediaLightbox from '@/components/home/MediaLightbox';

export function WorkshopGallery() {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  // Layout pattern for a masonry-like feel (tall, wide, square combinations)
  const getGridClasses = (index: number) => {
    switch(index % 6) {
      case 0: return "col-span-1 md:col-span-2 row-span-2 aspect-square md:aspect-[4/3]";
      case 1: return "col-span-1 md:col-span-1 row-span-1 aspect-square md:aspect-[3/4]";
      case 2: return "col-span-1 md:col-span-1 row-span-1 aspect-square md:aspect-[3/4]";
      case 3: return "col-span-1 md:col-span-1 row-span-1 aspect-square md:aspect-square";
      case 4: return "col-span-1 md:col-span-2 row-span-1 aspect-square md:aspect-[21/9]";
      case 5: return "col-span-1 md:col-span-1 row-span-1 aspect-square md:aspect-square";
      default: return "col-span-1 aspect-square";
    }
  };

  const activeImage = selectedImageId 
    ? workshopGalleryData.images.find(img => img.id === selectedImageId)
    : null;

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: coutureEase }}
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">{workshopGalleryData.title}</h2>
            <div className="w-16 h-[1px] bg-brand-gold"></div>
          </div>
          <p className="font-sans text-brand-ivory/70 max-w-sm font-light text-sm md:text-base">
            Where vision meets precision. A look inside the meticulous process behind every Rivo Vogue creation.
          </p>
        </motion.div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
          {workshopGalleryData.images.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative overflow-hidden cursor-pointer group bg-brand-ivory/5 ${getGridClasses(index)}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: coutureEase }}
              onClick={() => setSelectedImageId(image.id)}
            >
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reusable Lightbox from Home Component */}
      <AnimatePresence>
        {activeImage && (
          <MediaLightbox
            type="image"
            src={activeImage.src}
            alt={activeImage.alt}
            onClose={() => setSelectedImageId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
