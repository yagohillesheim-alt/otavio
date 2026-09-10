import { motion } from "motion/react";
import { Send, MapPin, Instagram, Mail, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { CONTENT } from "../constants";

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <section className="py-24 bg-slate-900" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4">Contato</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Vamos planejar seu próximo nível?</h3>
              <p className="text-slate-400 text-lg mb-12">
                Preencha os dados abaixo para uma pré-avaliação. Entrarei em contato para entender seus objetivos e orientar os próximos passos.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-emerald-500 shrink-0 border border-slate-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">WhatsApp</p>
                    <a href={`https://wa.me/${CONTENT.profile.whatsapp}`} className="text-white text-xl font-bold hover:text-emerald-400 transition-colors">
                      Falar agora
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-emerald-500 shrink-0 border border-slate-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Localização</p>
                    <p className="text-white text-xl font-bold">{CONTENT.profile.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-emerald-500 shrink-0 border border-slate-700">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Instagram</p>
                    <a href={CONTENT.profile.instagram} target="_blank" rel="noopener noreferrer" className="text-white text-xl font-bold hover:text-emerald-400 transition-colors">
                      @otaviomonteiro.preparador
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {formState === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-950">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Mensagem Enviada!</h3>
                  <p className="text-slate-400 text-lg mb-10">
                    Recebemos sua solicitação. Otávio entrará em contato para entender seu objetivo e orientar os próximos passos.
                  </p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="text-emerald-500 font-bold hover:underline"
                  >
                    Enviar outra solicitação
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-slate-400 text-sm font-bold uppercase ml-1">Nome Completo</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Seu nome"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-400 text-sm font-bold uppercase ml-1">WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="(00) 00000-0000"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-400 text-sm font-bold uppercase ml-1">Modalidade Desejada</label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer">
                      <option value="presencial">Presencial [CONFIRMAR]</option>
                      <option value="online">Consultoria Online</option>
                      <option value="familia">Plano Familiar</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-400 text-sm font-bold uppercase ml-1">Qual seu principal objetivo?</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Conte um pouco sobre o que você busca alcançar..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 text-white focus:border-emerald-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-900/50 rounded-xl border border-white/5 mb-4">
                    <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <p className="text-slate-500 text-xs leading-relaxed">
                      Seus dados estão seguros e serão utilizados apenas para o contato inicial sobre o acompanhamento físico.
                    </p>
                  </div>

                  <button
                    disabled={formState === "loading"}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? "Enviando..." : "Solicitar Avaliação Inicial"}
                  </button>

                  <p className="text-center text-slate-500 text-[10px] uppercase tracking-tighter mt-4">
                    A avaliação inicial serve para compreender o perfil e os objetivos do aluno. Ela não substitui avaliação médica ou profissional de saúde quando necessária.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
