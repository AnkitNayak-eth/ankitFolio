"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SplashScreen = ({ children }: { children: React.ReactNode }) => {
  const [phase, setPhase] = useState<"opening" | "done">("opening");

  useEffect(() => {
    // Unmount entirely after animation finishes
    const timer = setTimeout(() => {
      setPhase("done");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="splash-container"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
          >
            {/* The expanding transparent hole (Iris In) */}
            <motion.div
              initial={{ width: "0vmax", height: "0vmax", boxShadow: "0 0 0 100vmax rgba(3,7,18,1)" }} // rgba(3,7,18,1) = Tailwind bg-gray-950
              animate={{ width: "300vmax", height: "300vmax" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {children}
      </div>
    </>
  );
};
