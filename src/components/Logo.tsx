import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = "", showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-16",
    lg: "h-24",
    xl: "h-32"
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className={`${sizeClasses[size]} aspect-square relative`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(200,29,30,0.3)]"
        >
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F78618" />
              <stop offset="100%" stopColor="#C81D1E" />
            </linearGradient>
          </defs>
          
          {/* Escudo Exterior com Gradiente */}
          <path
            d="M50 92C50 92 88 78 88 42V18L50 8L12 18V42C12 78 50 92 50 92Z"
            fill="url(#shieldGrad)"
          />
          
          {/* Fundo Escuro do Escudo */}
          <path
            d="M50 88C50 88 84 75 84 42V21L50 12L16 21V42C16 75 50 88 50 88Z"
            fill="#0B0C0E"
          />

          {/* Coroa Real no Topo */}
          <path
            d="M44 20L47 24L50 18L53 24L56 20L58 28H42L44 20Z"
            fill="url(#shieldGrad)"
          />

          {/* Leão - Juba e Rosto Detalhado */}
          <g fill="url(#shieldGrad)">
            {/* Juba (Camadas de Picos) */}
            <path d="M50 32C45 32 38 35 34 42C30 50 32 65 50 80C68 65 70 50 66 42C62 35 55 32 50 32Z" opacity="0.8" />
            <path d="M50 38L45 42L40 40L42 48L36 50L42 55L38 65L50 75L62 65L58 55L64 50L58 48L60 40L55 42L50 38Z" />
            
            {/* Rosto do Leão (Preto para contraste) */}
            <path d="M50 45C47 45 44 48 44 52C44 58 50 68 50 68C50 68 56 58 56 52C56 48 53 45 50 45Z" fill="#0B0C0E" />
            
            {/* Olhos (Pequenos Brilhos) */}
            <circle cx="47.5" cy="51" r="1" fill="url(#shieldGrad)" />
            <circle cx="52.5" cy="51" r="1" fill="url(#shieldGrad)" />
            
            {/* Nariz e Boca */}
            <path d="M48 60L50 63L52 60H48Z" fill="url(#shieldGrad)" />
          </g>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col justify-center -space-y-1.5">
          <span className="text-brand-ice font-black leading-none tracking-tight text-3xl uppercase font-serif">
            TEAM MONTEIRO
          </span>
          <span className="text-brand-orange font-black text-[9px] uppercase tracking-[0.38em] leading-none mt-2">
            CONSULTORIA ESPORTIVA
          </span>
        </div>
      )}
    </div>
  );
}
