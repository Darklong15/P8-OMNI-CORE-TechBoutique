import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  { id: 1, name: "Servidor Blade X-9000", desc: "Arquitectura hiperconvergente de ultra alta densidad.", price: "850,000", cat: "Hardware", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "NVIDIA H100 Tensor Core", desc: "Aceleración de IA generativa a escala exascale.", price: "680,000", cat: "Hardware", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Switch Core Nexus 9K", desc: "Conmutación de centro de datos de baja latencia 400G.", price: "320,000", cat: "Hardware", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Array Storage NVMe Petabyte", desc: "Almacenamiento all-flash con IOPS de grado militar.", price: "1,200,000", cat: "Hardware", img: "https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Rack Blindado EMP-Shield", desc: "Gabinete 42U con protección electromagnética nivel 4.", price: "150,000", cat: "Hardware", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "OS Pro Hipervisor vSphere", desc: "Virtualización empresarial con tolerancia a fallos extrema.", price: "95,000", cat: "Software", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Suite EDR/SIEM Sentinel", desc: "Detección de amenazas propulsada por redes neuronales.", price: "240,000", cat: "Software", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Plataforma DevOps CI/CD", desc: "Pipeline de automatización con integración de seguridad.", price: "180,000", cat: "Software", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "DB Enterprise Graph", desc: "Base de datos distribuida para análisis relacional masivo.", price: "410,000", cat: "Software", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
  { id: 10, name: "Observabilidad OMNI-Eye", desc: "Monitoreo full-stack con trazabilidad en tiempo real.", price: "210,000", cat: "Software", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
  { id: 11, name: "Licencia SaaS Enterprise Anual", desc: "Acceso ilimitado a suites colaborativas para 1000+ usuarios.", price: "850,000", cat: "Licencias", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" },
  { id: 12, name: "Créditos Cloud AWS/GCP/Azure", desc: "Paquete pre-pago de computación en nube distribuida.", price: "1,000,000", cat: "Licencias", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
  { id: 13, name: "Licenciamiento por Núcleo Físico", desc: "Despliegue bare-metal sin restricciones de virtualización.", price: "45,000", cat: "Licencias", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
  { id: 14, name: "Contrato Soporte OMNI 24/7", desc: "Respuesta SLA < 15 minutos con ingenieros L3 dedicados.", price: "350,000", cat: "Licencias", img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=80" },
  { id: 15, name: "Certificación Arquitecto OMNI", desc: "Entrenamiento intensivo y aval oficial para 5 ingenieros.", price: "120,000", cat: "Licencias", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" },
];

export function Catalog() {
  const [filter, setFilter] = useState("Todos");
  const categories = ["Todos", "Hardware", "Software", "Licencias"];

  const filtered = filter === "Todos" ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  return (
    <section id="catalogo" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter mb-4 glow-text uppercase">Inventario Clasificado</h2>
          <p className="text-muted-foreground font-mono">Seleccione los recursos para su aprovisionamiento.</p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 border font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                filter === cat 
                  ? "bg-primary/20 border-primary text-primary cyan-glow" 
                  : "bg-card/40 border-white/10 text-muted-foreground hover:border-primary/50 hover:text-foreground glass-card"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card group overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-background/80 border border-primary/30 text-primary font-mono text-xs uppercase backdrop-blur-md">
                    {product.cat}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground font-sans mb-4 flex-1">{product.desc}</p>
                  <div className="flex items-end justify-between mt-auto">
                    <div className="font-mono text-primary glow-text text-xl">
                      ${product.price} <span className="text-xs text-muted-foreground">MXN</span>
                    </div>
                    <button className="w-8 h-8 rounded border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-colors cyan-glow">
                      +
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}