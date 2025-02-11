import React from 'react';
import { motion } from 'framer-motion';

export const FadeIn = ({ content }) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
    >
      {content}
    </motion.div>
  );
};
