import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronDown } from "lucide-react";

type Product = {
  id: number;
  name: string;
  desc: string;
  price: string;
  cat: "Hardware" | "Software" | "Redes" | "Seguridad" | "Licencias";
  img: string;
};

const IMG = {
  server: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  gpu: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
  switch: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  storage: "https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&w=800&q=80",
  rack: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  os: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  sec: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  devops: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
  db: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  cloud: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  cpu: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  network: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=800&q=80",
  cooling: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
  motherboard: "https://images.unsplash.com/photo-1592664474505-cb5d72bd2d56?auto=format&fit=crop&w=800&q=80",
  ram: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
  fiber: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
  router: "https://images.unsplash.com/photo-1606821681296-2c4d7b6c4f6f?auto=format&fit=crop&w=800&q=80",
  firewall: "https://images.unsplash.com/photo-1614064548237-02f16ce4d8c4?auto=format&fit=crop&w=800&q=80",
  pentest: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80",
  monitoring: "https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=800&q=80",
};

const PRODUCTS: Product[] = [
  // HARDWARE (20)
  { id: 1, name: "Motherboard TRX40 PRO", desc: "Plataforma sTRX4 para Threadripper, 8 canales DDR4 ECC.", price: "32,500", cat: "Hardware", img: IMG.motherboard },
  { id: 2, name: "Motherboard Z790 AORUS Master", desc: "Chipset LGA 1700, 20+1+2 fases digitales, PCIe 5.0.", price: "18,900", cat: "Hardware", img: IMG.motherboard },
  { id: 3, name: "AMD Threadripper PRO 7995WX", desc: "96 núcleos / 192 hilos, 5.1 GHz boost, 350W TDP.", price: "215,000", cat: "Hardware", img: IMG.cpu },
  { id: 4, name: "Intel Xeon Platinum 8592+", desc: "64 núcleos Sapphire Rapids, AMX, 320MB caché L3.", price: "180,000", cat: "Hardware", img: IMG.cpu },
  { id: 5, name: "NVIDIA RTX 6000 Ada Generation", desc: "48 GB GDDR6 ECC, 18.176 CUDA cores, 300W.", price: "165,000", cat: "Hardware", img: IMG.gpu },
  { id: 6, name: "NVIDIA H100 Tensor Core SXM5", desc: "Aceleración FP8 transformer, NVLink 4.0, 80 GB HBM3.", price: "680,000", cat: "Hardware", img: IMG.gpu },
  { id: 7, name: "Servidor Blade Dell PowerEdge MX760c", desc: "Doble Xeon SP, hasta 8 TB DDR5, gestión iDRAC 10.", price: "850,000", cat: "Hardware", img: IMG.server },
  { id: 8, name: "Servidor HPE ProLiant DL380 Gen12", desc: "2U dual socket, 32 DIMMs, telemetría predictiva.", price: "420,000", cat: "Hardware", img: IMG.server },
  { id: 9, name: "Memoria RAM Kingston Server Premier 256GB ECC", desc: "DDR5-5600 RDIMM, kit 8x32GB, validación OEM.", price: "48,000", cat: "Hardware", img: IMG.ram },
  { id: 10, name: "Memoria Micron 4TB DDR5 ECC", desc: "Kit 16x256GB para nodos HPC y bases en memoria.", price: "390,000", cat: "Hardware", img: IMG.ram },
  { id: 11, name: "Array Storage NVMe Pure FlashArray //X90", desc: "Almacenamiento all-flash NVMe-oF, 2 PB efectivos.", price: "1,200,000", cat: "Hardware", img: IMG.storage },
  { id: 12, name: "Array NetApp AFF A900", desc: "Throughput 700 GB/s, replicación síncrona multi-sitio.", price: "950,000", cat: "Hardware", img: IMG.storage },
  { id: 13, name: "Sistema de Enfriamiento Líquido Industrial CDU 600", desc: "Distribución direct-to-chip 600 kW, monitoreo BMS.", price: "780,000", cat: "Hardware", img: IMG.cooling },
  { id: 14, name: "Loop Liquid CoolIT Rack-DCLC AHx40", desc: "Refrigeración líquida cerrada por rack, 80 kW.", price: "320,000", cat: "Hardware", img: IMG.cooling },
  { id: 15, name: "Chasis de Servidor Supermicro SuperBlade SBE-820J", desc: "Enclosure 8U para 20 nodos blade, redundancia N+N.", price: "260,000", cat: "Hardware", img: IMG.rack },
  { id: 16, name: "Rack APC NetShelter SX 48U", desc: "Gabinete de centro de datos con PDU monitoreado.", price: "78,000", cat: "Hardware", img: IMG.rack },
  { id: 17, name: "Rack Blindado EMP-Shield TEMPEST", desc: "Atenuación electromagnética >100 dB, certificación SDIP-27.", price: "150,000", cat: "Hardware", img: IMG.rack },
  { id: 18, name: "GPU AMD Instinct MI300X", desc: "192 GB HBM3, 5.3 TB/s ancho de banda, ROCm 6.", price: "295,000", cat: "Hardware", img: IMG.gpu },
  { id: 19, name: "Servidor GPU Lambda Hyperplane 8xH100", desc: "Nodo de entrenamiento LLM, NVLink completo.", price: "5,400,000", cat: "Hardware", img: IMG.server },
  { id: 20, name: "DPU NVIDIA BlueField-3", desc: "Aceleración de red, almacenamiento y seguridad en una sola tarjeta.", price: "84,000", cat: "Hardware", img: IMG.network },

  // SOFTWARE (8)
  { id: 21, name: "VMware vSphere Foundation 9", desc: "Hipervisor empresarial con vMotion y DRS predictivo.", price: "95,000", cat: "Software", img: IMG.os },
  { id: 22, name: "Red Hat Enterprise Linux for SAP", desc: "Suscripción 5 años, soporte 24/7 y kernel optimizado.", price: "62,000", cat: "Software", img: IMG.os },
  { id: 23, name: "Windows Server 2025 Datacenter", desc: "Licencia por socket, virtualización ilimitada.", price: "78,000", cat: "Software", img: IMG.os },
  { id: 24, name: "Plataforma DevOps GitLab Ultimate", desc: "CI/CD, SAST, DAST y gestión de cumplimiento integradas.", price: "180,000", cat: "Software", img: IMG.devops },
  { id: 25, name: "HashiCorp Terraform Enterprise", desc: "IaC con políticas Sentinel y workspaces ilimitados.", price: "210,000", cat: "Software", img: IMG.devops },
  { id: 26, name: "Oracle Database Enterprise 23ai", desc: "Base de datos con vector search nativo y RAC.", price: "410,000", cat: "Software", img: IMG.db },
  { id: 27, name: "PostgreSQL EnterpriseDB Advanced", desc: "Compatibilidad Oracle, alta disponibilidad multi-master.", price: "190,000", cat: "Software", img: IMG.db },
  { id: 28, name: "Observabilidad Datadog Enterprise", desc: "APM, logs, RUM y trazas con retención extendida.", price: "210,000", cat: "Software", img: IMG.monitoring },

  // SEGURIDAD (8)
  { id: 29, name: "SIEM Splunk Enterprise Security", desc: "Detección correlacionada con UEBA y SOAR integrado.", price: "340,000", cat: "Seguridad", img: IMG.sec },
  { id: 30, name: "SIEM IBM QRadar Suite", desc: "Análisis de amenazas con IA Watson, despliegue híbrido.", price: "295,000", cat: "Seguridad", img: IMG.sec },
  { id: 31, name: "Firewall NGFW Palo Alto PA-7080", desc: "Throughput 200 Gbps, App-ID, prevención de zero-day.", price: "1,150,000", cat: "Seguridad", img: IMG.firewall },
  { id: 32, name: "Firewall Fortinet FortiGate 7121F", desc: "Hyperscale firewall, SD-WAN segura, ZTNA nativo.", price: "880,000", cat: "Seguridad", img: IMG.firewall },
  { id: 33, name: "EDR CrowdStrike Falcon Complete", desc: "MDR 24/7 con respuesta de incidentes garantizada.", price: "240,000", cat: "Seguridad", img: IMG.sec },
  { id: 34, name: "Suite Pentesting Cobalt Strike + Core Impact", desc: "Adversary simulation y explotación controlada.", price: "175,000", cat: "Seguridad", img: IMG.pentest },
  { id: 35, name: "OS Endurecido Kali Linux Enterprise", desc: "Distribución pentesting con soporte y capacitación.", price: "42,000", cat: "Seguridad", img: IMG.os },
  { id: 36, name: "PAM CyberArk Privileged Access Manager", desc: "Bóveda de credenciales con grabación de sesiones.", price: "320,000", cat: "Seguridad", img: IMG.sec },

  // REDES (7)
  { id: 37, name: "Switch Core Cisco Nexus 9364D-GX2A", desc: "64 puertos 400G QSFP-DD, latencia sub-microsegundo.", price: "780,000", cat: "Redes", img: IMG.switch },
  { id: 38, name: "Switch Arista 7800R3 Modular", desc: "Conmutación de spine, 460 Tbps, telemetría streaming.", price: "1,420,000", cat: "Redes", img: IMG.switch },
  { id: 39, name: "Switch Fibra Óptica Juniper QFX5240-64OD", desc: "64 puertos 400G, ASIC programable Express 5.", price: "690,000", cat: "Redes", img: IMG.fiber },
  { id: 40, name: "Router de Núcleo Cisco 8000 Series", desc: "Plataforma SP, Silicon One Q200L, hasta 260 Tbps.", price: "2,100,000", cat: "Redes", img: IMG.router },
  { id: 41, name: "Router Juniper PTX10008", desc: "Backbone óptico convergente, MACsec por puerto.", price: "1,650,000", cat: "Redes", img: IMG.router },
  { id: 42, name: "Cableado Estructurado OS2 Singlemode 1U", desc: "Panel LC/UPC pre-terminado 144F, baja pérdida.", price: "38,000", cat: "Redes", img: IMG.fiber },
  { id: 43, name: "Optical Transport Infinera GX G42", desc: "800G coherente por longitud de onda, ICE6 engine.", price: "1,950,000", cat: "Redes", img: IMG.fiber },

  // LICENCIAS (7)
  { id: 44, name: "Licencia Microsoft 365 E5 — 1000 usuarios", desc: "Productividad, seguridad avanzada y cumplimiento.", price: "850,000", cat: "Licencias", img: IMG.cloud },
  { id: 45, name: "Créditos AWS Enterprise — 1M USD", desc: "Compromiso plurianual con descuentos por reserva.", price: "21,000,000", cat: "Licencias", img: IMG.cloud },
  { id: 46, name: "Créditos Google Cloud High-Availability", desc: "Bolsa multi-región con SLA 99.99% garantizado.", price: "12,000,000", cat: "Licencias", img: IMG.cloud },
  { id: 47, name: "Créditos Azure Enterprise Agreement", desc: "Contrato 3 años con soporte Premier incluido.", price: "15,500,000", cat: "Licencias", img: IMG.cloud },
  { id: 48, name: "Licencia Perpetua SAP S/4HANA Enterprise", desc: "Núcleo ERP on-premise con mantenimiento estándar.", price: "4,800,000", cat: "Licencias", img: IMG.db },
  { id: 49, name: "Contrato Soporte OMNI 24/7 — Tier Mission Critical", desc: "SLA < 15 min con ingenieros L3 dedicados in situ.", price: "350,000", cat: "Licencias", img: IMG.sec },
  { id: 50, name: "Certificación Arquitecto OMNI — Cohorte de 5", desc: "Programa intensivo y aval oficial para tu equipo.", price: "120,000", cat: "Licencias", img: IMG.cpu },
];

