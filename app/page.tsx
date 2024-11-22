'use client';

import { HeroSection } from '@/components/HeroSection';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <motion.div initial="initial" animate="animate" className="space-y-0">
      <Hero />

      <motion.div {...fadeInUp}>
        <HeroSection
          title="Our Vision"
          description="At the core of our vision lies an insatiable drive to explore, learn, and absorb the richness of experiences. This relentless pursuit fuels our ability to develop and create extraordinary contributions for humanity.
          Committed to quality and precision, we infuse simplicity and structure into every project we undertake. Our profound inspirations emanate from the realms of health, nature, technology —where our fascination with AI, blockchain, and the future of mobility thrives— and the vast mysteries of the universe."
          imgURL="/wv_vision.webp"
        />
      </motion.div>

      <motion.div {...fadeInUp}>
        <HeroSection
          title="Our Mission"
          description="At the intersection of entrepreneurship and a global mindset, our mission is to build and oversee a diverse portfolio of startups. We leverage a unique combination of engineering and economics to identify and invest in the right people and ideas. Constantly seeking adventures and traversing continents, we immerse ourselves in diverse cultures, languages, world economics, and global relations."
          imgURL="/wv_mission.webp"
        />
      </motion.div>

      <motion.div {...fadeInUp}>
        <Portfolio />
      </motion.div>
    </motion.div>
  );
}
