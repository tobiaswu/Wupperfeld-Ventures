'use client';

import '@dotlottie/player-component';
import { motion } from 'framer-motion';

export const Animation = () => {
  return (
    <motion.div
      className="-z-10"
      initial={{ opacity: 0, filter: 'blur(5px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
    >
      <dotlottie-player src="/world-animation.lottie" autoplay loop />
    </motion.div>
  );
};
