"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function PageLoader() {
  const reduced = useReducedMotion();
  const [loading, setLoading] = useState(!reduced);

  useEffect(() => {
    if (reduced) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [reduced]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#06080f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 font-mono text-sm tracking-[0.4em] text-cyan-400/80">
            LOADING
          </div>
          <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="mt-6 text-sm text-slate-500">nadimShuvo</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
