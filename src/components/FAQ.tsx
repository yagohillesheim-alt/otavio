import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { CONTENT } from "../constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-950" id="faq">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">FAQ</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Dúvidas Frequentes</h3>
              <p className="text-slate-400 text-lg mb-8">
                Tire suas principais dúvidas sobre o acompanhamento, preparação física e modalidades.
              </p>
              <div className="p-8 bg-emerald-500 rounded-3xl text-slate-950">
                 <p className="font-black text-2xl mb-2">Ainda tem dúvidas?</p>
                 <p className="font-bold opacity-80 mb-6">Mande uma mensagem direta no WhatsApp e responderemos o mais breve possível.</p>
                 <a 
                   href={`https://wa.me/${CONTENT.profile.whatsapp}`}
                   className="inline-block bg-slate-950 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all"
                 >
                   Mandar mensagem
                 </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {CONTENT.faq.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`border border-slate-800 rounded-2xl overflow-hidden transition-all ${
                    isOpen ? "bg-slate-900 border-emerald-500/30" : "bg-slate-900/50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`text-lg font-bold transition-colors ${isOpen ? "text-white" : "text-slate-300"}`}>
                      {item.question}
                    </span>
                    <div className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      {isOpen ? (
                        <Minus className="text-emerald-500" size={20} />
                      ) : (
                        <Plus className="text-slate-500" size={20} />
                      )}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                       <p className="text-slate-400 leading-relaxed">
                         {item.answer}
                       </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
