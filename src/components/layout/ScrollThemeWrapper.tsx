'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode, Children } from 'react';
import { coutureEase } from '@/lib/animations';

export default function ScrollThemeWrapper({ children }: { children: ReactNode }) {
  // Update refs to specifically look for HTMLDivElements
  const lightSectionRef = useRef<HTMLDivElement>(null);
  const darkEndSectionRef = useRef<HTMLDivElement>(null);

  // Trigger transitions when sections enter the viewport margins
  const isLightSectionInView = useInView(lightSectionRef, { margin: "-40% 0px" });
  const isDarkEndSectionInView = useInView(darkEndSectionRef, { margin: "-40% 0px" });

  let currentBg = "#0A0908"; // brand-charcoal
  let currentText = "#FDFBF7"; // brand-ivory
  
  if (isDarkEndSectionInView) {
    currentBg = "#0A0908"; 
    currentText = "#FDFBF7";
  } else if (isLightSectionInView) {
    currentBg = "#FDFBF7"; 
    currentText = "#0A0908";
  }

  const childrenArray = Children.toArray(children);

  return (
    <motion.main 
      animate={{ backgroundColor: currentBg, color: currentText }}
      transition={{ duration: 1, ease: coutureEase }}
      className="w-full relative z-10"
    >
      {childrenArray.map((child, index) => {
        // 1. Wrap the Light Theme Trigger section
        if (index === 1) {
          return (
            <div key={`section-${index}`} ref={lightSectionRef} className="w-full">
              {child}
            </div>
          );
        }
        
        // 2. Wrap the Dark Theme Return Trigger section
        if (index === 3) {
          return (
            <div key={`section-${index}`} ref={darkEndSectionRef} className="w-full">
              {child}
            </div>
          );
        }
        
        // 3. Render all other sections normally
        return child;
      })}
    </motion.main>
  );
}