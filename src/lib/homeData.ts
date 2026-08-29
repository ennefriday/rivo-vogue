export interface AudienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  imageSrc: string;
}

export interface StoreItem {
  id: string;
  name: string;
  category: 'Dresses' | 'Bags' | 'Shoes' | 'Perfumes' | 'Accessories';
  price: string;
  originalPrice?: string;
  description: string;
  imageSrc: string;
  hoverImageSrc?: string;
  isNew?: boolean;
}

export interface TransformationPillar {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TrustItem {
  title: string;
  description: string;
  iconName: 'Crown' | 'ShieldCheck' | 'Clock' | 'Sparkles';
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal Gowns' | 'Asoebi & Party' | 'Bespoke Couture' | 'Academy';
  mediaType: 'image' | 'video';
  mediaSrc: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  caption: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  role: string;
  quote: string;
  serviceUsed: string;
  date: string;
  imageSrc?: string;
}

/* ─────────────────────────────────────────────────────────────
 * AUDIENCE SEGMENTS (7 Categories)
 * ───────────────────────────────────────────────────────────── */
export const AUDIENCE_LIST: AudienceItem[] = [
  {
    id: 'brides',
    title: 'Brides-to-Be',
    subtitle: 'Bridal Royalty',
    description: 'Breathtaking bridal gowns crafted to make your dream day unforgettable.',
    badge: 'Bridal Collection',
    imageSrc: '/whofor/bride-to-be.webp',
  },
  {
    id: 'bridal-trains',
    title: 'Bridesmaids & Bridal Trains',
    subtitle: 'Coordinated Harmony',
    description: 'Elegant, perfectly coordinated dresses for your bridal party that look expensive but fit your budget.',
    badge: 'Entourage Styling',
    imageSrc: '/whofor/bride-train.webp',
  },
  {
    id: 'asoebi-groups',
    title: 'Wedding Guests & Asoebi Groups',
    subtitle: 'Cultural Splendor',
    description: 'Head-turning bespoke styles tailored with precision, ensuring you stand out brilliantly at every celebration.',
    badge: 'Asoebi Specialization',
    imageSrc: '/whofor/asoebi.webp',
  },
  {
    id: 'gala-attendees',
    title: 'Red Carpet & Gala Attendees',
    subtitle: 'High-Society Glamour',
    description: 'Showstopping evening gowns that deliver red-carpet glamour and sophisticated style at an accessible price.',
    badge: 'Haute Couture',
    imageSrc: '/whofor/gala.webp',
  },
  {
    id: 'fashion-forward',
    title: 'Fashion-Forward Women',
    subtitle: 'Curated Elegance',
    description: 'Curated statement accessories and premium footwear designed to elevate your look effortlessly.',
    badge: 'Accessories & Scent',
    imageSrc: '/whofor/fashion.webp',
  },
  {
    id: 'luxury-shoppers',
    title: 'Curated Luxury Shoppers',
    subtitle: 'Exclusive Boutique',
    description: 'Exclusive ready-to-wear pieces offering international boutique quality without the extravagant markup.',
    badge: 'Boutique Collection',
    imageSrc: '/whofor/boutigue.webp',
  },
];

/* ─────────────────────────────────────────────────────────────
 * STORE SHOWCASE (Curated Items)
 * ───────────────────────────────────────────────────────────── */
export const STORE_SHOWCASE: StoreItem[] = [
  {
    id: 'regal-emerald-gown',
    name: 'Regal Emerald Velvet Gown',
    category: 'Dresses',
    price: '₦250,000',
    description: 'Breathtaking evening gown featuring architectural off-shoulder neckline and rich velvet.',
    imageSrc: '/store/dress/dress1.1.webp',
    hoverImageSrc: '/store/dress/dress1.2.webp',
    isNew: true,
  },
  {
    id: 'ivory-bridal-satin',
    name: 'Ivory Duchess Satin Bridal Dress',
    category: 'Dresses',
    price: '₦450,000',
    originalPrice: '₦550,000',
    description: 'Sculpted mermaid silhouette in heavyweight duchess satin with exquisite detailing.',
    imageSrc: '/store/dress/dress2.1.webp',
    hoverImageSrc: '/store/dress/dress2.2.webp',
  },
  {
    id: 'champagne-lace-asoebi',
    name: 'Champagne Lace Asoebi Dress',
    category: 'Dresses',
    price: '₦180,000',
    description: 'Hand-beaded lace dress with intricate detailing and train for grand occasions.',
    imageSrc: '/store/dress/dress3.1.webp',
    hoverImageSrc: '/store/dress/dress3.2.webp',
    isNew: true,
  },
  {
    id: 'oud-imperiale',
    name: 'Oud Impériale Extrait de Parfum',
    category: 'Perfumes',
    price: '₦95,000',
    description: 'A heady fusion of royal amber, smoky Cambodian oud, and velvety Bulgarian damask rose.',
    imageSrc: '/store/perfume/per1.png',
  },
  {
    id: 'floral-symphony',
    name: 'Floral Symphony Eau de Parfum',
    category: 'Perfumes',
    price: '₦75,000',
    originalPrice: '₦85,000',
    description: 'A delicate blend of jasmine, white peony, and warm vanilla musk for elegant wear.',
    imageSrc: '/store/perfume/per3.png',
    isNew: true,
  },
];

/* ─────────────────────────────────────────────────────────────
 * TRANSFORMATION PILLARS
 * ───────────────────────────────────────────────────────────── */
export const TRANSFORMATION_PILLARS: TransformationPillar[] = [
  {
    number: '01',
    title: 'Radiant Confidence on Your Grandest Day',
    description: 'Every silhouette is sculpted to enhance your natural posture, providing comfortable grandeur that allows you to celebrate effortlessly.',
  },
  {
    number: '02',
    title: 'Commanding Distinction in Any Room',
    description: 'Custom proportioning and intentional architectural lines guarantee your arrival is felt with authentic grace and prestige.',
  },
  {
    number: '03',
    title: 'Uncompromising Precision & Personal Fit',
    description: 'Say goodbye to ill-fitting off-the-rack compromises. We take over 28 individual anatomical measurements for second-skin perfection.',
  },
  {
    number: '04',
    title: 'Heirloom Quality & Master Craftsmanship',
    description: 'Finished with reinforced French seams, hand-stitched linings, and durable luxury fabrics engineered to endure generations.',
  },
];

/* ─────────────────────────────────────────────────────────────
 * HOW IT WORKS (6-Step Journey)
 * ───────────────────────────────────────────────────────────── */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Service Selection',
    description: 'Explore our bridal rentals, bespoke couture, styling, or academy offerings.',
  },
  {
    step: '02',
    title: 'Private Consultation',
    description: 'Discuss silhouettes, fabric palettes, and wedding themes with our lead stylist.',
  },
  {
    step: '03',
    title: 'Vision & Quote',
    description: 'Receive transparent pricing, custom sketch proposals, and delivery timelines.',
  },
  {
    step: '04',
    title: 'Measurement & Fitting',
    description: 'Experience precision body mapping in our Ughelli salon or virtual fitting guide.',
  },
  {
    step: '05',
    title: 'Fashion House Crafting',
    description: 'Our master seamstresses cut, drape, and bead your piece with artisan care.',
  },
  {
    step: '06',
    title: 'Final Reveal & Delivery',
    description: 'Step into your perfected garment with styled accessories ready for your spotlight.',
  },
];

