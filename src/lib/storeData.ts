export type ProductCategory = 'All' | 'Dresses' | 'Bags' | 'Shoes' | 'Perfumes' | 'Accessories';

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
    id: 'dress-001',
    slug: 'regal-emerald-velvet-gown',
    name: 'Regal Emerald Velvet Gown',
    category: 'Dresses',
    price: '₦250,000',
    shortDescription: 'Exquisite Regal Emerald Velvet Gown crafted for perfection.',
    fullDescription: 'Experience the ultimate luxury with our Regal Emerald Velvet Gown. Perfectly tailored to elevate your presence on any occasion.',
    coverImage: '/store/dress/dress1.1.webp',
    hoverImage: '/store/dress/dress1.2.webp',
    galleryImages: ['/store/dress/dress1.1.webp', '/store/dress/dress1.2.webp'],
    details: [
      { label: 'Material', value: 'Premium Fabric' },
      { label: 'Care', value: 'Dry Clean Only' }
    ],
    isFeatured: true,
  },
  {
    id: 'dress-002',
    slug: 'ivory-duchess-satin',
    name: 'Ivory Duchess Satin Bridal Dress',
    category: 'Dresses',
    price: '₦450,000',
    shortDescription: 'Exquisite Ivory Duchess Satin Bridal Dress crafted for perfection.',
    fullDescription: 'Experience the ultimate luxury with our Ivory Duchess Satin Bridal Dress. Perfectly tailored to elevate your presence on any occasion.',
    coverImage: '/store/dress/dress2.1.webp',
    hoverImage: '/store/dress/dress2.2.webp',
    galleryImages: ['/store/dress/dress2.1.webp', '/store/dress/dress2.2.webp'],
    details: [
      { label: 'Material', value: 'Premium Fabric' },
      { label: 'Care', value: 'Dry Clean Only' }
    ],
    isFeatured: true,
  },
  {
    id: 'dress-003',
    slug: 'champagne-lace-asoebi',
    name: 'Champagne Lace Asoebi Dress',
    category: 'Dresses',
    price: '₦180,000',
    shortDescription: 'Exquisite Champagne Lace Asoebi Dress crafted for perfection.',
    fullDescription: 'Experience the ultimate luxury with our Champagne Lace Asoebi Dress. Perfectly tailored to elevate your presence on any occasion.',
    coverImage: '/store/dress/dress3.1.webp',
    hoverImage: '/store/dress/dress3.2.webp',
    galleryImages: ['/store/dress/dress3.1.webp', '/store/dress/dress3.2.webp'],
    details: [
      { label: 'Material', value: 'Premium Fabric' },
      { label: 'Care', value: 'Dry Clean Only' }
    ],
    isFeatured: true,
  },
  {
    id: 'perfume-003',
    slug: 'signature-scent-1',
    name: 'Signature Scent 1',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per1.png',
    hoverImage: '/store/perfume/per1.png',
    galleryImages: ['/store/perfume/per1.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
  {
    id: 'perfume-004',
    slug: 'signature-scent-2',
    name: 'Signature Scent 2',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per2.png',
    hoverImage: '/store/perfume/per2.png',
    galleryImages: ['/store/perfume/per2.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
  {
    id: 'perfume-005',
    slug: 'signature-scent-3',
    name: 'Signature Scent 3',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per3.png',
    hoverImage: '/store/perfume/per3.png',
    galleryImages: ['/store/perfume/per3.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
  {
    id: 'perfume-006',
    slug: 'signature-scent-4',
    name: 'Signature Scent 4',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per4.png',
    hoverImage: '/store/perfume/per4.png',
    galleryImages: ['/store/perfume/per4.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
  {
    id: 'perfume-007',
    slug: 'signature-scent-5',
    name: 'Signature Scent 5',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per5.png',
    hoverImage: '/store/perfume/per5.png',
    galleryImages: ['/store/perfume/per5.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
  {
    id: 'perfume-008',
    slug: 'signature-scent-6',
    name: 'Signature Scent 6',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per6.png',
    hoverImage: '/store/perfume/per6.png',
    galleryImages: ['/store/perfume/per6.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
  {
    id: 'perfume-009',
    slug: 'signature-scent-7',
    name: 'Signature Scent 7',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per7.png',
    hoverImage: '/store/perfume/per7.png',
    galleryImages: ['/store/perfume/per7.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
  {
    id: 'perfume-0010',
    slug: 'signature-scent-8',
    name: 'Signature Scent 8',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per8.png',
    hoverImage: '/store/perfume/per8.png',
    galleryImages: ['/store/perfume/per8.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
  {
    id: 'perfume-0011',
    slug: 'signature-scent-9',
    name: 'Signature Scent 9',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per9.png',
    hoverImage: '/store/perfume/per9.png',
    galleryImages: ['/store/perfume/per9.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
  {
    id: 'perfume-0012',
    slug: 'signature-scent-10',
    name: 'Signature Scent 10',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per10.png',
    hoverImage: '/store/perfume/per10.png',
    galleryImages: ['/store/perfume/per10.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
  {
    id: 'perfume-0013',
    slug: 'signature-scent-11',
    name: 'Signature Scent 11',
    category: 'Perfumes',
    price: '₦75,000',
    shortDescription: 'An alluring blend of premium ingredients.',
    fullDescription: 'A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.',
    coverImage: '/store/perfume/per11.png',
    hoverImage: '/store/perfume/per11.png',
    galleryImages: ['/store/perfume/per11.png'],
    details: [
      { label: 'Volume', value: '100ml / 3.4 fl oz' },
      { label: 'Type', value: 'Eau de Parfum' }
    ],
  },
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
  },  {
    "id": "bag-gen-1",
    "slug": "luxury-bag-1",
    "name": "Luxury Bag 1",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_1.jpg",
    "hoverImage": "/store/bag/bag_1.jpg",
    "galleryImages": [
      "/store/bag/bag_1.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": true,
    "isNewArrival": false
  },
  {
    "id": "bag-gen-2",
    "slug": "luxury-bag-2",
    "name": "Luxury Bag 2",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_2.jpg",
    "hoverImage": "/store/bag/bag_2.jpg",
    "galleryImages": [
      "/store/bag/bag_2.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "bag-gen-3",
    "slug": "luxury-bag-3",
    "name": "Luxury Bag 3",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_3.jpg",
    "hoverImage": "/store/bag/bag_3.jpg",
    "galleryImages": [
      "/store/bag/bag_3.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "bag-gen-4",
    "slug": "luxury-bag-4",
    "name": "Luxury Bag 4",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_4.jpg",
    "hoverImage": "/store/bag/bag_4.jpg",
    "galleryImages": [
      "/store/bag/bag_4.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "bag-gen-5",
    "slug": "luxury-bag-5",
    "name": "Luxury Bag 5",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_5.jpg",
    "hoverImage": "/store/bag/bag_5.jpg",
    "galleryImages": [
      "/store/bag/bag_5.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "bag-gen-6",
    "slug": "luxury-bag-6",
    "name": "Luxury Bag 6",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_6.jpg",
    "hoverImage": "/store/bag/bag_6.jpg",
    "galleryImages": [
      "/store/bag/bag_6.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "bag-gen-7",
    "slug": "luxury-bag-7",
    "name": "Luxury Bag 7",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_7.jpg",
    "hoverImage": "/store/bag/bag_7.jpg",
    "galleryImages": [
      "/store/bag/bag_7.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "bag-gen-8",
    "slug": "luxury-bag-8",
    "name": "Luxury Bag 8",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_8.jpg",
    "hoverImage": "/store/bag/bag_8.jpg",
    "galleryImages": [
      "/store/bag/bag_8.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": false,
    "isNewArrival": true
  },
  {
    "id": "bag-gen-9",
    "slug": "luxury-bag-9",
    "name": "Luxury Bag 9",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_9.jpg",
    "hoverImage": "/store/bag/bag_9.jpg",
    "galleryImages": [
      "/store/bag/bag_9.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": false,
    "isNewArrival": true
  },
  {
    "id": "bag-gen-10",
    "slug": "luxury-bag-10",
    "name": "Luxury Bag 10",
    "category": "Bags",
    "price": "₦210,000",
    "shortDescription": "An eye-catching luxury bag, beautifully presented.",
    "fullDescription": "Elevate your wardrobe with this stunning luxury bag featuring an exquisite design and premium materials.",
    "coverImage": "/store/bag/bag_10.jpg",
    "hoverImage": "/store/bag/bag_10.jpg",
    "galleryImages": [
      "/store/bag/bag_10.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Availability",
        "value": "In Stock"
      }
    ],
    "isFeatured": false,
    "isNewArrival": true
  },
  {
    "id": "shoe-gen-1",
    "slug": "luxury-shoe-1",
    "name": "Luxury Shoe 1",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_1.jpg",
    "hoverImage": "/store/shoes/shoe_1.jpg",
    "galleryImages": [
      "/store/shoes/shoe_1.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "shoe-gen-2",
    "slug": "luxury-shoe-2",
    "name": "Luxury Shoe 2",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_2.jpg",
    "hoverImage": "/store/shoes/shoe_2.jpg",
    "galleryImages": [
      "/store/shoes/shoe_2.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "shoe-gen-3",
    "slug": "luxury-shoe-3",
    "name": "Luxury Shoe 3",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_3.jpg",
    "hoverImage": "/store/shoes/shoe_3.jpg",
    "galleryImages": [
      "/store/shoes/shoe_3.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "shoe-gen-4",
    "slug": "luxury-shoe-4",
    "name": "Luxury Shoe 4",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_4.jpg",
    "hoverImage": "/store/shoes/shoe_4.jpg",
    "galleryImages": [
      "/store/shoes/shoe_4.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "shoe-gen-5",
    "slug": "luxury-shoe-5",
    "name": "Luxury Shoe 5",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_5.jpg",
    "hoverImage": "/store/shoes/shoe_5.jpg",
    "galleryImages": [
      "/store/shoes/shoe_5.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "shoe-gen-6",
    "slug": "luxury-shoe-6",
    "name": "Luxury Shoe 6",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_6.jpg",
    "hoverImage": "/store/shoes/shoe_6.jpg",
    "galleryImages": [
      "/store/shoes/shoe_6.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "shoe-gen-7",
    "slug": "luxury-shoe-7",
    "name": "Luxury Shoe 7",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_7.jpg",
    "hoverImage": "/store/shoes/shoe_7.jpg",
    "galleryImages": [
      "/store/shoes/shoe_7.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "shoe-gen-8",
    "slug": "luxury-shoe-8",
    "name": "Luxury Shoe 8",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_8.jpg",
    "hoverImage": "/store/shoes/shoe_8.jpg",
    "galleryImages": [
      "/store/shoes/shoe_8.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "shoe-gen-9",
    "slug": "luxury-shoe-9",
    "name": "Luxury Shoe 9",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_9.jpg",
    "hoverImage": "/store/shoes/shoe_9.jpg",
    "galleryImages": [
      "/store/shoes/shoe_9.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "shoe-gen-10",
    "slug": "luxury-shoe-10",
    "name": "Luxury Shoe 10",
    "category": "Shoes",
    "price": "₦180,000",
    "shortDescription": "An elegant women's designer shoe.",
    "fullDescription": "Step into luxury. These beautiful shoes are meticulously crafted for elegance and comfort.",
    "coverImage": "/store/shoes/shoe_10.jpg",
    "hoverImage": "/store/shoes/shoe_10.jpg",
    "galleryImages": [
      "/store/shoes/shoe_10.jpg"
    ],
    "details": [
      {
        "label": "Material",
        "value": "Premium Leather"
      },
      {
        "label": "Sizes",
        "value": "EU 37 - 42"
      }
    ],
    "isFeatured": false,
    "isNewArrival": false
  },
  {
    "id": "perfume-gen-11",
    "slug": "signature-scent-11",
    "category": "Perfumes",
    "name": "Signature Scent 11",
    "price": "₦75,000",
    "shortDescription": "An alluring blend of premium ingredients.",
    "fullDescription": "A captivating fragrance that leaves a lasting impression, perfect for both day and evening wear.",
    "coverImage": "/store/perfume/per11.png",
    "hoverImage": "/store/perfume/per11.png",
    "galleryImages": [
      "/store/perfume/per11.png"
    ],
    "details": [
      {
        "label": "Volume",
        "value": "100ml / 3.4 fl oz"
      },
      {
        "label": "Type",
        "value": "Eau de Parfum"
      }
    ]
  }
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
