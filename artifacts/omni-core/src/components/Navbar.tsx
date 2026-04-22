import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,218,243,0.1)]" : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("inicio")}>
          <div className="relative flex items-center justify-center w-8 h-8">
            <Shield className="w-6 h-6 text-primary" />
            <motion.div 
              className="absolute inset-0 rounded-full border border-primary"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="font-mono font-bold text-xl tracking-wider text-foreground glow-text">
            OMNI CORE
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {["Inicio", "Catálogo", "Ubicación", "Contacto"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
              className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>
      </div>
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      )}
    </motion.header>
  );
}