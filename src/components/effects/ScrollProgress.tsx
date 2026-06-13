"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setVisible(v > 0.02);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
      style={{ scaleX, opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}
