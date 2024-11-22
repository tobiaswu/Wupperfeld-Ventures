'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';

export const Portfolio = () => {
  return (
    <div className="container mx-auto min-h-screen px-4 mb-8">
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center py-24"
        initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5 }}
      >
        Our Active Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            title="PaperlessZone"
            description="From intelligent automation to smart document management, PaperlessZone builds AI solutions that revolutionize how your business operates. PaperlessZone's custom-built tools deliver measurable results from day one."
            videoURL="https://res.cloudinary.com/dht4egkp3/video/upload/v1732284371/paperlesszone-logo-animated_ycledo.mp4"
            thumbnailURL="/paperlesszone-logo.webp"
            link="https://www.paperlesszone.com"
          />
        </motion.div>
      </div>
    </div>
  );
};
