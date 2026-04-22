export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-primary/20 py-12 mt-12 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="flex flex-col items-start gap-4">
            <div className="font-mono font-bold text-2xl tracking-wider text-foreground glow-text border-b border-primary/30 pb-2 mb-2 inline-block">
              OMNI CORE
            </div>
            <img src="/logo-cucei.png" alt="Logo de CUCEI" className="h-10 opacity-80 mix-blend-screen grayscale" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 font-mono text-xs text-muted-foreground border-l border-white/10 pl-6">
            <div className="flex justify-between sm:col-span-2 border-b border-white/5 pb-1 mb-1">
              <span className="text-primary/70 uppercase">Alumno:</span>
              <span className="text-foreground text-right">Eriberto Orozco Rosas</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1 mb-1">
              <span className="text-primary/70 uppercase">Código:</span>
              <span className="text-foreground text-right">217882945</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1 mb-1">
              <span className="text-primary/70 uppercase">Carrera:</span>
              <span className="text-foreground text-right">Ingeniería Informática</span>
            </div>
            <div className="flex justify-between sm:col-span-2 border-b border-white/5 pb-1 mb-1">
              <span className="text-primary/70 uppercase">Materia:</span>
              <span className="text-foreground text-right">Desarrollo de Aplicaciones Web en la Nube y Móviles</span>
            </div>
            <div className="flex justify-between sm:col-span-2 border-b border-white/5 pb-1 mb-1">
              <span className="text-primary/70 uppercase">Profesor:</span>
              <span className="text-foreground text-right">Mtro. Zeus Emanuel Gutierrez Cobian</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary/70 uppercase">Calendario:</span>
              <span className="text-foreground text-right">2026A</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary/70 uppercase">Sede:</span>
              <span className="text-foreground text-right">CUCEI</span>
            </div>
          </div>

        </div>
        
        <div className="mt-12 text-center border-t border-white/5 pt-6 font-mono text-[10px] text-muted-foreground/50 tracking-widest uppercase">
          ACCESO CLASIFICADO - SISTEMA MONITOREADO
        </div>
      </div>
    </footer>
  );
}