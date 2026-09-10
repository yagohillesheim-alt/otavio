import { motion } from "motion/react";

export function SocialProof() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            Autoridade & Resultados
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Histórias de quem transformou sua relação com o corpo e alcançou novos patamares de performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-800/30 border border-slate-800 rounded-3xl relative overflow-hidden italic text-slate-400"
            >
              <div className="absolute top-4 right-8 text-emerald-500/20 text-8xl font-serif">“</div>
              <p className="relative z-10 mb-8 leading-relaxed">
                [INSERIR DEPOIMENTO AUTORIZADO - AGUARDANDO VALIDAÇÃO DO PROFISSIONAL PARA GARANTIR ÉTICA E VERACIDADE]
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-700 animate-pulse" />
                <div>
                  <p className="text-white font-bold text-sm">[NOME DO ALUNO]</p>
                  <p className="text-slate-500 text-xs">[META ALCANÇADA]</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="aspect-square bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-800 overflow-hidden group">
                <p className="text-slate-600 text-[10px] text-center px-4 uppercase font-black group-hover:text-emerald-500 transition-colors">
                  [INSERIR FOTO DE TREINO / RESULTADO AUTORIZADO]
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
