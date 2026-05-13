"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "weLiveMoroccoCookieConsent";

export default function CookieConsentBanner() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved) return;
    setIsOpen(true);
    const timeout = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleDecision = (accepted: boolean) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, accepted ? "all" : "rejected");
      setAnimateIn(false);
      setTimeout(() => setIsOpen(false), 500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-[999] max-w-[340px] rounded-2xl border border-[#C07652]/20 bg-[#1B1713]/95 p-6 shadow-2xl backdrop-blur-md transition-all duration-700 ease-out ${animateIn ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}>
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#C07652] shadow-[0_0_8px_#C07652]" />
          <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#E8C6A5]">
            {t("Privacy Preference")}
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-white">
            {t("Cookies & Confidentialité")}
          </h2>
          <p className="text-[13px] leading-relaxed text-[#D8C4B0]/80">
            {t("Nous utilisons des cookies pour votre confort. Conformément à la loi 09-08 et au RGPD, vous pouvez accepter ou refuser les cookies non-essentiels.")} 
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          {/* Bouton Accepter (Principal) */}
          <button 
            onClick={() => handleDecision(true)} 
            className="w-full rounded-lg bg-[#C07652] py-3 text-[13px] font-bold uppercase tracking-widest text-white transition-all active:scale-95 hover:bg-[#B5633C]"
          >
            {t("Tout Accepter")} 
          </button>
          
          <div className="flex gap-2">
            {/* Bouton Refuser (Secondaire) */}
            <button 
              onClick={() => handleDecision(false)} 
              className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-[11px] font-bold uppercase tracking-widest text-[#F6E8D6] transition hover:bg-white/10"
            >
              {t("Refuser")} 
            </button>
            
            {/* Link l-page d-l-policy (En savoir plus) */}
            <Link 
              href="/cookies-policy" 
              className="flex-1 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 py-2 text-[11px] font-bold uppercase tracking-widest text-[#F6E8D6] transition hover:bg-white/10 text-center"
            >
              {t("Détails")} 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}