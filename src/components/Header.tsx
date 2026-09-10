import { motion } from "motion/react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { CONTENT } from "../constants";

import { Logo } from "./Logo";

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
        isScrolled ? "bg-brand-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center group">
          <Logo size="md" className="transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-brand-orange text-sm font-bold uppercase tracking-wider transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-red hover:bg-brand-orange text-brand-ice px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20"
          >
            Agendar Avaliação
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-brand-ice p-2"
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
          className="absolute top-full left-0 w-full bg-brand-black border-t border-brand-gray lg:hidden shadow-2xl"
        >
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-brand-orange text-lg font-black uppercase tracking-widest py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <a
                href="#contact"
                className="bg-brand-red text-brand-ice py-4 rounded-xl text-center font-black text-lg uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Agendar Avaliação
              </a>
              <div className="flex justify-center space-x-6 pt-4">
                <a href={CONTENT.profile.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-orange transition-colors">
                  <Instagram size={24} />
                </a>
                <a href={`https://wa.me/${CONTENT.profile.whatsapp}`} className="text-slate-400 hover:text-brand-orange transition-colors">
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
