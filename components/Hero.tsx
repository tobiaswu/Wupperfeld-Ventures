'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Animation } from './Animation';

export const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left gap-12">
        <Image
          className="h-auto"
          src="/wv_logo.webp"
          alt="Logo of Wupperfeld Ventures"
          width={384}
          height={200}
          loading="lazy"
        />
        <div>
          <motion.h1
            className="text-6xl text-white leading-normal"
            initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
          >
            Welcome to the Universe of Wupperfeld Ventures
          </motion.h1>
          <Link href="mailto:tobias@wupperfeld.org">
            <motion.button
              className="btn btn-primary mt-6 rounded-md"
              initial={{ opacity: 0, y: 150, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.5 }}
            >
              Contact
            </motion.button>
          </Link>
        </div>
      </div>
      <Animation />
    </div>
  );
};
