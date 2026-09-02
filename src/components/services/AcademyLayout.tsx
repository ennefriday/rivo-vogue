"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Service } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';
import { CheckCircle2, Send, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

interface AcademyLayoutProps {
  service: Service;
}

export function AcademyLayout({ service }: AcademyLayoutProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Beginners Course',
    experience: 'None'
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, course, experience } = formData;
    
    // Format the WhatsApp message
    const message = `Hello Rivo Vogue Fashion Academy! 🎓\n\nI am interested in registering for an academy course.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Preferred Course:* ${course}\n*Experience Level:* ${experience}\n\nPlease let me know the next steps for enrollment. Thank you!`;
    
    // WhatsApp URL (International format for 07088835025 is 2347088835025)
    const whatsappUrl = `https://wa.me/2347088835025?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-brand-ivory text-brand-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${service.coverImage})` }}
        />
        <div className="absolute inset-0 bg-brand-charcoal/70" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-7xl font-serif text-brand-ivory font-light mb-6 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: coutureEase }}
          >
            {service.title}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl text-brand-ivory/80 font-sans max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: coutureEase }}
          >
            {service.fullDescription}
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us & Curriculum */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-8">Master the Art of Couture</h2>
            <p className="text-brand-charcoal/70 mb-6 leading-relaxed">
              Our fashion academy isn't just about sewing; it's about building a sustainable, thriving fashion brand. We combine practical, hands-on techniques with modern fashion business strategies.
            </p>
            <ul className="space-y-4">
              {[
                "Expert-led pattern drafting & garment construction",
                "Fashion illustration & creative design",
                "Fabric sourcing & textile knowledge",
                "Fashion business management & branding"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold mt-1 mr-3 flex-shrink-0" />
                  <span className="text-brand-charcoal/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative h-[500px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src={service.galleryImages[0]?.src || '/placeholder-1.jpg'} 
              alt={service.galleryImages[0]?.alt || 'Academy Masterclass'}
              fill
              className="object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Visual Break / Secondary Image */}
      {service.galleryImages[1] && (
        <section className="w-full h-[60vh] relative overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${service.galleryImages[1].src})` }}
          />
          <div className="absolute inset-0 bg-brand-charcoal/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-ivory font-light max-w-4xl leading-tight">
              "Empowering the next generation of creative fashion leaders."
            </h2>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-24 px-6 lg:px-12 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">Frequently Asked Questions</h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        </div>

        <div className="space-y-4">
          {service.faqs?.map((faq, index) => (
            <div 
              key={index} 
              className="border border-brand-charcoal/10 bg-white p-6 cursor-pointer hover:border-brand-gold/50 transition-colors"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-serif text-xl">{faq.question}</h3>
                {openFaq === index ? <ChevronUp className="text-brand-gold" /> : <ChevronDown className="text-brand-charcoal/40" />}
              </div>
              {openFaq === index && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 text-brand-charcoal/70 font-sans"
                >
                  {faq.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form (WhatsApp Integration) */}
      <section className="py-24 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-4 text-brand-gold">Register Now</h2>
            <p className="text-brand-ivory/70 font-light max-w-2xl mx-auto">
              Ready to begin your journey? Fill out the form below. Once submitted, a customized WhatsApp message will be generated to securely send your registration details directly to our admissions team.
            </p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6 bg-brand-ivory/5 p-8 md:p-12 border border-brand-ivory/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wider uppercase text-brand-ivory/60">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-brand-ivory/20 px-0 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wider uppercase text-brand-ivory/60">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-brand-ivory/20 px-0 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wider uppercase text-brand-ivory/60">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-brand-ivory/20 px-0 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="+234 800 000 0000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium tracking-wider uppercase text-brand-ivory/60">Preferred Course</label>
                <select 
                  name="course" 
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-brand-ivory/20 px-0 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors [&>option]:bg-brand-charcoal"
                >
                  <option value="Beginners Course">Beginners Course</option>
                  <option value="Advanced Pattern Drafting">Advanced Pattern Drafting</option>
                  <option value="Fashion Business Masterclass">Fashion Business Masterclass</option>
                </select>
              </div>
            </div>

            <div className="space-y-2 pb-6">
              <label className="text-sm font-medium tracking-wider uppercase text-brand-ivory/60">Current Experience Level</label>
              <select 
                name="experience" 
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-brand-ivory/20 px-0 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors [&>option]:bg-brand-charcoal"
              >
                <option value="None">None (Absolute Beginner)</option>
                <option value="Basic Sewing">Basic Sewing</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced / Professional</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full group relative flex items-center justify-center gap-3 bg-brand-gold text-brand-charcoal py-4 px-8 font-medium tracking-wider uppercase hover:bg-brand-ivory transition-colors duration-300"
            >
              <span>Submit via WhatsApp</span>
              <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
