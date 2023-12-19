'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
  return (
    <div className="hero min-h-screen bg-neutral">
      <motion.div
        className="hero-content flex-col lg:flex-row gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={imgURL}
          className="rounded-md shadow-2xl h-auto"
          alt="ai generated image"
          width={384}
          height={384}
          loading="lazy"
        />
        <div>
          <h2 className="text-5xl px-6">{title}</h2>
          <p className="p-6 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};