/* ─────────────────────────────────────────────────────────────
 * TRUST PILLARS
 * ───────────────────────────────────────────────────────────── */
export const TRUST_PILLARS: TrustItem[] = [
  {
    title: 'Master Pattern Drafting',
    description: 'Architectural garment construction engineered for comfort, mobility, and flattering curves.',
    iconName: 'Crown',
  },
  {
    title: 'Strict Quality Standards',
    description: 'Triple-tier inspection covering thread tension, seam durability, and authentic luxury embellishments.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Guaranteed Timelines',
    description: 'Rigid production calendar ensuring your bridal or asoebi wardrobe is finalized well before your date.',
    iconName: 'Clock',
  },
  {
    title: 'Full-Spectrum Styling',
    description: 'Complete curation from footwear and jewelry to hairpieces and signature perfumes.',
    iconName: 'Sparkles',
  },
];

/* ─────────────────────────────────────────────────────────────
 * STATS COUNTERS
 * ───────────────────────────────────────────────────────────── */
export const STATS_LIST: StatItem[] = [
  {
    value: '500+',
    label: 'Brides & Clients Adorned',
    sublabel: '',
  },
  {
    value: '100%',
    label: 'Satisfied Customers',
    sublabel: '',
  },
  {
    value: '8+',
    label: 'Years of Fashion House Mastery',
    sublabel: '',
  },
  {
    value: '150+',
    label: 'Academy Graduates',
    sublabel: '',
  },
];

