export type ProductCategory = 'All' | 'Bags' | 'Shoes' | 'Perfumes' | 'Accessories';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  hoverImage: string;
  galleryImages: string[];
  details: { label: string; value: string }[];
  isFeatured?: boolean;
  isNewArrival?: boolean;
};

export const storeProducts: Product[] = [
  {
    id: 'bag-001',
    slug: 'couture-pearl-clutch',
    name: 'Couture Pearl Clutch',
    category: 'Bags',
    price: '₦85,000',
    shortDescription: 'Hand-beaded pearl evening clutch with a gold-tone clasp.',
    fullDescription: 'Elevate your evening or bridal look with this exquisite hand-beaded pearl clutch. Designed in-house, it features a sturdy metallic frame, a lush velvet interior, and a detachable gold chain for versatile carrying options. A true statement piece for the sophisticated woman.',
    coverImage: '/placeholder-bag-1.jpg',
    hoverImage: '/placeholder-bag-1-hover.jpg',
    galleryImages: [
      '/placeholder-bag-1.jpg',
      '/placeholder-bag-1-hover.jpg',
      '/placeholder-bag-1-detail.jpg'
    ],
    details: [
      { label: 'Material', value: 'Faux Pearls & Satin' },
      { label: 'Dimensions', value: '7.5" W x 5" H x 2" D' },
      { label: 'Hardware', value: 'Gold-Tone' },
      { label: 'Availability', value: 'In Stock' }
    ],
    isFeatured: true,
    isNewArrival: true,
  },
  {
    id: 'shoe-001',
    slug: 'crystal-embellished-pumps',
    name: 'Crystal Embellished Pumps',
    category: 'Shoes',
    price: '₦120,000',
    shortDescription: 'Classic stiletto pumps adorned with Swarovski crystals.',
    fullDescription: 'Step into luxury. These pointed-toe pumps are meticulously crafted from premium satin and encrusted with light-catching crystals. The 100mm stiletto heel provides elegant elevation while the padded leather insole ensures comfort throughout your event.',
    coverImage: '/placeholder-shoe-1.jpg',
    hoverImage: '/placeholder-shoe-1-hover.jpg',
    galleryImages: [
      '/placeholder-shoe-1.jpg',
      '/placeholder-shoe-1-hover.jpg',
      '/placeholder-shoe-1-detail.jpg'
    ],
    details: [
      { label: 'Material', value: 'Silk Satin & Crystals' },
      { label: 'Heel Height', value: '100mm (4 inches)' },
      { label: 'Sole', value: 'Genuine Leather' },
      { label: 'Sizes', value: 'EU 37 - 42' }
    ],
    isFeatured: true,
  },
  {
    id: 'perfume-001',
    slug: 'rivo-signature-oud',
    name: 'Rivo Signature Oud',
    category: 'Perfumes',
    price: '₦65,000',
    shortDescription: 'An intoxicating blend of rose, amber, and deep agarwood.',
    fullDescription: 'Our signature scent. A highly concentrated Eau de Parfum that leaves an unforgettable trail. It opens with bright notes of Turkish rose, settling into a warm heart of amber, and finishing with a profound, lasting base of premium oud wood.',
    coverImage: '/placeholder-perfume-1.jpg',
    hoverImage: '/placeholder-perfume-1-hover.jpg',
    galleryImages: [
      '/placeholder-perfume-1.jpg',
      '/placeholder-perfume-1-hover.jpg',
    ],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' },
      { label: 'Top Notes', value: 'Turkish Rose, Saffron' },
      { label: 'Base Notes', value: 'Oud, Amber, Sandalwood' }
    ],
    isFeatured: true,
    isNewArrival: true,
  },
  {
    id: 'bag-002',
    slug: 'minimalist-tote-blush',
    name: 'Minimalist Leather Tote',
    category: 'Bags',
    price: '₦150,000',
    shortDescription: 'A structured, everyday luxury tote in blush pink.',
    fullDescription: 'The perfect companion for the modern woman. Crafted from top-grain calfskin leather, this tote offers ample space for daily essentials without compromising its sleek silhouette. Features a magnetic closure and an interior zip pocket.',
    coverImage: '/placeholder-bag-2.jpg',
    hoverImage: '/placeholder-bag-2-hover.jpg',
    galleryImages: [
      '/placeholder-bag-2.jpg',
      '/placeholder-bag-2-hover.jpg',
    ],
    details: [
      { label: 'Material', value: 'Top-Grain Calfskin' },
      { label: 'Dimensions', value: '14" W x 11" H x 5" D' },
      { label: 'Color', value: 'Blush Pink' }
    ],
  },
  {
    id: 'shoe-002',
    slug: 'metallic-strappy-sandals',
    name: 'Metallic Strappy Sandals',
    category: 'Shoes',
    price: '₦95,000',
    shortDescription: 'Elegant gold metallic sandals perfect for Asoebi and events.',
    fullDescription: 'Designed to complement both traditional Asoebi and modern evening gowns. These sandals feature delicate, supportive straps and a comfortable 85mm block heel, allowing you to dance the night away in style.',
    coverImage: '/placeholder-shoe-2.jpg',
    hoverImage: '/placeholder-shoe-2-hover.jpg',
    galleryImages: [
      '/placeholder-shoe-2.jpg',
      '/placeholder-shoe-2-hover.jpg',
    ],
    details: [
      { label: 'Material', value: 'Metallic Nappa Leather' },
      { label: 'Heel Height', value: '85mm Block Heel' },
      { label: 'Sizes', value: 'EU 36 - 43' }
    ],
  },
  {
    id: 'perfume-002',
    slug: 'midnight-bloom',
    name: 'Midnight Bloom',
    category: 'Perfumes',
    price: '₦55,000',
    shortDescription: 'A seductive white floral fragrance with vanilla undertones.',
    fullDescription: 'Feminine and alluring. Midnight Bloom captures the essence of a moonlit garden. Intoxicating tuberose and jasmine are balanced perfectly with a warm, sweet vanilla absolute base.',
    coverImage: '/placeholder-perfume-2.jpg',
    hoverImage: '/placeholder-perfume-2-hover.jpg',
    galleryImages: [
      '/placeholder-perfume-2.jpg',
      '/placeholder-perfume-2-hover.jpg',
    ],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' },
      { label: 'Family', value: 'White Floral / Sweet' }
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return storeProducts.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return storeProducts.filter((p) => p.isFeatured);
}

export function getProductsByCategory(category: ProductCategory | 'All'): Product[] {
  if (category === 'All') return storeProducts;
  return storeProducts.filter((p) => p.category === category);
}
