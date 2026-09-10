import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = "", showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-14",
    lg: "h-20",
    xl: "h-32"
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className={`${sizeClasses[size]} aspect-square relative drop-shadow-2xl`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F78618" />
              <stop offset="100%" stopColor="#C81D1E" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Escudo Exterior */}
          <path
            d="M50 92C50 92 88 78 88 42V18L50 8L12 18V42C12 78 50 92 50 92Z"
            fill="url(#shieldGradient)"
          />
          
          {/* Borda Interna do Escudo */}
          <path
            d="M50 88C50 88 84 75 84 42V21L50 12L16 21V42C16 75 50 88 50 88Z"
            fill="#0B0C0E"
          />

          {/* Coroa Detalhada */}
          <path
            d="M42 22L45 27L50 20L55 27L58 22L60 30H40L42 22Z"
            fill="url(#shieldGradient)"
          />

          {/* Rosto do Leão (Vetorizado Detalhado) */}
          <g fill="url(#shieldGradient)">
            {/* Juba Principal */}
            <path d="M50 32C42 32 32 38 30 50C28 62 40 75 50 82C60 75 72 62 70 50C68 38 58 32 50 32Z" opacity="0.4" />
            
            {/* Detalhes do Rosto */}
            <path d="M50 38C45 38 40 42 40 48C40 55 50 72 50 72C50 72 60 55 60 48C60 42 55 38 50 38Z" />
            <path d="M48 50C48 49 49 48 50 48C51 48 52 49 52 50" stroke="#0B0C0E" strokeWidth="1" />
            
            {/* Olhos e Nariz */}
            <circle cx="46" cy="48" r="1.5" fill="#0B0C0E" />
            <circle cx="54" cy="48" r="1.5" fill="#0B0C0E" />
            <path d="M47 58L50 62L53 58H47Z" fill="#0B0C0E" />
            
            {/* Bigodes / Linhas de Expressão */}
            <path d="M42 55L35 52M42 60L35 62M58 55L65 52M58 60L65 62" stroke="#0B0C0E" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col justify-center -space-y-1">
          <span className="text-brand-ice font-black leading-none tracking-tight text-3xl uppercase font-serif italic">
            TEAM MONTEIRO
          </span>
          <span className="text-brand-red font-black text-[9px] uppercase tracking-[0.35em] leading-none mt-2">
            CONSULTORIA ESPORTIVA
          </span>
        </div>
      )}
    </div>
  );
}
