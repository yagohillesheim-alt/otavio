import { Instagram, MessageCircle, ArrowUp } from "lucide-react";
import { CONTENT } from "../constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-950 font-bold text-xl">OM</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                OTÁVIO MONTEIRO
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Preparação física e performance focada em resultados consistentes e saúde integrada para você e sua família.
            </p>
            <div className="flex space-x-4">
              <a 
                href={CONTENT.profile.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-500 transition-all border border-slate-800"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={`https://wa.me/${CONTENT.profile.whatsapp}`}
                className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-all border border-slate-800"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">Início</a></li>
                <li><a href="#about" className="text-slate-500 hover:text-emerald-400 transition-colors">Sobre</a></li>
                <li><a href="#modalities" className="text-slate-500 hover:text-emerald-400 transition-colors">Modalidades</a></li>
                <li><a href="#method" className="text-slate-500 hover:text-emerald-400 transition-colors">Método</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#faq" className="text-slate-500 hover:text-emerald-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-auto">
             <button 
               onClick={scrollToTop}
               className="group flex flex-col items-center gap-4 text-slate-500 hover:text-white transition-colors ml-auto"
             >
                <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                   <ArrowUp size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Voltar ao topo</span>
             </button>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Otávio Monteiro Preparador. Todos os direitos reservados.</p>
          <div className="flex gap-4">
             <p className="flex items-center gap-1">
               <span className="text-emerald-500 font-bold">CREF:</span> {CONTENT.profile.cref}
             </p>
             <p>|</p>
             <p>Desenvolvido com foco em performance.</p>
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
