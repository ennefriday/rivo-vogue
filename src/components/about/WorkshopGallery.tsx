"use client";

import { motion } from 'framer-motion';
import { workshopGalleryData } from '@/lib/aboutData';
import { coutureEase } from '@/lib/animations';

export function WorkshopGallery() {

  // Layout pattern for a masonry-like feel (tall, wide, square combinations)
  const getGridClasses = (index: number) => {
    switch(index % 6) {
      case 0: return "col-span-1 md:col-span-2 aspect-square md:aspect-[16/9]"; // Workspace (16:9)
      case 1: return "col-span-1 md:col-span-2 aspect-square md:aspect-[3/2]"; // Dressmaking (3:2)
      case 2: return "col-span-1 md:col-span-1 aspect-square md:aspect-[3/4]"; // Craftsmanship (3:4)
      case 3: return "col-span-1 md:col-span-2 aspect-square md:aspect-[16/9] md:h-full"; // Fabric Selection (16:9)
      case 4: return "col-span-1 md:col-span-1 aspect-square md:aspect-[3/4]"; // Fitting (3:4)
      case 5: return "col-span-1 md:col-span-4 aspect-square md:aspect-[21/9] object-cover object-center"; // Finished Creations (16:9 but wide)
      default: return "col-span-1 aspect-square";
    }
  };



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
              className={`relative overflow-hidden group bg-brand-ivory/5 ${getGridClasses(index)}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: coutureEase }}
            >
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              {/* Desktop Overlay (Hover) */}
              <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 flex-col justify-end p-8">
                 <h3 className="text-brand-ivory font-serif text-3xl font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75 ease-out">
                   {image.alt}
                 </h3>
              </div>

              {/* Mobile Overlay (In View) */}
              <motion.div 
                className="md:hidden absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/30 to-transparent z-10 flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.7 }}
              >
                 <motion.h3 
                   className="text-brand-ivory font-serif text-xl font-light"
                   initial={{ y: 16 }}
                   whileInView={{ y: 0 }}
                   viewport={{ amount: 0.8 }}
                   transition={{ duration: 0.7, delay: 0.1 }}
                 >
                   {image.alt}
                 </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>


    </section>
  );
}
