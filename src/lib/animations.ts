export const coutureEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: coutureEase } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const imageRevealVariant = {
  hidden: { clipPath: 'inset(100% 0 0 0)' },
  visible: { 
    clipPath: 'inset(0% 0 0 0)',
    transition: { duration: 1.2, ease: coutureEase }
  }
};