const TAB_TO_CATS: Record<string, Product["cat"][] | null> = {
  Todos: null,
  Hardware: ["Hardware"],
  Software: ["Software", "Licencias"],
  Redes: ["Redes"],
  Seguridad: ["Seguridad"],
};

const PAGE_SIZE = 10;

export function Catalog() {
  const [tab, setTab] = useState<keyof typeof TAB_TO_CATS>("Todos");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const cats = TAB_TO_CATS[tab];
    return cats ? PRODUCTS.filter((p) => cats.includes(p.cat)) : PRODUCTS;
  }, [tab]);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  const onTab = (t: keyof typeof TAB_TO_CATS) => {
    setTab(t);
    setPage(1);
  };

  return (
    <section id="catalogo" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter mb-4 glow-text uppercase">
            Inventario Clasificado
          </h2>
          <p className="text-muted-foreground font-mono">
            Seleccione los recursos para su aprovisionamiento.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {(Object.keys(TAB_TO_CATS) as (keyof typeof TAB_TO_CATS)[]).map((cat) => (
            <button
              key={cat}
              onClick={() => onTab(cat)}
              className={`px-5 md:px-6 py-2 border font-mono text-xs md:text-sm uppercase tracking-wider transition-all duration-300 ${
                tab === cat
                  ? "bg-primary/20 border-primary text-primary cyan-glow"
                  : "bg-card/40 border-white/10 text-muted-foreground hover:border-primary/50 hover:text-foreground glass-card"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: (idx % PAGE_SIZE) * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="glass-card group overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-background/80 border border-primary/30 text-primary font-mono text-[10px] uppercase backdrop-blur-md">
                    {product.cat}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-base font-bold font-mono text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans mb-4 flex-1">
                    {product.desc}
                  </p>
                  <div className="flex items-end justify-between mt-auto gap-2">
                    <div className="font-mono text-primary glow-text text-lg md:text-xl">
                      ${product.price}{" "}
                      <span className="text-xs text-muted-foreground">MXN</span>
                    </div>
                    <button
                      aria-label="Agregar"
                      className="w-9 h-9 rounded border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-colors cyan-glow shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            Mostrando {visible.length} / {filtered.length} unidades
          </div>
          {hasMore && (
            <motion.button
              onClick={() => setPage((p) => p + 1)}
              whileHover={{ y: -2 }}
              className="group relative inline-flex items-center gap-2 px-8 py-3 border border-primary/40 bg-primary/5 text-primary font-mono text-sm uppercase tracking-wider hover:bg-primary hover:text-background transition-all duration-300 cyan-glow"
            >
              Cargar más
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
