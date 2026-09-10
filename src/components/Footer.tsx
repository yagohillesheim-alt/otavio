import { Instagram, MessageCircle, ArrowUp } from "lucide-react";
import { CONTENT } from "../constants";
import { Logo } from "./Logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-black pt-20 pb-10 border-t border-brand-gray/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center mb-6">
              <Logo size="md" />
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 font-medium">
              Preparação física e performance focada em resultados consistentes e saúde integrada para você e sua família sob a liderança do Team Monteiro.
            </p>
            <div className="flex space-x-4">
              <a 
                href={CONTENT.profile.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-brand-gray/20 flex items-center justify-center text-slate-400 hover:text-brand-orange hover:bg-brand-gray/40 transition-all border border-brand-gray"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={`https://wa.me/${CONTENT.profile.whatsapp}`}
                className="w-12 h-12 rounded-xl bg-brand-gray/20 flex items-center justify-center text-slate-400 hover:text-brand-orange hover:bg-brand-gray/40 transition-all border border-brand-gray"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <h4 className="text-brand-ice font-black mb-6 uppercase tracking-widest text-[10px]">Navegação</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-brand-orange transition-colors font-medium">Início</a></li>
                <li><a href="#about" className="text-slate-500 hover:text-brand-orange transition-colors font-medium">Sobre</a></li>
                <li><a href="#modalities" className="text-slate-500 hover:text-brand-orange transition-colors font-medium">Modalidades</a></li>
                <li><a href="#method" className="text-slate-500 hover:text-brand-orange transition-colors font-medium">Método</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-ice font-black mb-6 uppercase tracking-widest text-[10px]">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-brand-orange transition-colors font-medium">Privacidade</a></li>
                <li><a href="#" className="text-slate-500 hover:text-brand-orange transition-colors font-medium">Termos de Uso</a></li>
                <li><a href="#faq" className="text-slate-500 hover:text-brand-orange transition-colors font-medium">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-auto">
             <button 
               onClick={scrollToTop}
               className="group flex flex-col items-center gap-4 text-slate-500 hover:text-brand-ice transition-colors ml-auto"
             >
                <div className="w-12 h-12 rounded-full border border-brand-gray flex items-center justify-center group-hover:border-brand-orange transition-colors">
                   <ArrowUp size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest">Voltar ao topo</span>
             </button>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-gray/30 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] uppercase font-black tracking-wider">
          <p>© {new Date().getFullYear()} Team Monteiro Consultoria. Todos os direitos reservados.</p>
          <div className="flex gap-4">
             <p className="flex items-center gap-1">
               <span className="text-brand-orange">CREF:</span> {CONTENT.profile.cref}
             </p>
             <p className="opacity-30">|</p>
             <p>Performance & Tecnologia</p>
          </div>
        </div>

        <div className="mt-8 text-center">
           <p className="text-slate-600 text-[10px] max-w-3xl mx-auto leading-relaxed">
             Aviso: Os resultados variam de acordo com o objetivo, histórico, rotina e adesão de cada pessoa. 
             O acompanhamento não substitui avaliação médica ou de outros profissionais de saúde quando necessária.
           </p>
        </div>
      </div>
    </footer>
  );
}
