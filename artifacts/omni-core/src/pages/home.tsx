import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SplashScreen } from "@/components/SplashScreen";
import { Hero } from "@/components/Hero";
import { Locations } from "@/components/Locations";
import { Layout } from "@/components/Layout";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{
          filter: showSplash ? "blur(20px)" : "blur(0px)",
          opacity: showSplash ? 0 : 1,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Layout>
          <Hero />
          <Locations />
        </Layout>
      </motion.div>
    </>
  );
}
