export type PricingPackage = {
  name: string;
  price: string;
  features: string[];
  isPremium?: boolean;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  galleryImages: { id: number; src: string; alt: string; aspect: string }[];
  process: ProcessStep[];
  packages: PricingPackage[];
  faqs: Faq[];
};

export const globalServicesFaqs: Faq[] = [
  {
    question: "How far in advance should I book my bridal consultation?",
    answer: "We recommend booking at least 6-8 months before your wedding date for bespoke couture, and 3-4 months for gown rentals to ensure availability and proper fitting time."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship our bespoke and ready-to-wear pieces globally. Shipping times and costs vary depending on the destination."
  },
  {
    question: "What is your payment structure for bespoke services?",
    answer: "We require a 70% initial deposit before production begins, with the 30% balance due upon final fitting and collection."
  },
  {
    question: "Can I customize a rental gown?",
    answer: "Rental gowns can undergo minor, non-permanent alterations for a perfect fit, but structural changes are reserved for bespoke couture clients."
  }
];

export const servicesList: Service[] = [
  {
    slug: 'wedding-gowns',
    title: 'Wedding Gowns Sales & Rentals',
    shortDescription: 'Find your dream dress with our curated collection of pristine, luxurious wedding gowns.',
    fullDescription: 'Our bridal service offers you the opportunity to wear a breathtaking, high-end designer gown. Each dress in our collection is meticulously maintained and tailored for a flawless fit.',
    coverImage: '/sercard/bridecard.webp',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Bridal Gown', aspect: 'portrait' }],
    process: [{ step: '01', title: 'Consultation', description: 'Book a session to explore our collection.' }],
    packages: [{ name: 'Standard Rental', price: 'From ₦150,000', features: ['3-day rental period'] }],
    faqs: [{ question: 'How long can I keep the rental?', answer: 'Our standard rental period is 3 to 5 days.' }]
  },
  {
    slug: 'bridal-accessories',
    title: 'Bridal Accessories & Stylings',
    shortDescription: 'Complete your perfect look with elegant tiaras, veils, and statement pieces.',
    fullDescription: 'The perfect gown requires the perfect accents. Our curated collection of bridal accessories ensures every detail of your ensemble is cohesive, luxurious, and uniquely you.',
    coverImage: '/sercard/bridalstyle.webp',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Accessory', aspect: 'square' }],
    process: [{ step: '01', title: 'Styling Session', description: 'Bring your dress to match accessories.' }],
    packages: [{ name: 'Accessory Rental', price: 'From ₦20,000', features: ['Tiaras and crowns'] }],
    faqs: [{ question: "Can I rent accessories if I didn't rent my dress from you?", answer: 'Absolutely.' }]
  },
  {
    slug: 'asoebi-specialization',
    title: 'Asoebi Specialization',
    shortDescription: 'Honor your heritage with breathtaking, meticulously crafted traditional attire.',
    fullDescription: 'Celebrate your heritage with breathtaking traditional garments. From intricate beadwork to luxurious Aso Oke, we create traditional bridal wear that commands attention and honors culture.',
    coverImage: '/sercard/aseobi.webp',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Traditional Bride', aspect: 'portrait' }],
    process: [{ step: '01', title: 'Consultation', description: 'Discuss the specific cultural requirements.' }],
    packages: [{ name: 'Asoebi Tailoring', price: 'From ₦45,000 per person', features: ['Custom tailoring'] }],
    faqs: [{ question: 'Can you source the traditional fabrics?', answer: 'Yes, we have trusted suppliers.' }]
  },
  {
    slug: 'custom-tailoring',
    title: 'Custom Tailoring (Bespoke)',
    shortDescription: 'Experience the ultimate luxury of a masterpiece designed exclusively for you.',
    fullDescription: 'Experience the ultimate luxury of a dress made exclusively for you. From the initial sketch to the final stitch, our bespoke service is a collaborative journey to bring your most elaborate fashion dreams to life.',
    coverImage: '/sercard/bespoke.webp',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Bespoke Dress', aspect: 'portrait' }],
    process: [{ step: '01', title: 'Design Consultation', description: 'We discuss your vision and preferences.' }],
    packages: [{ name: 'Custom Dress', price: 'From ₦250,000', features: ['Bespoke design sketch'] }],
    faqs: [{ question: "Do you replicate other designers' work?", answer: 'We draw inspiration from your references but we do not do exact replicas.' }]
  },
  {
    slug: 'designer-bags-shoes',
    title: 'Designer Bags & Shoes',
    shortDescription: 'Step out in style with our premium selection of designer footwear and handbags.',
    fullDescription: 'Elevate any outfit with our handpicked collection of luxury bags and shoes. Crafted from the finest materials, our accessories are designed to make a statement and stand the test of time.',
    coverImage: '/sercard/bagandshoes.webp',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Designer Bag', aspect: 'square' }],
    process: [{ step: '01', title: 'Browse', description: 'Explore our latest collections.' }],
    packages: [{ name: 'Premium Footwear', price: 'From ₦150,000', features: ['Authentic designer pieces'] }],
    faqs: [{ question: 'Are these authentic?', answer: 'Yes, we source directly from authorized dealers.' }]
  },
  {
    slug: 'luxury-perfumes',
    title: 'Luxury Perfumes',
    shortDescription: 'Leave a lasting impression with our exclusive collection of captivating scents.',
    fullDescription: 'Discover your signature scent from our exquisite range of luxury perfumes. Sourced from the finest perfumeries, these fragrances are designed to captivate and endure.',
    coverImage: '/sercard/perfume.webp',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Luxury Perfume', aspect: 'portrait' }],
    process: [{ step: '01', title: 'Scent Profiling', description: 'Find a scent that matches your personality.' }],
    packages: [{ name: 'Signature Scent', price: 'From ₦85,000', features: ['Long-lasting eau de parfum'] }],
    faqs: [{ question: 'Do you offer scent consultations?', answer: 'Yes, our experts can help you find your perfect match.' }]
  },
  {
    slug: 'fashion-academy',
    title: 'Fashion Academy',
    shortDescription: 'Turn your passion into a profession with hands-on training from industry experts.',
    fullDescription: 'Turn your passion into a profession. The Rivo Vogue Fashion Academy offers intense, practical training in pattern drafting, sewing techniques, and fashion business management.',
    coverImage: '/sercard/academy.webp',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Student Working', aspect: 'portrait' }],
    process: [{ step: '01', title: 'Enrollment', description: 'Choose your preferred program and register.' }],
    packages: [{ name: 'Beginners Course', price: '₦150,000', features: ['3 months duration'] }],
    faqs: [{ question: 'Do I need to bring my own sewing machine?', answer: 'No, our academy is fully equipped.' }]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesList.find((s) => s.slug === slug);
}
