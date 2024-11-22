'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export interface HeroSectionProps {
  title: string;
  description: string;
  imgURL: string;
}

export const HeroSection = ({
  title,
  description,
  imgURL,
}: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const x = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const imgX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);

  return (
    <div
      ref={sectionRef}
      className="hero min-h-screen bg-neutral relative overflow-hidden"
    >
      <motion.div
        style={{ opacity }}
        className="hero-content flex-col lg:flex-row gap-12 container mx-auto px-4"
      >
        <motion.div style={{ x: imgX, scale }} className="flex-1">
          <Image
            src={imgURL}
            className="rounded-lg shadow-2xl h-auto hover:scale-105 transition-transform duration-300"
            alt="ai generated image"
            width={384}
            height={384}
            loading="lazy"
            quality={90}
          />
        </motion.div>

        <motion.div style={{ x, scale }} className="flex-1 space-y-6">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)',
          opacity,
        }}
      />
    </div>
  );
};
