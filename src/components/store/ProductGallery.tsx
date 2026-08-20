"use client";

import { motion } from 'framer-motion';

export function ProductGallery({ images, productName }: { images: string[], productName: string }) {
  return (
    <div className="space-y-6 md:space-y-10">
      {images.map((img, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[3/4] md:aspect-auto md:min-h-[80vh] w-full overflow-hidden rounded-xl bg-brand-charcoal/50"
        >
          <img 
            src={img} 
            alt={`${productName} - View ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
