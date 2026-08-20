"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesList } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';

export function ServicesGrid() {
  return (
    <section className="py-24 md:py-40 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {servicesList.map((service, index) => {
            // Create a staggered/masonry feel by pushing down some columns
            const isMiddleColumn = index % 3 === 1;
            
            return (
              <motion.div 
                key={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: coutureEase, delay: (index % 3) * 0.1 }}
                className={`group ${isMiddleColumn ? 'md:mt-16 lg:mt-24' : ''}`}
              >
                <Link href={`/services/${service.slug}`} className="block relative overflow-hidden aspect-[3/4] mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: coutureEase }}
                    className="w-full h-full"
                  >
                    <img 
                      src={service.coverImage} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>
                  {/* Pink overlay on hover */}
                  <div className="absolute inset-0 bg-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-multiply"></div>
                  
                  {/* Explore Text overlay */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="w-8 h-[1px] bg-brand-ivory"></span>
                    <span className="uppercase text-xs tracking-widest text-brand-ivory">Explore</span>
                  </div>
                </Link>

                <h3 className="font-serif text-3xl font-light mb-3 group-hover:text-brand-gold transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-brand-ivory/70 font-light text-sm md:text-base mb-6 line-clamp-3">
                  {service.shortDescription}
                </p>
                <Link 
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-brand-gold uppercase tracking-widest text-xs font-medium hover:text-brand-pink transition-colors group/link"
                >
                  View Details
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
