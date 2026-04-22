'use client';
import { useTranslation } from "react-i18next";
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#C07652] text-white pt-24 pb-12 px-8 font-sans relative overflow-hidden">
      {/* Motif de fond discret (Diamonds) pour l'aspect premium */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#F9F7F2 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION CTA : L'appel à l'action principal */}
        <div className="text-center mb-24">
          <p className="uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold mb-8 opacity-90">
            {t("COMMENÇONS L'AVENTURE")}
          </p>
          <h2 className="text-4xl md:text-7xl font-serif italic leading-tight mb-10">
            {t("La seule chose qu'il reste à faire est de nous parler de vous.")}
          </h2>
          <p className="text-sm md:text-base font-light italic mb-12 max-w-2xl mx-auto opacity-95 leading-relaxed">
            {t("Nous gérons tout le reste : la planification, la logistique, la connaissance locale et chaque détail auquel vous ne penseriez pas. Vous n'avez qu'à être présent.")}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link href="/reservation" className="bg-white text-[#C07652] px-10 py-5 uppercase font-bold text-[10px] tracking-[0.2em] shadow-2xl hover:bg-[#F9F7F2] transition-all">
              {t("Commencer mon voyage sur mesure")}
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-10 py-5 uppercase font-bold text-[10px] tracking-[0.2em] hover:bg-white hover:text-[#C07652] transition-all">
              {t("Parler à l'équipe")}
            </Link>
          </div>
        </div>

        {/* SECTION NAVIGATION : Liens et informations de l'agence */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 border-t border-white/20 pt-20 text-left">
          
          {/* Identité / Logo */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-serif italic tracking-tighter leading-tight">
              WELIVE <br />
              <span className="not-italic font-bold tracking-widest text-2xl">MOROCCO</span>
            </h2>
            <div className="flex flex-col gap-2 border-l-2 border-white/30 pl-4">
              <p className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-70">{t("Expérience")}</p>
              <p className="text-xl font-bold italic tracking-tighter hover:opacity-80 transition-opacity cursor-pointer">
                {t("06 XX XX XX XX")}
              </p>
            </div>
          </div>

          {/* Colonne 1 */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-80">{t("L'Agence")}</h3>
            <ul className="flex flex-col gap-4 text-xs font-medium italic">
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer opacity-90">{t("WELIVE MOROCCO")}</li>
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer opacity-90">{t("Notre Vision")}</li>
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer opacity-90">{t("Confidentialité")}</li>
            </ul>
          </div>

          {/* Colonne 2 */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-80">{t("Destinations")}</h3>
            <ul className="flex flex-col gap-4 text-xs font-medium italic">
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer opacity-90">{t("Villes Impériales")}</li>
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer opacity-90">{t("Désert Safari")}</li>
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer opacity-90">{t("Côte Atlantique")}</li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 opacity-80">{t("Services")}</h3>
            <ul className="flex flex-col gap-4 text-xs font-medium italic">
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer opacity-90">{t("Sur Mesure")}</li>
              <li className="hover:translate-x-2 hover:text-white transition-all cursor-pointer opacity-90">{t("Transport VIP")}</li>
            </ul>
          </div>
        </div>

        {/* BARRE INFÉRIEURE : Copyright et Réseaux */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] opacity-80">
            {t("contact@welivemorocco.com  |  Marrakech, Maroc")}
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] opacity-60">
            {t("© 2026 WELIVE MOROCCO")}
          </p>
         
        </div>

      </div>
    </footer>
  );
}