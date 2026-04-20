"use client";

import React from "react";
import i18n from "../../utils/i18n";

const LANGS = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

export default function LanguageMenu() {
  const change = (lng: string) => {
    i18n.changeLanguage(lng);
    try { localStorage.setItem('i18nextLng', lng); } catch {}
    document.cookie = `i18next=${lng}; path=/;`;
    // reload for full consistency (project choice)
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2">
      {LANGS.map(l => (
        <button key={l.code} onClick={() => change(l.code)} className="px-2 py-1 text-sm font-bold uppercase text-orange-500 hover:text-blue-600 transition">{l.label}</button>
      ))}
    </div>
  );
}
