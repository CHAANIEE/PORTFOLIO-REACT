export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// Standard props to spread onto any motion.section for scroll-triggered reveal
export const scrollReveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
};