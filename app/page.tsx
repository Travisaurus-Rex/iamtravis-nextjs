"use client"

import { motion } from "framer-motion";
import "./main.css";
import GradientBackground from "./_components/gradient-background/GradientBackground";

const animations = {
  kata: {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    transition: { duration: 2, delay: 2.5 },
  },
  bigName: {
    initial: { opacity: 0, transform: "translateY(25px)" },
    animate: { opacity: 1, transform: "translateY(0)" },
    transition: { duration: 1, delay: 1, stiffness: 0 },
  },
  jobDescription: {
    initial: { opacity: 0, transform: "translateY(15px)" },
    animate: { opacity: 1, transform: "translateY(0)" },
    transition: { duration: 1.5, delay: 2 },
  },
};

const Main = () => {
  return (
    <GradientBackground>
      <div className="main-container">
        <motion.div
          className="kata noto"
          initial={animations.kata.initial}
          animate={animations.kata.animate}
          transition={animations.kata.transition}
        >
          トラビス
        </motion.div>
          <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <div className="p-4 text-center">
              <motion.h1
                className="big-name noto"
                initial={animations.bigName.initial}
                animate={animations.bigName.animate}
                transition={animations.bigName.transition}
              >
                TRAVIS ADAMS
              </motion.h1>
              <motion.div
                className="job-description noto"
                initial={animations.jobDescription.initial}
                animate={animations.jobDescription.animate}
                transition={animations.jobDescription.transition}
              >
                <span className="text-accent">I build web experiences</span> that feel fast, focused, and future‑ready.
              </motion.div>
            </div>
          </div>
        </div>
    </GradientBackground>
  );
};

export default Main;
