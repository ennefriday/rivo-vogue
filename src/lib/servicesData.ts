
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
    slug: 'bridal-rentals',
    title: 'Bridal Gown Rentals',
    shortDescription: 'Access a curated collection of cathedral and luxury wedding gowns for your special day.',
    fullDescription: 'Our bridal rental service offers you the opportunity to wear a breathtaking, high-end designer gown without the commitment of purchasing. Each dress in our collection is meticulously maintained and tailored for a flawless fit.',
    coverImage: '/placeholder-bridal-rental.jpg',
    galleryImages: [
      { id: 1, src: '/placeholder-1.jpg', alt: 'Bridal Gown Front', aspect: 'portrait' },
      { id: 2, src: '/placeholder-2.jpg', alt: 'Bridal Gown Detail', aspect: 'square' },
      { id: 3, src: '/placeholder-3.jpg', alt: 'Bridal Gown Train', aspect: 'landscape' },
    ],
    process: [
      { step: '01', title: 'Consultation & Try-on', description: 'Book a session to explore our collection and try on your favorite gowns.' },
      { step: '02', title: 'Selection & Deposit', description: 'Choose your dream dress and secure it with a booking deposit.' },
      { step: '03', title: 'Fitting & Alteration', description: 'Minor, non-permanent alterations are made to ensure a perfect fit.' },
      { step: '04', title: 'Pickup & Return', description: 'Collect your pristine gown before the wedding, and return it afterward.' }
    ],
    packages: [
      {
        name: 'Standard Rental',
        price: 'From ₦150,000',
        features: ['3-day rental period', 'Dry cleaning included', 'Minor alterations', 'Veil included']
      },
      {
        name: 'Premium Cathedral',
        price: 'From ₦350,000',
        features: ['5-day rental period', 'Premium cathedral length gowns', 'Dry cleaning included', 'Full accessory suite', 'Priority fitting'],
        isPremium: true
      }
    ],
    faqs: [
      { question: 'What happens if the dress gets damaged?', answer: 'Minor wear and tear is expected, but significant damage (burns, massive tears) will incur repair charges from your security deposit.' },
      { question: 'How long can I keep the rental?', answer: 'Our standard rental period is 3 to 5 days. Extended rentals can be arranged for an additional fee.' }
    ]
  },
  {
    slug: 'bespoke-couture',
    title: 'Bespoke Couture',
    shortDescription: 'Custom-designed gowns crafted perfectly to your measurements and vision.',
    fullDescription: 'Experience the ultimate luxury of a dress made exclusively for you. From the initial sketch to the final stitch, our bespoke service is a collaborative journey to bring your most elaborate fashion dreams to life.',
    coverImage: '/placeholder-bespoke.jpg',
    galleryImages: [
      { id: 1, src: '/placeholder-1.jpg', alt: 'Bespoke Dress', aspect: 'portrait' },
      { id: 2, src: '/placeholder-2.jpg', alt: 'Sketching Process', aspect: 'square' },
      { id: 3, src: '/placeholder-3.jpg', alt: 'Fabric Selection', aspect: 'landscape' },
    ],
    process: [
      { step: '01', title: 'Design Consultation', description: 'We discuss your vision, theme, and preferences, followed by custom sketches.' },
      { step: '02', title: 'Fabric & Sourcing', description: 'Selection of premium fabrics, laces, and embellishments tailored to your design.' },
      { step: '03', title: 'Muslin Fitting (Toile)', description: 'A mockup of the dress is created to perfect the silhouette before cutting the real fabric.' },
      { step: '04', title: 'Final Fittings', description: 'Multiple fittings to ensure the garment drapes and fits flawlessly.' }
    ],
    packages: [
      {
        name: 'Custom Reception Dress',
        price: 'From ₦250,000',
        features: ['Bespoke design sketch', 'Premium fabrics', '2 fitting sessions', 'Garment bag']
      },
      {
        name: 'Haute Couture Bridal',
        price: 'From ₦800,000',
        features: ['Exclusive 1-of-1 design', 'Imported luxury lace & crystals', 'Unlimited fittings', 'Bridal robe included', 'Dressing assistance on wedding day'],
        isPremium: true
      }
    ],
    faqs: [
      { question: 'Do you replicate other designers\' work?', answer: 'We draw inspiration from your references but we do not do exact replicas. We create a unique Rivo Vogue original inspired by your vision.' },
      { question: 'Can I bring my own fabric?', answer: 'Yes, we accept client fabrics provided they meet our quality standards for the intended design.' }
    ]
  },
  {
    slug: 'bridal-accessories',
    title: 'Bridal Accessories',
    shortDescription: 'Curated selection of tiaras, veils, bouquets, and jewelry to complete your look.',
    fullDescription: 'The perfect gown requires the perfect accents. Our curated collection of bridal accessories ensures every detail of your ensemble is cohesive, luxurious, and uniquely you.',
    coverImage: '/placeholder-accessories.jpg',
    galleryImages: [
      { id: 1, src: '/placeholder-1.jpg', alt: 'Tiara', aspect: 'square' },
      { id: 2, src: '/placeholder-2.jpg', alt: 'Bridal Bouquet', aspect: 'portrait' },
    ],
    process: [
      { step: '01', title: 'Styling Session', description: 'Bring your dress (or a photo) to match accessories.' },
      { step: '02', title: 'Selection', description: 'Choose from our extensive range of veils, tiaras, and jewelry.' }
    ],
    packages: [
      {
        name: 'Accessory Rental',
        price: 'From ₦20,000',
        features: ['Tiaras and crowns', 'Statement jewelry', '3-day rental']
      },
      {
        name: 'Custom Accessories',
        price: 'From ₦50,000',
        features: ['Bespoke hand-beaded veils', 'Custom bouquets', 'Yours to keep'],
        isPremium: true
      }
    ],
    faqs: [
      { question: 'Can I rent accessories if I didn\'t rent my dress from you?', answer: 'Absolutely. Our accessory styling and rental services are open to all brides.' }
    ]
  },
  {
    slug: 'ready-to-wear',
    title: 'Ready-to-Wear',
    shortDescription: 'Chic, accessible fashion for the modern woman, ready to purchase.',
    fullDescription: 'For the woman on the go who refuses to compromise on style. Our ready-to-wear collections feature the Rivo Vogue signature elegance, tailored for everyday luxury and special occasions.',
    coverImage: '/placeholder-rtw.jpg',
    galleryImages: [
      { id: 1, src: '/placeholder-1.jpg', alt: 'RTW Collection', aspect: 'portrait' },
      { id: 2, src: '/placeholder-2.jpg', alt: 'RTW Details', aspect: 'square' },
    ],
    process: [
      { step: '01', title: 'Browse', description: 'Explore our latest collections in-store or online.' },
      { step: '02', title: 'Try-on', description: 'Visit our atelier to try on different sizes and styles.' },
      { step: '03', title: 'Purchase', description: 'Take your beautiful new garment home immediately.' }
    ],
    packages: [
      {
        name: 'Casual Elegance',
        price: 'From ₦30,000',
        features: ['Everyday luxury wear', 'Standard sizing', 'Available immediately']
      },
      {
        name: 'Occasion Wear',
        price: 'From ₦85,000',
        features: ['Event-ready dresses', 'Intricate detailing', 'Minor adjustments available in-store'],
        isPremium: true
      }
    ],
    faqs: [
      { question: 'Do you offer sizing adjustments for RTW?', answer: 'Yes, we offer minor alterations (like hemming) on ready-to-wear pieces purchased in-store.' }
    ]
  },
  {
    slug: 'traditional-attire',
    title: 'Traditional Attire',
    shortDescription: 'Exquisite traditional wedding wear and Asoebi coordination.',
    fullDescription: 'Celebrate your heritage with breathtaking traditional garments. From intricate beadwork to luxurious Aso Oke, we create traditional bridal wear that commands attention and honors culture.',
    coverImage: '/placeholder-trad.jpg',
    galleryImages: [
      { id: 1, src: '/placeholder-1.jpg', alt: 'Traditional Bride', aspect: 'portrait' },
      { id: 2, src: '/placeholder-2.jpg', alt: 'Asoebi Group', aspect: 'landscape' },
    ],
    process: [
      { step: '01', title: 'Cultural Consultation', description: 'Discuss the specific cultural requirements and styling.' },
      { step: '02', title: 'Fabric & Embellishment', description: 'Selection of George, Aso Oke, lace, and beads.' },
      { step: '03', title: 'Crafting', description: 'Meticulous tailoring and hand-beading of the garments.' }
    ],
    packages: [
      {
        name: 'Asoebi Tailoring',
        price: 'From ₦45,000 per person',
        features: ['Custom tailoring for bridal party', 'Consistent quality and fit', 'Group discount applied for 10+']
      },
      {
        name: 'Traditional Bridal Masterpiece',
        price: 'From ₦350,000',
        features: ['Heavily beaded bespoke outfit', 'Custom matching gele', 'Hand fan and accessories styling', 'Multiple fittings'],
        isPremium: true
      }
    ],
    faqs: [
      { question: 'Can you source the traditional fabrics?', answer: 'Yes, we have trusted suppliers for authentic, high-quality traditional fabrics.' }
    ]
  },
  {
    slug: 'professional-ushers',
    title: 'Professional Ushers',
    shortDescription: 'Elegant, trained ushers to manage and elevate your event.',
    fullDescription: 'Add a touch of class and flawless organization to your event. Our team of highly trained, beautifully styled ushers ensures your guests are treated like royalty from the moment they arrive.',
    coverImage: '/placeholder-ushers.jpg',
    galleryImages: [
      { id: 1, src: '/placeholder-1.jpg', alt: 'Ushering Team', aspect: 'landscape' },
      { id: 2, src: '/placeholder-2.jpg', alt: 'Guest Reception', aspect: 'square' },
    ],
    process: [
      { step: '01', title: 'Event Briefing', description: 'We discuss your event size, theme, and specific ushering needs.' },
      { step: '02', title: 'Team Selection', description: 'We assign a dedicated team and lead coordinator for your event.' },
      { step: '03', title: 'Styling', description: 'Ushers are styled to match your event\'s color scheme and theme.' },
      { step: '04', title: 'Execution', description: 'Flawless guest management and coordination on the day.' }
    ],
    packages: [
      {
        name: 'Standard Ushering',
        price: 'From ₦80,000 (Team of 4)',
        features: ['Guest seating', 'Souvenir distribution', 'Standard Rivo Vogue uniform', '6 hours coverage']
      },
      {
        name: 'Premium Protocol',
        price: 'From ₦200,000 (Team of 6)',
        features: ['VIP guest management', 'Red carpet coordination', 'Custom themed outfits', 'Lead coordinator', 'Full day coverage'],
        isPremium: true
      }
    ],
    faqs: [
      { question: 'Can the ushers wear my specific Asoebi?', answer: 'Yes, if the fabric is provided in advance, our ushers can wear custom outfits tailored to your event.' }
    ]
  },
  {
    slug: 'fashion-academy',
    title: 'Fashion Academy',
    shortDescription: 'Comprehensive training for aspiring fashion designers.',
    fullDescription: 'Turn your passion into a profession. The Rivo Vogue Fashion Academy offers intense, practical training in pattern drafting, sewing techniques, and fashion business management.',
    coverImage: '/placeholder-academy.jpg',
    galleryImages: [
      { id: 1, src: '/placeholder-1.jpg', alt: 'Student Working', aspect: 'portrait' },
      { id: 2, src: '/placeholder-2.jpg', alt: 'Sewing Machines', aspect: 'landscape' },
    ],
    process: [
      { step: '01', title: 'Enrollment', description: 'Choose your preferred program and register.' },
      { step: '02', title: 'Foundation', description: 'Learn the basics of pattern drafting and machine operation.' },
      { step: '03', title: 'Advanced Construction', description: 'Master complex garments, corsetry, and finishing.' },
      { step: '04', title: 'Graduation', description: 'Showcase your collection and receive your certification.' }
    ],
    packages: [
      {
        name: 'Beginners Course',
        price: '₦150,000',
        features: ['3 months duration', 'Basic pattern drafting', 'Skirt & blouse construction', 'Certificate of completion']
      },
      {
        name: 'Masterclass Program',
        price: '₦400,000',
        features: ['6 months duration', 'Advanced corsetry & bridal wear', 'Fashion business module', 'Graduation fashion show', 'Internship opportunity'],
        isPremium: true
      }
    ],
    faqs: [
      { question: 'Do I need to bring my own sewing machine?', answer: 'No, our academy is fully equipped with industrial and domestic machines for all students.' },
      { question: 'Are there payment plans available?', answer: 'Yes, we allow tuition to be paid in two installments for the Masterclass program.' }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesList.find((s) => s.slug === slug);
}
