"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ShoppingBag, CalendarClock } from 'lucide-react';
import { coutureEase } from '@/lib/animations';

interface Gown {
  id: string;
  name: string;
  src: string;
  buyPrice: string;
  rentPrice: string;
  category: string;
}

// Due to rate limits, we are using the 6 successfully generated images as a beautiful base collection.
const mockImages = [
  '/gowns/regular_gown_1_1788344839009.jpg',
  '/gowns/regular_gown_2_1788344850882.jpg',
  '/gowns/regular_gown_3_1788344862014.jpg',
  '/gowns/regular_gown_4_1788344874282.jpg',
  '/gowns/regular_gown_5_1788344885231.jpg',
  '/gowns/regular_gown_6_1788344913423.jpg',
];

const generateGowns = (category: string, prefix: string, basePrice: number, baseRent: number): Gown[] => {
  return Array.from({ length: 10 }).map((_, i) => ({
    id: `${prefix}-${i + 1}`,
    name: `The ${category} Silhouette ${i + 1}`,
    src: mockImages[i % mockImages.length],
    buyPrice: `₦${(basePrice + (i * 15000)).toLocaleString()}`,
    rentPrice: `₦${(baseRent + (i * 5000)).toLocaleString()}`,
    category
  }));
};

const collections = [
  {
    title: "Regular Wedding Gowns",
    description: "Classic, elegant, and timeless designs for your special day.",
    gowns: generateGowns("Classic", "reg", 350000, 150000)
  },
  {
    title: "Luxury Wedding Gowns",
    description: "Premium fabrics, intricate detailing, and breathtaking silhouettes.",
    gowns: generateGowns("Luxury", "lux", 850000, 300000)
  },
  {
    title: "Exquisite Gowns",
    description: "The pinnacle of couture bridal fashion. Unmatched opulence.",
    gowns: generateGowns("Exquisite", "exq", 1500000, 500000)
  }
];

