import { motion } from "motion/react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { CONTENT } from "../constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#about" },
    { name: "Para quem é", href: "#for-whom" },
    { name: "Modalidades", href: "#modalities" },
    { name: "Método", href: "#method" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-slate-950 font-bold text-xl">OM</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
            OTÁVIO MONTEIRO
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95"
          >
            Agendar Avaliação
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 lg:hidden shadow-2xl"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-emerald-400 text-lg font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <a
                href="#contact"
                className="bg-emerald-500 text-slate-950 py-4 rounded-xl text-center font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Agendar Avaliação
              </a>
              <div className="flex justify-center space-x-6 pt-4">
                <a href={CONTENT.profile.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  <Instagram size={24} />
                </a>
                <a href={`https://wa.me/${CONTENT.profile.whatsapp}`} className="text-slate-400 hover:text-emerald-400">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
