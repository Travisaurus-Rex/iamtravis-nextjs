"use client"
import { motion } from "framer-motion";

const animations = {
  bigName: {
    initial: { opacity: 0, transform: "translateY(15px)" },
    animate: { opacity: 1, transform: "translateY(0)" },
    transition: { duration: 1, delay: 1, stiffness: 50 },
  },
};

export default function Work() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)] work-page">
      <motion.h1
        className="big-name"
        initial={animations.bigName.initial}
        animate={animations.bigName.animate}
        transition={animations.bigName.transition}
      >
        Under Construction
      </motion.h1>
    </div>
    );
}