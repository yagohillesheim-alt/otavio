import { motion } from "motion/react";
import { Award, GraduationCap, MapPin, Target, Users2, ShieldCheck, HeartPulse } from "lucide-react";
import { CONTENT } from "../constants";

export function About() {
  return (
    <section className="py-24 bg-brand-black overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="aspect-square max-w-[450px] mx-auto rounded-[4rem] overflow-hidden border-8 border-brand-gray shadow-2xl bg-brand-gray/20">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop" 
                  alt={CONTENT.profile.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              
              {/* Experience Card */}
              <div className="absolute -bottom-6 -right-6 md:right-0 bg-brand-red p-8 rounded-3xl shadow-2xl max-w-[220px] text-brand-ice border border-brand-dark-red">
                 <p className="text-5xl font-black mb-1">4k+</p>
                 <p className="text-sm font-black uppercase tracking-wider leading-tight">Vidas impactadas pelo movimento.</p>
              </div>
            </motion.div>
            
            {/* Background pattern */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(247,134,24,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-4">Liderança Team Monteiro</h2>
              <h3 className="text-4xl md:text-6xl font-black text-brand-ice mb-8 leading-[0.95] tracking-tighter uppercase">
                A performance começa com uma preparação inteligente.
              </h3>
              
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                <p>
                  Meu trabalho é ajudar pessoas a se movimentarem melhor, desenvolverem sua performance e construírem uma rotina mais consistente, respeitando seus objetivos e seu momento.
                </p>
                <p>
                  Com uma visão de cuidado que une <strong className="text-brand-orange">performance</strong> e <strong className="text-brand-red">família</strong>, acredito que o treinamento deve ser a base para uma vida mais ativa e saudável em todas as frentes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gray/30 flex items-center justify-center text-brand-orange shrink-0 border border-brand-gray">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-brand-ice font-black uppercase text-xs tracking-widest mb-1">Formação</h4>
                    <p className="text-slate-500 text-sm font-medium">{CONTENT.profile.education}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gray/30 flex items-center justify-center text-brand-orange shrink-0 border border-brand-gray">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-brand-ice font-black uppercase text-xs tracking-widest mb-1">Registro</h4>
                    <p className="text-slate-500 text-sm font-medium">CREF: {CONTENT.profile.cref}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gray/30 flex items-center justify-center text-brand-orange shrink-0 border border-brand-gray">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-brand-ice font-black uppercase text-xs tracking-widest mb-1">Atendimento</h4>
                    <p className="text-slate-500 text-sm font-medium">{CONTENT.profile.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gray/30 flex items-center justify-center text-brand-orange shrink-0 border border-brand-gray">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <h4 className="text-brand-ice font-black uppercase text-xs tracking-widest mb-1">Abordagem</h4>
                    <p className="text-slate-500 text-sm font-medium">Performance Integrada</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                 <div className="flex-1 p-8 bg-brand-gray/20 rounded-3xl border border-brand-gray">
                    <Target className="text-brand-orange mb-4" size={32} />
                    <h5 className="text-brand-ice font-black uppercase tracking-wider mb-2">Performance</h5>
                    <p className="text-slate-500 text-sm leading-tight font-medium">Preparação específica para atletas e entusiastas que buscam seu limite.</p>
                 </div>
                 <div className="flex-1 p-8 bg-brand-gray/20 rounded-3xl border border-brand-gray">
                    <Users2 className="text-brand-red mb-4" size={32} />
                    <h5 className="text-brand-ice font-black uppercase tracking-wider mb-2">Família</h5>
                    <p className="text-slate-500 text-sm leading-tight font-medium">Cuidado com a saúde familiar através de rotinas ativas e planejadas.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
