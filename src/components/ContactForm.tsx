import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, MapPin, Instagram, Mail, Phone, ShieldCheck } from "lucide-react";
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
    <section className="py-24 bg-brand-black" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-4">Contato</h2>
              <h3 className="text-4xl md:text-6xl font-black text-brand-ice mb-8 leading-[0.95] tracking-tighter uppercase">Vamos planejar seu próximo nível?</h3>
              <p className="text-slate-400 text-lg mb-12 font-medium leading-relaxed">
                Preencha os dados abaixo para uma pré-avaliação. Entraremos em contato para entender seus objetivos e orientar os próximos passos.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gray/20 flex items-center justify-center text-brand-orange shrink-0 border border-brand-gray">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-brand-ice/50 text-[10px] font-black uppercase tracking-widest mb-1">WhatsApp</p>
                    <a href={`https://wa.me/${CONTENT.profile.whatsapp}`} className="text-brand-ice text-xl font-black hover:text-brand-orange transition-colors uppercase tracking-tight">
                      Falar agora
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gray/20 flex items-center justify-center text-brand-orange shrink-0 border border-brand-gray">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-brand-ice/50 text-[10px] font-black uppercase tracking-widest mb-1">Localização</p>
                    <p className="text-brand-ice text-xl font-black uppercase tracking-tight">{CONTENT.profile.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gray/20 flex items-center justify-center text-brand-orange shrink-0 border border-brand-gray">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <p className="text-brand-ice/50 text-[10px] font-black uppercase tracking-widest mb-1">Instagram</p>
                    <a href={CONTENT.profile.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-ice text-xl font-black hover:text-brand-orange transition-colors uppercase tracking-tight">
                      @teammonteiro.performance
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
              className="bg-brand-gray/10 p-8 md:p-12 rounded-[3rem] border border-brand-gray shadow-2xl relative overflow-hidden"
            >
              {formState === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-8 text-brand-ice shadow-lg shadow-brand-red/20">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-brand-ice mb-4 uppercase tracking-tight">Mensagem Enviada!</h3>
                  <p className="text-slate-400 text-lg mb-10 font-medium">
                    Recebemos sua solicitação. O Team Monteiro entrará em contato para entender seu objetivo e orientar os próximos passos.
                  </p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="text-brand-orange font-black uppercase tracking-widest text-sm hover:underline"
                  >
                    Enviar outra solicitação
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-brand-ice/50 text-[10px] font-black uppercase tracking-widest ml-1">Nome Completo</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Seu nome"
                        className="w-full bg-brand-black/50 border border-brand-gray rounded-xl px-6 py-4 text-brand-ice focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-brand-ice/50 text-[10px] font-black uppercase tracking-widest ml-1">WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="(00) 00000-0000"
                        className="w-full bg-brand-black/50 border border-brand-gray rounded-xl px-6 py-4 text-brand-ice focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-brand-ice/50 text-[10px] font-black uppercase tracking-widest ml-1">Modalidade Desejada</label>
                    <select className="w-full bg-brand-black/50 border border-brand-gray rounded-xl px-6 py-4 text-brand-ice focus:border-brand-red outline-none transition-all appearance-none cursor-pointer font-medium">
                      <option value="presencial">Presencial [CONFIRMAR]</option>
                      <option value="online">Consultoria Online</option>
                      <option value="familia">Plano Familiar</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-brand-ice/50 text-[10px] font-black uppercase tracking-widest ml-1">Qual seu principal objetivo?</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Conte um pouco sobre o que você busca alcançar..."
                      className="w-full bg-brand-black/50 border border-brand-gray rounded-xl px-6 py-4 text-brand-ice focus:border-brand-red outline-none transition-all resize-none font-medium"
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-brand-black/30 rounded-xl border border-white/5 mb-4">
                    <ShieldCheck className="text-brand-orange shrink-0 mt-0.5" size={20} />
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-wider leading-relaxed">
                      Seus dados estão seguros e serão utilizados apenas para o contato inicial sobre o acompanhamento físico do Team Monteiro.
                    </p>
                  </div>

                  <button
                    disabled={formState === "loading"}
                    className="w-full bg-brand-red hover:bg-brand-orange text-brand-ice py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-red/20 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest"
                  >
                    {formState === "loading" ? "Enviando..." : "Solicitar Avaliação"}
                  </button>

                  <p className="text-center text-slate-500 text-[10px] uppercase font-black tracking-widest mt-4 leading-tight opacity-50">
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