function GownCarousel({ collection, onSelectGown }: { collection: any, onSelectGown: (gown: Gown) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setProgress(scrollLeft / (scrollWidth - clientWidth) || 0);
    }
  };

  const scrollBy = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mb-24 relative">
      <div className="px-6 lg:px-12 mb-8 md:mb-12 flex justify-between items-end">
        <div>
          <h3 className="text-3xl md:text-4xl font-serif font-light text-brand-gold mb-2">{collection.title}</h3>
          <p className="text-brand-ivory/60 font-sans">{collection.description}</p>
        </div>
        
        {/* Desktop Navigation Buttons */}
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scrollBy(-400)} 
            className="p-3 rounded-full border border-brand-ivory/20 hover:border-brand-gold hover:text-brand-gold transition-colors disabled:opacity-30 disabled:hover:border-brand-ivory/20 disabled:hover:text-white"
            disabled={progress <= 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scrollBy(400)} 
            className="p-3 rounded-full border border-brand-ivory/20 hover:border-brand-gold hover:text-brand-gold transition-colors disabled:opacity-30 disabled:hover:border-brand-ivory/20 disabled:hover:text-white"
            disabled={progress >= 0.99}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full overflow-x-auto hide-scrollbar pl-6 lg:pl-12 pb-4 snap-x snap-mandatory"
      >
        <div className="flex gap-6 md:gap-8 w-max pr-6 lg:pr-12">
          {collection.gowns.map((gown: Gown, i: number) => (
            <motion.div 
              key={gown.id}
              className="relative w-[280px] md:w-[400px] lg:w-[480px] aspect-[3/4] cursor-pointer group snap-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: coutureEase }}
              onClick={() => onSelectGown(gown)}
            >
              <Image 
                src={gown.src} 
                alt={gown.name}
                fill
                className="object-cover rounded-sm grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Desktop Overlay (Hover) */}
              <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm flex-col justify-end p-6">
                <h4 className="font-serif text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{gown.name}</h4>
                <p className="text-brand-gold text-sm tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">View Details</p>
              </div>

              {/* Mobile Overlay (In View) */}
              <motion.div 
                className="md:hidden absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-transparent to-transparent rounded-sm flex flex-col justify-end p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.6 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="font-serif text-xl text-brand-ivory">{gown.name}</h4>
                <p className="text-brand-gold text-xs tracking-widest uppercase mt-2">Tap for Details</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator (Visible everywhere) */}
      <div className="px-6 lg:px-12 mt-6">
        <div className="w-full mx-auto h-[2px] bg-brand-ivory/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-gold transition-all duration-300 ease-out rounded-full"
            style={{ width: `${Math.max(10, progress * 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function WeddingGownsShowcase() {
  const [selectedGown, setSelectedGown] = useState<Gown | null>(null);

  // Prevent background scrolling and hide navbar when modal is open
  useEffect(() => {
    const header = document.querySelector('header');
    if (selectedGown) {
      document.body.style.overflow = 'hidden';
      if (header) {
        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
      }
    } else {
      document.body.style.overflow = 'unset';
      if (header) {
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (header) {
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
      }
    };
  }, [selectedGown]);

  const handleWhatsAppAction = (action: 'Buy' | 'Rent') => {
    if (!selectedGown) return;
    
    const price = action === 'Buy' ? selectedGown.buyPrice : selectedGown.rentPrice;
    const message = `Hello Rivo Vogue! ✨\n\nI am interested in to ${action.toLowerCase()} a wedding gown.\n\n*Gown:* ${selectedGown.name}\n*Collection:* ${selectedGown.category}\n*Action:* ${action}\n*Price:* ${price}\n\nPlease let me know the availability and next steps. Thank you!`;
    
    const whatsappUrl = `https://wa.me/2347088835025?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-brand-charcoal text-brand-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">The Bridal Collections</h2>
        <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-8"></div>
        <p className="font-sans text-brand-ivory/70 max-w-2xl mx-auto font-light">
          Explore our meticulously curated collections. Click on any gown to view purchase and rental options.
        </p>
      </div>

      <div className="w-full">
        {collections.map((collection, idx) => (
          <GownCarousel key={idx} collection={collection} onSelectGown={setSelectedGown} />
        ))}
      </div>

      {/* Fullscreen Detail Modal */}
      <AnimatePresence>
        {selectedGown && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-charcoal/95 backdrop-blur-md p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button 
              onClick={() => setSelectedGown(null)}
              className="absolute top-6 right-6 md:top-12 md:right-12 z-[10000] p-2 bg-brand-ivory/10 hover:bg-brand-gold text-white transition-colors rounded-full"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <motion.div 
              className="w-full max-w-6xl bg-brand-charcoal border border-brand-ivory/10 shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-[40vh] md:h-[80vh] flex-shrink-0">
                <Image 
                  src={selectedGown.src} 
                  alt={selectedGown.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-brand-charcoal relative overflow-y-auto">
                <p className="text-brand-gold tracking-[0.2em] uppercase text-sm mb-4">{selectedGown.category} Collection</p>
                <h2 className="text-3xl md:text-5xl font-serif font-light mb-8">{selectedGown.name}</h2>
                
                <div className="w-16 h-[1px] bg-brand-ivory/20 mb-8"></div>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <p className="text-brand-ivory/50 text-sm uppercase tracking-wider mb-2">Purchase Price</p>
                    <p className="text-3xl font-light">{selectedGown.buyPrice}</p>
                  </div>
                  <div>
                    <p className="text-brand-ivory/50 text-sm uppercase tracking-wider mb-2">Rental Price</p>
                    <p className="text-3xl font-light">{selectedGown.rentPrice}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <button 
                    onClick={() => handleWhatsAppAction('Buy')}
                    className="flex-1 group relative flex items-center justify-center gap-3 bg-brand-ivory text-brand-charcoal py-4 px-6 font-medium tracking-wider uppercase hover:bg-brand-gold transition-colors duration-300"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Buy Now</span>
                  </button>
                  <button 
                    onClick={() => handleWhatsAppAction('Rent')}
                    className="flex-1 group relative flex items-center justify-center gap-3 border border-brand-ivory/30 text-brand-ivory py-4 px-6 font-medium tracking-wider uppercase hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
                  >
                    <CalendarClock className="w-5 h-5" />
                    <span>Rent Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
