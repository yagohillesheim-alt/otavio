import { motion } from "motion/react";
import { CheckCircle, Clock, Smartphone, MapPin, Zap } from "lucide-react";
import { CONTENT } from "../constants";

export function Modalities() {
  return (
    <section className="py-24 bg-slate-900" id="modalities">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white mb-4"
            >
              Modalidades de Acompanhamento
            </motion.h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Diferentes formatos de atendimento para se adequar ao seu objetivo e rotina.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-slate-500 text-sm font-bold uppercase tracking-widest bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
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
              className="group bg-slate-800/30 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 hover:border-emerald-500/30 transition-all flex flex-col h-full shadow-lg"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors mb-6">
                  <Zap size={28} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">{item.name}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{item.forWhom}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-xs leading-tight">{item.howItWorks}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-slate-500 shrink-0" />
                  <p className="text-slate-500 text-xs">{item.frequency}</p>
                </div>
                <div className="flex items-center gap-3">
                  {item.format === "Digital" ? (
                    <Smartphone size={18} className="text-slate-500 shrink-0" />
                  ) : (
                    <MapPin size={18} className="text-slate-500 shrink-0" />
                  )}
                  <p className="text-slate-500 text-xs">{item.format}</p>
                </div>
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  className="w-full py-4 rounded-xl border border-emerald-500/20 text-emerald-400 font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all text-center block"
                >
                  {item.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-emerald-500 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-8 text-slate-950">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black mb-2">Precisa de uma solução sob medida?</h3>
            <p className="font-bold opacity-80">Conversaremos para entender qual modalidade melhor atende sua necessidade atual.</p>
          </div>
          <a
            href={`https://wa.me/${CONTENT.profile.whatsapp}`}
            className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl active:scale-95"
          >
            Falar com Otávio
          </a>
        </div>
      </div>
    </section>
  );
}
