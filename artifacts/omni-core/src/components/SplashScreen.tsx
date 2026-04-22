import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    const finishTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative mb-8">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold tracking-widest text-foreground font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          OMNI CORE
        </motion.h1>
        <motion.div 
          className="absolute inset-0 bg-primary/20 blur-xl"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
          style={{ height: "2px", top: "50%" }}
          animate={{ left: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <motion.div 
        className="flex items-center gap-3 text-primary font-mono text-sm md:text-base opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Terminal className="w-4 h-4" />
        <span>Sincronizando con el Núcleo{dots}</span>
        <motion.span 
          animate={{ opacity: [0, 1, 0] }} 
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-primary ml-1"
        />
      </motion.div>
    </motion.div>
  );
}