import { motion } from "framer-motion";
import { MapPin, Crosshair } from "lucide-react";

export function Locations() {
  const locs = [
    {
      type: "Tienda / Hub Principal",
      addr: "C. Sésamo Sur 814-19, Fraccionamiento Los Molinos, 45200 Campestre las Palomas, Jal.",
      coords: "20.7681° N, -103.4352° W"
    },
    {
      type: "Sede Universitaria",
      addr: "Blvd. Gral. Marcelino García Barragán 1421, Olímpica, 44430 Guadalajara, Jal.",
      coords: "20.6653° N, -103.3255° W"
    }
  ];

  return (
    <section id="ubicacion" className="py-24 relative bg-background border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter mb-4 glow-text uppercase border-l-4 border-primary pl-4">Coordenadas del Núcleo</h2>
          <p className="text-muted-foreground font-mono pl-5">Nodos de distribución física autorizados.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locs.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Crosshair className="w-24 h-24 text-primary" />
              </div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-primary/10 border border-primary/30 rounded text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-xs text-primary mb-1 uppercase glow-text">{loc.type}</div>
                  <h3 className="text-lg font-sans font-medium text-foreground mb-4 pr-12">{loc.addr}</h3>
                  <div className="inline-block px-3 py-1 bg-black/50 border border-white/10 font-mono text-xs text-muted-foreground">
                    DATOS DE TELEMETRÍA: {loc.coords}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}