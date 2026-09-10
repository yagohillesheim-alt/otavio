import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronRight, ArrowLeft, Send } from "lucide-react";
import { CONTENT } from "../constants";

const QUESTIONS = [
  {
    id: 1,
    question: "Qual é seu principal objetivo?",
    options: [
      "Melhorar condicionamento",
      "Melhorar performance",
      "Ganhar força",
      "Retomar a atividade",
      "Treinar para um esporte",
      "Criar uma rotina ativa",
    ],
  },
  {
    id: 2,
    question: "Qual é seu nível atual?",
    options: [
      "Iniciante",
      "Intermediário",
      "Avançado",
      "Atleta",
      "Estou retornando",
    ],
  },
  {
    id: 3,
    question: "Como deseja ser atendido?",
    options: [
      "Presencial",
      "Online",
      "Individual",
      "Família",
      "Ainda não sei",
    ],
  },
  {
    id: 4,
    question: "Quando deseja começar?",
    options: [
      "Imediatamente",
      "Nas próximas semanas",
      "Estou pesquisando",
      "Quero conversar primeiro",
    ],
  },
];

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      const newAnswers = [...answers];
      newAnswers.pop();
      setAnswers(newAnswers);
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
  };

  return (
    <section className="py-24 bg-slate-900 overflow-hidden" id="quiz">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Quiz de Performance</h2>
            <p className="text-slate-400">Descubra qual o melhor caminho para sua evolução em poucos passos.</p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
            {!isFinished ? (
              <div className="relative">
                {/* Progress Bar */}
                <div className="absolute -top-16 left-0 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between mb-8">
                  <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Passo {currentStep + 1} de {QUESTIONS.length}</span>
                  {currentStep > 0 && (
                    <button onClick={handleBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-bold">
                      <ArrowLeft size={16} /> Voltar
                    </button>
                  )}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-10 leading-tight">
                      {QUESTIONS[currentStep].question}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {QUESTIONS[currentStep].options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleSelect(option)}
                          className="flex items-center justify-between p-6 rounded-2xl bg-slate-700/50 border border-slate-600 text-white font-bold hover:border-emerald-500 hover:bg-slate-700 transition-all text-left group"
                        >
                          {option}
                          <ChevronRight size={20} className="text-slate-500 group-hover:text-emerald-500 transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-950 shadow-xl shadow-emerald-500/20">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-black text-white mb-6">Excelente!</h3>
                <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                  Suas respostas ajudam a iniciar a conversa. O plano ideal depende de uma avaliação individual.
                </p>

                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700 mb-10 text-left">
                  <p className="text-xs font-bold text-emerald-500 uppercase mb-4 tracking-widest">Resumo das suas metas:</p>
                  <ul className="space-y-2">
                    {answers.map((ans, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {ans}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/${CONTENT.profile.whatsapp}?text=Olá Otávio! Fiz o quiz no site e gostaria de conversar sobre meu acompanhamento. Meus objetivos: ${answers.join(", ")}`}
                    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/20"
                  >
                    Falar com Otávio
                  </a>
                  <button onClick={resetQuiz} className="text-slate-400 hover:text-white font-bold transition-colors">
                    Refazer Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
