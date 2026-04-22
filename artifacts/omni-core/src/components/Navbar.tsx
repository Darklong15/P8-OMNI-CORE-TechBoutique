import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Link, useLocation } from "wouter";

const NAV_ITEMS = [
  { label: "Inicio", path: "/" },
  { label: "Catálogo", path: "/catalogo" },
  { label: "Contacto", path: "/contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,218,243,0.1)]"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
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
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {NAV_ITEMS.map((item) => {
            const active = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <button
                  className={`transition-colors uppercase tracking-widest relative group ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </Link>
            );
          })}
        </nav>
      </div>
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      )}
    </motion.header>
  );
}
