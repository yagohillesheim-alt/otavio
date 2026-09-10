import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Play, CheckCircle2 } from "lucide-react";
import { CONTENT } from "../constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Preparação Física & Performance</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              {CONTENT.hero.title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 mx-auto lg:mx-0 leading-relaxed">
              {CONTENT.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/20 hover:-translate-y-1"
              >
                {CONTENT.hero.ctaPrimary}
                <ArrowRight size={20} />
              </a>
              <a
                href="#modalities"
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                {CONTENT.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>+4k Seguidores</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>Planos Individuais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>Foco em Família</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 w-full max-w-[500px] mx-auto">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-slate-800 shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                  alt="Otávio Monteiro" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/80 backdrop-blur-lg rounded-2xl border border-white/10">
                   <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                        <Play size={20} className="text-slate-950 fill-slate-950" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Metodologia Exclusiva</p>
                        <p className="text-emerald-400 text-xs font-medium">Performance & Cuidado</p>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-emerald-500/50 rounded-tr-3xl hidden md:block" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-emerald-500/50 rounded-bl-3xl hidden md:block" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${CONTENT.profile.whatsapp}`} 
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 text-slate-950 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
      </a>
    </section>
  );
}
