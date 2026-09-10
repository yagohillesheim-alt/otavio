import { motion } from "motion/react";
import { 
  Activity, Dumbbell, Trophy, RefreshCw, 
  Calendar, Users, Mountain, Heart, HelpCircle,
  LucideIcon, ArrowRight
} from "lucide-react";
import { useState } from "react";
import { CONTENT } from "../constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Activity, Dumbbell, Trophy, RefreshCw, 
  Calendar, Users, Mountain, Heart, HelpCircle
};

export function Identification() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-24 bg-brand-black overflow-hidden relative" id="for-whom">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black text-brand-ice mb-4 tracking-tighter"
          >
            {CONTENT.identification.title}
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Escolha seu objetivo principal para receber uma recomendação personalizada de acompanhamento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {CONTENT.identification.options.map((option, index) => {
            const Icon = ICON_MAP[option.icon] || HelpCircle;
            const isSelected = selected === option.id;

            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelected(option.id)}
                className={`flex items-center gap-4 p-6 rounded-2xl border-2 transition-all text-left group ${
                  isSelected 
                    ? "bg-brand-red border-brand-red text-brand-ice scale-[1.02] shadow-xl shadow-brand-red/20" 
                    : "bg-brand-gray/30 border-brand-gray text-brand-ice hover:border-brand-orange/50 hover:bg-brand-gray/50"
                }`}
              >
                <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                  isSelected ? "bg-brand-black text-brand-orange" : "bg-brand-gray/50 group-hover:bg-brand-orange/10 group-hover:text-brand-orange text-slate-400"
                }`}>
                  <Icon size={24} />
                </div>
                <span className="font-black text-base md:text-lg leading-tight uppercase tracking-wider">{option.label}</span>
              </motion.button>
            );
          })}
        </div>

        {selected && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 text-center"
          >
            <div className="bg-brand-red/5 border border-brand-red/20 p-10 rounded-[3rem] max-w-3xl mx-auto inline-block">
               <p className="text-brand-orange font-black mb-4 uppercase tracking-[0.2em] text-xs">Próximo Passo</p>
               <h3 className="text-2xl font-black text-brand-ice mb-8 uppercase tracking-tight">Identificamos o melhor caminho para você.</h3>
               <a 
                 href="#contact"
                 className="bg-brand-red hover:bg-brand-orange text-brand-ice px-10 py-5 rounded-xl font-black text-lg uppercase tracking-widest inline-flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-red/20"
               >
                 Quero conversar sobre meu objetivo
                 <ArrowRight size={20} />
               </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-red/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-dark-red/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
