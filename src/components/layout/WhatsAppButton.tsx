'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { coutureEase } from '@/lib/animations';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = '2347088835025',
  defaultMessage = 'Hello Rivo Vogue, I would like to inquire about your bridal & bespoke services.',
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: coutureEase }}
            className="hidden sm:block bg-brand-charcoal/95 backdrop-blur-md border border-brand-gold/20 text-brand-ivory text-xs px-3.5 py-1.5 rounded-full shadow-xl shadow-black/40 font-sans tracking-wide"
          >
            <span className="text-brand-gold font-medium">Chat with Bridal Consultant</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with Rivo Vogue Bridal Consultant on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-brand-charcoal text-brand-gold border border-brand-gold/40 flex items-center justify-center shadow-2xl hover:border-brand-gold hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300 transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span 
          className="absolute -inset-1 rounded-full bg-brand-gold/25 animate-ping opacity-40 group-hover:opacity-60 pointer-events-none" 
          aria-hidden="true" 
        />
        
        {/* Icon */}
        <MessageCircle className="w-6 h-6 text-brand-pink transition-transform duration-300 group-hover:scale-110" />
      </motion.a>
    </div>
  );
}
