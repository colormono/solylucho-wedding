import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: 0,
    y: '10vh',
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '10vw'
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1
};

const pageStyle = {
  position: 'absolute',
  width: '100%'
};

export default ({ children }) => (
  <motion.div
    style={pageStyle}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);
