'use client';

import Lottie from 'lottie-react';

export interface AnimationProps {
  animationData: unknown;
}

export const Animation = ({ animationData }: AnimationProps) => {
  return <Lottie animationData={animationData} style={{ zIndex: -1 }} />;
};
