import { motion } from "framer-motion";
import { Server, Database, Lock } from "lucide-react";

export function Hero() {
  const scrollToCatalog = () => {
    const el = document.getElementById("catalogo");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      {/* Orbital / Circuit motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/20 rounded-full opacity-20 border-dashed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/30 rounded-full opacity-20" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-primary/30 bg-primary/5 font-mono text-xs text-primary glow-text">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            ACCESO RESTRINGIDO - NIVEL 5
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-sans text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          El Núcleo de tu <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 glow-text">
            Infraestructura Tecnológica
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-mono leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Hardware de grado militar. Software de élite. Licencias globales.
          Diseñado exclusivamente para arquitectos TI y adquisiciones empresariales.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button 
            onClick={scrollToCatalog}
            className="px-8 py-4 bg-primary/10 border border-primary text-primary font-mono font-bold tracking-widest hover:bg-primary hover:text-background transition-all duration-300 cyan-glow group relative overflow-hidden"
          >
            <span className="relative z-10">INICIAR PROTOCOLO</span>
            <div className="absolute inset-0 h-full w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full z-0" />
          </button>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { icon: Server, text: "Uptime 99.999%" },
            { icon: Database, text: "Escalabilidad Infinita" },
            { icon: Lock, text: "Seguridad Zero-Trust" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 text-muted-foreground font-mono text-sm border-t border-white/5 pt-4">
              <item.icon className="w-4 h-4 text-primary" />
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}