import { 
  Users, 
  Star, 
  Crown, 
  Scissors, 
  HeartHandshake, 
  Clock, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export const aboutHeroData = {
  title: "About Rivo Vogue",
  description: "Crafting unforgettable bridal experiences and bespoke fashion for those who demand excellence.",
  image: "/placeholder-hero.jpg" // User will provide media
};

export const ourStoryData = {
  title: "Our Story",
  paragraphs: [
    "Rivo Vogue — Bridal & Stitches was born out of a passion for redefining luxury and elegance in Ughelli, Delta State. We believe that every individual deserves to feel confident, empowered, and breathtaking on their most important days.",
    "Our journey began with a simple vision: to bring couture-level craftsmanship and premium bridal experiences to our local community and beyond. Today, we stand as a beacon of style, offering bespoke tailoring, premium rentals, and curated fashion pieces.",
    "Beyond creating beautiful garments, we are dedicated to nurturing the next generation of fashion innovators through our exclusive Fashion Academy. We don't just make clothes; we craft legacies."
  ]
};

export const whoWeServeData = {
  title: "Who We Serve",
  audiences: [
    {
      id: "brides",
      title: "Brides-to-be",
      description: "For the woman who wants her wedding day to be nothing short of a fairytale. We offer premium gown rentals, custom creations, and full styling.",
      icon: Crown,
      image: "/placeholder-audience-1.jpg"
    },
    {
      id: "asoebi",
      title: "Wedding Guests & Asoebi Groups",
      description: "Stand out elegantly. Our bespoke tailoring ensures you and your group are the epitome of style at any event.",
      icon: Users,
      image: "/placeholder-audience-2.jpg"
    },
    {
      id: "fashion-lovers",
      title: "Fashion Lovers",
      description: "Curated designer bags, luxury shoes, and premium perfumes for the modern, style-conscious woman.",
      icon: Sparkles,
      image: "/placeholder-audience-3.jpg"
    },
    {
      id: "designers",
      title: "Aspiring Designers",
      description: "Our Fashion Academy provides hands-on, intensive training for those ready to turn their passion into a thriving career.",
      icon: Scissors,
      image: "/placeholder-audience-4.jpg"
    }
  ]
};

export const founderData = {
  name: "Jane Doe", // Placeholder name
  role: "Founder & Creative Director",
  bio: "With over a decade of experience in couture design and luxury retail, our founder established Rivo Vogue to bridge the gap between high-end fashion and local accessibility. Her meticulous eye for detail and unwavering commitment to quality have made Rivo Vogue the premier destination for bridal and bespoke fashion in Delta State.",
  image: "/placeholder-founder.jpg"
};

export const ourValuesData = {
  title: "Our Philosophy",
  values: [
    {
      id: "quality",
      title: "Quality Craftsmanship",
      description: "Every stitch is placed with intention. We use only the finest materials to ensure our creations stand the test of time.",
      icon: Star
    },
    {
      id: "detail",
      title: "Attention to Detail",
      description: "From the first measurement to the final fitting, we obsess over the details so you don't have to.",
      icon: Scissors
    },
    {
      id: "customer",
      title: "Customer-First Approach",
      description: "Your vision is our blueprint. We listen, adapt, and deliver an experience tailored entirely to you.",
      icon: HeartHandshake
    },
    {
      id: "timeliness",
      title: "Timeliness",
      description: "We respect your time. Deadlines are sacred to us, ensuring you're ready well before your big event.",
      icon: Clock
    },
    {
      id: "luxury",
      title: "Affordable Luxury",
      description: "We believe premium experiences and stunning aesthetics shouldn't be out of reach.",
      icon: CheckCircle2
    }
  ]
};

export const workshopGalleryData = {
  title: "Inside the Atelier",
  images: [
    { id: 1, src: "/placeholder-gallery-1.jpg", alt: "Cutting process" },
    { id: 2, src: "/placeholder-gallery-2.jpg", alt: "Sewing details" },
    { id: 3, src: "/placeholder-gallery-3.jpg", alt: "Embroidery work" },
    { id: 4, src: "/placeholder-gallery-4.jpg", alt: "Styling session" },
    { id: 5, src: "/placeholder-gallery-5.jpg", alt: "Fittings" },
    { id: 6, src: "/placeholder-gallery-6.jpg", alt: "Academy class" }
  ]
};

export const statsData = [
  { id: "brides", label: "Brides Served", value: 500, suffix: "+" },
  { id: "students", label: "Students Trained", value: 150, suffix: "+" },
  { id: "outfits", label: "Custom Outfits Created", value: 2000, suffix: "+" }
];

export const aboutCtaData = {
  headline: "Let's create your perfect look or start your fashion journey.",
  primaryButton: { label: "Book Appointment", href: "/contact" },
  secondaryButton: { label: "Explore Services", href: "/services" },
  tertiaryButton: { label: "Learn About Academy", href: "/services/fashion-academy" }
};
