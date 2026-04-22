import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.message) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setForm({ name: "", email: "", company: "", role: "", message: "" });
        setStatus("idle");
      }, 3000);
    }, 1500);
  };

  const inputClass =
    "peer w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-gray-100 placeholder:text-gray-500 font-sans focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all hover:border-white/20";

  const labelClass =
    "text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold mb-2 block peer-focus:text-cyan-400 transition-colors";

  const Field = ({
    label,
    children,
  }: {
    label: string;
    children: React.ReactNode;
  }) => (
    <label className="block group">
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );

  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Contacto Corporativo
          </h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto">
            Nuestro equipo de ingeniería está listo para escalar la
            infraestructura de su empresa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-xl border border-cyan-500/20 bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 shadow-[0_0_60px_-15px_rgba(0,218,243,0.25)]"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"
          />

          {status === "idle" && (
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Nombre Completo">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className={inputClass}
                    placeholder="Ej. María González"
                  />
                </Field>
                <Field label="Correo Electrónico">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={inputClass}
                    placeholder="empresa@dominio.com"
                  />
                </Field>
                <Field label="Empresa">
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                    className={inputClass}
                    placeholder="Razón social"
                  />
                </Field>
                <Field label="Cargo">
                  <input
                    type="text"
                    value={form.role}
                    onChange={(e) =>
                      setForm({ ...form, role: e.target.value })
                    }
                    className={inputClass}
                    placeholder="Ej. CTO, Director de TI"
                  />
                </Field>
              </div>
              <Field label="Requerimientos Técnicos">
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`${inputClass} resize-none`}
                  placeholder="Describa la infraestructura objetivo, cargas de trabajo, plazos y requisitos de cumplimiento."
                />
              </Field>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-gradient-to-b from-[#0a1722] to-[#050a12] border border-cyan-500/40 text-sm text-white font-medium tracking-wide transition-all duration-300 hover:border-cyan-400 hover:from-cyan-500 hover:to-cyan-600 hover:text-[#05070b]"
                >
                  <span
                    aria-hidden
                    className="absolute -inset-1 rounded-md bg-cyan-500/20 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  />
                  Solicitar Asesoría
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          )}

          {status === "submitting" && (
            <div className="flex flex-col items-center justify-center py-16 space-y-4">
              <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
              <div
                className="text-lg text-gray-200 font-light"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Enviando su solicitud…
              </div>
              <p className="text-xs text-gray-500 tracking-wide">
                Un asesor responderá en menos de 24 horas hábiles.
              </p>
            </div>
          )}

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 space-y-4 text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-2xl" />
                <CheckCircle2 className="w-14 h-14 text-cyan-400 relative" />
              </div>
              <div
                className="text-2xl text-white font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Solicitud recibida
              </div>
              <p className="text-sm text-gray-400 font-light max-w-sm">
                Hemos enviado una confirmación a su correo. Un asesor de OMNI
                CORE le contactará en breve.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
