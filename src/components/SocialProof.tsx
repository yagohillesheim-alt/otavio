import { motion } from "motion/react";

export function SocialProof() {
  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black text-brand-ice mb-4 tracking-tighter uppercase"
          >
            Autoridade & Resultados
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
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
              className="p-10 bg-brand-gray/10 border border-brand-gray rounded-[2.5rem] relative overflow-hidden italic text-slate-400"
            >
              <div className="absolute top-4 right-10 text-brand-red/10 text-9xl font-black tracking-tighter select-none">“</div>
              <p className="relative z-10 mb-8 leading-relaxed font-medium">
                [INSERIR DEPOIMENTO AUTORIZADO - AGUARDANDO VALIDAÇÃO DO PROFISSIONAL PARA GARANTIR ÉTICA E VERACIDADE]
              </p>
              <div className="flex items-center gap-4 mt-auto not-italic">
                <div className="w-12 h-12 rounded-full bg-brand-gray/30 border border-brand-gray shrink-0" />
                <div>
                  <p className="text-brand-ice font-black text-xs uppercase tracking-widest">[NOME DO ALUNO]</p>
                  <p className="text-brand-orange text-[10px] font-black uppercase tracking-widest">[META ALCANÇADA]</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="aspect-square bg-brand-gray/20 rounded-[2rem] flex items-center justify-center border border-brand-gray overflow-hidden group hover:border-brand-red transition-all cursor-pointer">
                <p className="text-brand-gray text-[10px] text-center px-6 uppercase font-black group-hover:text-brand-orange transition-colors tracking-widest">
                  [INSERIR FOTO DE TREINO / RESULTADO AUTORIZADO]
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
