import { motion } from "motion/react";
import { CONTENT } from "../constants";

export function Method() {
  return (
    <section className="py-24 bg-slate-950" id="method">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white mb-6"
          >
            Método de Trabalho
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Um processo estruturado para garantir que cada treino e cada ajuste nos levem mais perto do seu objetivo.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line for Desktop */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-800 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {CONTENT.method.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 w-full lg:text-right">
                  <div className={`p-8 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-emerald-500/30 transition-all ${
                    index % 2 === 0 ? "lg:text-left" : "lg:text-right"
                  }`}>
                    <h3 className="text-xl font-black text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-xl shadow-emerald-500/20 shrink-0">
                  {step.step}
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
           <div className="inline-block p-1 rounded-2xl bg-slate-900 border border-slate-800">
             <div className="px-8 py-6 rounded-xl bg-slate-950/50">
                <p className="text-slate-400 text-sm max-w-md mx-auto italic">
                  "O plano ideal depende de uma avaliação individual constante. A evolução é um processo de repetição, ajuste e consistência."
                </p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
