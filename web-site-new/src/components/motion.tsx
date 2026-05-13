'use client';

import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: (custom: { direction?: string; distance?: number } | string) => {
    const direction = typeof custom === 'string' ? custom : (custom?.direction ?? 'up');
    const distance = typeof custom === 'string' ? 30 : (custom?.distance ?? 30);

    return {
    opacity: 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
  };
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

export const FadeIn = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.8,
  ...props
}: FadeInProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      custom={{ direction, distance }}
      variants={itemVariants}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, ...props }: HTMLMotionProps<'div'>) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={containerVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStagger = ({ children, direction = 'up', ...props }: FadeInProps) => {
  return (
    <motion.div
      custom={{ direction }}
      variants={itemVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
};