/* ─────────────────────────────────────────────────────────────
 * PORTFOLIO SHOWCASE (4 Photos + 2 Videos)
 * ───────────────────────────────────────────────────────────── */
export const PORTFOLIO_IMAGES: PortfolioItem[] = [
  {
    id: 'portfolio-image-1',
    title: 'LA BOHEME',
    category: 'Bridal Gowns',
    mediaType: 'image',
    mediaSrc: '/portfolio/bride-to-be.webp',
    aspectRatio: 'portrait',
    caption: 'Discover real stories of women who chose Rivo Vogue.',
  },
  {
    id: 'portfolio-image-2',
    title: 'JARDIN DE LUMIERE',
    category: 'Bridal Gowns',
    mediaType: 'image',
    mediaSrc: '/portfolio/bride1.webp',
    aspectRatio: 'portrait',
    caption: 'Discover real stories of women who chose Rivo Vogue.',
  },
  {
    id: 'portfolio-image-3',
    title: 'THE NYMPH',
    category: 'Bridal Gowns',
    mediaType: 'image',
    mediaSrc: '/portfolio/bride2.webp',
    aspectRatio: 'portrait',
    caption: 'Discover real stories of women who chose Rivo Vogue.',
  },
  {
    id: 'portfolio-image-4',
    title: 'MODERN CLASSIC',
    category: 'Bridal Gowns',
    mediaType: 'image',
    mediaSrc: '/portfolio/bride3.webp',
    aspectRatio: 'portrait',
    caption: 'Discover real stories of women who chose Rivo Vogue.',
  },
  {
    id: 'portfolio-image-5',
    title: 'ASOEBI EMERALD',
    category: 'Asoebi & Party',
    mediaType: 'image',
    mediaSrc: '/portfolio/asoebi.webp',
    aspectRatio: 'portrait',
    caption: 'Discover real stories of women who chose Rivo Vogue.',
  },
  {
    id: 'portfolio-image-6',
    title: 'ASOEBI RUBY',
    category: 'Asoebi & Party',
    mediaType: 'image',
    mediaSrc: '/portfolio/aseobi2.webp',
    aspectRatio: 'portrait',
    caption: 'Discover real stories of women who chose Rivo Vogue.',
  },
  {
    id: 'portfolio-image-7',
    title: 'ETHEREAL GRACE',
    category: 'Bridal Gowns',
    mediaType: 'image',
    mediaSrc: '/portfolio/bride4.webp',
    aspectRatio: 'portrait',
    caption: 'Discover real stories of women who chose Rivo Vogue.',
  },
  {
    id: 'portfolio-image-8',
    title: 'TIMELESS BEAUTY',
    category: 'Bridal Gowns',
    mediaType: 'image',
    mediaSrc: '/portfolio/bride5.webp',
    aspectRatio: 'portrait',
    caption: 'Discover real stories of women who chose Rivo Vogue.',
  }
];

