import { motion } from "motion/react";
import { CheckCircle, Clock, Smartphone, MapPin, Zap } from "lucide-react";
import { CONTENT } from "../constants";

export function Modalities() {
  return (
    <section className="py-24 bg-brand-black" id="modalities">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-6xl font-black text-brand-ice mb-4 tracking-tighter uppercase"
            >
              Modalidades de Acompanhamento
            </motion.h2>
            <p className="text-slate-400 text-lg max-w-xl font-medium">
              Diferentes formatos de atendimento para se adequar ao seu objetivo e rotina.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-brand-orange text-xs font-black uppercase tracking-[0.3em] bg-brand-gray/20 px-6 py-3 rounded-full border border-brand-gray">
              Escolha seu plano
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTENT.modalities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-brand-gray/10 border border-brand-gray rounded-3xl p-8 hover:bg-brand-gray/20 hover:border-brand-red/30 transition-all flex flex-col h-full shadow-lg"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-brand-ice transition-colors mb-6 shadow-lg shadow-brand-red/5">
                  <Zap size={28} />
                </div>
                <h3 className="text-2xl font-black text-brand-ice mb-4 leading-[1.1] uppercase tracking-tight">{item.name}</h3>
                <p className="text-slate-400 text-xs font-medium mb-6 leading-relaxed uppercase tracking-wider">{item.forWhom}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-orange shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-xs leading-tight font-medium">{item.howItWorks}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-slate-500 shrink-0" />
                  <p className="text-slate-500 text-xs font-medium">{item.frequency}</p>
                </div>
                <div className="flex items-center gap-3">
                  {item.format === "Digital" ? (
                    <Smartphone size={18} className="text-slate-500 shrink-0" />
                  ) : (
                    <MapPin size={18} className="text-slate-500 shrink-0" />
                  )}
                  <p className="text-slate-500 text-xs font-medium">{item.format}</p>
                </div>
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  className="w-full py-4 rounded-xl border-2 border-brand-red/30 text-brand-ice font-black uppercase tracking-widest text-sm hover:bg-brand-red hover:border-brand-red transition-all text-center block shadow-lg shadow-brand-red/5"
                >
                  {item.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-10 bg-brand-red rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-8 text-brand-ice border border-brand-dark-red shadow-2xl shadow-brand-red/20">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl md:text-4xl font-black mb-2 uppercase tracking-tighter">Precisa de uma solução sob medida?</h3>
            <p className="font-black uppercase tracking-wider opacity-90 text-sm">Conversaremos para entender qual modalidade melhor atende sua necessidade atual.</p>
          </div>
          <a
            href={`https://wa.me/${CONTENT.profile.whatsapp}`}
            className="bg-brand-black text-brand-ice px-12 py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-all shadow-2xl active:scale-95 border border-brand-gray"
          >
            Falar com Otávio
          </a>
        </div>
      </div>
    </section>
  );
}
