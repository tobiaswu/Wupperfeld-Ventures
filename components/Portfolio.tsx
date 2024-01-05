'use client';

import { motion } from 'framer-motion';
import { Card } from './Card';

export const Portfolio = () => {
  return (
    <div className="container mx-auto min-h-screen px-4 mb-8">
      <motion.h2
        className="text-5xl text-center py-24"
        initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5 }}
      >
        Our Portfolio of Startups
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            title="React Developer as a Service"
            description="A productized service providing React development and consulting services with a fixed price and scope to businesses."
            imgURL="/rdaas_illustration.webp"
            link="https://www.tobiaswupperfeld.com"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card
            title="DigitizerSpace"
            description="A portal about automation and digitization for businesses based on real use cases."
            imgURL="/aiaa_illustration.webp"
            link="https://www.digitizerspace.com"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card
            title="Volunteering App"
            description="A web application where users can find and book volunteering programs worldwide. This is currently under development and coming in the next months."
            imgURL="/va_illustration.webp"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card
            title="HikingCEO"
            description="A blog about life & travel hacks for nature loving digital nomads. This is currently under development and coming soon."
            imgURL="/hc_illustration.webp"
          />
        </motion.div>
      </div>
    </div>
  );
};
