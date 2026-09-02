"use client";

import { motion } from 'framer-motion';
import { visionMissionData } from '@/lib/aboutData';
import { coutureEase } from '@/lib/animations';

export function VisionMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: coutureEase }
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 bg-brand-charcoal text-brand-ivory border-t border-brand-ivory/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vision */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-8 p-4 bg-brand-ivory/5 rounded-full w-fit">
              <visionMissionData.vision.icon className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
              {visionMissionData.vision.title}
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-8"></div>
            <p className="font-sans text-brand-ivory/80 text-lg md:text-xl font-light leading-relaxed">
              {visionMissionData.vision.description}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="mb-8 p-4 bg-brand-ivory/5 rounded-full w-fit">
              <visionMissionData.mission.icon className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-6">
              {visionMissionData.mission.title}
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-8"></div>
            <p className="font-sans text-brand-ivory/80 text-lg md:text-xl font-light leading-relaxed">
              {visionMissionData.mission.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
