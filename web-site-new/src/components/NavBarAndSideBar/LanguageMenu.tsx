"use client";

import React from "react";
import i18n from "../../utils/i18n";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'], 
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
    <div className={`${montserrat.className} flex items-center gap-3`}>
      {LANGS.map((l, index) => (
        <React.Fragment key={l.code}>
          <button 
            onClick={() => change(l.code)} 
            className={`
              relative w-12 h-12 rounded-2xl flex items-center justify-center
              transition-all duration-500 border
              ${currentLang === l.code 
                ? 'bg-[#C07652] border-[#C07652] text-white' 
                : 'bg-transparent border-[#2D2926]/20 text-[#2D2926]/40 hover:border-[#C07652] hover:text-[#C07652]'}
            `}
          >
            <span className="text-[13px] tracking-[0.1em] font-bold">
              {l.label}
            </span>
          </button>

          {index < LANGS.length - 1 && (
            <div className="w-[1px] h-4 bg-[#2D2926]/10 rotate-[20deg]"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}