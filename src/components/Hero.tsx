import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Play, CheckCircle2 } from "lucide-react";
import { CONTENT } from "../constants";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-red/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-orange text-xs font-black uppercase tracking-[0.2em] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span>Preparação Física & Performance</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-brand-ice leading-[0.95] mb-6 tracking-tighter">
              {CONTENT.hero.title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 mx-auto lg:mx-0 leading-relaxed font-medium">
              {CONTENT.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-orange text-brand-ice px-10 py-5 rounded-xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-red/30 hover:-translate-y-1"
              >
                {CONTENT.hero.ctaPrimary}
                <ArrowRight size={20} />
              </a>
              <a
                href="#modalities"
                className="w-full sm:w-auto bg-brand-gray hover:bg-slate-700 text-brand-ice px-10 py-5 rounded-xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-2 transition-all border border-brand-gray"
              >
                {CONTENT.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-xs text-slate-500 font-black uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-orange" />
                <span>+4k Seguidores</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-orange" />
                <span>Planos Individuais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-orange" />
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
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-brand-gray shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                  alt="Otávio Monteiro" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-brand-black/90 backdrop-blur-xl rounded-2xl border border-brand-gray">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 shrink-0">
                        <Logo showText={false} size="md" />
                      </div>
                      <div>
                        <p className="text-brand-ice font-black text-sm uppercase tracking-wider">Metodologia Exclusiva</p>
                        <p className="text-brand-orange text-xs font-black uppercase tracking-widest">Performance & Cuidado</p>
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-8 border-r-8 border-brand-red/30 rounded-tr-[3rem] hidden md:block" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-8 border-l-8 border-brand-dark-red/30 rounded-bl-[3rem] hidden md:block" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${CONTENT.profile.whatsapp}`} 
        className="fixed bottom-8 right-8 z-40 bg-brand-orange text-brand-black p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group shadow-brand-orange/20"
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
      </a>
    </section>
  );
}
