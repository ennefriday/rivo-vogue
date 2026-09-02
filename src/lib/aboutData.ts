import { 
  Users, 
  Star, 
  Crown, 
  Scissors, 
  HeartHandshake, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Eye,
  Target
} from 'lucide-react';

export const aboutHeroData = {
  title: "About Rivo Vogue",
  description: "Crafting unforgettable bridal experiences and bespoke fashion for those who demand excellence.",
  image: "/about_us.webp" // User will provide media
};

export const ourStoryData = {
  title: "Our Story",
  paragraphs: [
    "Rivo Vogue — Bridal & Stitches was born out of a passion for redefining luxury and elegance in Ughelli, Delta State. We believe that every individual deserves to feel confident, empowered, and breathtaking on their most important days.",
    "Our journey began with a simple vision: to bring couture-level craftsmanship and premium bridal experiences to our local community and beyond. Today, we stand as a beacon of style, offering bespoke tailoring, premium rentals, and curated fashion pieces.",
    "Beyond creating beautiful garments, we are dedicated to nurturing the next generation of fashion innovators through our exclusive Fashion Academy. We don't just make clothes; we craft legacies."
  ]
};

export const visionMissionData = {
  vision: {
    title: "Our Vision",
    description: "To be the ultimate destination for luxury fashion and bridal elegance in Nigeria, recognized for unparalleled craftsmanship, timeless designs, and empowering the next generation of creative fashion leaders.",
    icon: Eye
  },
  mission: {
    title: "Our Mission",
    description: "To craft breathtaking, bespoke garments that celebrate individuality and heritage. We are dedicated to providing a premium, seamless experience for every client, while fostering a thriving community of skilled artisans through our fashion academy.",
    icon: Target
  }
};

export const founderData = {
  name: "Rita", 
  role: "Founder & Creative Director",
  bio: "With over a decade of experience in couture design and luxury retail, our founder established Rivo Vogue to bridge the gap between high-end fashion and local accessibility. Her meticulous eye for detail and unwavering commitment to quality have made Rivo Vogue the premier destination for bridal and bespoke fashion in Delta State.",
  image: "/rita.webp"
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
  title: "Inside the Fashion House",
  images: [
    { id: 1, src: "/about/fashion_workspace.jpg", alt: "The Bridal & Fashion Workspace" },
    { id: 2, src: "/about/dressmaking_progress.jpg", alt: "Dressmaking in Progress" },
    { id: 3, src: "/about/bridal_craftsmanship.jpg", alt: "Bridal Gown Craftsmanship" },
    { id: 4, src: "/about/fabric_selection.jpg", alt: "Fabric & Material Selection" },
    { id: 5, src: "/about/fitting_finishing.jpg", alt: "Fitting & Finishing" },
    { id: 6, src: "/about/finished.webp", alt: "Finished Creations on Display" }
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
