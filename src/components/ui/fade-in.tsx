"use client";

import { motion, useReducedMotion } from "framer-motion";

export const FadeIn = (
  props: React.ComponentPropsWithoutRef<typeof motion.div>,
) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -200px" }}
      {...props}
    />
  );
};