export const PORTFOLIO_VIDEOS: PortfolioItem[] = [
  {
    id: 'portfolio-video-1',
    title: 'The Royal Delta Bride',
    category: 'Bridal Gowns',
    mediaType: 'video',
    mediaSrc: 'https://res.cloudinary.com/dwrcqtkjc/video/upload/v1787923377/port1_fqm0h8.mp4',
    aspectRatio: 'portrait',
    caption: 'Hand-beaded cathedral gown featuring ivory Swarovski crystals and embroidered Chantilly lace overlay.',
  },
  {
    id: 'portfolio-video-2',
    title: 'Catwalk & Silhouette Movement',
    category: 'Bespoke Couture',
    mediaType: 'video',
    mediaSrc: 'https://res.cloudinary.com/dwrcqtkjc/video/upload/v1787923934/port2_yoh7l2.mp4',
    aspectRatio: 'portrait',
    caption: 'Fluid silk georgette drape and structural corsetry in motion during bridal preview.',
  },
];

/* ─────────────────────────────────────────────────────────────
 * TESTIMONIALS (5 Real Reviews)
 * ───────────────────────────────────────────────────────────── */
export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    clientName: 'Dr. Eseoghene O.',
    location: 'Ughelli / Lagos',
    role: 'Traditional & White Wedding Bride',
    quote: 'Rivo Vogue made me feel like pure royalty. From the first consultation in Ughelli to the final white gown fitting, every stitch was sculpted to perfection. My guests are still talking about my reception dress!',
    serviceUsed: 'Premium Wedding Gown Rental & Bespoke Reception Gown',
    date: 'December 2025',
    imageSrc: '/media/testimonials/eseoghene.jpg',
  },
  {
    id: 'testimonial-2',
    clientName: 'Mrs. Oghenekevwe M.',
    location: 'Warri, Delta State',
    role: 'Mother of the Bride & Asoebi Leader',
    quote: 'Coordinating 18 asoebi dresses seemed daunting until Rivo Vogue stepped in. They handled each lady’s measurements with utmost patience and delivered two weeks early. Outstanding craftsmanship!',
    serviceUsed: 'Asoebi Specialization & Luxury Styling',
    date: 'January 2026',
    imageSrc: '/media/testimonials/oghenekevwe.jpg',
  },
  {
    id: 'testimonial-3',
    clientName: 'Blessing A.',
    location: 'London, UK (Diaspora Bride)',
    role: 'Destination Bride',
    quote: 'Planning my Delta State wedding from London was stress-free thanks to Rivo Vogue. The virtual fitting process was incredibly precise, and my gown fit like a glove upon my arrival in Nigeria.',
    serviceUsed: 'Custom Bespoke Bridal Couture',
    date: 'November 2025',
    imageSrc: '/media/testimonials/blessing.jpg',
  },
  {
    id: 'testimonial-4',
    clientName: 'Tega V.',
    location: 'Asaba, Delta State',
    role: 'Fashion Academy Alumna',
    quote: 'The Fashion Academy transformed my perspective on tailoring. Learning luxury garment finishes and pattern drafting gave me the confidence to launch my own bridal studio in Asaba.',
    serviceUsed: 'Fashion Academy Diploma Course',
    date: 'October 2025',
    imageSrc: '/media/testimonials/tega.jpg',
  },
  {
    id: 'testimonial-5',
    clientName: 'Chiamaka N.',
    location: 'Port Harcourt, Rivers State',
    role: 'Gala & Red Carpet Client',
    quote: 'The attention to detail is truly world-class. The luxury shoes and clutch curated for my gala evening gown were breathtaking. Rivo Vogue is definitely my go-to fashion sanctuary.',
    serviceUsed: 'Bespoke Evening Wear & Designer Accessories',
    date: 'February 2026',
    imageSrc: '/media/testimonials/chiamaka.jpg',
  },
];
