import { motion } from "motion/react";
import { Award, GraduationCap, MapPin, Target, Users2, ShieldCheck, HeartPulse } from "lucide-react";
import { CONTENT } from "../constants";

export function About() {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="aspect-square max-w-[450px] mx-auto rounded-[3rem] overflow-hidden border-8 border-slate-900 shadow-2xl bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop" 
                  alt={CONTENT.profile.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience Card */}
              <div className="absolute -bottom-6 -right-6 md:right-0 bg-emerald-500 p-6 rounded-3xl shadow-2xl max-w-[200px] text-slate-950">
                 <p className="text-4xl font-black mb-1">4k+</p>
                 <p className="text-sm font-bold leading-tight">Seguidores e vidas impactadas pelo movimento.</p>
              </div>
            </motion.div>
            
            {/* Background pattern */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Sobre Otávio Monteiro</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                A performance começa com uma preparação inteligente.
              </h3>
              
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
                <p>
                  Meu trabalho é ajudar pessoas a se movimentarem melhor, desenvolverem sua performance e construírem uma rotina mais consistente, respeitando seus objetivos e seu momento.
                </p>
                <p>
                  Com uma visão de cuidado que une <strong>performance</strong> e <strong>família</strong>, acredito que o treinamento deve ser a base para uma vida mais ativa e saudável em todas as frentes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-500 shrink-0 border border-slate-800">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Formação</h4>
                    <p className="text-slate-500 text-sm">{CONTENT.profile.education}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-500 shrink-0 border border-slate-800">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Registro</h4>
                    <p className="text-slate-500 text-sm">CREF: {CONTENT.profile.cref}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-500 shrink-0 border border-slate-800">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Atendimento</h4>
                    <p className="text-slate-500 text-sm">{CONTENT.profile.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-emerald-500 shrink-0 border border-slate-800">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Abordagem</h4>
                    <p className="text-slate-500 text-sm">Performance Integrada</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                 <div className="flex-1 p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                    <Target className="text-emerald-500 mb-4" size={32} />
                    <h5 className="text-white font-bold mb-2">Performance</h5>
                    <p className="text-slate-500 text-sm leading-tight">Preparação específica para atletas e entusiastas que buscam seu limite.</p>
                 </div>
                 <div className="flex-1 p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                    <Users2 className="text-emerald-500 mb-4" size={32} />
                    <h5 className="text-white font-bold mb-2">Família</h5>
                    <p className="text-slate-500 text-sm leading-tight">Cuidado com a saúde familiar através de rotinas ativas e planejadas.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
