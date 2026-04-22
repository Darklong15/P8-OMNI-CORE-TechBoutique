import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

export function Locations() {
  return (
    <section
      id="ubicacion"
      className="py-24 relative bg-background border-y border-white/5"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Presencia Corporativa
          </h2>
          <p className="text-gray-400 font-light">
            Infraestructura física y alianzas estratégicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-xl border border-white/10 overflow-hidden bg-white/5 min-h-[420px] relative"
          >
            <iframe
              title="Mapa OMNI CORE — Fraccionamiento Los Molinos"
              src="https://www.google.com/maps?q=Fraccionamiento+Los+Molinos,+Zapopan,+Jalisco&output=embed"
              className="w-full h-full min-h-[420px] border-0 invert-[.92] hue-rotate-180 contrast-90 saturate-50 opacity-80 hover:opacity-100 transition-opacity duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-7 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/70 font-bold">
                  Hub Principal
                </div>
              </div>
              <h3
                className="text-lg font-medium text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Tienda OMNI CORE
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                C. Sésamo Sur 814-19, Fraccionamiento Los Molinos, 45200
                Campestre las Palomas, Jal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-white/5 border border-white/10 text-gray-300">
                  <GraduationCap className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                  Alianza Académica / Sede de Desarrollo
                </div>
              </div>
              <h3
                className="text-base font-medium text-gray-200 mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                CUCEI — Universidad de Guadalajara
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Blvd. Gral. Marcelino García Barragán 1421, Olímpica, Guadalajara, Jal.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
