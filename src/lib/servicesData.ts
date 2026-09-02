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
  videoOverview?: {
    src: string;
    overlayText?: string;
    buttonText?: string;
    buttonLink?: string;
  };
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
    question: "Do you offer nationwide service across Nigeria?",
    answer: "Absolutely. While our fashion house is based in Ughelli, Delta State, we proudly serve clients across every state in Nigeria. We offer virtual consultations, remote measurement guides, and reliable nationwide delivery so you can experience our couture craftsmanship wherever you are."
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
    videoOverview: {
      src: 'https://res.cloudinary.com/dwrcqtkjc/video/upload/v1787923934/port2_yoh7l2.mp4',
      overlayText: 'Experience True Elegance'
    },
    galleryImages: [
      { id: 1, src: '/portfolio/bride-to-be.webp', alt: 'Bride to Be', aspect: 'portrait' },
      { id: 2, src: '/portfolio/bride1.webp', alt: 'Bridal Gown 1', aspect: 'portrait' },
      { id: 3, src: '/portfolio/bride2.webp', alt: 'Bridal Gown 2', aspect: 'portrait' },
      { id: 4, src: '/portfolio/bride3.webp', alt: 'Bridal Gown 3', aspect: 'portrait' },
      { id: 5, src: '/portfolio/bride4.webp', alt: 'Bridal Gown 4', aspect: 'portrait' },
      { id: 6, src: '/portfolio/bride5.webp', alt: 'Bridal Gown 5', aspect: 'portrait' }
    ],
    process: [
      { step: '01', title: 'Browse & Choose', description: 'Explore our collection and find the perfect gown for your style and occasion.' },
      { step: '02', title: 'Book a Fitting', description: 'Try on your preferred gown and get the perfect fit.' },
      { step: '03', title: 'Confirm Your Choice', description: 'Reserve it for rental or purchase it to own.' },
      { step: '04', title: 'Make Payment', description: 'Complete your payment and finalize your order.' },
      { step: '05', title: 'Ready to Shine', description: 'Pick up your gown and step out looking beautiful.' }
    ],
    packages: [],
    faqs: [
      { question: 'How long can I keep the rental?', answer: 'Our standard rental period is 3 to 5 days.' },
      { question: 'Do I need an appointment to try on gowns?', answer: 'Yes, we recommend booking a private consultation so our stylists can dedicate time to help you find the perfect gown.' },
      { question: 'Are alterations included in the rental price?', answer: 'Minor, non-permanent alterations are included to ensure a flawless fit, but extensive structural changes are reserved for bespoke purchases.' },
      { question: 'What happens if the gown gets damaged?', answer: 'A security deposit is required at the time of rental. Minor wear and tear are expected, but severe damages may result in partial or full forfeiture of the deposit.' },
      { question: 'Do you offer styling for the entire bridal train?', answer: 'Absolutely! We offer specialized group consultations to ensure your bridesmaids complement your gown perfectly.' }
    ]
  },
  {
    slug: 'bridal-accessories',
    title: 'Bridal Accessories & Stylings',
    shortDescription: 'Complete your perfect look with elegant tiaras, veils, and statement pieces.',
    fullDescription: 'The perfect gown requires the perfect accents. Our curated collection of bridal accessories ensures every detail of your ensemble is cohesive, luxurious, and uniquely you.',
    coverImage: '/sercard/bridalstyle.webp',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Accessory', aspect: 'square' }],
    process: [
      { step: '01', title: 'Choose Your Package', description: 'Browse our promo packages and select the one that suits your style and budget.' },
      { step: '02', title: 'Book & Confirm', description: 'Contact us to check availability for your event date and reserve your package.' },
      { step: '03', title: 'Make Payment', description: 'Pay the required amount to secure your booking.' },
      { step: '04', title: 'Attend Your Fitting', description: 'Come in for your fitting and any necessary adjustments.' },
      { step: '05', title: 'Pick Up & Shine', description: 'Collect your complete package and look stunning on your special day.' },
      { step: '06', title: 'Return After Your Event', description: 'Return all rented items at the agreed time.' }
    ],
    packages: [],
    faqs: [
      { question: "Can I rent accessories if I didn't rent my dress from you?", answer: 'Absolutely. We offer our curated selection of bridal accessories to all brides, regardless of where they purchased their dress.' },
      { question: 'Do you offer styling consultations for accessories?', answer: 'Yes, our expert stylists will help you select the perfect accessories to complement your wedding gown and overall theme during a private styling session.' },
      { question: 'How long in advance should I book my accessories?', answer: 'We recommend booking your accessories 1 to 2 months prior to your wedding to ensure availability of your preferred pieces.' },
      { question: 'Are the accessories available for purchase or just rental?', answer: 'We offer both options. You can choose to rent select pieces for your special day or purchase them to keep as timeless heirlooms.' },
      { question: 'What happens if a rented accessory gets damaged?', answer: 'A security deposit is required for all rentals. Minor wear is expected, but any severe damages beyond normal wear and tear will be deducted from your deposit.' }
    ]
  },
  {
    slug: 'asoebi-specialization',
    title: 'Asoebi Specialization',
    shortDescription: 'Honor your heritage with breathtaking, meticulously crafted traditional attire.',
    fullDescription: 'Celebrate your heritage with breathtaking traditional garments. From intricate beadwork to luxurious Aso Oke, we create traditional bridal wear that commands attention and honors culture.',
    coverImage: '/sercard/aseobi.webp',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Traditional Bride', aspect: 'portrait' }],
    process: [
      { step: '01', title: 'Share Your Style', description: 'Tell us about your event, preferred style, colours, and fabric.' },
      { step: '02', title: 'Choose Your Design', description: 'Select a style from our collection or share your preferred inspiration.' },
      { step: '03', title: 'Take Your Measurements', description: 'Get professionally measured for a beautiful and comfortable fit.' },
      { step: '04', title: 'Confirm Your Order', description: 'Finalize the design, details, timeline, and payment.' },
      { step: '05', title: 'We Create Your Outfit', description: 'Our skilled team carefully brings your Asoebi outfit to life.' },
      { step: '06', title: 'Final Fitting & Collection', description: 'Try on your finished outfit, make final adjustments, and get ready to stand out.' }
    ],
    packages: [],
    faqs: [
      { question: 'Can you source the traditional fabrics?', answer: 'Yes, we have trusted suppliers and can source premium Aso Oke, lace, and other traditional fabrics for you.' },
      { question: 'Do you offer group discounts for a large bridal train?', answer: 'Yes, we offer special pricing packages when outfitting your entire Asoebi group or bridal train. Contact us for a custom quote.' },
      { question: 'Can I bring my own fabric?', answer: 'Absolutely! You can bring your own sourced fabric, and our expert tailors will handle the design and construction.' },
      { question: 'How long does an Asoebi order take to complete?', answer: 'For individual outfits, it typically takes 3-4 weeks. For group orders, we recommend booking 2-3 months in advance to ensure everything is perfect.' }
    ]
  },
  {
    slug: 'custom-tailoring',
    title: 'Custom Tailoring (Bespoke)',
    shortDescription: 'Experience the ultimate luxury of a masterpiece designed exclusively for you.',
    fullDescription: 'Experience the ultimate luxury of a dress made exclusively for you. From the initial sketch to the final stitch, our bespoke service is a collaborative journey to bring your most elaborate fashion dreams to life.',
    coverImage: '/sercard/bespoke.webp',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Bespoke Dress', aspect: 'portrait' }],
    process: [
      { step: '01', title: 'Consultation', description: 'Share your style, occasion, measurements, and preferences with us.' },
      { step: '02', title: 'Design & Fabric Selection', description: 'Choose your preferred design, fabric, colours, and finishing details.' },
      { step: '03', title: 'Fitting & Adjustments', description: 'Your piece is carefully crafted and fitted to ensure the right look and comfort.' },
      { step: '04', title: 'Final Touches', description: 'We perfect every detail before your outfit is prepared for collection or delivery.' },
      { step: '05', title: 'Wear & Slay', description: 'Step out confidently in a custom piece made uniquely for you.' }
    ],
    packages: [
      { name: 'Simple Bespoke', price: 'From ₦80,000', features: ['Custom measurements', 'Standard fabrics', '1-2 fittings', 'Basic embellishments'] },
      { name: 'Classic Custom', price: 'From ₦150,000', features: ['Premium fabrics sourcing', 'Detailed custom design', '2-3 fittings', 'Hand-stitched details'] },
      { name: 'Luxury Couture', price: 'From ₦350,000', isPremium: true, features: ['Luxury fabric & lace sourcing', 'Intricate beadwork & stones', 'Unlimited fittings', 'Priority timeline'] },
      { name: 'Bridal Masterpiece', price: 'From ₦600,000', isPremium: true, features: ['Exclusive imported fabrics', 'Full corset & structural design', 'VIP styling session', 'Dedicated seamstress team', 'Complimentary veil or accessory'] }
    ],
    faqs: [
      { question: "Do you replicate other designers' work?", answer: 'We draw inspiration from your references but we do not do exact replicas, as we pride ourselves on creating unique, custom pieces.' },
      { question: 'How long does a bespoke dress take?', answer: 'Depending on the complexity, a custom dress typically takes 4 to 8 weeks from consultation to final delivery.' },
      { question: 'What is the payment structure for custom tailoring?', answer: 'We require a 60% deposit before fabric sourcing and production begins, with the balance due at the final fitting.' },
      { question: 'Can I change my design during the process?', answer: 'Minor tweaks can be made during the first fitting. However, major structural or design changes after production has started will incur additional costs.' },
      { question: 'Do I need to book an appointment?', answer: 'Yes, all custom tailoring starts with a mandatory private consultation. Please book in advance to secure your slot.' }
    ]
  },
  {
    slug: 'designer-bags-shoes',
    title: 'Designer Bags & Shoes',
    shortDescription: 'Step out in style with our premium selection of designer footwear and handbags.',
    fullDescription: 'Elevate any outfit with our handpicked collection of luxury bags and shoes. Crafted from the finest materials, our accessories are designed to make a statement and stand the test of time.',
    coverImage: '/services/designer_bag_hero.jpg',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Designer Bag', aspect: 'square' }],
    process: [
      { step: '01', title: 'Browse Collection', description: 'Explore our available shoes, perfumes, and dresses.' },
      { step: '02', title: 'Choose Your Favourite', description: 'Select the product you love and view its details.' },
      { step: '03', title: 'Buy via WhatsApp', description: 'Click Buy Now to generate a custom WhatsApp message with your order details, then send it to place your order.' },
      { step: '04', title: 'Complete Payment', description: 'Receive payment details and make payment directly to secure your order.' },
      { step: '05', title: 'Confirm Your Order', description: 'Your order is confirmed once payment is verified.' },
      { step: '06', title: 'Delivery or Pickup', description: 'Choose your preferred delivery option or arrange pickup.' }
    ],
    packages: [{ name: 'Premium Footwear', price: 'From ₦150,000', features: ['Authentic designer pieces'] }],
    faqs: [{ question: 'Are these authentic?', answer: 'Yes, we source directly from authorized dealers.' }]
  },
  {
    slug: 'luxury-perfumes',
    title: 'Luxury Perfumes',
    shortDescription: 'Leave a lasting impression with our exclusive collection of captivating scents.',
    fullDescription: 'Discover your signature scent from our exquisite range of luxury perfumes. Sourced from the finest perfumeries, these fragrances are designed to captivate and endure.',
    coverImage: '/services/luxury_perfume_hero.jpg',
    galleryImages: [{ id: 1, src: '/placeholder-1.jpg', alt: 'Luxury Perfume', aspect: 'portrait' }],
    process: [
      { step: '01', title: 'Browse Collection', description: 'Explore our available shoes, perfumes, and dresses.' },
      { step: '02', title: 'Choose Your Favourite', description: 'Select the product you love and view its details.' },
      { step: '03', title: 'Buy via WhatsApp', description: 'Click Buy Now to generate a custom WhatsApp message with your order details, then send it to place your order.' },
      { step: '04', title: 'Complete Payment', description: 'Receive payment details and make payment directly to secure your order.' },
      { step: '05', title: 'Confirm Your Order', description: 'Your order is confirmed once payment is verified.' },
      { step: '06', title: 'Delivery or Pickup', description: 'Choose your preferred delivery option or arrange pickup.' }
    ],
    packages: [{ name: 'Signature Scent', price: 'From ₦85,000', features: ['Long-lasting eau de parfum'] }],
    faqs: [{ question: 'Do you offer scent consultations?', answer: 'Yes, our experts can help you find your perfect match.' }]
  },
  {
    slug: 'fashion-academy',
    title: 'Fashion Academy',
    shortDescription: 'Turn your passion into a profession with hands-on training from industry experts.',
    fullDescription: 'Turn your passion into a profession. The Rivo Vogue Fashion Academy offers intense, practical training in pattern drafting, sewing techniques, and fashion business management.',
    coverImage: '/sercard/academy.webp',
    galleryImages: [
      { id: 1, src: '/services/academy_workshop.jpg', alt: 'Masterclass Workshop', aspect: 'landscape' },
      { id: 2, src: '/services/academy_students.jpg', alt: 'Students Collaborating', aspect: 'landscape' }
    ],
    process: [{ step: '01', title: 'Enrollment', description: 'Choose your preferred program and register.' }],
    packages: [{ name: 'Beginners Course', price: '₦150,000', features: ['3 months duration'] }],
    faqs: [
      { question: 'Do I need to bring my own sewing machine?', answer: 'No, our academy is fully equipped.' },
      { question: 'Do you offer flexible payment plans?', answer: 'Yes, we offer convenient installment plans for our comprehensive courses to make learning accessible.' },
      { question: 'Will I get a certificate upon completion?', answer: 'Yes, you will receive a recognized certificate from Rivo Vogue Fashion Academy upon successful graduation.' },
      { question: 'Do you assist with job placement or starting a business?', answer: 'Our curriculum includes a robust fashion business management module to help you confidently launch your own brand.' }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesList.find((s) => s.slug === slug);
}
