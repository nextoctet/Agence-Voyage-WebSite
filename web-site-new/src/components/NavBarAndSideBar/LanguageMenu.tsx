"use client";

import React from "react";
import i18n from "../../utils/i18n";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['900'],
});

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export default function LanguageMenu() {
  const currentLang = i18n.language;

  const change = (lng: string) => {
    if (currentLang === lng) return;
    i18n.changeLanguage(lng);
    try { localStorage.setItem('i18nextLng', lng); } catch {}
    document.cookie = `i18next=${lng}; path=/;`;
    window.location.reload();
  };

  return (
    <div className={`${montserrat.className} flex items-center gap-5`}>
      {LANGS.map((l, index) => (
        <React.Fragment key={l.code}>
          <button 
            onClick={() => change(l.code)} 
            className="group relative py-1"
          >
           
            <span className={`
              text-[13px] tracking-[0.3em] transition-all duration-500
              ${currentLang === l.code ? 'text-[#C07652]' : 'text-[#2D2926]/40 group-hover:text-[#C07652]'}
            `}>
              {l.label}
            </span>

            
            <span className={`
              absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-[#C07652] transition-all duration-500 ease-in-out
              ${currentLang === l.code ? 'w-full' : 'w-0 group-hover:w-full'}
            `}></span>
          </button>

          {index < LANGS.length - 1 && (
            <div className="w-[1px] h-4 bg-[#C07652]/20 rotate-[20deg]"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}