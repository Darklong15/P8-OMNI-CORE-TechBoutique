export function Footer() {
  return (
    <footer className="bg-[#070a10] border-t border-cyan-500/10 py-16 mt-12 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          <div className="flex flex-col items-start gap-5">
            <div>
              <div className="font-mono font-bold text-2xl tracking-wider text-foreground glow-text">
                OMNI CORE
              </div>
              <p className="text-sm font-light text-gray-400 mt-2 tracking-wide">
                Securing the future.
              </p>
            </div>
            <div className="w-56 h-56 bg-white/5 rounded-md flex items-center justify-center border border-white/10 overflow-hidden p-2">
              <img
                src="https://res.cloudinary.com/dv20dw1uq/image/upload/v1776899223/escudo-cucei_iyxguz.webp"
                alt="Escudo Oficial CUCEI"
                className="w-full h-full object-contain opacity-95 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/60 font-bold mb-1">
              ALUMNO:
            </div>
            <div className="text-sm font-light text-gray-300 mb-4">
              Eriberto Orozco Rosas
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/60 font-bold mb-1">
              CÓDIGO:
            </div>
            <div className="text-sm font-light text-gray-300 mb-4 font-mono">
              217882945
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/60 font-bold mb-1">
              CARRERA:
            </div>
            <div className="text-sm font-light text-gray-300 mb-4">
              Ingeniería Informática
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/60 font-bold mb-1">
              MATERIA:
            </div>
            <div className="text-sm font-light text-gray-300 mb-4">
              Desarrollo de Aplicaciones Web en la Nube y Móviles
            </div>

            <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/60 font-bold mb-1">
              PROFESOR:
            </div>
            <div className="text-sm font-light text-gray-300 mb-4">
              Mtro. Zeus Emanuel Gutierrez Cobian
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/60 font-bold mb-1">
                  CALENDARIO:
                </div>
                <div className="text-sm font-light text-gray-300 mb-4 font-mono">
                  2026A
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/60 font-bold mb-1">
                  SEDE:
                </div>
                <div className="text-sm font-light text-gray-300 mb-4 font-mono">
                  CUCEI
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 font-mono text-[10px] text-muted-foreground/50 tracking-[0.3em] uppercase text-center">
          Acceso clasificado — Sistema monitoreado
        </div>
      </div>
    </footer>
  );
}
