import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, TerminalSquare } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setForm({ name: "", email: "", message: "" });
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter mb-4 glow-text uppercase">Canal Seguro</h2>
          <p className="text-muted-foreground font-mono">Establecer comunicación cifrada con el mando central.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 border-t-4 border-t-primary"
        >
          {status === "idle" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-primary uppercase">Identificación [Nombre]</label>
                  <input 
                    type="text" 
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full bg-background/50 border border-white/10 px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                    placeholder="Ingrese identificador"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-primary uppercase">Vector [Email]</label>
                  <input 
                    type="email" 
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full bg-background/50 border border-white/10 px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                    placeholder="Ingrese vector de respuesta"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-primary uppercase">Carga Útil [Mensaje]</label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-background/50 border border-white/10 px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none text-foreground"
                  placeholder="Ingrese el paquete de datos a transmitir"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-primary/10 border border-primary text-primary font-mono font-bold tracking-widest hover:bg-primary hover:text-background transition-all duration-300 cyan-glow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> TRANSMITIR PAQUETE
              </button>
            </form>
          )}

          {status === "submitting" && (
            <div className="flex flex-col items-center justify-center py-16 space-y-4">
              <TerminalSquare className="w-12 h-12 text-primary animate-pulse" />
              <div className="font-mono text-primary text-lg glow-text flex items-center gap-2">
                Encriptando mensaje
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }} 
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-primary"
                />
              </div>
            </div>
          )}

          {status === "success" && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 space-y-4"
            >
              <CheckCircle2 className="w-16 h-16 text-primary" />
              <div className="font-mono text-xl text-primary glow-text uppercase font-bold">
                Protocolo enviado con éxito
              </div>
              <p className="text-muted-foreground font-mono text-sm">Respuesta encolada en sistema central.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}