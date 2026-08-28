"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { servicesList } from '@/lib/servicesData';
import { coutureEase } from '@/lib/animations';

export function ContactSplitLayout() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `*New Booking Inquiry* 
------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*Service Interest:* ${formData.serviceInterest}
*Preferred Date:* ${formData.date || 'Flexible'}
*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "2347088835025"; // Placeholder
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#0a0807] text-brand-ivory">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: coutureEase }}
          className="space-y-16"
        >
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">Get in Touch</h2>
            <div className="space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-brand-ivory mb-1">Phone & WhatsApp</h3>
                  <p className="text-sm text-brand-ivory/60 font-light mb-2">Available Mon-Sat, 9am - 6pm</p>
                  <a href="tel:07088835025" className="text-sm hover:text-brand-gold transition-colors block">0708 883 5025</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-brand-ivory mb-1">Email</h3>
                  <p className="text-sm text-brand-ivory/60 font-light mb-2">For press and general inquiries</p>
                  <a href="mailto:concierge@rivovogue.com" className="text-sm hover:text-brand-gold transition-colors block">concierge@rivovogue.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-brand-ivory mb-1">Fashion House Address</h3>
                  <p className="text-sm text-brand-ivory/60 font-light leading-relaxed">
                    Ughelli, Delta State<br />
                    Nigeria
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-light mb-6">Business Hours</h2>
            <div className="p-6 border border-brand-ivory/10 rounded-xl bg-brand-charcoal/50 backdrop-blur-sm">
              <ul className="space-y-3 text-sm font-light">
                <li className="flex justify-between border-b border-brand-ivory/5 pb-3">
                  <span className="text-brand-ivory/60">Monday - Friday</span>
                  <span className="text-brand-ivory">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-brand-ivory/5 pb-3">
                  <span className="text-brand-ivory/60">Saturday</span>
                  <span className="text-brand-ivory">10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span className="text-brand-ivory/60">Sunday</span>
                  <span className="text-brand-gold">By Appointment Only</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: coutureEase, delay: 0.2 }}
          className="bg-brand-charcoal p-8 md:p-12 rounded-2xl border border-brand-ivory/5"
        >
          <div className="mb-10">
            <h2 className="font-serif text-3xl font-light mb-2">Book a Consultation</h2>
            <p className="text-sm text-brand-ivory/60 font-light">Fill out the form below to send us a direct WhatsApp inquiry. We typically respond within 2 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="relative group">
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-brand-ivory/20 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors peer placeholder-transparent"
                placeholder="Full Name"
                id="name"
              />
              <label htmlFor="name" className="absolute left-0 top-3 text-sm text-brand-ivory/40 font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-valid:-top-4 peer-valid:text-xs">
                Full Name *
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-ivory/20 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors peer placeholder-transparent"
                  placeholder="Phone Number"
                  id="phone"
                />
                <label htmlFor="phone" className="absolute left-0 top-3 text-sm text-brand-ivory/40 font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-valid:-top-4 peer-valid:text-xs">
                  Phone Number *
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-ivory/20 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors peer placeholder-transparent"
                  placeholder="Email Address"
                  id="email"
                />
                <label htmlFor="email" className="absolute left-0 top-3 text-sm text-brand-ivory/40 font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-gold peer-valid:-top-4 peer-valid:text-xs">
                  Email Address
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <select 
                  name="serviceInterest"
                  required
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-ivory/20 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-brand-charcoal">Select Service Interest *</option>
                  {servicesList.map(s => (
                    <option key={s.slug} value={s.title} className="bg-brand-charcoal">{s.title}</option>
                  ))}
                  <option value="Store Purchase" className="bg-brand-charcoal">Store Purchase</option>
                  <option value="Other" className="bg-brand-charcoal">Other / General Inquiry</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none border-l-transparent border-r-transparent border-t-brand-ivory/40 border-l-[5px] border-r-[5px] border-t-[5px]"></div>
              </div>

              <div className="relative group">
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-ivory/20 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors cursor-pointer"
                />
                <label className="absolute left-0 -top-4 text-xs text-brand-ivory/40 font-light">
                  Preferred Date (Optional)
                </label>
              </div>
            </div>

            <div className="relative group pt-4">
              <textarea 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-brand-ivory/20 py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition-colors peer placeholder-transparent resize-none"
                placeholder="Tell us about your event, style, or specific requirements..."
                id="message"
              ></textarea>
              <label htmlFor="message" className="absolute left-0 top-7 text-sm text-brand-ivory/40 font-light transition-all peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-gold peer-valid:top-0 peer-valid:text-xs">
                Your Message *
              </label>
            </div>

            <div className="pt-6">
              <button 
                type="submit"
                className="group relative w-full flex items-center justify-center gap-3 py-5 bg-brand-ivory text-brand-charcoal overflow-hidden rounded-sm transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-brand-gold transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 font-sans text-xs tracking-[0.2em] uppercase font-bold">
                  Send via WhatsApp
                </span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            
          </form>
        </motion.div>

      </div>
    </section>
  );
}
