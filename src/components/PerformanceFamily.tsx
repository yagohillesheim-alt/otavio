import { motion } from "motion/react";
import { Zap, Users, ArrowRight, Activity, Heart, ShieldCheck } from "lucide-react";

export function PerformanceFamily() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Performance Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-full flex flex-col"
          >
            <div className="absolute inset-0 bg-emerald-500/5 rounded-[2.5rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative p-10 md:p-14 bg-slate-900 border border-slate-800 rounded-[2.5rem] flex flex-col h-full hover:border-emerald-500/30 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 border border-emerald-500/20">
                <Zap size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Performance</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Para quem busca superar limites, melhorar tempos, ganhar força explosiva ou preparar-se para competições específicas.
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Melhor desempenho atlético",
                  "Preparação física específica",
                  "Evolução monitorada",
                  "Ganho de potência e explosão",
                  "Prevenção estratégica de lesões"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                    <Activity size={18} className="text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-emerald-400 font-black text-lg group-hover:gap-4 transition-all"
              >
                Quero evoluir minha performance <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Family Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-full flex flex-col"
          >
            <div className="absolute inset-0 bg-blue-500/5 rounded-[2.5rem] rotate-1 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative p-10 md:p-14 bg-slate-900 border border-slate-800 rounded-[2.5rem] flex flex-col h-full hover:border-blue-500/30 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8 border border-blue-500/20">
                <Users size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Família</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Transforme a rotina da sua casa. Atividades pensadas para integrar saúde, movimento e bons hábitos em todas as idades.
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {[
                  "Hábitos ativos compartilhados",
                  "Treinos adaptados para todas as idades",
                  "Melhor qualidade de vida familiar",
                  "Consistência e motivação mútua",
                  "Cuidado preventivo integrado"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                    <Heart size={18} className="text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-blue-400 font-black text-lg group-hover:gap-4 transition-all"
              >
                Cuidar da saúde da minha família <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-slate-500 text-sm font-bold">
             <ShieldCheck size={18} className="text-emerald-500" />
             Atendimento personalizado conforme as necessidades reais de cada perfil.
           </div>
        </div>
      </div>
    </section>
  );
}
