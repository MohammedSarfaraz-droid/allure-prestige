import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Monogram } from "./Monogram";

const FLAG = "apg-loaded";

export const LoadingScreen = () => {
  const [show, setShow] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem(FLAG);
  });

  useEffect(() => {
    if (!show) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => {
      sessionStorage.setItem(FLAG, "1");
      setShow(false);
    }, reduced ? 100 : 1200);
    return () => window.clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
          aria-hidden
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Monogram size={48} color="hsl(var(--gold))" />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="h-px bg-gold mt-6"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
